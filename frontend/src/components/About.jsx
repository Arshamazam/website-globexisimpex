import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

/**
 * Enhanced About Section for GlobexisImpex.
 * Incorporates: Brand Story, Leadership Quote, and Global Presence Map.
 */

const EXPORT_LOCATIONS = [
  { id: "usa", name: "United States", lat: 40.7128, lng: -74.0060, products: ["Pink Salt", "Rice", "Minerals"] },
  { id: "pakistan", name: "Pakistan", lat: 31.5204, lng: 74.3587, products: ["Headquarters", "Export Hub", "Manufacturing"] }
];

const latLngToSvg = (lat, lng, width = 1000, height = 500) => {
  const x = ((lng + 180) * (width / 360));
  const y = ((90 - lat) * (height / 180));
  return { x, y };
};

const About = () => {
    const cardRef = useRef(null);
    const [hoveredLocation, setHoveredLocation] = useState(null);
    const mapContainerRef = useRef(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined' || mapLoaded || !mapContainerRef.current) return;
        
        const initMap = () => {
            if (!window.L || !mapContainerRef.current) return;
            
            // Check if map already initialized
            if (mapContainerRef.current._leaflet_id !== undefined) return;
            
            // Wait for container to have size
            if (mapContainerRef.current.offsetWidth === 0) {
                setTimeout(initMap, 100);
                return;
            }
            
            const map = L.map(mapContainerRef.current, {
                center: [36, 20],
                zoom: 2,
                zoomControl: false,
                attributionControl: false,
                scrollWheelZoom: false,
                doubleClickZoom: false,
                dragging: false
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18
            }).addTo(map);

            EXPORT_LOCATIONS.forEach(loc => {
                const icon = L.divIcon({
                    className: 'custom-marker',
                    html: `<div style="width:24px;height:24px;background:#C5A059;border-radius:50%;border:4px solid #003366;box-shadow:0 2px 10px rgba(0,0,0,0.4);position:relative;cursor:pointer;"><div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:8px solid #003366;"></div></div>`,
                    iconSize: [24, 32],
                    iconAnchor: [12, 28]
                });
                const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map);
                
                // Custom popup content
                const popupContent = `
                    <div style="font-family:system-ui,sans-serif;min-width:150px;">
                        <h4 style="color:#C5A059;font-size:10px;font-weight:900;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:8px;">${loc.name}</h4>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            ${loc.products.map(p => `<span style="color:#333;font-size:12px;display:flex;align-items:center;gap:6px;"><span style="width:6px;height:6px;background:#C5A059;border-radius:50%;"></span>${p}</span>`).join('')}
                        </div>
                    </div>
                `;
                
                marker.bindPopup(popupContent, {
                    closeButton: false,
                    offset: [0, -10],
                    className: 'custom-popup'
                });
                
                marker.on('click', () => {
                    setHoveredLocation(loc);
                });
            });
            
            setMapLoaded(true);
        };

        if (window.L) {
            initMap();
        } else {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            document.head.appendChild(link);

            const script = document.createElement('script');
            script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
            script.onload = initMap;
            document.head.appendChild(script);
        }
    }, [mapLoaded]);

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
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-40">
                    {/* TEXT CONTENT (LEFT) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 space-y-10"
                    >
                        <div className="space-y-4">
                            <motion.h2 className="text-3xl md:text-5xl font-serif font-black text-brand-navy tracking-tight leading-none">
                                About <span className="text-brand-gold italic">GlobexisImpex</span>
                            </motion.h2>
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "100px" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-0.5 bg-brand-gold rounded-full"
                            />
                        </div>

                        <h3 className="text-lg md:text-xl font-sans font-light text-slate-500 leading-relaxed italic border-l-4 border-brand-gold/30 pl-8">
                            "Delivering Premium Quality Products to Global Markets with Trust, Precision, and Excellence."
                        </h3>

                        <div className="space-y-6 text-slate-600 text-lg font-sans font-normal leading-relaxed">
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
                            className="relative aspect-[4/5] lg:aspect-square bg-white rounded-[60px] flex items-center justify-center p-12 lg:p-20 shadow-2xl overflow-hidden border border-slate-100"
                        >
                            <motion.img 
                                src="/img/pink salt.png" 
                                alt="GlobexisImpex Himalayan Salt"
                                style={{ 
                                    x: imgX, 
                                    y: imgY,
                                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                                    maskComposite: 'intersect',
                                    WebkitMaskComposite: 'source-in'
                                }}
                                className="w-full h-full object-contain filter drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] transform transition-transform duration-700 hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* 1.5 MISSION & VISION SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-navy p-10 md:p-14 rounded-[50px] text-white flex flex-col justify-center space-y-6 group hover:shadow-2xl transition-all duration-700"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold transition-all duration-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h4 className="text-2xl font-serif font-black tracking-tight italic">Our <span className="text-brand-gold">Mission</span></h4>
                        </div>
                        <p className="text-slate-300 text-lg font-sans font-light leading-relaxed">
                            To provide superior quality Himalayan Pink Salt and premium export products to the global market while maintaining the highest standards of purity, sustainability, and ethical business practices.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-10 md:p-14 rounded-[50px] text-brand-navy border border-slate-100 flex flex-col justify-center space-y-6 group hover:shadow-2xl transition-all duration-700"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold transition-all duration-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h4 className="text-2xl font-serif font-black tracking-tight italic">Our <span className="text-brand-gold">Vision</span></h4>
                        </div>
                        <p className="text-slate-500 text-lg font-sans font-light leading-relaxed">
                            To become the world's most trusted partner in premium exports, bridging the gap between Pakistan's natural resources and global demand through innovation, reliability, and excellence.
                        </p>
                    </motion.div>
                </div>

                {/* 2. LEADERSHIP QUOTE & TEAM */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto text-center space-y-12 md:space-y-16 py-16 md:py-24 px-6 md:px-12 rounded-[50px] md:rounded-[80px] bg-slate-100/30 border border-slate-200 relative mb-40"
                >
                    <div className="text-6xl text-brand-gold/10 font-serif absolute -top-8 left-1/2 -translate-x-1/2 select-none leading-none">“</div>
                    <p className="text-xl md:text-2xl text-brand-navy italic font-serif font-light leading-snug max-w-3xl mx-auto">
                        At GlobexisImpex, we don't just deliver premium products; we forge enduring global partnerships anchored in <span className="text-brand-gold font-black not-italic px-1">Unwavering Trust</span> and operational excellence.
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 pt-12 border-t border-slate-200 mt-12">
                        <TeamMember 
                            name="Hussain Kamran" 
                            role="CEO & Founder (Chief Executive Officer)" 
                            img="/img/Hussain Kamran.png"
                            objectPosition="center 10%" 
                            scale={1.0} 
                            details={[
                                "Dipl.-Ing. Hussain Kamran",
                                "MSc Tropical Hydrology and Environmental Engineering | TU Darmstadt 🇩🇪",
                                "International Health & Safety Certification, NEBOSH 🇬🇧",
                                "BE Environmental Engineering, NUST 🇵🇰"
                            ]}
                        />
                        <TeamMember
                            name="Muhammad Abdullah"
                            role="Cofounder & CFO (Chief Financial Officer)"
                            img="/img/Abdullah pic1.png"
                            objectPosition="center 20%" 
                            scale={1.0} // Zero zoom for a clean, natural look
                            details={[
                                "Doktorand. Muhammad Abdullah",
                                "PhD Candidate / Graduate Research Associate",
                                "ESG and Sustainability Principles for Business - ASU CareerCatalyst",
                                "MSc Urban Climate and Sustainability, GCU 🇬🇧 | LAB 🇫🇮 | UHU 🇪🇸 | HTWD 🇩🇪",
                                "MSc Land Management, TU Munich 🇩🇪",
                                "International Health & Safety Certification, NEBOSH 🇬🇧",
                                "BE Environmental Engineering, NUST 🇵🇰"
                            ]}
                        />
                        <TeamMember
                            name="Alicia Gable"
                            role="Chief Operating Officer"
                            img="/img/Alicia.png"
                            objectPosition="center 25%" 
                            scale={1.0} // Zoomed out to keep the head fully in frame naturally
                            details={["Senior Leadership", "Operations Excellence"]}
                        />
                        <TeamMember 
                            name="Arsham Azam" 
                            role="Head of Digital (Software Engineer)" 
                            img="" // Triggers icon
                            isFemale={true}
                            details={[
                                "BSc Software Engineering",
                                "Digital Transformation Strategist",
                                "Technology Infrastructure Specialist",
                                "Data Management & Systems Architect"
                            ]}
                        />
                    </div>
                </motion.div>

                {/* 3. GLOBAL PRESENCE MAP */}
                <div className="space-y-16">
                    <div className="text-center space-y-4">
                        <h3 className="text-2xl md:text-4xl font-black text-brand-navy tracking-tight">
                            Our Global <span className="text-brand-gold italic">Presence</span>
                        </h3>
                        <p className="text-slate-500 text-base font-light italic">Connecting Premium Exports between Pakistan & The USA.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* MAP SIDE */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-3/5 relative bg-white rounded-[50px] p-6 lg:p-10 shadow-2xl border border-slate-50 aspect-[16/9] overflow-hidden group"
                        >
                            <div ref={mapContainerRef} className="w-full h-full rounded-[40px] overflow-hidden min-h-[280px] bg-slate-100" />
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

const TeamMember = ({ name, role, img, details, objectPosition = "center center", scale = 1, isFemale = false }) => {
    const [showDetails, setShowDetails] = React.useState(false);

    return (
        <div className="flex flex-col items-center space-y-6 group relative">
            {/* PHOTO BOX (200x200 responsive) */}
            <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-[180px] h-[200px] md:w-[200px] md:h-[220px] rounded-2xl border border-slate-200 relative overflow-hidden bg-white shadow-sm flex items-center justify-center p-0.5"
            >
                {img ? (
                    <img 
                        src={img} 
                        alt={name} 
                        style={{ 
                            objectPosition, 
                            transform: `scale(${scale})`,
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                            maskComposite: 'intersect',
                            WebkitMaskComposite: 'source-in'
                        }}
                        className="w-full h-full object-cover rounded-[14px] transition-all duration-700" 
                    />
                ) : (
                    <div className="w-full h-full bg-slate-50 flex items-center justify-center rounded-[14px]">
                        <svg className="w-20 h-20 text-brand-gold/30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </div>
                )}
            </motion.div>

            <div className="text-center">
                <h4 className="text-lg font-serif font-black text-brand-navy uppercase tracking-widest">{name}</h4>
                <p className="text-brand-gold font-sans font-bold text-[10px] tracking-[0.3em] uppercase mt-2">{role}</p>
                
                <button 
                    onClick={() => setShowDetails(!showDetails)}
                    className="mt-4 text-[10px] font-sans font-black uppercase tracking-[0.2em] text-brand-navy/40 hover:text-brand-gold transition-colors duration-300 flex items-center gap-2 mx-auto"
                >
                    {showDetails ? "Hide Details" : "View Details"}
                    <span className={`transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`}>↓</span>
                </button>
            </div>

            <AnimatePresence>
                {showDetails && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-xs text-center overflow-hidden"
                    >
                        <div className="space-y-4">
                            {details.map((detail, idx) => (
                                <p key={idx} className="text-xs text-slate-500 font-sans leading-relaxed border-b border-slate-50 pb-2 last:border-0 last:pb-0 italic">
                                    {detail}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const Hotspot = ({ loc, idx, onHover, onLeave }) => {
    const { x, y } = latLngToSvg(loc.lat, loc.lng);
    return (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 + (idx * 0.2), duration: 0.5 }}
        onMouseEnter={() => onHover(loc)}
        onMouseLeave={onLeave}
        style={{ top: y, left: x }}
        className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
    >
        <div className="absolute inset-0 bg-brand-gold rounded-full animate-ping opacity-75" />
        <div className="absolute inset-0 bg-brand-gold/30 rounded-full animate-pulse" />
        <div className="absolute inset-1.5 bg-brand-gold rounded-full shadow-lg group-hover:scale-150 transition-transform duration-300" />
    </motion.div>
)};

export default About;
