import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import QuoteFormModal from "./QuoteFormModal";

/**
 * White Salt varieties page (single White shade × 4 grades).
 * Linked from the White Salt card on HimalayanEdibleSaltPage.
 * Hash route: "#/white-salt".
 */

const SHADE_GROUPS = [
    {
        shade: "White",
        anchor: "white",
        intro: "Pure, refined white Himalayan salt — clean crystals for everyday culinary precision and premium retail lines.",
        tint: "from-[#f7f9fc] via-white to-[#eef2f7]",
        accent: "bg-[#dbe3ec]",
        dot: "bg-[#ffffff] border border-slate-300",
        products: [
            { name: "White Salt Chunks", sizeUnit: "cm", size: "2 – 5", img: "/img/White Salt Chunks.png" },
            { name: "White Salt Granules", sizeUnit: "mm", size: "2 – 5", img: "/img/White Salt Granules.png" },
            { name: "White Salt Coarse", sizeUnit: "mm", size: "1 – 2", img: "/img/White Salt Fine (2).png" },
            { name: "White Salt Fine", sizeUnit: "Mesh", size: "20 – 25", img: "/img/White Salt Fine (1).png" },
        ],
    },
];

const goBackToEdibleSalt = () => {
    if (typeof window !== "undefined") {
        window.location.hash = "#/himalayan-edible-salt";
        window.scrollTo({ top: 0, behavior: "instant" });
    }
};

