import nodemailer from 'nodemailer';

import { SMTP } from '../constants/index.js';
import { env } from '../utils/env.js';

const transporter = nodemailer.createTransport({
  host: env(SMTP.SMTP_HOST),
  port: Number(env(SMTP.SMTP_PORT)),
  auth: {
    user: env(SMTP.SMTP_USER),
    pass: env(SMTP.SMTP_PASSWORD),
  },
});

export const sendEmail = async (options) => {
  return await transporter.sendMail(options);
};

const testEmail = async () => {
  try {
    const info = await sendEmail({
      from: env('SMTP_FROM'),
      to: 'recipient@example.com',
      subject: 'Test Email',
      text: 'This is a test email sent using Brevo.',
      html: '<p>This is a test email sent using <strong>Brevo</strong>.</p>',
    });
    console.log('Test email sent successfully:', info);
  } catch (error) {
    console.error('Error sending test email:', error);
  }
};
testEmail();
