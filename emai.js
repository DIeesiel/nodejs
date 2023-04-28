var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mateuselias4048@gmail.com',
    pass: 'acvhcmezpvhfdqpx'
  }
});

var mailOptions = {
  from: 'mateuselias4048@gmail.com',
  to: 'luisfiabani@gmail.com',
  subject: 'Fala Amigo',
  text: 'Firmeza véi!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});