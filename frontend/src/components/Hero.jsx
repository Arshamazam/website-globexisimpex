import React, { useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

/**
 * Hero Section - "The Curated Still Life" (Organic and Warm)
 * 
 * Visual Prompt:
 * - background: very light, natural, unstained wood grain pattern (simulated with warm #F9F8F6 + organic noise texture).
 * - image: arranged dynamically on the left half (50/50 editorial split).
 * - typography: Deep, rich charcoal grey. Large, elegant high-contrast serif for 'Original' and 'Pakistan'. Modern lightweight sans-serif for the rest.
 * - layout: Right-justified text box. Value points stacked at very bottom right as footnotes of trust.
 */

const Hero = () => {
    // Parallax logic for the still life image to give it a soft "magazine cover" breathing depth
    const heroRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { damping: 50, stiffness: 100 });
    const springY = useSpring(mouseY, { damping: 50, stiffness: 100 });
    const imageX = useTransform(springX, [-0.5, 0.5], ["-2%", "2%"]);
    const imageY = useTransform(springY, [-0.5, 0.5], ["-2%", "2%"]);

    const handleMouseMove = (e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    return (
        <section
            id="home"
            ref={heroRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen pt-32 lg:pt-[120px] flex items-center overflow-hidden bg-white"
        >
            {/* 1. HALF-WIDTH LEFT BACKGROUND (NO OVERLAP WITH TEXT) */}
            <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 z-0">
                <img 
                    src="/img/bg.jpg" 
                    alt="GlobexisImpex Hero Background" 
                    className="w-full h-full object-cover object-left" 
                />
                {/* Subtle fade to white on the right edge of the image to blend perfectly */}
                <div className="hidden lg:block absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-white" />
            </div>

            <div className="w-full max-w-[1500px] mx-auto flex flex-col lg:flex-row min-h-[90vh] relative z-10 px-6 lg:px-16 pt-16">

                {/* 2. LEFT HALF (EMPTY - IMAGE REMOVED AS REQUESTED) */}
                <div className="w-full lg:w-1/2 flex items-center justify-center relative lg:mb-0 mb-16 order-2 lg:order-1">
                    {/* Previous floating background image removed */}
                </div>

                {/* 3. RIGHT HALF: TYPOGRAPHY & FOOTNOTES */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-end text-right order-1 lg:order-2">

                    {/* Right-Justified Text Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full max-w-xl flex flex-col items-end pt-10 lg:pt-0"
                    >
                        {/* Lightweight modern sans-serif */}
                        <p className="text-[#6B6B6B] font-light text-sm md:text-lg tracking-[0.3em] mb-6 uppercase">
                            Premier Global Supplier of
                        </p>

                        {/* Elegant, high-contrast serif for 'Original' and 'Pakistan' */}
                        <h1 className="flex flex-col items-end gap-1 md:gap-2 text-[#001D3D] leading-[0.95] w-full"
                            style={{ fontFamily: '"Playfair Display", "Didot", "Georgia", serif' }}>
                            <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] xl:text-[9.5rem] italic tracking-tight opacity-90 pr-2">
                                Original
                            </span>
                            <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] xl:text-[9.5rem] font-bold tracking-tighter">
                                Pakistan
                            </span>
                        </h1>

                        {/* 3. PRIMARY TITLE SECTION */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative z-10 max-w-4xl"
                        >
                            <h2 className="block font-light font-sans text-xl md:text-3xl lg:text-[2.2rem] leading-[1.5] tracking-[0.2em] lg:tracking-[0.4em] uppercase mt-2 text-[#4A4A4A] border-t border-[#D4AF37]/50 pt-8 drop-shadow-sm transition-all duration-300">
                                Himalayan Pink <span className="block lg:inline">Salt</span>
                            </h2>
                        </motion.div>
                    </motion.div>

                    {/* 4. VALUE FOOTNOTES */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.8 }}
                        className="relative mt-10 lg:mt-24 space-y-6 flex flex-col items-end text-right"
                    >
                        <Footnote text="Certified Purity & Authenticity" />
                        <Footnote text="Sustainable & Ethical Sourcing" />
                        <Footnote text="Global Export Ready Solutions" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

/**
 * Footnote Component
 * Small footnotes of trust located at the bottom right.
 */
const Footnote = ({ text }) => (
    <div className="flex items-center gap-4 group cursor-default mix-blend-multiply">
        <div className="w-5 h-[1px] bg-[#D4AF37]/70 group-hover:w-10 transition-all duration-700 ease-[0.16,1,0.3,1]" />
        <span className="text-[10px] md:text-xs font-serif italic text-[#7A7A7A] tracking-[0.15em] group-hover:text-[#D4AF37] transition-colors duration-500" style={{ fontFamily: '"Playfair Display", "Didot", "Georgia", serif' }}>
            {text}
        </span>
    </div>
);

export default Hero;
