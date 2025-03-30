import prisma from "@/lib/prisma";
import { validationLog } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface LoginRequest {
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  // Получаем тело запроса
  const { email, password }: LoginRequest = await request.json();

  // проверяю, что все поля заполнены и прошли валидацию
  const validationError = validationLog(email, password);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  try {
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "Неверный логин или пароль" },
        { status: 400 }
      );
    }

    const passwordMatch = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Неверный логин или пароль" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      {
        userId: existingUser.id,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      }
    );

    const response = NextResponse.json(
      {
        message: "Успешная авторизация",
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
      sameSite: "strict",
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
