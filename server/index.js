// const express = require('express');
// const nodemailer = require('nodemailer');
// const twilio = require('twilio'); // Added Twilio
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // 1. Initialize Twilio
// const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// app.post('/send-email', async (req, res) => {
// const name = req.body.name || req.body.user_name;
// const phone = req.body.phone || req.body.user_phone;
// const email = req.body.email || req.body.user_email;

// const moveFrom = req.body.moveFrom || req.body.from_loc;
// const moveTo = req.body.moveTo || req.body.to_loc;

// const message =
//   req.body.message ||
//   `Move Date: ${req.body.move_date || "Not specified"}`;  const leadNo = Math.floor(Math.random() * 9000) + 1000;

//   // Format for WhatsApp (PlainText)
//   const whatsappBody = `
// Lead No : ${leadNo}
// Shifting From: ${moveFrom}
// Shifting To: ${moveTo}
// Customer No: ${phone}
// Customer Name: ${name}
// From Book My Packers (www.bookmypackers.com)
//   `;

//   // 1. Email to YOU (the Admin)
//   const adminMailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_USER,
//     subject: `🚚 New Moving Lead: ${name}`,
//     html: `
//       <h3>New Inquiry Details:</h3>
//       <p><b>Lead No:</b> ${leadNo}</p>
//       <p><b>Name:</b> ${name}</p>
//       <p><b>Phone:</b> ${phone}</p>
//       <p><b>Email:</b> ${email}</p>
//       <p><b>From:</b> ${moveFrom}</p>
//       <p><b>To:</b> ${moveTo}</p>
//       <p><b>Message:</b> ${message}</p>
//     `,
//   };

//   // 2. Auto-reply to CUSTOMER
//   const customerMailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'We received your moving inquiry!',
//     html: `<p>Hi ${name},</p><p>Thank you for reaching out to Vedha Packers and Movers. We have received your request and will call you shortly at ${phone}.</p>`,
//   };

//   try {
//     // Execute all notifications
//     await transporter.sendMail(adminMailOptions);
//     await transporter.sendMail(customerMailOptions);

//     // 3. Send WhatsApp to Owner
//     await client.messages.create({
//       from: 'whatsapp:+14155238886', // Twilio Sandbox Number 
//       to: 'whatsapp:+917993713592', // Make sure this matches your verified number
//       body: whatsappBody
//     });

//     res.status(200).json({ success: true, message: 'All notifications sent successfully' });
//   } catch (error) {
//     console.error("Error Detail:", error);
//     res.status(500).json({ success: false, message: 'Failed to process lead' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Twilio
const client = new twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to get next lead number
const getNextLeadNumber = () => {
  const data = JSON.parse(fs.readFileSync('leadCounter.json'));
  data.lead += 1;
  fs.writeFileSync('leadCounter.json', JSON.stringify(data));
  return data.lead;
};

app.post('/send-email', async (req, res) => {
  const name = req.body.name || req.body.user_name;
  const phone = req.body.phone || req.body.user_phone;
  const email = req.body.email || req.body.user_email;

  const moveFrom = req.body.moveFrom || req.body.from_loc;
  const moveTo = req.body.moveTo || req.body.to_loc;

  const message =
    req.body.message ||
    `Move Date: ${req.body.move_date || "Not specified"}`;

  // Generate Lead Number
  const leadNo = getNextLeadNumber();

  // WhatsApp message
  const whatsappBody = `
Lead No : ${leadNo}
Shifting From: ${moveFrom}
Shifting To: ${moveTo}
Customer No: ${phone}
Customer Name: ${name}
From Book My Packers (www.bookmypackers.com)
`;

  // Admin email
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `🚚 New Moving Lead: ${name}`,
    html: `
      <h3>New Inquiry Details:</h3>
      <p><b>Lead No:</b> ${leadNo}</p>
      <p><b>Name:</b> ${name}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>From:</b> ${moveFrom}</p>
      <p><b>To:</b> ${moveTo}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  };

  // Customer auto-reply
  const customerMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'We received your moving inquiry!',
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for reaching out to Vedha Packers and Movers.</p>
      <p>We received your request and will call you shortly at ${phone}.</p>
    `,
  };

  try {
    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    // Send WhatsApp
    await client.messages.create({
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+917993713592',
      body: whatsappBody,
    });

    res.status(200).json({
      success: true,
      message: 'All notifications sent successfully',
      leadNo: leadNo,
    });

  } catch (error) {
    console.error("Error Detail:", error);
    res.status(500).json({
      success: false,
      message: 'Failed to process lead'
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);