import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import QuoteFormModal from "./QuoteFormModal";
import SpecTable from "./SpecTable";

const BATH_SPEC_GROUPS = [
    {
        group: "Pink Salt Soaps",
        items: [
            { sr: "01", art: "BT-SP-R90",  name: "Pink Salt Soap – Rectangular", size: "90 g" },
            { sr: "02", art: "BT-SP-R120", name: "Pink Salt Soap – Rectangular", size: "120 g" },
            { sr: "03", art: "BT-SP-R180", name: "Pink Salt Soap – Rectangular", size: "180 g" },
            { sr: "04", art: "BT-SP-OVL",  name: "Pink Salt Soap – Oval",         size: "100 g · 140 g" },
            { sr: "05", art: "BT-SP-HRT",  name: "Salt Soap – Heart Shape",       size: "80 g · 120 g" },
        ],
    },
    {
        group: "Massage & Bath Accessories",
        items: [
            { sr: "06", art: "BT-BL-4",  name: "Salt Massage Ball", size: "Ø 4 cm" },
            { sr: "07", art: "BT-BL-6",  name: "Salt Massage Ball", size: "Ø 6 cm" },
            { sr: "08", art: "BT-BL-8",  name: "Salt Massage Ball", size: "Ø 8 cm" },
        ],
    },
    {
        group: "Deodorants",
        items: [
            { sr: "09", art: "BT-DO-60",  name: "Salt Deo Stick – Twist-up", size: "60 g" },
            { sr: "10", art: "BT-DO-90",  name: "Salt Deo Stick – Twist-up", size: "90 g" },
            { sr: "11", art: "BT-DO-120", name: "Salt Deo Stick – Block",    size: "120 g" },
        ],
    },
    {
        group: "Bath Salt Crystals",
        items: [
            { sr: "12", art: "BT-CR-F", name: "Bath Salt – Fine",     size: "1 – 2 mm" },
            { sr: "13", art: "BT-CR-G", name: "Bath Salt – Granules", size: "2 – 5 mm" },
            { sr: "14", art: "BT-CR-C", name: "Bath Salt – Chunks",   size: "2 – 5 cm" },
        ],
    },
];

const BATH_DEFAULT_PACKING = "Retail pouch, Gift box, 1 kg, 5 kg, 25 kg PP Bag, Private Label";

/**
 * Bath Salt landing page.
 * Linked from the "View Specifications" button of the "Bath Salt"
 * StoryPanel on ProductExperience. Hash route: "#/bath-salt".
 */

const BATH_PRODUCTS = [
    {
        name: "Pink Salt Soap",
        tag: "Hand-cut Himalayan pink salt bars that cleanse, exfoliate, and re-mineralize the skin in a single pass. A signature retail favourite for spas, hotels, and wellness brands.",
        img: "/img/pink salt soap.png",
        specs: [
            { label: "Weight", value: "90 g · 120 g · 180 g" },
            { label: "Shape", value: "Rectangular · Oval · Custom" },
            { label: "Use", value: "Daily cleanse · Exfoliation · Gifting" },
        ],
    },
    {
        name: "Salt Soap Heart Shape",
        tag: "Romantic hand-carved salt soap hearts crafted for premium retail, hospitality turn-down service, and seasonal gifting lines. A signature private-label favourite.",
        img: "/img/salt soap heart shap.png",
        specs: [
            { label: "Weight", value: "80 g · 120 g" },
            { label: "Finish", value: "Hand-carved · Polished surface" },
            { label: "Use", value: "Gifting · Retail · Hospitality" },
        ],
    },
    {
        name: "Salt Balls",
        tag: "Massage-ready Himalayan salt balls — polished spheres used by therapists and self-care enthusiasts to relax muscles, improve circulation, and deliver a warm mineral glow.",
        img: "/img/salt balls.png",
        specs: [
            { label: "Diameter", value: "4 cm · 6 cm · 8 cm" },
            { label: "Finish", value: "Hand-polished · Smooth" },
            { label: "Use", value: "Massage therapy · Hot/cold spa" },
        ],
    },
    {
        name: "Salt Deo Stick",
        tag: "Alum-free Himalayan salt deodorant sticks — a natural, chemical-free daily essential. Odour-neutralising, skin-friendly, and built for premium retail and subscription lines.",
        img: "/img/salt deo stick.png",
        specs: [
            { label: "Weight", value: "60 g · 90 g · 120 g" },
            { label: "Form", value: "Twist-up · Roll-on base · Block" },
            { label: "Use", value: "Daily deodorant · Travel · Retail" },
        ],
    },
];

