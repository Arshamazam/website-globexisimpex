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
const QUOTES_FILE = path.join(__dirname, "quotes.json");
const UPLOAD_DIR = path.join(__dirname, "uploads");

// 1. ENSURE DIRECTORIES EXIST
if (!fs.existsSync(CONTACTS_FILE)) fs.writeFileSync(CONTACTS_FILE, JSON.stringify([], null, 2));
if (!fs.existsSync(QUOTES_FILE)) fs.writeFileSync(QUOTES_FILE, JSON.stringify([], null, 2));
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

/**
 * POST /api/quote
 * B2B Quote Request capturing — supports Pink Salt (and other product) inquiries
 * with shade/grade/quantity/packing preferences and optional document attachment.
 */
app.post("/api/quote", upload.single("attachment"), (req, res) => {
  const {
    name, company, email, phone, country,
    productCategory, shade, grade, quantity, packing, message,
  } = req.body;
  const file = req.file;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const newQuote = {
    id: Date.now(),
    name,
    company: company || "",
    email,
    phone: phone || "",
    country: country || "",
    productCategory: productCategory || "Pink Salt",
    shade: shade || "",
    grade: grade || "",
    quantity: quantity || "",
    packing: packing || "",
    message,
    attachmentFile: file ? file.filename : null,
    attachmentOriginalName: file ? file.originalname : null,
    createdAt: new Date().toISOString(),
  };

  fs.readFile(QUOTES_FILE, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Database read error." });
    let quotes = [];
    try { quotes = JSON.parse(data || "[]"); } catch (_) { quotes = []; }
    quotes.push(newQuote);

    fs.writeFile(QUOTES_FILE, JSON.stringify(quotes, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Database save error." });

      console.log("======= NEW QUOTE REQUEST =======");
      console.log(`From: ${name} <${email}>${company ? " @ " + company : ""}`);
      console.log(`Country: ${country || "-"} | Phone: ${phone || "-"}`);
      console.log(`Product: ${newQuote.productCategory} | Shade: ${shade || "-"} | Grade: ${grade || "-"}`);
      console.log(`Quantity: ${quantity || "-"} | Packing: ${packing || "-"}`);
      if (file) console.log(`Attachment: ${file.originalname} (${file.filename})`);
      console.log("=================================");

      res.status(200).json({
        success: true,
        quoteId: newQuote.id,
        message: "Quote request received. Our export team will respond within one business day.",
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Globeix B2B Server running on http://localhost:${PORT}`);
});
