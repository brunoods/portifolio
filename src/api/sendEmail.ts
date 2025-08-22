// api/sendEmail.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'; // 1. IMPORTAÇÃO ADICIONADA
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const { name, email, message } = request.body;

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['brunooliveiradsv@gmail.com'],
      subject: `Nova mensagem de ${name} via Portfólio`,
      replyTo: email,
      // 2. PROPRIEDADE HTML E FECHAMENTO DO OBJETO CORRIGIDOS
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong></p>
             <p>${message}</p>`,
    }); // <-- Parêntese de fechamento adicionado

    return response.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    return response.status(500).json({ message: 'Error sending email', error });
  }
}