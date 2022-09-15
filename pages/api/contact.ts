import type { NextApiRequest, NextApiResponse } from 'next';

export default function contact(req: NextApiRequest, res: NextApiResponse) {
  let nodemailer = require('nodemailer');
  require('dotenv').config();
  const PASSWORD = process.env.password;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'inspiredigital.test@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: 'inspiredigital.test@gmail.com',
    to: 'keremduran.fw@gmail.com',
    subject: `Message From ${req.body.name}`,
    html: `<div>${req.body.emailContent}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  res.status(200).json({ name: 'Success.' });
}
