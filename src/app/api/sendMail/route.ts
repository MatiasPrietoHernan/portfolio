import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Transporter configuration for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Mail options
    const mailOptions = {
      from: email,
      to: "matiasprietohernan@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: "Correo enviado correctamente" }, { status: 200 });
  } catch (error) {
    console.error("Error al enviar el correo", error);
    return NextResponse.json({ 
      message: "Error al enviar el correo", 
      error: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Método no permitido" }, { status: 405 });
}