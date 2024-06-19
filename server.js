// src/server.js
const express = require('express');
const sendEmail = require('./sendEmail.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Route to send email
console.log('starting route');
app.post('/send-email', async (req, res) => {
  const { email, subject, text } = req.body;
    console.log(email);
  try {
    const info = await sendEmail({ email, subject, text });
    console.log('Email sent:', info.response);
    console.log(email,subject,text,info);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
