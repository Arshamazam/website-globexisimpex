import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

/**
 * Enhanced About Section for GlobexisImpex.
 * Incorporates: Brand Story, Leadership Quote, and Global Presence Map.
 */

const EXPORT_LOCATIONS = [
  { id: "usa", name: "United States", top: "35%", left: "15%", products: ["Pink Salt", "Rice", "Minerals"] },
  { id: "pakistan", name: "Pakistan", top: "45%", left: "68%", products: ["Headquarters", "Export Hub", "Manufacturing"] }
];

const About = () => {
    const cardRef = useRef(null);
    const [hoveredLocation, setHoveredLocation] = useState(null);

    // Parallax mouse tracking setup
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Parallax transforms for the image
    const imgX = useTransform(springX, [-0.5, 0.5], ["-30px", "30px"]);
    const imgY = useTransform(springY, [-0.5, 0.5], ["-30px", "30px"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - (rect.left + rect.width / 2)) / rect.width);
        mouseY.set((e.clientY - (rect.top + rect.height / 2)) / rect.height);
    };

    return (
        <section id="about" className="py-24 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20">
                
                {/* 1. BRAND STORY SECTION */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
                    {/* TEXT CONTENT (LEFT) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.h2 className="text-4xl md:text-6xl font-bold text-brand-navy tracking-tight">
                                About <span className="text-brand-gold italic">GlobexisImpex</span>
                            </motion.h2>
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "120px" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-1.5 bg-brand-gold rounded-full"
                            />
                        </div>

                        <h3 className="text-xl md:text-2xl font-light text-slate-500 leading-relaxed italic border-l-4 border-brand-gold pl-6">
                            "Delivering Premium Quality Products to Global Markets with Trust, Precision, and Excellence."
                        </h3>

                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                GlobexisImpex is a leading global export company specializing in high-quality Himalayan salt and a diverse range of premium products including rice, minerals, dry fruits, and industrial materials.
                            </p>
                            <p>
                                With years of experience in international trade, we have built a strong reputation for delivering consistent quality, reliable supply chains, and customized solutions for our global partners.
                            </p>
                        </div>
                    </motion.div>

                    {/* IMAGE CONTENT (RIGHT) */}
                    <div ref={cardRef} onMouseMove={handleMouseMove} className="w-full lg:w-1/2 group">
                        <motion.div 
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/5] lg:aspect-square bg-slate-50 rounded-[40px] flex items-center justify-center p-12 lg:p-20 shadow-2xl overflow-hidden border border-slate-100"
                        >
                            <motion.img 
                                src="/img/pink salt.png" 
                                alt="GlobexisImpex Himalayan Salt"
                                style={{ x: imgX, y: imgY }}
                                className="w-full h-full object-contain filter drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] transform transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute top-10 right-10 flex flex-col items-end opacity-20 pointer-events-none">
                                <span className="text-brand-navy font-black text-6xl tracking-tighter uppercase leading-none">GlobexisImpex</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 2. LEADERSHIP QUOTE & TEAM */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center space-y-12 py-20 px-8 rounded-[60px] bg-slate-50/50 border border-slate-100 relative mb-32"
                >
                    <div className="text-8xl text-brand-gold/10 font-serif absolute -top-4 left-1/2 -translate-x-1/2 select-none leading-none">“</div>
                    <p className="text-2xl md:text-3xl text-slate-500 italic font-light leading-relaxed max-w-4xl mx-auto">
                        At GlobexisImpex, we don't just deliver premium products; we forge enduring global partnerships anchored in <span className="text-brand-navy font-bold">Unwavering Trust</span> and operational excellence.
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-4 border-t border-slate-200/50 mt-8">
                        <TeamMember name="Hussain Kamran" role="Founder & CEO" />
                        <div className="hidden md:block w-px h-10 bg-slate-200" />
                        <TeamMember name="Abdullah Iqbal" role="Managing Partner" />
                        <div className="hidden md:block w-px h-10 bg-slate-200" />
                        <TeamMember name="Arsham Azam" role="Director Supply Chain" />
                    </div>
                </motion.div>

                {/* 3. GLOBAL PRESENCE MAP */}
                <div className="space-y-16">
                    <div className="text-center space-y-4">
                        <h3 className="text-3xl md:text-5xl font-black text-brand-navy tracking-tight">
                            Our Global <span className="text-brand-gold italic">Presence</span>
                        </h3>
                        <p className="text-slate-500 text-lg font-light italic">Connecting Premium Exports between Pakistan & The USA.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* MAP SIDE */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-3/5 relative bg-white rounded-[50px] p-6 lg:p-10 shadow-2xl border border-slate-50 aspect-[16/9] overflow-hidden group"
                        >
                            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/nsu.png')] pointer-events-none" />
                            <svg viewBox="0 0 1000 500" className="w-full h-full text-slate-200 fill-current opacity-20 select-none">
                                <path d="M150 100 L250 100 L250 200 L150 200 Z M400 50 L500 50 L500 150 L400 150 Z M600 150 L750 150 L750 300 L600 300 Z M800 350 L900 350 L900 450 L800 450 Z" />
                                <circle cx="200" cy="150" r="100" />
                                <circle cx="500" cy="100" r="80" />
                                <circle cx="750" cy="250" r="120" />
                                <circle cx="850" cy="400" r="60" />
                                <circle cx="450" cy="350" r="70" />
                            </svg>

                            <div className="absolute inset-0 z-10">
                                {EXPORT_LOCATIONS.map((loc, idx) => (
                                    <Hotspot 
                                        key={loc.id} 
                                        loc={loc} 
                                        idx={idx} 
                                        onHover={setHoveredLocation} 
                                        onLeave={() => setHoveredLocation(null)}
                                    />
                                ))}
                            </div>

                            <AnimatePresence>
                                {hoveredLocation && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        style={{ top: hoveredLocation.top, left: hoveredLocation.left, transform: "translate(-50%, -120%)" }}
                                        className="absolute z-[100] bg-brand-navy border border-brand-gold/30 rounded-2xl p-5 shadow-2xl min-w-[180px] pointer-events-none"
                                    >
                                        <h4 className="text-brand-gold font-black uppercase text-[10px] tracking-widest mb-1">{hoveredLocation.name}</h4>
                                        <div className="space-y-1">
                                            {hoveredLocation.products.map(p => (
                                                <div key={p} className="text-white text-xs font-light flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-brand-gold rounded-full" />
                                                    {p}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-navy border-r border-b border-brand-gold/30 rotate-45" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* INFO SIDE */}
                        <div className="w-full lg:w-2/5 space-y-8">
                            <h4 className="text-3xl font-black text-brand-navy tracking-tight leading-tight">
                                Seamless Trade: <br />
                                <span className="text-brand-gold italic">USA & Pakistan</span>
                            </h4>
                            <p className="text-lg text-slate-500 font-light leading-relaxed">
                                GlobexisImpex exclusively connects our world-class manufacturing in Pakistan directly to markets across the United States.
                            </p>
                            <div className="pt-6 border-t border-slate-100">
                                <p className="text-brand-navy font-bold tracking-widest uppercase text-[10px] opacity-60">Export Hub: Lahore, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

const TeamMember = ({ name, role }) => (
    <div className="space-y-1">
        <h4 className="text-lg font-black text-brand-navy uppercase tracking-widest whitespace-nowrap">{name}</h4>
        <p className="text-brand-gold font-bold text-[10px] tracking-[0.3em] uppercase">{role}</p>
    </div>
);

const Hotspot = ({ loc, idx, onHover, onLeave }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 + (idx * 0.2), duration: 0.5 }}
        onMouseEnter={() => onHover(loc)}
        onMouseLeave={onLeave}
        style={{ top: loc.top, left: loc.left }}
        className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
    >
        <div className="absolute inset-0 bg-brand-gold rounded-full animate-ping opacity-75" />
        <div className="absolute inset-0 bg-brand-gold/30 rounded-full animate-pulse" />
        <div className="absolute inset-1.5 bg-brand-gold rounded-full shadow-lg group-hover:scale-150 transition-transform duration-300" />
    </motion.div>
);

export default About;