const goBack = () => {
    if (typeof window !== "undefined") {
        window.location.hash = "";
        window.scrollTo({ top: 0, behavior: "instant" });
    }
};

const BathSaltPage = () => {
    const [quoteOpen, setQuoteOpen] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen pb-24">

            {/* PAGE BANNER */}
            <section className="relative bg-gradient-to-br from-brand-navy via-[#002a56] to-brand-navy text-white pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#f9d0d0]/20 rounded-full blur-3xl pointer-events-none" />

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
                        <span className="text-brand-gold">Bath Salt</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-none">
                        Bath <span className="text-brand-gold italic">Salt</span>
                    </h1>
                    <p className="text-white/60 font-sans font-light mt-8 max-w-2xl text-lg leading-relaxed">
                        Hand-crafted bath &amp; body essentials carved from pure Himalayan pink salt — a complete cosmetic range ready for premium retail, spa hospitality, and private-label wellness brands.
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
                            A Complete Pink Salt Bath &amp; Body Range
                        </h2>
                        <p className="text-slate-500 font-sans font-light leading-relaxed mb-6 text-justify">
                            GlobexisImpex Bath Salt transforms pure, unrefined <span className="text-brand-navy font-bold">Khewra pink salt</span> into a full cosmetic line — bath soaks, hand-cut soap bars, massage balls, and alum-free deodorant sticks. Every product is crafted to deliver skin-friendly mineralisation, a calming ritual, and genuine shelf appeal.
                        </p>
                        <p className="text-slate-500 font-sans font-light leading-relaxed text-justify">
                            From retail jars to custom-branded gift boxes, our range is supplied with full lab documentation and scaled to your MOQ. Partner with us to launch a premium bath and body line rooted in Himalayan wellness tradition.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-sans font-black uppercase tracking-[0.3em] text-brand-navy/60">
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Cosmetic Grade</span>
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Dermatologically Tested</span>
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> HALAL</span>
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
                            src="/img/Bath Salt.png"
                            alt="Himalayan Bath Salt"
                            className="w-full h-auto object-cover rounded-md shadow-xl relative z-10"
                        />
                    </motion.div>
                </section>
            </div>

            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {BATH_PRODUCTS.map((p, idx) => (
                        <BathCard key={p.name} product={p} delay={idx * 0.12} />
                    ))}
                </section>

                <SpecTable
                    title="Bath Salt Specifications & Packing"
                    subtitle="Himalayan pink salt soaps, massage balls, deodorant sticks, and bath crystals. Custom weights, fragrances, and private-label packaging produced on request."
                    groups={BATH_SPEC_GROUPS}
                    defaultPacking={BATH_DEFAULT_PACKING}
                />
            </div>

            <BathCTA onOpen={() => setQuoteOpen(true)} />

            <QuoteFormModal
                open={quoteOpen}
                onClose={() => setQuoteOpen(false)}
                productCategory="Bath Salt"
            />
        </div>
    );
};

/**
 * Bath product card — large image header + spec list below.
 */
const BathCard = ({ product, delay }) => (
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
                    Bath · Body · Spa
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
 * Full-width CTA banner mirroring the Wellness / Salt Culinary / Pink / White / Black pages.
 */
const BathCTA = ({ onOpen }) => (
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
                        B2B · Retail · Spa · Private Label
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black leading-[1.05] mt-5">
                        Launch your own <br />
                        <span className="text-brand-gold italic">Bath &amp; Body line</span>
                    </h2>
                    <p className="text-white/60 font-sans font-light mt-6 max-w-xl leading-relaxed">
                        From retail-ready salt soap bars to signature deo sticks and massage balls — tell us the product mix, packaging, and MOQ, and our team will reply with a tailored proposal within one business day.
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

export default BathSaltPage;
