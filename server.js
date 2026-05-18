//require("dotenv").config();
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

console.log(process.env.SMTP_USER);
console.log(process.env.SMTP_PASS);
const app = express();


app.use((req, res, next) => {
  console.log("Request:", req.method, req.url);
  next();
});

app.use(cors());
app.use(express.json());
//const express = require("express");
//const cors = require("cors");
//const fs = require("fs");
//const path = require("path");
//const handlebars = require("handlebars");
//const nodemailer = require("nodemailer");
//const app = express();
//app.use(cors());
//app.use(express.json());

const PORT = process.env.PORT || 5000;

// Create transporter using Gmail
{/* const transporter = nodemailer.createTransport({
  service: 'gmail',

  auth: {
    user: process.env.EMAILID,
    pass: process.env.SMTP_PASS, // App password
  },
});*/}



  const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


async function checkSMTP() {
  try {
    await transporter.verify();
    console.log('SMTP Ready');
  } catch (error) {
    console.log('SMTP Error:', error);
  }
}

checkSMTP();


export default transporter;

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
      from: `<${process.env.SMTP_USER}>`,
      to: email, // recipient
      subject: "Enquiry Regarding Feedback",
      bcc: 'sales@theinfinitysolutions.co',
      cc: ['yash.paranjape@theinfinitysolutions.co','corporate@theinfinitysolutions.in','support@theinfinitysolutions.co'],
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
{/*app.post("/api/contact", async (req, res) => {
  const { Name, email, message } = req.body;

  if (!Name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

const success = await sendMail(req.body);

  if (success) {
   return res.status(200).json({ success: true, message: "Mail sent successfully" });
  } else {
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});*/}

app.post("/api/contact", async (req, res) => {
  try {
    const { Name, email, message } = req.body;

    if (!Name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const success = await sendMail(req.body);

    if (success) {
      return res.status(200).json({
        success: true,
        message: "Mail sent successfully",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to send email",
      });
    }
  } catch (err) {
    console.error("Error in /api/contact:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

//app.get("/", (req, res) => {
  //res.send("Backend running");
//});
// 👇 ADD DEBUG ROUTE HERE
app.get("/api/contact", (req, res) => {
  res.send("GET contact working");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
