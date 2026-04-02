const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;
const CONTACTS_FILE = path.join(__dirname, "contacts.json");
const UPLOAD_DIR = path.join(__dirname, "uploads");

// 1. ENSURE DIRECTORIES EXIST
if (!fs.existsSync(CONTACTS_FILE)) fs.writeFileSync(CONTACTS_FILE, JSON.stringify([], null, 2));
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

// 2. MIDDLEWARES
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// 3. MULTER CONFIGURATION (Handle RFQ Document Uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ 
  storage,
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB Limit
});

// 4. NODEMAILER CONFIGURATION (Optional - Replace with real credentials)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // Placeholder
    pass: "your-app-password",    // Placeholder
  },
});

/**
 * POST /api/contact
 * High-conversion B2B Lead Capturing with RFQ Attachment support.
 */
app.post("/api/contact", upload.single("rfq"), (req, res) => {
  const { name, email, phone, country, product, message } = req.body;
  const file = req.file;

  // Basic Validation
  if (!name || !email || !product || !message) {
    return res.status(400).json({ error: "Missing required fields (Name, Email, Product, Message)" });
  }

  const newLead = {
    id: Date.now(),
    name,
    email,
    phone,
    country,
    product,
    message,
    rfqFile: file ? file.filename : null,
    date: new Date().toISOString(),
  };

  // 1. Save to JSON Database
  fs.readFile(CONTACTS_FILE, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "DB Read Error" });
    
    const leads = JSON.parse(data);
    leads.push(newLead);
    
    fs.writeFile(CONTACTS_FILE, JSON.stringify(leads, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "DB Save Error" });

      // 2. Send Technical Notification (Mock Email)
      console.log("------------------------------------------");
      console.log("NEW B2B LEAD RECEIVED:");
      console.log(`From: ${name} (${email}) - ${country}`);
      console.log(`Product Interest: ${product}`);
      if (file) console.log(`Attachment: ${file.originalname}`);
      console.log("------------------------------------------");

      res.status(200).json({ 
        success: true, 
        message: "Your request has been submitted successfully. Our team will contact you shortly." 
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Globeix B2B Server running on http://localhost:${PORT}`);
});
