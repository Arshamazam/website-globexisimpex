import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Full product taxonomy used by the navbar mega-menu.
 * Category-level `route` points to the dedicated landing page; sub-products
 * live as cards on the parent page, so they share the parent route.
 */
const PRODUCTS_MENU = [
    {
        name: "Himalayan Edible Salt",
        route: "#/himalayan-edible-salt",
        children: [
            { name: "Pink Salt", route: "#/pink-salt" },
            { name: "White Salt", route: "#/white-salt" },
            { name: "Black Salt", route: "#/black-salt" },
        ],
    },
    {
        name: "Salt Culinary",
        route: "#/salt-culinary",
        children: [
            { name: "Salt Cooking Plate", route: "#/salt-culinary" },
            { name: "Salt Crockery", route: "#/salt-culinary" },
        ],
    },
    {
        name: "Wellness",
        route: "#/wellness",
        children: [
            { name: "Salt Lamp", route: "#/wellness" },
            { name: "Salt Candle Holder", route: "#/wellness" },
            { name: "Salt Aroma Therapy", route: "#/wellness" },
            { name: "Salt Room", route: "#/wellness" },
        ],
    },
    {
        name: "Bath Salt",
        route: "#/bath-salt",
        children: [
            { name: "Pink Salt Soap", route: "#/bath-salt" },
            { name: "Salt Soap Heart Shape", route: "#/bath-salt" },
            { name: "Salt Balls", route: "#/bath-salt" },
            { name: "Salt Deo Stick", route: "#/bath-salt" },
        ],
    },
    {
        name: "Animal Lick Salt",
        route: "#/animal-lick-salt",
        children: [
            { name: "Lick Salt Cylinder", route: "#/animal-lick-salt" },
            { name: "Lick Salt Block", route: "#/animal-lick-salt" },
        ],
    },
];

const navigateHash = (hash) => {
    if (typeof window === "undefined") return;
    if (hash.startsWith("#/")) {
        window.location.hash = hash;
        window.scrollTo({ top: 0, behavior: "instant" });
    } else {
        window.location.hash = "";
        setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    }
};

