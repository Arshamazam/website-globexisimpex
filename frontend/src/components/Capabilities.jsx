import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

/**
 * Step 8.5: Capabilities & Animated Stats Section.
 * Features: Staggered card reveal, magnetic count-up stats, and luxury glow interactions.
 */

const CAPABILITIES_DATA = [
  { id: 1, title: "Certified & Experienced Team", icon: "🤝", desc: "Our team brings decades of combined expertise in international trade, quality standards, and logistics." },
  { id: 2, title: "Efficient Work & Logistics", icon: "🚢", desc: "Leveraging established shipping networks to deliver your cargo to any global port with zero delays." },
  { id: 3, title: "High-Quality Products", icon: "💎", desc: "From Himalayan pink salt to premium rice, every product undergoes rigorous 3rd-party lab testing." },
  { id: 4, title: "Competitive Pricing", icon: "📈", desc: "Wholesale models designed to offer the best value for international distributors and retail giants." },
  { id: 5, title: "24/7 Customer Support", icon: "🎧", desc: "Round-the-clock availability for order tracking, technical queries, and operational coordination." }
];



const Capabilities = () => {
    return (
        <section id="capabilities" className="py-32 bg-transparent px-6 lg:px-20 overflow-hidden">
            <div className="container mx-auto">
                
                {/* 1. SECTION HEADER */}
                <div className="text-center mb-24 max-w-4xl mx-auto space-y-6">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-brand-navy tracking-tight"
                    >
                        Our <span className="text-brand-gold italic">Capabilities</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "160px" }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-brand-gold mx-auto rounded-full"
                    />
                    <p className="text-slate-500 text-xl font-light italic leading-relaxed">
                        Delivering Excellence Through Expertise, Quality, and Reliability.
                    </p>
                </div>

                {/* 2. CAPABILITIES CARDS GRID */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32"
                >
                    {CAPABILITIES_DATA.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                            }}
                            whileHover={{ y: -12, scale: 1.02 }}
                            className="group bg-white/90 backdrop-blur-sm p-12 rounded-[50px] shadow-[0_10px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-50 relative overflow-hidden transition-all duration-700 hover:shadow-[0_20px_80px_-20px_rgba(197,160,89,0.2)]"
                        >
                            {/* Animated Gold Bottom Border */}
                            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                            
                            <div className="space-y-8 relative z-10 flex flex-col items-center text-center">
                                <div className="text-5xl bg-slate-50 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-all transform group-hover:rotate-[15deg]">
                                    {card.icon}
                                </div>
                                <h3 className="text-2xl font-black text-brand-navy group-hover:text-brand-gold transition-colors duration-500 tracking-tight">
                                    {card.title}
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed font-light">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};



export default Capabilities;
