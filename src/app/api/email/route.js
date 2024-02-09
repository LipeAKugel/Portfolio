import { NextResponse } from "next/server";
import { Resend } from "resend";

import ContactTemplate from "@/emails/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {

  const {
    name,
    email,
    subject,
    message
  } = request.json();

  await resend.emails.send({
    from: 'email@lipeamorimaraujo.dev',
    to: 'felipearaujodff@gmail.com',
    subject: 'hello world',
    react: ContactTemplate({
      name,
      email,
      subject,
      message
    }),
  });

  return NextResponse.json({
    status: 'Ok'
  })
}