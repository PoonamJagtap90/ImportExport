require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Create transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAILID,
    pass: process.env.GMAIL_PASS, // App password
  },
});

// Function to send email
async function sendMail(data) {
  try {
    const {Name, companyName, email, phone, service, message} = data;

    const templatePath = path.join(__dirname, "template", "enquiry.hbs");
    const source = fs.readFileSync(templatePath, "utf8");
    const template = handlebars.compile(source);

    const html = template({ Name, companyName, email, phone, service, message });

      
    //mail sent
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: email, // recipient
      subject: "Enquiry Regarding Feedback",
      bcc: 'sales@theinfinitysolutions.co',
      cc: ['yash.paranjape@theinfinitysolutions.co','corporate@@theinfinitysolutions.in','support@theinfinitysolutions.co'],
      html: html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

// API route
app.post("/api/contact", async (req, res) => {
  const { Name, email, message } = req.body;

  if (!Name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

const success = await sendMail(req.body);

  if (success) {
    res.status(200).json({ success: true, message: "Mail sent successfully" });
  } else {
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
