import 'dotenv/config';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});

// export async function sendEmail({ from, to, subject, text, html }) {
//   const result = await transport.sendMail({
//     from: from, // sender address zb. '"Toktok Admin" <admin@gmail.com>',
//     to: to, // '"user"  <user email>', // list of receivers
//     subject: subject, // 'pls confirm yor email...', // Subject line
//     text: text, //'...', // plain text body
//     html: html, //'<b>code: 123456</b>', // html body
//   });
//   console.log({ result });
//   return result;
// }

export async function sendEmail(template = { from, to, subject, text, html }) {
  const result = await transport.sendMail(template);
  console.log({ result });
  return result;
}
