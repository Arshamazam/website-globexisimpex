import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import QuoteFormModal from "./QuoteFormModal";
import SpecTable from "./SpecTable";

const LICK_SPEC_GROUPS = [
    {
        group: "Lick Salt Cylinder",
        items: [
            { sr: "01", art: "AL-CY-2", name: "Lick Salt Cylinder – Rope-hung", size: "2 kg" },
            { sr: "02", art: "AL-CY-3", name: "Lick Salt Cylinder – Rope-hung", size: "3 kg" },
            { sr: "03", art: "AL-CY-5", name: "Lick Salt Cylinder – Drilled",   size: "5 kg" },
            { sr: "04", art: "AL-CY-6", name: "Lick Salt Cylinder – Drilled",   size: "6 kg" },
        ],
    },
    {
        group: "Lick Salt Block",
        items: [
            { sr: "05", art: "AL-BL-2",  name: "Lick Salt Block – Rectangular", size: "2 kg" },
            { sr: "06", art: "AL-BL-5",  name: "Lick Salt Block – Rectangular", size: "5 kg" },
            { sr: "07", art: "AL-BL-10", name: "Lick Salt Block – Natural",     size: "10 kg" },
            { sr: "08", art: "AL-BL-25", name: "Lick Salt Block – Pasture",     size: "25 kg" },
        ],
    },
    {
        group: "Custom Shapes",
        items: [
            { sr: "09", art: "AL-CS-HRT", name: "Heart-shape Lick",  size: "1 – 2 kg" },
            { sr: "10", art: "AL-CS-STR", name: "Star-shape Lick",   size: "1 – 2 kg" },
            { sr: "11", art: "AL-CS-HEX", name: "Hexagon Lick Block", size: "2 – 5 kg" },
        ],
    },
];

const LICK_DEFAULT_PACKING = "Shrink-wrap, 2 pcs / 4 pcs carton, Pallet, Private Label";

/**
 * Animal Lick Salt landing page.
 * Linked from the "View Specifications" button of the "Animal Lick Salt"
 * StoryPanel on ProductExperience. Hash route: "#/animal-lick-salt".
 */

const LICK_PRODUCTS = [
    {
        name: "Lick Salt Cylinder",
        tag: "Hand-cut Himalayan pink salt cylinders designed for stable mounts and rope-hung feeders. Weather-resistant, long-lasting, and engineered to deliver steady mineral supplementation to cattle, horses, sheep, and goats.",
        img: "/img/Lick Salt Cylinder.png",
        specs: [
            { label: "Weight", value: "2 kg · 3 kg · 5 kg · 6 kg" },
            { label: "Form", value: "Drilled center · Rope-hung · Plain" },
            { label: "Use", value: "Stables · Barns · Open pasture" },
        ],
    },
    {
        name: "Lick Salt Block",
        tag: "Natural and shaped pink Himalayan lick blocks for livestock. Dense, slow-dissolving, and rich in 84+ trace minerals — a barn essential for cattle, camels, horses, and all ruminants worldwide.",
        img: "/img/Lick salt Block (1).png",
        specs: [
            { label: "Weight", value: "2 kg · 5 kg · 10 kg · 25 kg" },
            { label: "Shape", value: "Natural rough · Rectangular · Custom" },
            { label: "Use", value: "Cattle · Camel · Sheep · Goat · Horse" },
        ],
    },
];

const goBack = () => {
    if (typeof window !== "undefined") {
        window.location.hash = "";
        window.scrollTo({ top: 0, behavior: "instant" });
    }
};

const AnimalLickSaltPage = () => {
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
                        <span className="text-brand-gold">Animal Lick Salt</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-none">
                        Animal <span className="text-brand-gold italic">Lick Salt</span>
                    </h1>
                    <p className="text-white/60 font-sans font-light mt-8 max-w-2xl text-lg leading-relaxed">
                        Unrefined Himalayan pink salt blocks and cylinders crafted for livestock — a natural source of sodium and 84+ trace minerals for cattle, horses, camels, sheep, and goats worldwide.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 lg:px-20 max-w-7xl pt-20">

                {/* HERO INTRO + IMAGE */}
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
                            Natural Mineral Nutrition for Livestock
                        </h2>
                        <p className="text-slate-500 font-sans font-light leading-relaxed mb-6 text-justify">
                            GlobexisImpex Animal Lick Salt is harvested directly from the <span className="text-brand-navy font-bold">Khewra salt mines</span> and pressed into dense, weather-resistant blocks and cylinders. Each lick delivers essential sodium, iron, magnesium, and potassium — supporting hydration, rumen balance, and coat health across every species.
                        </p>
                        <p className="text-slate-500 font-sans font-light leading-relaxed text-justify">
                            From rope-drilled stable cylinders to heavy 25 kg pasture blocks, our range is supplied to feed mills, retail agri-stores, and private-label brands worldwide — with full veterinary-grade documentation and MOQ flexibility.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-sans font-black uppercase tracking-[0.3em] text-brand-navy/60">
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Veterinary Grade</span>
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> 98–99% NaCl</span>
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> 84+ Trace Minerals</span>
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Private Label</span>
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
                            src="/img/Animal Lick Salt.png"
                            alt="Himalayan Animal Lick Salt"
                            className="w-full h-auto object-cover rounded-md shadow-xl relative z-10"
                        />
                    </motion.div>
                </section>
            </div>

            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {LICK_PRODUCTS.map((p, idx) => (
                        <LickCard key={p.name} product={p} delay={idx * 0.12} />
                    ))}
                </section>

                <SpecTable
                    title="Animal Lick Specifications & Packing"
                    subtitle="Pressed Himalayan pink salt cylinders and blocks for livestock — cattle, horses, camels, sheep, and goats. Custom shapes and heavy-pasture weights produced on request."
                    groups={LICK_SPEC_GROUPS}
                    defaultPacking={LICK_DEFAULT_PACKING}
                />
            </div>

            <LickCTA onOpen={() => setQuoteOpen(true)} />

            <QuoteFormModal
                open={quoteOpen}
                onClose={() => setQuoteOpen(false)}
                productCategory="Animal Lick Salt"
            />
        </div>
    );
};

/**
 * Animal Lick product card — large image header + spec list below.
 */
const LickCard = ({ product, delay }) => (
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
                    Livestock · Barn
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
 * Full-width CTA banner mirroring the Bath / Wellness / Culinary pages.
 */
const LickCTA = ({ onOpen }) => (
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
                        B2B · Feed Mills · Retail · Private Label
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black leading-[1.05] mt-5">
                        Ready to import <br />
                        <span className="text-brand-gold italic">Himalayan Lick Salt?</span>
                    </h2>
                    <p className="text-white/60 font-sans font-light mt-6 max-w-xl leading-relaxed">
                        From rope-drilled stable cylinders to heavy 25 kg pasture blocks — tell us the weight, shape, and MOQ and our export team will reply with a tailored FOB/CIF proposal within one business day.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-sans font-black uppercase tracking-[0.3em] text-white/50">
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> 24h Response</span>
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Custom Shapes</span>
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

export default AnimalLickSaltPage;
