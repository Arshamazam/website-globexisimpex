import React from "react";
import { motion } from "framer-motion";

/**
 * FeatureHighlights - "Split Background" (Modern Bold)
 * 
 * Visual Prompt:
 * - background: diagonally split (deep navy upper half, light gold bottom half).
 * - cards: pure white, large radii, casting heavy dramatic soft shadows.
 * - content: bold dark typography, vibrant jewel tone icons (blue, gold, orange).
 * - animation: unfolding downward expansion, continuous spin on icons, center-out expanding line.
 */

const FeatureHighlights = () => {
    return (
        <section className="relative py-40 px-6 lg:px-24 xl:px-32 relative z-20">
            
            {/* 1. SPLIT BACKGROUND */}
            {/* Using a precise linear gradient to create the sharp diagonal split */}
            <div 
                className="absolute inset-0 -z-10" 
                style={{ background: 'linear-gradient(155deg, #001D3D 50%, #F5E6B8 50%)' }} 
            />

            <div className="container mx-auto w-full max-w-[1600px] px-2 lg:px-4">
                {/* Ensure grid aligns to start so cards can grow downwards independently */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-8 items-start">
                    
                    {/* CARD 1: EXCELLENCE */}
                    <BoldCard 
                        title="UNMATCHED EXCELLENCE"
                        desc="Precision sourced minerals and salts, refined to meet global standards through rigorous and unwavering quality control. Only the finest, most potent crystal formations make our final selection."
                        icon={(
                            <svg className="w-14 h-14" style={{ color: '#00E5FF', filter: 'drop-shadow(0 0 15px rgba(0,229,255,0.8))' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 0a2.25 2.25 0 012.25-2.25h12a2.25 2.25 0 012.25 2.25m-16.5 0l4.5 12h7.5l4.5-12" />
                            </svg>
                        )}
                        glowColor="#00E5FF"
                        delay={0}
                        effectType="excellence"
                    />

                    {/* CARD 2: COMPLIANCE */}
                    <BoldCard 
                        title="GLOBALLY CERTIFIED"
                        desc="Adhering strictly to international compliance and safety certifications for secure and reliable global trading. We ensure full transparency and trust with all major international standards bodies."
                        icon={(
                            <svg className="w-14 h-14" style={{ color: '#FFB300', filter: 'drop-shadow(0 0 15px rgba(255,179,0,0.8))' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                        )}
                        glowColor="#FFB300"
                        delay={0.2}
                        effectType="certified"
                    />

                    {/* CARD 3: LOGISTICS */}
                    <BoldCard 
                        title="EXPORT POWERHOUSE"
                        desc="Advanced supply chain systems seamlessly connecting Pakistan's finest resources to worldwide markets. Leveraging our deep port access and logistical expertise."
                        icon={(
                            <svg className="w-14 h-14" style={{ color: '#FF6D00', filter: 'drop-shadow(0 0 15px rgba(255,109,0,0.8))' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM19.5 18.75a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0M3.75 3h11.25m-11.25 0v15m11.25-15l3 3m-3-3v11.25m3-8.25h3.75v10.5h-3.75V7.75z" />
                            </svg>
                        )}
                        glowColor="#FF6D00"
                        delay={0.4}
                        effectType="powerhouse"
                    />

                    {/* CARD 4: PRIVATE LABELLING */}
                    <BoldCard 
                        title="PRIVATE LABELLING"
                        desc="End-to-end custom branding and premium packaging solutions, empowering you to brand and take ownership. From design concept to final delivered product."
                        icon={(
                            <svg className="w-14 h-14" style={{ color: '#00E676', filter: 'drop-shadow(0 0 15px rgba(0,230,118,0.8))' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                            </svg>
                        )}
                        glowColor="#00E676"
                        delay={0.6}
                        effectType="labelling"
                    />

                </div>

                {/* 5. NEW SALT BENEFITS DIAGRAM SECTION (MACRO CRYSTALLIZATION) */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mt-32 lg:mt-44 w-full max-w-[1400px] mx-auto bg-white rounded-[40px] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.4)] border border-[#EAEAEA] p-8 py-16 lg:p-20 relative overflow-hidden"
                >
                    {/* Carved stone / frosty texture overlay for the card background */}
                    <div 
                        className="absolute inset-0 z-0 opacity-[0.04] mix-blend-color-burn pointer-events-none"
                        style={{ 
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'stone\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23stone)\'/%3E%3C/svg%3E")'
                        }}
                    />
                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50/50 to-white opacity-90 pointer-events-none" />
                    
                    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 w-full z-10">
                        
                        {/* LEFT COLUMN: Benefits */}
                        <div className="flex flex-col gap-16 lg:gap-32 w-full lg:w-1/3 order-2 lg:order-1 items-center lg:items-end z-20">
                            <BenefitPointer 
                                side="left" 
                                title="Rich in Minerals" 
                                desc="Contains 84 essential trace minerals that promote cellular health." 
                                delay={0.2} 
                            />
                            <BenefitPointer 
                                side="left" 
                                title="Natural Detoxifier" 
                                desc="Balances hydration and aids in flushing toxins from the body." 
                                delay={0.4} 
                            />
                        </div>

                        {/* CENTER IMAGE */}
                        <motion.div 
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="w-full lg:w-1/3 order-1 lg:order-2 flex justify-center relative z-10"
                        >
                            {/* Inner glow effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#C5A059]/10 blur-[60px] rounded-full pointer-events-none" />
                            {/* The pngsalt.png image fading up */}
                            <img 
                                src="/img/pngsalt.png" 
                                alt="Pure Himalayan Pink Salt" 
                                className="relative z-10 w-full max-w-[280px] lg:max-w-[450px] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.2)] hover:scale-110 hover:-translate-y-4 transition-all duration-1000"
                            />
                        </motion.div>

                        {/* RIGHT COLUMN: Benefits */}
                        <div className="flex flex-col gap-16 lg:gap-32 w-full lg:w-1/3 order-3 lg:order-3 items-center lg:items-start z-20">
                            <BenefitPointer 
                                side="right" 
                                title="Air Purification" 
                                desc="Emits negative ions to neutralize allergens and cleanse the air." 
                                delay={0.3} 
                            />
                            <BenefitPointer 
                                side="right" 
                                title="Culinary Excellence" 
                                desc="Enhances gourmet flavors with a pure, unrefined, organic taste." 
                                delay={0.5} 
                            />
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

/**
 * BoldCard Component
 * Implements an iridescent pearl background, minimized background magical arrays 
 * (z-indexed away from text), and clean dark typography.
 */
const BoldCard = ({ title, desc, icon, glowColor, delay, effectType }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-gradient-to-br from-[#ffffff] via-[#f7f9fc] to-[#e4e9f2] rounded-[40px] p-6 lg:p-8 flex flex-col items-center text-center shadow-[0_30px_70px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_45px_100px_-15px_rgba(0,0,0,0.7)] transition-all duration-700 h-[360px] hover:h-[390px] hover:-translate-y-2 overflow-hidden cursor-pointer border border-white"
        >
            {/* VERY SUBTLE MAGICAL EFFECTS LAYER (Strictly z-0, ultra low opacity) */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-[40px] overflow-hidden">
                {effectType === "excellence" && (
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-4 p-4">
                        {Array.from({length: 8}).map((_, i) => (
                            <motion.div 
                                key={i}
                                animate={{ scale: [1, 1.2, 1], opacity: [0.01, 0.08, 0.01] }}
                                transition={{ duration: 3 + (i%3), repeat: Infinity, delay: i * 0.2 }}
                                className="w-24 h-24 border-[0.5px] rotate-45"
                                style={{ borderColor: glowColor }}
                            />
                        ))}
                    </div>
                )}
                {effectType === "certified" && (
                    <div className="absolute inset-0 flex flex-wrap justify-center content-center gap-8 p-4">
                        {Array.from({length: 4}).map((_, i) => (
                            <motion.svg 
                                key={i}
                                animate={{ opacity: [0, 0.05, 0], scale: [0.8, 1, 0.8] }}
                                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                                className="w-24 h-24" 
                                style={{ color: glowColor }}
                                fill="currentColor" viewBox="0 0 24 24"
                            >
                                <path d="M12 2L15 8H21L16 13L18 20L12 16L6 20L8 13L3 8H9L12 2Z"/>
                            </motion.svg>
                        ))}
                    </div>
                )}
                {effectType === "powerhouse" && (
                    <div className="absolute inset-0">
                        {[1,2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 6 + i, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-[150%] h-[1px] opacity-10"
                                style={{ backgroundColor: glowColor, top: `${40 + i*10}%`, transform: `rotate(${i*5 - 10}deg)` }}
                            />
                        ))}
                    </div>
                )}
                {effectType === "labelling" && (
                    <div className="absolute inset-0">
                        {Array.from({length: 8}).map((_, i) => (
                            <motion.svg 
                                key={i}
                                initial={{ y: -50, x: Math.random() * 300, opacity: 0 }}
                                animate={{ y: 500, rotate: 360, opacity: [0, 0.08, 0] }}
                                transition={{ duration: 5 + Math.random()*5, repeat: Infinity, delay: Math.random()*5, ease: "linear" }}
                                className="absolute top-0 w-12 h-12"
                                style={{ color: glowColor }}
                                fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                            </motion.svg>
                        ))}
                    </div>
                )}
            </div>

            {/* Subtle Aura ring inside card body */}
            <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-[50px] pointer-events-none rounded-[40px]" 
                style={{ backgroundColor: `${glowColor}15` }} 
            />

            {/* CONTENT PROPERLY Z-INDEXED SO NO ARRAYS COVER IT */}
            {/* ICON CONTAINER */}
            <div className="w-20 h-20 flex items-center justify-center rounded-3xl bg-slate-50 border border-slate-100 shadow-inner mb-6 shrink-0 transition-transform duration-500 group-hover:scale-110 relative z-10">
                <div className="group-hover:animate-[spin_4s_linear_infinite] transition-all duration-1000 ease-linear">
                    {icon}
                </div>
            </div>

            {/* TYPOGRAPHY */}
            <div className="flex-1 space-y-3 w-full relative z-10 transition-transform duration-700">
                <h3 className="text-lg lg:text-xl font-black text-[#001D3D] uppercase tracking-tighter leading-tight drop-shadow-[0_1px_1px_rgba(255,255,255,1)]">
                    {title}
                </h3>
                <p className="text-[#334155] text-justify font-medium text-[13px] lg:text-[14px] leading-relaxed drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                    {desc}
                </p>
            </div>

            {/* EXPANDING DECORATION (Center-out bar) */}
            <div className="w-full flex justify-center mt-auto pt-6 relative z-10">
                <div 
                    className="h-1.5 w-10 rounded-full transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:w-full" 
                    style={{ backgroundColor: glowColor }} 
                />
            </div>
        </motion.div>
    );
};

/**
 * BenefitPointer Component (Macro Crystallization)
 * Text grows outward like ice forming, arrows pulse steadily, headers shimmer.
 */
const BenefitPointer = ({ side, title, desc, delay }) => {
    const isLeft = side === "left";
    
    // Glassy reveal transition to mimic "crystallization" from the arrow source.
    // Elements slide outwards while gaining opacity and slowly unblurring.
    const wipeVariant = {
        hidden: { 
            x: isLeft ? 40 : -40, 
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.95
        },
        visible: { 
            x: 0, 
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: delay + 0.2 } 
        }
    };

    return (
        <div className={`flex flex-col lg:flex-row items-center justify-center gap-6 group ${isLeft ? 'lg:pr-4' : 'lg:pl-4'}`}>
            {isLeft ? (
                <>
                    {/* Left Text Block (Grows towards left) */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={wipeVariant}
                        className="text-center lg:text-right max-w-[260px]"
                    >
                        {/* Shimmering Title */}
                        <motion.h4 
                            animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                            className="font-black text-xl lg:text-2xl mb-2 bg-gradient-to-r from-[#001D3D] via-[#7DA1C4] to-[#001D3D] bg-[length:200%_auto] text-transparent bg-clip-text"
                        >
                            {title}
                        </motion.h4>
                        <p className="text-[#334155] font-semibold text-base lg:text-lg leading-relaxed opacity-90">{desc}</p>
                    </motion.div>
                    
                    {/* Pulsing Arrow Pointing Right */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: [0.3, 1, 0.3], scale: [1, 1.1, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
                        className="hidden lg:flex items-center text-[#7DA1C4] drop-shadow-[0_2px_10px_rgba(125,161,196,0.3)]"
                    >
                        <svg className="w-12 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.div>
                </>
            ) : (
                <>
                    {/* Pulsing Arrow Pointing Left */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: [0.3, 1, 0.3], scale: [1, 1.1, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
                        className="hidden lg:flex items-center text-[#7DA1C4] drop-shadow-[0_2px_10px_rgba(125,161,196,0.3)]"
                    >
                        <svg className="w-12 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </motion.div>
                    
                    {/* Right Text Block (Grows towards right) */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={wipeVariant}
                        className="text-center lg:text-left max-w-[260px]"
                    >
                        {/* Shimmering Title */}
                        <motion.h4 
                            animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                            className="font-black text-xl lg:text-2xl mb-2 bg-gradient-to-r from-[#001D3D] via-[#7DA1C4] to-[#001D3D] bg-[length:200%_auto] text-transparent bg-clip-text"
                        >
                            {title}
                        </motion.h4>
                        <p className="text-[#334155] font-semibold text-base lg:text-lg leading-relaxed opacity-90">{desc}</p>
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default FeatureHighlights;
