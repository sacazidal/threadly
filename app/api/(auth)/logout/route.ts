import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json(
      { message: "Выход выполнен" },
      { status: 200 }
    );
    response.cookies.delete("token");

    return response;
  } catch {
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