const scrollToAnchor = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const WhiteSaltPage = () => {
    const [quoteOpen, setQuoteOpen] = useState(false);
    const [presetShade, setPresetShade] = useState("");

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    const openQuote = (shade = "") => {
        setPresetShade(shade);
        setQuoteOpen(true);
    };

    return (
        <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen pb-24">

            {/* PAGE BANNER */}
            <section className="relative bg-gradient-to-br from-brand-navy via-[#002a56] to-brand-navy text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 lg:px-20 max-w-7xl relative z-10">
                    <button
                        onClick={goBackToEdibleSalt}
                        className="inline-flex items-center gap-3 text-white/70 hover:text-brand-gold font-sans font-black uppercase tracking-[0.3em] text-xs transition-colors mb-8"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Edible Salt
                    </button>

                    <div className="flex items-center gap-3 text-white/40 font-sans uppercase tracking-[0.3em] text-[10px] mb-6">
                        <span>Products</span>
                        <span className="text-white/20">/</span>
                        <span>Edible Salt</span>
                        <span className="text-white/20">/</span>
                        <span className="text-brand-gold">White Salt</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-none">
                        White <span className="text-brand-gold italic">Salt</span> Varieties
                    </h1>
                    <p className="text-white/60 font-sans font-light mt-8 max-w-2xl text-lg leading-relaxed">
                        Four edible grades of pure white Himalayan salt — refined crystals engineered for brands, kitchens, and industrial culinary applications.
                    </p>

                    {/* SHADE JUMP NAV */}
                    <div className="mt-10 flex flex-wrap gap-3">
                        {SHADE_GROUPS.map((g) => (
                            <button
                                key={g.anchor}
                                onClick={() => scrollToAnchor(`shade-${g.anchor}`)}
                                className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/15 hover:border-brand-gold/60 bg-white/5 backdrop-blur-sm transition-all"
                            >
                                <span className={`w-3 h-3 rounded-full ${g.dot}`} />
                                <span className="text-white text-[10px] font-sans font-black uppercase tracking-[0.3em] group-hover:text-brand-gold transition-colors">
                                    {g.shade}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 lg:px-20 max-w-7xl pt-20 space-y-16">
                {SHADE_GROUPS.map((group, gIdx) => (
                    <ShadeGroup key={group.anchor} group={group} index={gIdx} onQuote={() => openQuote(group.shade)} />
                ))}
            </div>

            {/* GET A QUOTE CTA */}
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
                    <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 p-10 md:p-16 items-center">
                        <div>
                            <span className="text-brand-gold font-sans font-black uppercase tracking-[0.4em] text-[11px]">
                                B2B · Wholesale · Private Label
                            </span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black leading-[1.05] mt-5">
                                Ready to import <br />
                                <span className="text-brand-gold italic">Himalayan White Salt?</span>
                            </h2>
                            <p className="text-white/60 font-sans font-light mt-6 max-w-xl leading-relaxed">
                                Send us your target volume, preferred grade, and packing — we reply with a tailored FOB/CIF quotation and full lab documentation within one business day.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-sans font-black uppercase tracking-[0.3em] text-white/50">
                                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> 24h Response</span>
                                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Full Lab Reports</span>
                                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Flexible MOQ</span>
                            </div>
                        </div>

                        <div className="flex lg:justify-end">
                            <motion.button
                                onClick={() => openQuote("")}
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

            <QuoteFormModal
                open={quoteOpen}
                onClose={() => setQuoteOpen(false)}
                productCategory="White Salt"
                presetShade={presetShade}
            />
        </div>
    );
};

/**
 * Shaded panel containing the 4 product cards for a single shade.
 */
const ShadeGroup = ({ group, index, onQuote }) => (
    <motion.section
        id={`shade-${group.anchor}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`relative rounded-md shadow-xl overflow-hidden bg-gradient-to-br ${group.tint}`}
    >
        <div className="absolute top-0 left-0 w-2 h-full bg-white/50" />
        <div className={`absolute top-0 left-0 w-1 h-full ${group.accent}`} />

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0">

            {/* LEFT: SHADE IDENTITY */}
            <div className="p-10 lg:p-12 lg:border-r border-white/60 flex flex-col justify-between">
                <div>
                    <span className="text-brand-navy/50 font-sans font-extrabold uppercase tracking-[0.4em] text-[10px]">
                        Collection {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-brand-navy mt-4 leading-[1.05]">
                        {group.shade}
                    </h2>
                    <div className={`w-16 h-1 ${group.accent} rounded-full mt-5`} />
                    <p className="text-slate-600 font-sans font-light leading-relaxed mt-6 text-sm">
                        {group.intro}
                    </p>
                </div>
                <div className="mt-10 space-y-5">
                    <button
                        onClick={onQuote}
                        className="group inline-flex items-center gap-3 text-brand-navy font-sans font-black uppercase tracking-[0.3em] text-[10px] hover:text-brand-gold transition-colors"
                    >
                        Quote this shade
                        <span className="w-7 h-7 rounded-full border border-brand-navy/30 group-hover:border-brand-gold group-hover:bg-brand-gold/10 flex items-center justify-center transition-colors">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </button>
                    <div className="hidden lg:flex items-center gap-2">
                        <span className={`w-8 h-8 rounded-full ${group.dot} shadow-inner`} />
                        <span className="text-brand-navy/50 font-sans font-black uppercase tracking-[0.3em] text-[10px]">
                            Shade Reference
                        </span>
                    </div>
                </div>
            </div>

            {/* RIGHT: 4 PRODUCTS IN A 2×2 GRID */}
            <div className="p-6 md:p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {group.products.map((p, i) => (
                    <ProductCard key={p.name} product={p} accent={group.accent} delay={i * 0.08} />
                ))}
            </div>
        </div>
    </motion.section>
);

/**
 * Horizontal product card — circular image on the left, name & size pill on the right.
 */
const ProductCard = ({ product, accent, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className="group flex items-center gap-5 bg-white rounded-md p-5 md:p-6 shadow-md hover:shadow-2xl transition-shadow duration-500 border border-white"
    >
        <div className="flex-shrink-0 relative">
            <div className={`absolute inset-0 rounded-full ${accent} opacity-50 blur-xl group-hover:opacity-80 transition-opacity`} />
            <div className="relative aspect-square w-24 md:w-28 rounded-full overflow-hidden border-[5px] border-black bg-white">
                <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>

        <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-sans font-black text-brand-navy leading-tight">
                {product.name}
            </h3>
            <div className="mt-3 inline-flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-brand-navy/20 text-brand-navy text-[10px] md:text-xs font-sans font-black uppercase tracking-[0.2em] whitespace-nowrap">
                    <span className="text-brand-gold mr-2">{product.sizeUnit}</span>
                    {product.size}
                </span>
            </div>
        </div>
    </motion.div>
);

export default WhiteSaltPage;
