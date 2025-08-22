// api/sendEmail.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // ADICIONADO: Verifica se o método da requisição é POST
  if (request.method !== 'POST') {
    response.setHeader('Allow', ['POST']);
    return response.status(405).end(`Method ${request.method} Not Allowed`);
  }

  const { name, email, message } = request.body;

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['brunooliveiradsv@gmail.com'],
      subject: `Nova mensagem de ${name} via Portfólio`,
      replyTo: email,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong></p>
             <p>${message}</p>`,
    });

    return response.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    return response.status(500).json({ message: 'Error sending email', error });
  }
}