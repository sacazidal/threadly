import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const search = (e: string) => url.searchParams.get(e);

  const query = search("q");
  const limit = search("limit");

  if (!query) {
    return NextResponse.json({ message: "Пустой запрос" }, { status: 400 });
  }

  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
          { category: { contains: query, mode: "insensitive" } },
        ],
      },
      take: limit ? parseInt(limit) : undefined,
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ошибка сервера при поиске" },
      { status: 500 }
    );
  }
}
