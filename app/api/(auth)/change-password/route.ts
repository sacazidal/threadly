import prisma from "@/lib/prisma";
import { validationChangePassword } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

interface ChangePasswordRequest {
  email: string;
  code: string;
  password: string;
  passwordTwo: string;
}

export async function POST(request: NextRequest) {
  try {
    // Получаем тело запроса
    const { email, code, password, passwordTwo }: ChangePasswordRequest =
      await request.json();

    // проверяю, что все поля заполнены и прошли валидацию
    const validationError = validationChangePassword(password, passwordTwo);
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
      where: {
        userId: existingUser.id,
        code,
        isConfirm: true,
        expiresAt: { gte: new Date() },
      },
      orderBy: { createdAt: "desc" },
    });

    if (!existingCode) {
      return NextResponse.json(
        { error: "Неверный или просроченный код подтверждения" },
        { status: 400 }
      );
    }

    // Хеширование нового пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.$transaction([
      prisma.user.update({
        where: { id: existingUser.id },
        data: { passwordHash: hashedPassword },
      }),
    ]);

    return NextResponse.json(
      { message: "Пароль успешно изменен" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
