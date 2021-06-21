const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    // Пожалуйста, используйте свой собственный gmail аккаунт для рассылки
    auth: {
      user: 'sqdhlp@gmail.com', // (замените звездочики на название вашего почтового ящика gmail)
      pass: 'Squadhelp123', // (замените звездочики на название вашего почтового ящика)
    },
  },
  {
    from: 'Mailer Test <sqdhlp@gmail.com>', // (замените звездочики на название вашего почтового ящика gmail)
  }
);

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email sent: ', info);
  });
};

module.exports = mailer;
