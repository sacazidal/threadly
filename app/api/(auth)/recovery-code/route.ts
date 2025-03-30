import prisma from "@/lib/prisma";
import { validateRecoveryCode, validationRecovery } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";

interface Request {
  email: string;
  code: string;
}

export async function POST(request: NextRequest) {
  try {
    // Получаем тело запроса
    const { email, code }: Request = await request.json();

    // проверяю, что все поля заполнены и прошли валидацию
    const validationError =
      validationRecovery(email) || validateRecoveryCode(code);
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

    const existingCode = await prisma.recovery.findFirst({
      where: { userId: existingUser.id },
      orderBy: { createdAt: "desc" },
    });

    // проверяю, что код подтверждения введен верно
    if (!existingCode || existingCode.code !== code) {
      return NextResponse.json(
        { error: "Неверный код подтверждения" },
        { status: 400 }
      );
    }

    if (existingCode.expiresAt < new Date()) {
      return NextResponse.json(
        { error: "Срок действия кода истек" },
        { status: 400 }
      );
    }

    // сменяю isConfirm на true
    await prisma.recovery.update({
      where: { id: existingCode.id },
      data: { isConfirm: true },
    });

    return NextResponse.json(
      { message: "Аккаунт подтвержден" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
