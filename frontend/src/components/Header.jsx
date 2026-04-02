import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Premium Header Component for GlobexisImpex.
 * Includes Top Info Bar and Main Navigation with sticky behavior.
 * Highly aligned, accessible, and cinematic.
 */
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Detect scroll to handle transparency and shadow
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Products", href: "#products" },
        { name: "Certifications", href: "#certifications" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-[1000] transition-all duration-500">
            
            {/* 1. TOP INFO BAR (Header Strip) */}
            <div className={`bg-brand-navy border-b border-white/5 transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
                <div className="max-w-7xl mx-auto px-6 md:px-16 h-full flex justify-between items-center text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                        <span className="text-brand-gold">Support Available 24/7</span>
                    </div>
                    <div className="hidden md:flex gap-8 items-center">
                        <a href="mailto:info@globexisimpex.com" className="hover:text-brand-gold transition-colors duration-300">
                            info@globexisimpex.com
                        </a>
                        <a href="tel:+923210005192" className="hover:text-brand-gold transition-colors duration-300">
                            +92 321 0005192
                        </a>
                    </div>
                </div>
            </div>

            {/* 2. MAIN NAVBAR */}
            <div 
                className={`transition-all duration-500 border-b border-white/5 ${
                    isScrolled 
                    ? "bg-white/95 backdrop-blur-xl shadow-2xl py-3 border-slate-100" 
                    : "bg-transparent py-6"
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center">
                    
                    {/* LEFT: LOGO */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0"
                    >
                        <a href="#home">
                            <img 
                                src="/img/logo.png" 
                                alt="GlobexisImpex Logo" 
                                className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'} brightness-0`}
                            />
                        </a>
                    </motion.div>

                    {/* CENTER: DESKTOP NAVIGATION */}
                    <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
                        {menuItems.map((item, idx) => (
                            <motion.li 
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                            >
                                <a
                                    href={item.href}
                                    className="text-[13px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand-gold relative group text-brand-navy"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-500 group-hover:w-full" />
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    {/* RIGHT: CTA BUTTON */}
                    <div className="hidden lg:flex items-center">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(197,160,89,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-brand-gold text-white rounded-full text-[11px] font-black uppercase tracking-[0.3em] shadow-xl transition-all duration-300"
                        >
                            Get Quote
                        </motion.a>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 transition-colors text-brand-navy"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            {/* MOBILE NAVIGATION SIDEBAR */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[2000] lg:hidden bg-brand-navy flex flex-col p-10"
                    >
                        <div className="flex justify-between items-center mb-20">
                            <img src="/img/logo.png" alt="Logo" className="h-10 brightness-200" />
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className="space-y-10">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-4xl font-black text-white hover:text-brand-gold transition-colors uppercase tracking-tighter"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto">
                             <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full flex items-center justify-center py-6 bg-brand-gold text-white font-black uppercase tracking-[0.4em] rounded-2xl"
                            >
                                Get a Quote
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
};

export default Header;
