// src/sendEmail.js
const nodemailer = require('nodemailer');

const sendEmail = async ({ email, subject, text }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Use ethereal email for testing, replace with your SMTP server details for production
    port: 465,
    secure:true,
    auth: {
      user: '<your_email_id>',
      pass: '<your_app_password_from_google>',
    },
  });
  transporter.verify(function (error, success) {
    if (error) {
      console.error('SMTP connection error:', error);
    } else {
      console.log('SMTP server is ready to take our messages:', success);
    }
  });
  const mailOptions = {
    from: '<sender_id>',
    to: email,
    subject: subject,
    text: text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = sendEmail;
