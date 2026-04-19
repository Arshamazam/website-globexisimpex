import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Reusable B2B Quote Request modal.
 * Posts a multipart/form-data payload to POST /api/quote (see backend/server.js).
 * Props:
 *   open            boolean  — whether the modal is visible
 *   onClose         fn       — close handler
 *   productCategory string   — product label, used as a default for backend ("Pink Salt", etc.)
 *   presetShade     string   — optional pre-selected shade
 *   presetGrade     string   — optional pre-selected grade
 */

const COUNTRIES = ["", "Pakistan", "USA", "UK", "Germany", "France", "UAE", "Saudi Arabia", "China", "India", "Japan", "Australia", "Canada", "Other"];
const SHADES = ["", "Light Pink", "Medium Pink", "Dark Pink", "Mixed"];
const GRADES = ["", "Salt Chunks (2–5 cm)", "Salt Granules (2–5 mm)", "Coarse Salt (1–2 mm)", "Fine Salt (20–50 Mesh)", "Mixed"];
const PACKING = ["", "Retail 500 gr", "Retail 1 kg", "25 kg PP Bag", "50 kg PP Bag", "1 M.Ton Jumbo Bag", "Custom / Private Label"];

const API_BASE = import.meta.env.VITE_API_URL || "";

const emptyForm = {
    name: "", company: "", email: "", phone: "", country: "",
    shade: "", grade: "", quantity: "", packing: "", message: "",
};

