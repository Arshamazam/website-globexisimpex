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
        "Salt Culinary": {
            title: "Salt Culinary Specifications",
            origin: "Khewra Salt Mines, Pakistan",
            purity: "98% – 99.2% NaCl (Food Grade)",
            minerals: "Balanced Trace Minerals — Iron, Magnesium, Potassium, Zinc",
            grades: "Fine Table (0.3–0.5 mm), Medium (0.5–1 mm), Kosher Flakes, Gourmet Coarse",
            packaging: "Retail 200 g / 500 g / 1 kg · 25 kg PP Bags · Custom Private Label",
            certification: "HACCP · ISO 22000 · HALAL · Kosher"
        },
        "Wellness": {
            title: "Himalayan Salt Wellness Specifications",
            origin: "Khewra Salt Mines, Pakistan",
            purity: "Natural Unrefined Pink Halite",
            minerals: "84+ Trace Minerals — Iron, Magnesium, Potassium, Calcium",
            grades: "Bath Crystals · Salt Lamps · Salt Bricks · Inhalers · Body Scrubs",
            packaging: "Retail Gift Boxes · Kraft Pouches · Custom Private Label",
            certification: "Cosmetic Grade · Spa & Halotherapy Certified"
        },
        "Bath Salt": {
            title: "Himalayan Bath Salt Specifications",
            origin: "Khewra Salt Mines, Pakistan",
            purity: "Unrefined Pink Himalayan Halite — Cosmetic Grade",
            minerals: "Magnesium · Potassium · Calcium · Iron — 84+ trace minerals",
            grades: "Coarse Bath Crystals · Fine Body Scrub Grade · Foot Soak Flakes",
            packaging: "Retail Jars · Kraft Pouches · Bulk 25 kg Bags · Private Label",
            certification: "Cosmetic Grade · Dermatologically Tested · HALAL"
        },
        "Animal Lick Salt": {
            title: "Animal Lick Salt Specifications",
            origin: "Khewra Salt Mines, Pakistan",
            purity: "98% – 99% NaCl · Unrefined Natural Pink Halite",
            minerals: "Iron · Magnesium · Potassium · Zinc — 84+ trace minerals",
            grades: "Natural Blocks · Shaped Licks · Drilled with Rope · Custom Sizes",
            packaging: "2–6 kg Retail Blocks · 25 kg Cartons · Bulk Pallet · Private Label",
            certification: "Veterinary Grade · Export Quality Tested"
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
                    onViewSpecs={() => {
                        window.location.hash = "#/himalayan-edible-salt";
                        window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                />
                <StoryPanel
                    title="Salt Culinary"
                    subtitle="Chef-Grade Everyday Essentials"
                    desc="GlobexisImpex Culinary Salt is meticulously screened, washed, and finished for professional kitchens and premium retail lines. Clean crystal structure, balanced mineral profile, and consistent grain sizing deliver precise seasoning across every culinary application."
                    img="/img/Salt Culinary (1).png"
                    reverse={true}
                    onViewSpecs={() => {
                        window.location.hash = "#/salt-culinary";
                        window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                />
                <StoryPanel
                    title="Wellness"
                    subtitle="Spa · Halotherapy · Self-Care"
                    desc="GlobexisImpex Wellness products transform pure Himalayan pink salt into therapeutic lifestyle essentials — bath crystals, glowing salt lamps, halotherapy bricks, inhalers, and body scrubs. Each piece is crafted to deliver the calming, mineral-rich benefits of the Khewra mines directly into homes, spas, and premium retail shelves."
                    img="/img/salt wellness.png"
                    reverse={false}
                    onViewSpecs={() => {
                        window.location.hash = "#/wellness";
                        window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                />
                <StoryPanel
                    title="Bath Salt"
                    subtitle="Mineral Soak · Body Scrub · Spa Ritual"
                    desc="GlobexisImpex Bath Salt is pure, unrefined Himalayan pink salt crafted for daily self-care. Rich in magnesium, potassium, and 84+ trace minerals, every crystal soothes aching muscles, detoxifies the skin, and transforms the bath into a spa-grade wellness ritual — supplied in retail jars, kraft pouches, and private-label formats."
                    img="/img/Bath Salt.png"
                    reverse={true}
                    onViewSpecs={() => {
                        window.location.hash = "#/bath-salt";
                        window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                />
                <StoryPanel
                    title="Animal Lick Salt"
                    subtitle="Livestock Nutrition · Farm Essentials"
                    desc="GlobexisImpex Animal Lick Salt is unrefined Himalayan pink salt pressed and cut into natural lick blocks for livestock — cattle, horses, sheep, goats, and camels. Each block delivers essential sodium, iron, and 84+ trace minerals straight from the Khewra mines, supporting hydration, digestion, and coat health. Available in natural rough blocks, shaped licks, and rope-drilled formats for stables and retail."
                    img="/img/Animal Lick Salt.png"
                    reverse={false}
                    onViewSpecs={() => {
                        window.location.hash = "#/animal-lick-salt";
                        window.scrollTo({ top: 0, behavior: "instant" });
                    }}
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
                            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
                            
                            <button 
                                onClick={() => setSelectedSpecs(null)}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-white transition-all z-20"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="relative z-10 space-y-12">
                                <div>
                                    <div className="h-0.5 w-16 bg-brand-gold rounded-full mb-8" />
                                    <h3 className="text-2xl md:text-4xl font-serif font-black text-brand-navy leading-none">{selectedSpecs.title}</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <SpecRow label="Origin" value={selectedSpecs.origin} />
                                    <SpecRow label="Purity" value={selectedSpecs.purity} />
                                    <SpecRow label="Packaging" value={selectedSpecs.packaging} />
                                    <SpecRow label="Compliance" value={selectedSpecs.certification} />
                                </div>

                                <div className="pt-10 border-t border-slate-100">
                                    <p className="text-slate-500 text-sm font-sans font-light italic leading-relaxed">
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
                <div className="relative aspect-[4/3] bg-slate-50 rounded-[40px] md:rounded-[60px] p-6 sm:p-8 md:p-12 shadow-inner group overflow-hidden">
                    <img 
                        src={img} 
                        alt={title} 
                        style={{ 
                            maskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent), linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent), linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)',
                            maskComposite: 'intersect',
                            WebkitMaskComposite: 'source-in'
                        }}
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
                    <span className="text-brand-gold font-sans font-extrabold uppercase tracking-[0.4em] text-[10px] underline underline-offset-8 decoration-brand-gold/30">{subtitle}</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-brand-navy mt-10 tracking-tight leading-none">{title}</h2>
                </div>
                <p className="text-lg md:text-xl text-slate-500 font-sans font-light leading-relaxed border-l-4 border-brand-gold/50 pl-8">
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
