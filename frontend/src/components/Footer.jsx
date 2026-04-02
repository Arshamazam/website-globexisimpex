import React from "react";
import { motion } from "framer-motion";

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
  { name: "Export Map", href: "#global-presence" },
  { name: "Request a Quote", href: "#contact" },
  { name: "FAQ / Support", href: "#faq" }
];

const SOCIALS = [
  { name: "LinkedIn", icon: "in", href: "#" },
  { name: "Facebook", icon: "fb", href: "#" },
  { name: "Instagram", icon: "ig", href: "#" },
  { name: "Twitter", icon: "x", href: "#" }
];

const Footer = () => {
    return (
        <footer className="bg-brand-navy pt-32 pb-12 px-6 lg:px-20 text-white relative overflow-hidden">
            
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
            
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
                            <img src="/img/logo.png" alt="GlobexisImpex Logo" className="h-12 w-auto brightness-200" />
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
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-black uppercase transition-all duration-300"
                                >
                                    {social.icon}
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
                        <h4 className="text-brand-gold font-black uppercase text-xs tracking-[0.4em] underline decoration-brand-gold/20 underline-offset-8">Sitemap</h4>
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
                        <h4 className="text-brand-gold font-black uppercase text-xs tracking-[0.4em] underline decoration-brand-gold/20 underline-offset-8">Resources</h4>
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
                        <h4 className="text-brand-gold font-black uppercase text-xs tracking-[0.4em] underline decoration-brand-gold/20 underline-offset-8">Global Hub</h4>
                        <div className="space-y-6">
                            <ContactItem icon="📧" text="info@globexisimpex.com" />
                            <ContactItem icon="📱" text="+92 321 0005192" />
                            <ContactItem icon="📍" text="Office # 137, Johar Town, G1 Block, Lahore" />
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
const ContactItem = ({ icon, text }) => (
    <div className="flex items-start gap-4 group">
        <span className="text-xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">{icon}</span>
        <p className="text-slate-400 text-sm font-light leading-relaxed group-hover:text-white transition-colors">
            {text}
        </p>
    </div>
);

export default Footer;
