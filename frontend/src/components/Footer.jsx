import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const SocialIcon = ({ type }) => {
  const icons = {
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    x: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  };
  return icons[type] || null;
};

/**
 * Step 8.10: Advanced Footer Enhancement.
 * Features: 4-Column Luxury Layout, Animated Sitemap, and Social Glow Hub.
 * Branding: Navy (#003366) and Gold (#C5A059).
 */

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" }, // Refers to ProductExperience
  { name: "Mission & Vision", href: "#mission-vision" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact Us", href: "#contact" }
];

const QUICK_ACCESS = [
  { name: "Our Capabilities", href: "#capabilities" },
  { name: "Request a Quote", href: "#contact" },
  { name: "FAQ / Support", href: "#faq" }
];

const SOCIALS = [
  { name: "LinkedIn", icon: "linkedin", href: "#" },
  { name: "Facebook", icon: "facebook", href: "#" },
  { name: "Instagram", icon: "instagram", href: "#" },
  { name: "Twitter", icon: "x", href: "#" }
];

const Footer = () => {
    return (
        <footer className="bg-brand-navy pt-32 pb-12 px-6 lg:px-20 text-white relative overflow-hidden">
            
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(25deg,#fff_1px,transparent_1px),linear-gradient(-25deg,#fff_1px,transparent_1px)] bg-[size:4px_4px] pointer-events-none" />
            
            <div className="container mx-auto relative z-10">
                
                {/* 1-4 COLUMN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
                    
                    {/* COLUMN 1: BRANDING */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/10 p-4 rounded-2xl w-fit backdrop-blur-md border border-white/5"
                        >
                            <img src="/img/logo.png" alt="GlobexisImpex Logo" className="h-28 w-auto" />
                        </motion.div>
                        <p className="text-slate-400 text-lg font-light leading-relaxed max-w-xs">
                            Globally Trusted Exporters of <span className="text-brand-gold font-bold italic">Premium Products</span>. Delivering purity across borders since 2026.
                        </p>
                        <div className="flex gap-4">
                            {SOCIALS.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    whileHover={{ y: -5, scale: 1.1, backgroundColor: "#C5A059", boxShadow: "0px 0px 15px rgba(197,160,89,0.5)" }}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300"
                                >
                                    <SocialIcon type={social.icon} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* COLUMN 2: SITEMAP */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-8"
                    >
                        <h4 className="text-brand-gold font-sans font-black uppercase text-[11px] tracking-[0.4em] underline decoration-brand-gold/20 underline-offset-8">Sitemap</h4>
                        <ul className="space-y-4">
                            {NAV_LINKS.map((link) => (
                                <FooterLink key={link.name} {...link} />
                            ))}
                        </ul>
                    </motion.div>

                    {/* COLUMN 3: QUICK ACCESS */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h4 className="text-brand-gold font-sans font-black uppercase text-[11px] tracking-[0.4em] underline decoration-brand-gold/20 underline-offset-8">Resources</h4>
                        <ul className="space-y-4">
                            {QUICK_ACCESS.map((link) => (
                                <FooterLink key={link.name} {...link} />
                            ))}
                        </ul>
                    </motion.div>

                    {/* COLUMN 4: CONTACT INFO */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                    >
                        <h4 className="text-brand-gold font-sans font-black uppercase text-[11px] tracking-[0.4em] underline decoration-brand-gold/20 underline-offset-8">Global Hub</h4>
                        <div className="space-y-6">
                            <ContactItem icon={Mail} text="info@globexisimpex.com" />
                            <ContactItem icon={Phone} text="+92 321 0005192" />
                            <ContactItem icon={MapPin} text="Office # 137, Johar Town, G1 Block, Lahore" />
                        </div>
                    </motion.div>

                </div>

                {/* BOTTOM BAR */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-500 text-sm font-light tracking-wide">
                        © 2026 GlobexisImpex International. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                        <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-gold transition-colors">Trade Terms</a>
                    </div>
                    <p className="text-brand-gold/40 text-[10px] font-black uppercase tracking-[0.3em] italic">
                        Designed for Global Trade Excellence
                    </p>
                </div>

            </div>
        </footer>
    );
};

// Reusable Footer Link Component
const FooterLink = ({ name, href }) => (
    <li>
        <motion.a 
            href={href}
            whileHover={{ x: 8, color: "#C5A059" }}
            className="text-slate-300 font-light text-lg transition-all duration-300 flex items-center group"
        >
            <span className="w-0 h-[1px] bg-brand-gold group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-3" />
            {name}
        </motion.a>
    </li>
);

// Reusable Contact Item
const ContactItem = ({ icon: Icon, text }) => (
    <div className="flex items-start gap-4 group">
        <Icon className="w-5 h-5 text-slate-400 group-hover:text-brand-gold group-hover:scale-110 transition-all" />
        <p className="text-slate-400 text-sm font-light leading-relaxed group-hover:text-white transition-colors">
            {text}
        </p>
    </div>
);

export default Footer;
