import React, { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Step 8.3: Enhanced Product Experience.
 * Features: Multi-layered filtering (Category + Availability), Cinematic Storytelling Panels, 
 * and interactive 3D grid layout.
 */

const CATEGORIES = ["All", "Salt", "Rice", "Minerals", "Dry Fruits", "Chemicals", "Lifestyle"];
const AVAILABILITY = ["All", "Export-ready", "Local"];

const PRODUCTS = [
    { id: 1, name: "Premium Pink Salt", category: "Salt", availability: "Export-ready", img: "/img/pink salt.png", desc: "Hand-mined from the Khewra mines, our pink salt is the gold standard for global industrial and culinary use." },
    { id: 2, name: "White Sea Salt", category: "Salt", availability: "Export-ready", img: "/img/White Salt.png", desc: "Solar-evaporated sea salt, refined for maximum purity and traceability." },
    { id: 3, name: "Crushed Black Salt", category: "Salt", availability: "Local", img: "/img/Black Salt.png", desc: "Deep sulfurous aroma, perfect for traditional culinary applications and medicinal use." },
    { id: 4, name: "Industrial Grade Salt", category: "Salt", availability: "Export-ready", img: "/img/Industrial Salt.png", desc: "High-purity sodium chloride for industrial chemical processing and tanning." },
    { id: 5, name: "Gourmet Flavored Salt", category: "Salt", availability: "Export-ready", img: "/img/Flavored Salt.png", desc: "Infused with specialized organic herbs for premium culinary experiences." },
    { id: 6, name: "Premium Basmati Rice", category: "Rice", availability: "Export-ready", img: "/img/Rice.png", desc: "Long-grain, aromatic basmati rice aged to perfection for the ultimate export quality." },
    { id: 7, name: "Organic Brown Rice", category: "Rice", availability: "Export-ready", img: "/img/brown rice.png", desc: "Nutrient-rich, unpolished healthy brown rice sourced from organic farms." },
    { id: 8, name: "Chemicals & Cotton", category: "Chemicals", availability: "Export-ready", img: "/img/Chemicals & Cotton.png", desc: "Industrial grade chemicals and premium raw cotton for textile manufacturing." },
    { id: 9, name: "Beauty & Cosmetic Salt", category: "Lifestyle", availability: "Export-ready", img: "/img/cosmetic.png", desc: "Therapeutic grade salts for spa, bathing, and high-end cosmetic formulations." },
    { id: 10, name: "Assorted Dry Fruits", category: "Dry Fruits", availability: "Local", img: "/img/dry fruits.png", desc: "Sun-dried organic apricots, walnuts, and almonds from Northern valleys." },
    { id: 11, name: "Kitchen & Home Decor", category: "Lifestyle", availability: "Local", img: "/img/Kitchen & Home.png", desc: "Hand-crafted salt lamps and home accessories for a natural aesthetic." },
    { id: 12, name: "Pure Industrial Minerals", category: "Minerals", availability: "Export-ready", img: "/img/minerals.png", desc: "High-purity Gypsum, Talc, and other minerals for construction and manufacturing." }
];

const ProductExperience = () => {
    const [catFilter, setCatFilter] = useState("All");
    const [availFilter, setAvailFilter] = useState("All");
    const [selectedSpecs, setSelectedSpecs] = useState(null);

    const specsData = {
        "The Salt of the Earth": {
            title: "Himalayan Pink Salt Specifications",
            origin: "Khewra Salt Mines, Pakistan",
            purity: "98.5% - 99.2% NaCl Content",
            minerals: "Trace amounts of Iron, Magnesium, and Potassium (84+ minerals)",
            grades: "Fine (0-1mm), Coarse (2-5mm), Lumps (20kg+)",
            packaging: "25kg PP Bags, 1-ton Jumbo Bags, Retail Pouches",
            certification: "HACCP, ISO 9001:2015, HALAL Certified"
        },
        "Authentic Black Salt": {
            title: "Black Salt (Kala Namak) Specifications",
            origin: "Kiln-Fired Himalayan Salt, Pakistan",
            purity: "High Purity Infused with Organic Herbs",
            minerals: "Rich in Trace Iron and Sulfurous Volcanic Compounds",
            grades: "Fine Powder, Small Granules, Whole Rocks",
            packaging: "25kg bags, Custom 500g pouches, Kraft Packaging",
            certification: "Global Food Safety Standards Compliant"
        },
        "Industrial Salt Solutions": {
            title: "Industrial Grade Salt Specifications",
            origin: "Multi-Source Mining, Pakistan Hub",
            purity: "99.1% min Sodium Chloride (NaCl)",
            minerals: "Minimized Calcium & Magnesium for Chemical Efficiency",
            grades: "Bulk Rock Salt, Industrial Fine, Solar Salt",
            packaging: "50kg Bags, 1.5-ton FIBC Jumbo Bags, Bulk Vessel",
            certification: "ISO 22000, Specialized Technical Grade Lab Reports"
        }
    };

    const filtered = PRODUCTS.filter(p => {
        const catMatch = catFilter === "All" || p.category === catFilter;
        const availMatch = availFilter === "All" || p.availability === availFilter;
        return catMatch && availMatch;
    });

    return (
        <div className="overflow-hidden">
            
            {/* 1. FILTERING HUB (Commented out)
            <section className="py-24 px-6 lg:px-20 border-b border-slate-100/10">
                <div className="container mx-auto">
                    <div className="text-center mb-16 px-4">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-brand-navy tracking-tight"
                        >
                            Refined <span className="text-brand-gold italic">Selections</span>
                        </motion.h2>
                        <p className="text-slate-500 mt-6 text-xl font-light">Filter by Category and Availability for precision sourcing.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="flex flex-wrap justify-center gap-3">
                            {CATEGORIES.map(cat => (
                                <FilterButton 
                                    key={cat} 
                                    active={catFilter === cat} 
                                    onClick={() => setCatFilter(cat)}
                                    label={cat}
                                />
                            ))}
                        </div>

                        <div className="h-10 w-[1px] bg-slate-200 hidden md:block" />
                        
                        <div className="flex gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-inner">
                            {AVAILABILITY.map(avail => (
                                <button
                                    key={avail}
                                    onClick={() => setAvailFilter(avail)}
                                    className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                                        availFilter === avail ? 'bg-brand-gold text-white shadow-xl' : 'text-slate-400 hover:text-brand-navy'
                                    }`}
                                >
                                    {avail}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto mt-20">
                    <motion.div 
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        <AnimatePresence mode="popLayout">
                            {filtered.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
            */}

            {/* 3. CINEMATIC STORYTELLING PANELS */}
            <section className="py-32 space-y-32">
                <StoryPanel 
                    title="The Salt of the Earth"
                    subtitle="Purity at Source"
                    desc="Our Himalayan Pink Salt is extracted using traditional methods that preserve its 84 trace minerals. No additives, no refining—just pure, ancient earth gifts."
                    img="/img/pink salt.png"
                    reverse={false}
                    onViewSpecs={() => setSelectedSpecs(specsData["The Salt of the Earth"])}
                />
                <StoryPanel 
                    title="Authentic Black Salt"
                    subtitle="Organic Health & Flavor"
                    desc="GlobexisImpex Black Salt (Kala Namak) is kiln-fired with natural herbs. It offers exceptional digestive health benefits, high trace iron content, and a unique umami flavor profile sought after by global premium food brands."
                    img="/img/Black Salt.png"
                    reverse={true}
                    onViewSpecs={() => setSelectedSpecs(specsData["Authentic Black Salt"])}
                />
                <StoryPanel 
                    title="Industrial Salt Solutions"
                    subtitle="High Purity & Logistics"
                    desc="Providing high-purity Industrial Salt for global manufacturing and infrastructure projects. Our salt solutions bridge the gap between extraction and industrial excellence with seamless global logistics."
                    img="/img/Industrial Salt.png"
                    reverse={false}
                    onViewSpecs={() => setSelectedSpecs(specsData["Industrial Salt Solutions"])}
                />
            </section>

            {/* SPECIFICATION MODAL */}
            <AnimatePresence>
                {selectedSpecs && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[3000] flex items-center justify-center p-6 bg-brand-navy/95 backdrop-blur-xl"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            className="bg-white rounded-[50px] max-w-2xl w-full p-10 lg:p-16 relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
                            
                            <button 
                                onClick={() => setSelectedSpecs(null)}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-white transition-all z-20"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="relative z-10 space-y-10">
                                <div>
                                    <div className="h-1.5 w-16 bg-brand-gold rounded-full mb-6" />
                                    <h3 className="text-3xl md:text-4xl font-black text-brand-navy leading-tight">{selectedSpecs.title}</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <SpecRow label="Origin" value={selectedSpecs.origin} />
                                    <SpecRow label="Purity" value={selectedSpecs.purity} />
                                    <SpecRow label="Packaging" value={selectedSpecs.packaging} />
                                    <SpecRow label="Compliance" value={selectedSpecs.certification} />
                                </div>

                                <div className="pt-8 border-t border-slate-100">
                                    <p className="text-slate-400 text-sm font-light italic leading-relaxed">
                                        Mineral Content: {selectedSpecs.minerals}
                                    </p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setSelectedSpecs(null)}
                                    className="w-full py-5 bg-brand-navy text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-xl"
                                >
                                    Close Details
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

// Reusable Filter Button
const FilterButton = ({ active, onClick, label }) => (
    <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-8 py-3 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-500 border-2 ${
            active 
            ? "bg-brand-navy border-brand-navy text-white shadow-2xl" 
            : "bg-white border-slate-100 text-slate-400 hover:border-brand-gold hover:text-brand-gold"
        }`}
    >
        {label}
    </motion.button>
);

// Reusable Product Card
const ProductCard = forwardRef(({ product }, ref) => (
    <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -10 }}
        className="group bg-white p-10 rounded-[50px] shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-50 cursor-pointer overflow-hidden relative"
    >
        {/* Glow Shadow Highlight */}
        <div className="absolute inset-0 border-2 border-brand-gold/0 group-hover:border-brand-gold/20 rounded-[50px] transition-all duration-700 pointer-events-none" />
        
        <div className="aspect-square bg-slate-50 rounded-[40px] mb-8 flex items-center justify-center p-12 group-hover:bg-slate-100 transition-colors">
            <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-1000"
            />
        </div>
        <div className="text-center space-y-3">
            <span className="text-[10px] font-black uppercase text-brand-gold tracking-[0.4em]">{product.category} • {product.availability}</span>
            <h4 className="text-2xl font-black text-brand-navy transition-all duration-500">{product.name}</h4>
            <p className="text-slate-400 font-light text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {product.desc}
            </p>
        </div>
    </motion.div>
));

// Cinematic Story Panel
const StoryPanel = ({ title, subtitle, desc, img, reverse, onViewSpecs }) => (
    <div className="container mx-auto px-6 lg:px-20">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* IMAGE SIDE (Slide In) */}
            <motion.div 
                initial={{ opacity: 0, x: reverse ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 w-full"
            >
                <div className="relative aspect-[4/3] bg-slate-50 rounded-[60px] p-12 shadow-inner group overflow-hidden">
                    <img 
                        src={img} 
                        alt={title} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-[2s]"
                    />
                    {/* Decorative Watermark */}
                    <div className="absolute top-10 right-10 text-brand-navy font-black text-8xl opacity-[0.03] select-none uppercase">{title.split(' ')[0]}</div>
                </div>
            </motion.div>

            {/* TEXT SIDE (Slide In) */}
            <motion.div 
                initial={{ opacity: 0, x: reverse ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 space-y-8"
            >
                <div>
                    <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-xs underline decoration-2 underline-offset-8 decoration-brand-gold/30">{subtitle}</span>
                    <h2 className="text-4xl md:text-7xl font-black text-brand-navy mt-8 tracking-tighter leading-none">{title}</h2>
                </div>
                <p className="text-2xl text-slate-500 font-light leading-relaxed italic border-l-4 border-brand-gold pl-8">
                    {desc}
                </p>
                <motion.button
                    whileHover={{ scale: 1.02, color: "#C5A059" }}
                    onClick={onViewSpecs}
                    className="flex items-center gap-4 text-brand-navy font-bold tracking-[0.2em] uppercase text-sm group"
                >
                    View Specifications 
                    <span className="w-12 h-[1px] bg-brand-navy group-hover:w-20 group-hover:bg-brand-gold transition-all duration-500" />
                </motion.button>
            </motion.div>

        </div>
    </div>
);

const SpecRow = ({ label, value }) => (
    <div className="space-y-1">
        <span className="text-[10px] font-black uppercase text-brand-gold tracking-widest">{label}</span>
        <p className="text-brand-navy font-bold text-lg leading-tight">{value}</p>
    </div>
);

export default ProductExperience;
