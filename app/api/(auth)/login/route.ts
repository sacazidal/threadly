import { validationLog } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";

interface Request {
  email: string;
  passwordHash: string;
}

export async function POST(request: NextRequest) {
  try {
    // Получаем тело запроса
    const { email, passwordHash }: Request = await request.json();

    // проверяю, что все поля заполнены и прошли валидацию
    const validationError = validationLog(email, passwordHash);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