const QuoteFormModal = ({ open, onClose, productCategory = "Pink Salt", presetShade = "", presetGrade = "" }) => {
    const [form, setForm] = useState({ ...emptyForm, shade: presetShade, grade: presetGrade });
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState({ type: "idle" });

    useEffect(() => {
        if (open) {
            setForm({ ...emptyForm, shade: presetShade, grade: presetGrade });
            setFile(null);
            setStatus({ type: "idle" });
            document.body.style.overflow = "hidden";
            return () => { document.body.style.overflow = ""; };
        }
    }, [open, presetShade, presetGrade]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleFile = (e) => setFile(e.target.files?.[0] || null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: "loading" });
        try {
            const fd = new FormData();
            Object.entries(form).forEach(([k, v]) => fd.append(k, v));
            fd.append("productCategory", productCategory);
            if (file) fd.append("attachment", file);

            const res = await fetch(`${API_BASE}/api/quote`, { method: "POST", body: fd });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.error || "Submission failed. Please try again.");

            setStatus({ type: "success", message: data.message, quoteId: data.quoteId });
        } catch (err) {
            setStatus({ type: "error", message: err.message || "Unable to reach the server. Please try again." });
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[3000] flex items-start md:items-center justify-center p-4 md:p-8 bg-brand-navy/95 backdrop-blur-xl overflow-y-auto"
                >
                    <motion.div
                        initial={{ scale: 0.92, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.92, opacity: 0, y: 40 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-white rounded-md shadow-2xl w-full max-w-3xl my-8"
                    >
                        <button
                            onClick={onClose}
                            aria-label="Close quote form"
                            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-brand-gold hover:text-white flex items-center justify-center text-brand-navy transition-colors z-10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="px-8 md:px-12 pt-10 pb-6 border-b border-slate-100">
                            <span className="text-brand-gold font-sans font-extrabold uppercase tracking-[0.4em] text-[11px]">Get a Quote</span>
                            <h3 className="text-2xl md:text-3xl font-serif font-black text-brand-navy mt-3 leading-tight">
                                Request {productCategory} Pricing
                            </h3>
                            <p className="text-slate-500 font-sans font-light text-sm mt-3 leading-relaxed">
                                Tell us what you need. Our export team responds within one business day with a tailored proposal and full lab documentation.
                            </p>
                        </div>

                        {status.type === "success" ? (
                            <SuccessPanel
                                message={status.message}
                                quoteId={status.quoteId}
                                onClose={onClose}
                                onAnother={() => setStatus({ type: "idle" })}
                            />
                        ) : (
                            <QuoteForm
                                form={form}
                                file={file}
                                status={status}
                                onChange={handleChange}
                                onFile={handleFile}
                                onSubmit={handleSubmit}
                            />
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

/* ────────────────────────────  SUB-COMPONENTS  ──────────────────────────── */

const QuoteForm = ({ form, file, status, onChange, onFile, onSubmit }) => {
    const isLoading = status.type === "loading";
    return (
        <form onSubmit={onSubmit} className="px-8 md:px-12 py-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" value={form.name} onChange={onChange} required placeholder="John Doe" />
                <Field label="Company" name="company" value={form.company} onChange={onChange} placeholder="Company Ltd." />
                <Field label="Email" type="email" name="email" value={form.email} onChange={onChange} required placeholder="you@company.com" />
                <Field label="Phone" name="phone" value={form.phone} onChange={onChange} placeholder="+1 555 000 0000" />
                <Select label="Country" name="country" value={form.country} onChange={onChange} options={COUNTRIES} placeholder="Select country" />
                <Field label="Quantity" name="quantity" value={form.quantity} onChange={onChange} placeholder="e.g. 20 tons / 1 container" />
                <Select label="Shade" name="shade" value={form.shade} onChange={onChange} options={SHADES} placeholder="Any shade" />
                <Select label="Grade" name="grade" value={form.grade} onChange={onChange} options={GRADES} placeholder="Any grade" />
                <div className="md:col-span-2">
                    <Select label="Packing" name="packing" value={form.packing} onChange={onChange} options={PACKING} placeholder="Any packing" />
                </div>
            </div>

            <div>
                <label className="block text-[10px] font-sans font-black uppercase tracking-[0.3em] text-brand-navy/60 mb-2">Message *</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={4}
                    placeholder="Tell us about your target market, lead time, certifications needed, and any special requirements."
                    className="w-full px-4 py-3 border border-slate-200 rounded-md text-brand-navy font-sans text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors resize-none"
                />
            </div>

            <div>
                <label className="block text-[10px] font-sans font-black uppercase tracking-[0.3em] text-brand-navy/60 mb-2">Attachment (optional)</label>
                <label className="flex items-center gap-3 px-4 py-3 border border-dashed border-slate-300 rounded-md cursor-pointer hover:border-brand-gold hover:bg-brand-gold/5 transition-colors">
                    <svg className="w-5 h-5 text-brand-navy/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <span className="text-sm font-sans text-slate-500 flex-1 truncate">
                        {file ? file.name : "Attach an RFQ, spec sheet, or reference PDF (max 50 MB)"}
                    </span>
                    <input type="file" onChange={onFile} className="hidden" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.xls,.xlsx" />
                </label>
            </div>

            {status.type === "error" && (
                <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm font-sans">
                    {status.message}
                </div>
            )}

            <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                className="w-full py-4 bg-brand-navy text-white font-sans font-black uppercase tracking-[0.3em] text-xs rounded-md shadow-xl hover:bg-[#002a56] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
                {isLoading ? (
                    <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Submitting…
                    </>
                ) : (
                    <>
                        Submit Quote Request
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </>
                )}
            </motion.button>

            <p className="text-center text-[10px] font-sans text-slate-400 uppercase tracking-[0.2em]">
                * Required fields — your details are kept strictly confidential.
            </p>
        </form>
    );
};

const SuccessPanel = ({ message, quoteId, onClose, onAnother }) => (
    <div className="px-8 md:px-12 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <h4 className="text-2xl md:text-3xl font-serif font-black text-brand-navy leading-tight">Request Submitted</h4>
        <p className="text-slate-500 font-sans font-light text-sm mt-4 max-w-md mx-auto leading-relaxed">
            {message || "Your quote request has been received. Our team will be in touch within one business day."}
        </p>
        {quoteId && (
            <p className="mt-4 text-[10px] font-sans font-black uppercase tracking-[0.3em] text-brand-gold">
                Reference # {quoteId}
            </p>
        )}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={onAnother} className="px-8 py-3 border border-brand-navy/20 text-brand-navy font-sans font-black uppercase tracking-[0.3em] text-[10px] rounded-full hover:border-brand-gold hover:text-brand-gold transition-colors">
                Submit Another
            </button>
            <button onClick={onClose} className="px-8 py-3 bg-brand-navy text-white font-sans font-black uppercase tracking-[0.3em] text-[10px] rounded-full hover:bg-[#002a56] transition-colors">
                Close
            </button>
        </div>
    </div>
);

const Field = ({ label, name, value, onChange, type = "text", required, placeholder }) => (
    <div>
        <label className="block text-[10px] font-sans font-black uppercase tracking-[0.3em] text-brand-navy/60 mb-2">
            {label}{required && " *"}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className="w-full px-4 py-3 border border-slate-200 rounded-md text-brand-navy font-sans text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors"
        />
    </div>
);

const Select = ({ label, name, value, onChange, options, placeholder }) => (
    <div>
        <label className="block text-[10px] font-sans font-black uppercase tracking-[0.3em] text-brand-navy/60 mb-2">{label}</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-md text-brand-navy font-sans text-sm bg-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors"
        >
            {options.map((opt) => (
                <option key={opt} value={opt}>{opt || placeholder}</option>
            ))}
        </select>
    </div>
);

export default QuoteFormModal;
