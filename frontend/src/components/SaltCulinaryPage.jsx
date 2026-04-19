import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import QuoteFormModal from "./QuoteFormModal";
import SpecTable from "./SpecTable";

const CULINARY_SPEC_GROUPS = [
    {
        group: "Salt Cooking Plate",
        items: [
            { sr: "01", art: "SC-CP-S",  name: "Cooking Plate – Small",  size: "20 × 10 × 2.5 cm" },
            { sr: "02", art: "SC-CP-M",  name: "Cooking Plate – Medium", size: "25 × 15 × 3 cm" },
            { sr: "03", art: "SC-CP-L",  name: "Cooking Plate – Large",  size: "30 × 20 × 5 cm" },
            { sr: "04", art: "SC-CP-XL", name: "Cooking Plate – XL",     size: "40 × 25 × 5 cm" },
        ],
    },
    {
        group: "Salt Crockery",
        items: [
            { sr: "05", art: "SC-BWL", name: "Salt Bowl",        size: "Ø 12 · Ø 15 cm" },
            { sr: "06", art: "SC-PLT", name: "Salt Platter",     size: "30 × 20 · 40 × 25 cm" },
            { sr: "07", art: "SC-MRT", name: "Salt Mortar & Pestle", size: "Ø 10 × 8 cm" },
            { sr: "08", art: "SC-SHG", name: "Salt Shot Glass (set)", size: "60 ml · 4 / 6 / 12 pcs" },
        ],
    },
    {
        group: "Chef-Grade Culinary Salt",
        items: [
            { sr: "09", art: "SC-SLT-F", name: "Fine Table Salt – Pink", size: "20 – 50 Mesh" },
            { sr: "10", art: "SC-SLT-G", name: "Gourmet Granules – Pink", size: "1 – 2 mm" },
            { sr: "11", art: "SC-SLT-C", name: "Coarse Flake Salt – Pink", size: "2 – 5 mm" },
        ],
    },
];

const CULINARY_DEFAULT_PACKING = "Retail gift box, Bubble-wrap, Master carton, Private Label";

/**
 * Salt Culinary landing page.
 * Linked from the "View Specifications" button of the "Salt Culinary"
 * StoryPanel on ProductExperience. Hash route: "#/salt-culinary".
 */

const CULINARY_PRODUCTS = [
    {
        name: "Salt Cooking Plate",
        tag: "Hand-cut Himalayan pink salt slabs for grilling, searing, chilling, and plating — a naturally antimicrobial surface that imparts a subtle mineral finish to every dish.",
        img: "/img/salt cooking plate.png",
        specs: [
            { label: "Dimensions", value: "20×10×2.5 cm · 30×20×5 cm" },
            { label: "Finish", value: "Hand-polished food grade" },
            { label: "Use", value: "Hot searing · Cold serving · Curing" },
        ],
    },
    {
        name: "Salt Crockery",
        tag: "Hand-carved Himalayan salt crockery — bowls, platters, mortars, and shot glasses. Each piece is artisan-finished and ready for gourmet presentation or premium retail gifting.",
        img: "/img/salt crockery.png",
        specs: [
            { label: "Range", value: "Bowls · Platters · Mortars · Shot Glasses" },
            { label: "Finish", value: "Natural crystal · Polished rim" },
            { label: "Use", value: "Plating · Serving · Gifting" },
        ],
    },
];

const goBack = () => {
    if (typeof window !== "undefined") {
        window.location.hash = "";
        window.scrollTo({ top: 0, behavior: "instant" });
    }
};

