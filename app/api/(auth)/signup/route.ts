import prisma from "@/lib/prisma";
import { validationReg } from "@/utils/validation";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

interface Request {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  // получаю тело запроса
  const { email, firstName, lastName, password }: Request = await req.json();

  // проверяю, что все поля заполнены и прошли валидацию
  const validationError = validationReg(email, firstName, lastName, password);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  try {
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

    const hashedPassword = await bcrypt.hash(password, 10);

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
