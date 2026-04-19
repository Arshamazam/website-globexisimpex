import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, FileText, MapPin, Mail, Phone } from "lucide-react";

/**
 * Step 8.9: High-Conversion B2B Contact Hub.
 * Features: Multi-field form with RFQ Document Upload, Google Maps integration, 
 * and floating magnetic WhatsApp support.
 */

import FAQ from "./FAQ";

const PRODUCT_GROUPS = [
    {
        label: "Himalayan Edible Salt",
        items: ["Himalayan Edible Salt (All)", "Pink Salt", "White Salt", "Black Salt"],
    },
    {
        label: "Salt Culinary",
        items: ["Salt Culinary (All)", "Salt Cooking Plate", "Salt Crockery"],
    },
    {
        label: "Wellness",
        items: ["Wellness (All)", "Salt Lamp", "Salt Candle Holder", "Salt Aroma Therapy", "Salt Room"],
    },
    {
        label: "Bath Salt",
        items: ["Bath Salt (All)", "Pink Salt Soap", "Salt Soap Heart Shape", "Salt Balls", "Salt Deo Stick"],
    },
    {
        label: "Animal Lick Salt",
        items: ["Animal Lick Salt (All)", "Lick Salt Cylinder", "Lick Salt Block"],
    },
];
const COUNTRIES = ["Select Country", "USA", "UK", "Germany", "Saudi Arabia", "UAE", "China", "Australia", "Canada", "Other"];

const Step5Contact = () => {
  const [showFAQ, setShowFAQ] = useState(false);
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
            className="fixed bottom-10 right-10 z-[1100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer"
        >
            <motion.div 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
            </motion.div>
        </motion.a>

        <div className="container mx-auto">
            
            {/* 1. SECTION HEADER */}
            <div className="text-center mb-32 max-w-4xl mx-auto space-y-6">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-serif font-black text-brand-navy tracking-tight leading-none"
                >
                    Request a <span className="text-brand-gold italic">Quote</span>
                </motion.h2>
                <p className="text-slate-500 text-lg font-sans font-extralight mt-8 max-w-3xl mx-auto leading-relaxed">
                    Get in touch with our export experts for customized B2B solutions and wholesale pricing.
                </p>
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "220px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="h-1 bg-brand-gold mx-auto rounded-full mt-4"
                />

                {/* FAQ POPUP TRIGGER */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowFAQ(true)}
                    className="mt-12 px-10 py-4 bg-white border-2 border-brand-gold text-brand-navy rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-lg hover:bg-brand-gold hover:text-white transition-all duration-300 flex items-center gap-4 mx-auto"
                >
                    <MessageCircle className="w-4 h-4" />
                    Visit FAQ Hub
                </motion.button>
            </div>

            {/* FAQ MODAL OVERLAY */}
            <AnimatePresence>
                {showFAQ && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] bg-brand-navy/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                        onClick={() => setShowFAQ(false)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            className="bg-white rounded-[50px] w-full max-w-5xl max-h-[90vh] overflow-hidden relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setShowFAQ(false)}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-white transition-all z-20"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="overflow-y-auto h-full p-4 md:p-10">
                                <FAQ />
                                <div className="p-10 text-center">
                                     <button 
                                        onClick={() => setShowFAQ(false)}
                                        className="py-4 px-12 bg-brand-navy text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs"
                                    >
                                        Close FAQ
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            <SelectGroup label="Product Interest *" name="product" groups={PRODUCT_GROUPS} placeholder="Select Product interest" value={formData.product} onChange={handleChange} required />
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
                                    <FileText className="w-10 h-10 text-slate-300 group-hover:text-brand-gold" />
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
                        <ContactDetail icon={MapPin} title="Headquarter" value="Office # 137, Johar Town, G1 Block, Lahore, Pakistan" />
                        <ContactDetail icon={Mail} title="Export Inquiries" value="info@globexisimpex.com" />
                        <ContactDetail icon={Phone} title="Direct WhatsApp" value="+92 321 0005192" />
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

const SelectGroup = ({ label, name, options, groups, placeholder, value, onChange, required=false }) => (
    <div className="space-y-4 group">
        <label className="text-xs font-black uppercase text-brand-navy/60 tracking-widest pl-1 group-focus-within:text-brand-gold transition-colors">{label}</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl p-6 focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all duration-300 appearance-none"
        >
            {groups ? (
                <>
                    <option value="">{placeholder || "Select an option"}</option>
                    {groups.map(g => (
                        <optgroup key={g.label} label={g.label}>
                            {g.items.map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </optgroup>
                    ))}
                </>
            ) : (
                options.map(opt => <option key={opt} value={opt === options[0] ? "" : opt}>{opt}</option>)
            )}
        </select>
    </div>
);

const ContactDetail = ({ icon: Icon, title, value }) => (
    <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 sm:gap-8 group">
        <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-[18px] sm:rounded-[22px] shadow-sm flex items-center justify-center text-brand-gold group-hover:bg-brand-navy group-hover:text-white transition-all transform group-hover:rotate-12 shrink-0">
            {Icon === MapPin && (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            )}
            {Icon === Mail && (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            )}
            {Icon === Phone && (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3.58 3.92l1.57 1.97c1.83-1.16 4.26-1.58 6.36-.78l1.53 1.71c1.44-.96 3.37-1.28 5.1-.58l1.38-1.71C20.76 3.24 21 3.65 21 4.19v.38c0 .54-.45.99-.99.99z"/></svg>
            )}
        </div>
        <div className="space-y-1">
            <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs uppercase">{title}</h4>
            <p className="text-xl font-extrabold text-brand-navy group-hover:text-brand-gold transition-colors">{value}</p>
        </div>
    </motion.div>
);

export default Step5Contact;