/**
 * Premium Header Component for GlobexisImpex.
 * Includes Top Info Bar and Main Navigation with sticky behavior.
 * Highly aligned, accessible, and cinematic.
 */
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
    const productsCloseTimer = useRef(null);

    const openProducts = () => {
        if (productsCloseTimer.current) clearTimeout(productsCloseTimer.current);
        setIsProductsOpen(true);
    };
    const scheduleCloseProducts = () => {
        if (productsCloseTimer.current) clearTimeout(productsCloseTimer.current);
        productsCloseTimer.current = setTimeout(() => setIsProductsOpen(false), 150);
    };

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
        { name: "Products", href: "#products", hasMega: true },
        { name: "Certifications", href: "#certifications" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-[1000] transition-all duration-500">
            


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
                                className={`transition-all duration-500 ${isScrolled ? 'h-20' : 'h-32'}`}
                            />
                        </a>
                    </motion.div>

                    {/* CENTER: DESKTOP NAVIGATION */}
                    <ul className="hidden lg:flex items-center gap-10 xl:gap-14">
                        {menuItems.map((item, idx) => (
                            <motion.li
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                                onMouseEnter={() => item.hasMega && openProducts()}
                                onMouseLeave={() => item.hasMega && scheduleCloseProducts()}
                            >
                                <a
                                    href={item.href}
                                    onClick={(e) => {
                                        if (item.hasMega) {
                                            e.preventDefault();
                                            setIsProductsOpen((v) => !v);
                                        }
                                    }}
                                    className="text-[11px] font-sans font-extrabold uppercase tracking-[0.3em] transition-all duration-300 hover:text-brand-gold relative group text-brand-navy inline-flex items-center gap-1.5"
                                >
                                    {item.name}
                                    {item.hasMega && (
                                        <svg className={`w-3 h-3 transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-500 group-hover:w-full" />
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    {/* RIGHT: CTA BUTTON */}
                    <div className="hidden lg:flex items-center">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, backgroundColor: "#C5A059", color: "#fff" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-3 border border-brand-navy/20 text-brand-navy rounded-full text-[10px] font-sans font-black uppercase tracking-[0.3em] transition-all duration-500"
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

            {/* DESKTOP MEGA-MENU (rendered at header root so viewport-fixed works correctly) */}
            <AnimatePresence>
                {isProductsOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "-50%", y: 10 }}
                        animate={{ opacity: 1, x: "-50%", y: 0 }}
                        exit={{ opacity: 0, x: "-50%", y: 10 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        onMouseEnter={openProducts}
                        onMouseLeave={scheduleCloseProducts}
                        className="hidden lg:block fixed w-[min(1100px,92vw)] bg-white shadow-2xl rounded-md border border-slate-100 overflow-hidden z-[1500] pt-2"
                        style={{ top: isScrolled ? "6.25rem" : "10.75rem", left: "50%" }}
                    >
                        <div className="grid grid-cols-5 gap-0 divide-x divide-slate-100">
                            {PRODUCTS_MENU.map((cat) => (
                                <div key={cat.name} className="p-6 flex flex-col">
                                    <button
                                        onClick={() => { navigateHash(cat.route); setIsProductsOpen(false); }}
                                        className="text-left text-brand-navy font-serif font-black text-sm leading-tight hover:text-brand-gold transition-colors mb-4"
                                    >
                                        {cat.name}
                                        <span className="block w-8 h-0.5 bg-brand-gold mt-2" />
                                    </button>
                                    <ul className="space-y-2.5 flex-1">
                                        {cat.children.map((sub) => (
                                            <li key={sub.name}>
                                                <button
                                                    onClick={() => { navigateHash(sub.route); setIsProductsOpen(false); }}
                                                    className="text-left text-[11px] font-sans font-semibold text-slate-500 hover:text-brand-navy tracking-wide uppercase transition-colors"
                                                >
                                                    {sub.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="bg-brand-navy px-6 py-3 flex items-center justify-between">
                            <span className="text-white/50 text-[10px] font-sans font-black uppercase tracking-[0.3em]">Browse all product lines</span>
                            <button
                                onClick={() => { navigateHash("#products"); setIsProductsOpen(false); }}
                                className="text-brand-gold text-[10px] font-sans font-black uppercase tracking-[0.3em] hover:text-white transition-colors"
                            >
                                View All →
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            <img src="/img/logo.png" alt="Logo" className="h-20" />
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className="space-y-8 overflow-y-auto flex-1 pr-2">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    {item.hasMega ? (
                                        <>
                                            <button
                                                onClick={() => setIsMobileProductsOpen((v) => !v)}
                                                className="w-full flex items-center justify-between text-3xl font-black text-white hover:text-brand-gold transition-colors uppercase tracking-tighter"
                                            >
                                                <span>{item.name}</span>
                                                <svg className={`w-6 h-6 transition-transform duration-300 ${isMobileProductsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <AnimatePresence initial={false}>
                                                {isMobileProductsOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="mt-5 pl-4 border-l-2 border-brand-gold/40 space-y-5">
                                                            {PRODUCTS_MENU.map((cat) => (
                                                                <div key={cat.name}>
                                                                    <button
                                                                        onClick={() => { navigateHash(cat.route); setIsMobileMenuOpen(false); setIsMobileProductsOpen(false); }}
                                                                        className="block text-left text-brand-gold font-serif font-black text-lg mb-2"
                                                                    >
                                                                        {cat.name}
                                                                    </button>
                                                                    <ul className="space-y-2 pl-2">
                                                                        {cat.children.map((sub) => (
                                                                            <li key={sub.name}>
                                                                                <button
                                                                                    onClick={() => { navigateHash(sub.route); setIsMobileMenuOpen(false); setIsMobileProductsOpen(false); }}
                                                                                    className="text-left text-white/70 hover:text-white text-[11px] font-sans font-bold uppercase tracking-[0.2em]"
                                                                                >
                                                                                    {sub.name}
                                                                                </button>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <a
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-3xl font-black text-white hover:text-brand-gold transition-colors uppercase tracking-tighter"
                                        >
                                            {item.name}
                                        </a>
                                    )}
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
