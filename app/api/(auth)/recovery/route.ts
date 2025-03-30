import prisma from "@/lib/prisma";
import { generateConfirmationEmail } from "@/utils/generateConfirmationEmail";
import { sendRecoveryCode } from "@/utils/recoveryAccount";
import { validationRecovery } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";

interface Request {
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    // Получаем тело запроса
    const { email }: Request = await request.json();

    // проверяю, что все поля заполнены и прошли валидацию
    const validationError = validationRecovery(email);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "Пользователь с таким email не найден" },
        { status: 404 }
      );
    }

    const generateCode = generateConfirmationEmail();
    await sendRecoveryCode(email, generateCode);

    await prisma.recovery.create({
      data: {
        email,
        userId: Number(existingUser.id),
        code: generateCode,
        expiresAt: new Date(Date.now() + 60 * 1000 * 5), // 5 минут
      },
    });

    return NextResponse.json(
      { message: "Инструкция направлена на вашу почту" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
