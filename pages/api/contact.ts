import type { NextApiRequest, NextApiResponse } from 'next';

export default function contact(req: NextApiRequest, res: NextApiResponse) {
  console.log('req.body', req.body);
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

  // transporter.sendMail(mailData, function (err: any, info: any) {
  //   if (err) console.log(err);
  //   else console.log(info);
  // });

  res.status(200).json({ name: 'Success.' });
}
