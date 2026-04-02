import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

/**
 * Step 8.9: High-Conversion B2B Contact Hub.
 * Features: Multi-field form with RFQ Document Upload, Google Maps integration, 
 * and floating magnetic WhatsApp support.
 */

const PRODUCTS = ["Select Product interest", "Himalayan Pink Salt", "Himalayan White Salt", "Himalayan Black Salt", "Industrial Salt Solutions", "Gourmet Flavored Salts", "Animal Lick Salt"];
const COUNTRIES = ["Select Country", "USA", "UK", "Germany", "Saudi Arabia", "UAE", "China", "Australia", "Canada", "Other"];

const Step5Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/xvgzjpje", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          product: formData.product,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Quotation request successfully sent! We will get back to you shortly." });
        setFormData({ name: "", email: "", phone: "", country: "", product: "", message: "" });
        setFile(null);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.errors?.[0]?.message || "Submission failed");
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      setStatus({ 
        type: "error", 
        message: "Failed to connect to the email server. Please try again or email us directly at info@globexisimpex.com" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 px-6 lg:px-20 relative overflow-hidden">
        
        {/* FLOATING WHATSAPP BUTTON (Step 8.9) */}
        <motion.a
            href="https://wa.me/923210005192"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(197,160,89,0.5)" }}
            className="fixed bottom-10 right-10 z-[1100] w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer"
        >
            <motion.div 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl"
            >
                💬
            </motion.div>
        </motion.a>

        <div className="container mx-auto">
            
            {/* 1. SECTION HEADER */}
            <div className="text-center mb-24 max-w-4xl mx-auto space-y-6">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black text-brand-navy tracking-tight"
                >
                    Request a <span className="text-brand-gold italic">Quote</span>
                </motion.h2>
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "220px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="h-1.5 bg-brand-gold mx-auto rounded-full"
                />
                <p className="text-slate-500 text-xl font-light italic mt-6 max-w-3xl mx-auto leading-relaxed">
                    Get in touch with us for premium export solutions tailored to your business needs worldwide.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                
                {/* 2. CONTACT FORM (LEFT) */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-[1.5] bg-white rounded-[50px] p-10 lg:p-14 shadow-2xl border border-slate-50 relative overflow-hidden"
                >
                    <form onSubmit={handleSubmit} className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <InputGroup label="Full Name *" name="name" value={formData.name} onChange={handleChange} required />
                            <InputGroup label="Email Address *" name="email" type="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <InputGroup label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
                            <SelectGroup label="Country *" name="country" options={COUNTRIES} value={formData.country} onChange={handleChange} required />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
                            <SelectGroup label="Product Interest *" name="product" options={PRODUCTS} value={formData.product} onChange={handleChange} required />
                        </div>

                        <div className="space-y-4">
                            <label className="text-xs font-black uppercase text-brand-navy/60 tracking-widest pl-1">Message / Requirements *</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl p-6 focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all duration-300 resize-none"
                                placeholder="Describe your export requirements..."
                            />
                        </div>

                        {/* RFQ DOCUMENT UPLOAD */}
                        <div className="space-y-6">
                            <label className="text-xs font-black uppercase text-brand-navy/60 tracking-widest pl-1 underline decoration-gold/30">Upload RFQ Document (PDF/DOC)</label>
                            <div className="relative border-2 border-dashed border-slate-200 rounded-3xl p-10 hover:border-brand-gold transition-colors text-center group bg-slate-50/50">
                                <input 
                                    type="file" 
                                    name="rfq"
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                <div className="space-y-4">
                                    <div className="text-4xl opacity-20 group-hover:opacity-100 transition-all">📄</div>
                                    <p className="text-slate-400 font-bold tracking-wider">
                                        {file ? <span className="text-brand-gold">{file.name}</span> : "Drop your files here or Click to upload"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02, backgroundColor: "#C5A059" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-brand-navy text-white font-black py-6 rounded-3xl shadow-xl transition-all duration-500 text-sm tracking-[0.5em] uppercase disabled:opacity-50 flex items-center justify-center gap-4"
                        >
                            {isSubmitting ? (
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : "Submit Quotation Request"}
                        </motion.button>

                        <AnimatePresence>
                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className={`p-6 rounded-2xl text-center font-bold text-sm tracking-widest ${
                                        status.type === "success" 
                                        ? "bg-green-50 text-green-700 border border-green-100" 
                                        : "bg-red-50 text-red-700 border border-red-100"
                                    }`}
                                >
                                    {status.message}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>

                {/* 3. MAP & DETAILS (RIGHT) */}
                <div className="flex-1 space-y-12">
                    
                    {/* INFOGRAPHIC DETAILS */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <ContactDetail icon="📍" title="Headquarter" value="Office # 137, Johar Town, G1 Block, Lahore, Pakistan" />
                        <ContactDetail icon="📧" title="Export Inquiries" value="info@globexisimpex.com" />
                        <ContactDetail icon="📱" title="Direct WhatsApp" value="+92 321 0005192" />
                    </motion.div>

                    {/* GOOGLE MAP EMBED */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="h-[450px] bg-slate-100 rounded-[50px] shadow-2xl border-4 border-white overflow-hidden relative group"
                    >
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.551346362842!2d74.2690967!3d31.4815194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190176881c1c91%3A0xe13e11059f37c35e!2zRzEgQmxvY2sgRzEgQmxvY2sgSm9oYXIgVG93biwgTGFob3JlLCBQdW5qYWIsIFBha2lzdGFu!5e0!3m2!1sen!2s!4v1711200000000!5m2!1sen!2s" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, filter: "grayscale(0.4) invert(0.1)" }} 
                            allowFullScreen="" 
                            loading="lazy"
                        ></iframe>
                        <div className="absolute top-8 left-8 bg-brand-navy/90 text-white px-6 py-3 rounded-2xl text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-md border border-brand-gold/20">
                            GlobexisImpex Office Hub
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  );
};

// Reusable Components
const InputGroup = ({ label, name, value, onChange, type="text", required=false }) => (
    <div className="space-y-4 group">
        <label className="text-xs font-black uppercase text-brand-navy/60 tracking-widest pl-1 group-focus-within:text-brand-gold transition-colors">{label}</label>
        <input 
            type={type} 
            name={name} 
            value={value} 
            onChange={onChange} 
            required={required}
            className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl p-6 focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all duration-300"
            placeholder={`Enter ${name}...`}
        />
    </div>
);

const SelectGroup = ({ label, name, options, value, onChange, required=false }) => (
    <div className="space-y-4 group">
        <label className="text-xs font-black uppercase text-brand-navy/60 tracking-widest pl-1 group-focus-within:text-brand-gold transition-colors">{label}</label>
        <select 
            name={name} 
            value={value} 
            onChange={onChange} 
            required={required}
            className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl p-6 focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all duration-300 appearance-none"
        >
            {options.map(opt => <option key={opt} value={opt === options[0] ? "" : opt}>{opt}</option>)}
        </select>
    </div>
);

const ContactDetail = ({ icon, title, value }) => (
    <motion.div whileHover={{ x: 10 }} className="flex items-start gap-8 group">
        <div className="text-3xl bg-white w-16 h-16 rounded-[22px] shadow-sm flex items-center justify-center text-brand-gold group-hover:bg-brand-navy group-hover:text-white transition-all transform group-hover:rotate-12">{icon}</div>
        <div className="space-y-1">
            <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs uppercase">{title}</h4>
            <p className="text-xl font-extrabold text-brand-navy group-hover:text-brand-gold transition-colors">{value}</p>
        </div>
    </motion.div>
);

export default Step5Contact;