const SaltCulinaryPage = () => {
    const [quoteOpen, setQuoteOpen] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen pb-24">

            {/* PAGE BANNER */}
            <section className="relative bg-gradient-to-br from-brand-navy via-[#002a56] to-brand-navy text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 lg:px-20 max-w-7xl relative z-10">
                    <button
                        onClick={goBack}
                        className="inline-flex items-center gap-3 text-white/70 hover:text-brand-gold font-sans font-black uppercase tracking-[0.3em] text-xs transition-colors mb-8"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </button>

                    <div className="flex items-center gap-3 text-white/40 font-sans uppercase tracking-[0.3em] text-[10px] mb-6">
                        <span>Products</span>
                        <span className="text-white/20">/</span>
                        <span className="text-brand-gold">Salt Culinary</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-none">
                        Salt <span className="text-brand-gold italic">Culinary</span>
                    </h1>
                    <p className="text-white/60 font-sans font-light mt-8 max-w-2xl text-lg leading-relaxed">
                        Chef-grade Himalayan salt, hand-crafted cooking plates, and artisan crockery — the complete culinary system trusted by professional kitchens and premium retail brands worldwide.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 lg:px-20 max-w-7xl pt-20">

                {/* SECTION 1: HERO TEXT + IMAGE */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white rounded-md shadow-xl p-10 lg:p-14 relative"
                    >
                        <span className="text-brand-gold font-sans font-extrabold uppercase tracking-[0.4em] text-[11px]">Our Offering</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mt-4 mb-8 leading-tight">
                            The Complete Himalayan Culinary System
                        </h2>
                        <p className="text-slate-500 font-sans font-light leading-relaxed mb-6 text-justify">
                            GlobexisImpex Salt Culinary combines chef-grade <span className="text-brand-navy font-bold">Pink Himalayan salt</span> with hand-crafted salt cookware — a single-source culinary line engineered for professional kitchens, specialty retailers, and gourmet food brands. Every grain is screened, washed, and finished to deliver consistent seasoning, clean flavor, and premium presentation on the plate.
                        </p>
                        <p className="text-slate-500 font-sans font-light leading-relaxed text-justify">
                            From fine table salt to hand-cut salt slabs and artisan crockery, each product is harvested from the Khewra mines, finished under food-grade standards, and supplied with full batch traceability. Partner with us to build a complete culinary range — from pantry staple to signature serving piece.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-sans font-black uppercase tracking-[0.3em] text-brand-navy/60">
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> HACCP</span>
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> ISO 22000</span>
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> HALAL</span>
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Kosher</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full relative"
                    >
                        <div className="absolute -top-6 -right-6 w-2/3 h-2/3 bg-brand-gold/20 rounded-md -z-10 hidden lg:block" />
                        <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-brand-navy/10 rounded-md -z-10 hidden lg:block" />
                        <img
                            src="/img/Pink Himalayan Salt Culinary.png"
                            alt="Pink Himalayan Salt Culinary"
                            className="w-full h-auto object-cover rounded-md shadow-xl relative z-10"
                        />
                    </motion.div>
                </section>

                {/* SECTION 2: CULINARY ACCESSORY CARDS (Cooking Plate + Crockery) */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {CULINARY_PRODUCTS.map((p, idx) => (
                        <CulinaryCard key={p.name} product={p} delay={idx * 0.15} />
                    ))}
                </section>

                {/* SECTION 3: SPECIFICATIONS TABLE */}
                <SpecTable
                    title="Culinary Specifications & Packing"
                    subtitle="Hand-crafted salt cookware and chef-grade culinary salt. Custom dimensions, engravings, and private-label packaging can be produced on request."
                    groups={CULINARY_SPEC_GROUPS}
                    defaultPacking={CULINARY_DEFAULT_PACKING}
                />
            </div>

            {/* GET A QUOTE CTA */}
            <CulinaryCTA onOpen={() => setQuoteOpen(true)} />

            <QuoteFormModal
                open={quoteOpen}
                onClose={() => setQuoteOpen(false)}
                productCategory="Salt Culinary"
            />
        </div>
    );
};

/**
 * Horizontal culinary accessory card — large image header + spec list below.
 * Deliberately distinct from the pink salt "circular" product card.
 */
const CulinaryCard = ({ product, delay }) => (
    <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8 }}
        className="group bg-white rounded-md shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden flex flex-col"
    >
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#fde6e6] via-white to-[#f9d0d0]">
            <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-5 left-5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                <span className="text-brand-gold font-sans font-black uppercase tracking-[0.3em] text-[9px]">
                    Culinary · Artisan
                </span>
            </div>
        </div>

        <div className="p-8 md:p-10 flex flex-col flex-1">
            <h3 className="text-2xl md:text-3xl font-serif font-black text-brand-navy leading-tight">
                {product.name}
            </h3>
            <div className="w-10 h-0.5 bg-brand-gold my-4" />
            <p className="text-slate-500 font-sans font-light leading-relaxed text-sm mb-8 flex-1">
                {product.tag}
            </p>

            <dl className="divide-y divide-slate-100 border-t border-slate-100">
                {product.specs.map((s) => (
                    <div key={s.label} className="grid grid-cols-[120px_1fr] gap-4 py-3">
                        <dt className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-brand-navy/50 self-center">
                            {s.label}
                        </dt>
                        <dd className="text-sm font-sans text-brand-navy">
                            {s.value}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    </motion.article>
);

/**
 * Full-width CTA banner mirroring the one used on the Pink / White / Black salt pages.
 */
const CulinaryCTA = ({ onOpen }) => (
    <section className="container mx-auto px-6 lg:px-20 max-w-7xl mt-24">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-md bg-gradient-to-br from-brand-navy via-[#002a56] to-brand-navy text-white"
        >
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#f9d0d0]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 p-10 md:p-16 items-center">
                <div>
                    <span className="text-brand-gold font-sans font-black uppercase tracking-[0.4em] text-[11px]">
                        B2B · Wholesale · Private Label
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black leading-[1.05] mt-5">
                        Launch your own <br />
                        <span className="text-brand-gold italic">Culinary Salt line</span>
                    </h2>
                    <p className="text-white/60 font-sans font-light mt-6 max-w-xl leading-relaxed">
                        From pantry-ready table salt to hand-cut cooking slabs and signature salt crockery — tell us the SKUs you need and we'll build a tailored proposal with full lab documentation within one business day.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-sans font-black uppercase tracking-[0.3em] text-white/50">
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> 24h Response</span>
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Private Label</span>
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Flexible MOQ</span>
                    </div>
                </div>

                <div className="flex lg:justify-end">
                    <motion.button
                        onClick={onOpen}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="group inline-flex items-center gap-4 pl-8 pr-4 py-4 bg-brand-gold text-brand-navy rounded-full font-sans font-black uppercase tracking-[0.3em] text-xs shadow-2xl hover:shadow-brand-gold/30 transition-shadow"
                    >
                        Get a Quote
                        <span className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    </section>
);

export default SaltCulinaryPage;
