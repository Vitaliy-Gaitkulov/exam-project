const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'sqdhlp@gmail.com',
      pass: 'Squadhelp123',
    },
  },
  {
    from: 'Mailer Test <sqdhlp@gmail.com>',
  }
);

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email sent: ', info);
  });
};

module.exports = mailer;
