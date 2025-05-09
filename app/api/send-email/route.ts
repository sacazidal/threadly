import prisma from "@/lib/prisma";
import { validateEmail } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface SendEmailRequest {
  email: string;
}

export async function POST(request: NextRequest) {
  const { email }: SendEmailRequest = await request.json();

  if (validateEmail(email)) {
    return NextResponse.json({ error: "Некорректный email" }, { status: 400 });
  }

  try {
    const existingEmail = await prisma.mailing.findFirst({
      where: { email },
    });

    if (existingEmail) {
      return NextResponse.json(
        { error: "Вы уже подписаны на рассылку" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASSWORD!,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER!,
      to: email,
      subject: "Threadly. Скидка 10% на первый заказ",
      text: "Ваш промокод - GLORY2025",
    };

    await prisma.mailing.create({
      data: {
        email,
      },
    });

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Успешно подписались на рассылку" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Ошибка при отправке сообщения" },
      { status: 500 }
    );
  }
}
