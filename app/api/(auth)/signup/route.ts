import prisma from "@/lib/prisma";
import { validationReg } from "@/utils/validation";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

interface Request {
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
}

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    if (!prisma) {
      throw new Error("Prisma client not initialized");
    }

    // получаю тело запроса
    const { email, firstName, lastName, passwordHash }: Request =
      await req.json();

    // проверяю, что все поля заполнены и прошли валидацию
    const validationError = validationReg(
      email,
      firstName,
      lastName,
      passwordHash
    );
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // проверяю, что email уникален
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Пользователь с таким email или username уже существует" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(passwordHash, 10);

    // создаю нового пользователя
    const newUser = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        passwordHash: hashedPassword,
      },
    });

    // удаляю пароль из объекта пользователя, чтобы его не передавать в ответе
    const { passwordHash: _, ...userWithoutPassword } = newUser;
    void _;

    // отправляю ответ с информацией о зарегистрированном пользователе
    return NextResponse.json(
      {
        message: "Пользователь успешно зарегистрирован",
        user: userWithoutPassword,
      },
      {
        status: 201,
      }
    );
  } catch {
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
