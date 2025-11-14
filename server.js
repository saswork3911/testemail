const express = require('express');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
require('dotenv').config();

const app = express();
app.use(express.json());

// Gmail transporter with App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send email function
const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text
    });
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('Email error:', error);
    return false;
  }
};

// API endpoint to send email
app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;
  const success = await sendEmail(to, subject, text);
  res.json({ success, message: success ? 'Email sent' : 'Email failed' });
});

// Cron job - daily at 9 AM
cron.schedule('0 9 * * *', () => {
  sendEmail('trymegpt@gmail.com', 'Daily Report', 'Your daily automated email');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
