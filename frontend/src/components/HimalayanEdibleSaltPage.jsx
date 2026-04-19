import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SpecTable from "./SpecTable";

/**
 * Himalayan Edible Salt landing page.
 * Linked from the "View Specifications" button of the "The Salt of the Earth"
 * StoryPanel. Uses hash-based navigation ("#/himalayan-edible-salt").
 */

const SALT_VARIETIES = [
    { name: "Pink Salt", tag: "The signature Himalayan classic, rich in 84+ trace minerals.", img: "/img/pink salt.png", route: "#/pink-salt" },
    { name: "White Salt", tag: "Clean, refined crystals for everyday culinary precision.", img: "/img/White Salt.png", route: "#/white-salt" },
    { name: "Black Salt", tag: "Kiln-fired Kala Namak with a bold, sulfurous depth.", img: "/img/Black Salt.png", route: "#/black-salt" },
];

const CERTIFICATIONS = ["ISO 9001", "HACCP", "HALAL", "Kosher", "GMP"];

const DEFAULT_PACKING = "500 gr, 1 kg, 25 kg, 50 kg, 1M.Ton Jumbo Bags";

const SALT_SPEC_GROUPS = [
    {
        group: "Running Salt",
        items: [
            { sr: "01", art: "ES-975-A", name: "Running Salt – Light Pink", size: "20 – 50 Mesh" },
            { sr: "02", art: "ES-975-B", name: "Running Salt – Medium Pink", size: "20 – 50 Mesh" },
            { sr: "03", art: "ES-975-C", name: "Running Salt – Dark Pink", size: "20 – 50 Mesh" },
            { sr: "04", art: "ES-970",   name: "Running Salt – White", size: "20 – 50 Mesh" },
            { sr: "05", art: "ES-980",   name: "Running Salt – Black", size: "20 – 50 Mesh" },
        ],
    },
    {
        group: "Crystal Salt Granules",
        items: [
            { sr: "06", art: "ES-931-A", name: "Crystal Salt Granules – Light Pink", size: "1 – 2 mm" },
            { sr: "07", art: "ES-931-B", name: "Crystal Salt Granules – Medium Pink", size: "1 – 2 mm" },
            { sr: "08", art: "ES-931-C", name: "Crystal Salt Granules – Dark Pink", size: "1 – 2 mm" },
            { sr: "09", art: "ES-930-A", name: "Crystal Salt Granules – Light Pink", size: "2 – 5 mm" },
            { sr: "10", art: "ES-930-B", name: "Crystal Salt Granules – Medium Pink", size: "2 – 5 mm" },
            { sr: "11", art: "ES-930-C", name: "Crystal Salt Granules – Dark Pink", size: "2 – 5 mm" },
            { sr: "12", art: "ES-971",   name: "Crystal Salt Granules – White", size: "2 – 5 mm" },
            { sr: "13", art: "ES-935",   name: "Crystal Salt Granules – Clear Halite", size: "2 – 5 mm" },
            { sr: "14", art: "ES-940",   name: "Crystal Salt Granules – Black", size: "2 – 5 mm" },
        ],
    },
    {
        group: "Crystal Salt Chunks",
        items: [
            { sr: "15", art: "ES-920", name: "Crystal Salt Chunks – Pink", size: "2 – 5 cm" },
            { sr: "16", art: "ES-936", name: "Crystal Salt Chunks – Clear Halite", size: "2 – 5 cm" },
            { sr: "17", art: "ES-938", name: "Crystal Salt Chunks – Black", size: "2 – 5 cm" },
        ],
    },
    {
        group: "Crystal Salt Powder",
        items: [
            { sr: "18", art: "ES-851", name: "Crystal Salt Powder – White", size: "50 – 80 Mesh" },
            { sr: "19", art: "ES-852", name: "Crystal Salt Powder – Black", size: "50 – 80 Mesh" },
        ],
    },
    {
        group: "Extra Fine Salt",
        items: [
            { sr: "20", art: "ES-853", name: "Extra Fine Salt – Light Pink", size: "50 – 100 Mesh" },
            { sr: "21", art: "ES-850", name: "Extra Fine Salt – Medium Pink", size: "50 – 100 Mesh" },
            { sr: "22", art: "ES-854", name: "Extra Fine Salt – Dark Pink", size: "50 – 100 Mesh" },
        ],
    },
    {
        group: "Specialty",
        items: [
            { sr: "23", art: "ES-1000", name: "Salt Dispenser (Salt + Bottle)", size: "25 – 50 Mesh", packing: "50 pcs" },
        ],
    },
];

const goBack = () => {
    if (typeof window !== "undefined") {
        window.location.hash = "";
        window.scrollTo({ top: 0, behavior: "instant" });
    }
};

const goToContact = () => {
    if (typeof window !== "undefined") {
        window.location.hash = "";
        setTimeout(() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            else window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }, 200);
    }
};

const HimalayanEdibleSaltPage = () => {
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
                        <span className="text-brand-gold">Himalayan Edible Salt</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-none">
                        Himalayan <span className="text-brand-gold italic">Edible Salt</span>
                    </h1>
                    <p className="text-white/60 font-sans font-light mt-8 max-w-2xl text-lg leading-relaxed">
                        Naturally mined, meticulously screened, and delivered to brands worldwide — pure Khewra-sourced salt in every grade you need.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 lg:px-20 max-w-7xl pt-20">

                {/* SECTION 1: HERO */}
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
                            A Pure Taste from the Khewra Mines
                        </h2>
                        <p className="text-slate-500 font-sans font-light leading-relaxed mb-6 text-justify">
                            Sourced directly from the legendary Khewra mines, GlobexisImpex supplies <a href="#contact" className="text-brand-navy font-bold underline">bulk Himalayan edible salt</a> crafted to elevate every dish. Each grain is hand-screened, entirely natural, and completely free from chemical refiners or anti-caking agents — preserving the 84+ trace minerals that give our salt its signature character and nutritional depth.
                        </p>
                        <p className="text-slate-500 font-sans font-light leading-relaxed text-justify">
                            From fine-dining kitchens to private-label retail shelves, our edible rock salt delivers cleaner flavor, a smoother finish, and proven batch-to-batch consistency. Partner with us to bring the pure taste of the Himalayas into your product line — built to your specifications, held to export-grade standards.
                        </p>
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
                            src="/img/salt page.png"
                            alt="Varieties of Himalayan edible salt in bowls"
                            className="w-full h-auto object-cover rounded-md shadow-xl relative z-10"
                        />
                    </motion.div>
                </section>

                {/* SECTION 2: THREE SALT CARDS */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {SALT_VARIETIES.map((salt, idx) => {
                        const isClickable = Boolean(salt.route);
                        const handleClick = () => {
                            if (!salt.route) return;
                            window.location.hash = salt.route;
                            window.scrollTo({ top: 0, behavior: "instant" });
                        };
                        return (
                            <motion.div
                                key={salt.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -8 }}
                                onClick={handleClick}
                                role={isClickable ? "button" : undefined}
                                tabIndex={isClickable ? 0 : undefined}
                                onKeyDown={isClickable ? (e) => { if (e.key === "Enter") handleClick(); } : undefined}
                                className={`group bg-white rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-500 p-10 flex flex-col items-center text-center ${isClickable ? "cursor-pointer" : ""}`}
                            >
                                <div className="aspect-square w-full max-w-[240px] rounded-full overflow-hidden border-[6px] border-black mb-8 flex items-center justify-center bg-white">
                                    <img
                                        src={salt.img}
                                        alt={salt.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-sans font-black text-brand-navy tracking-wide uppercase">
                                    {salt.name}
                                </h3>
                                <span className="block w-10 h-0.5 bg-brand-gold my-4" />
                                <p className="text-slate-500 font-sans font-light text-sm leading-relaxed max-w-[240px]">
                                    {salt.tag}
                                </p>
                                {isClickable && (
                                    <span className="mt-6 inline-flex items-center gap-2 text-brand-navy group-hover:text-brand-gold font-sans font-black uppercase tracking-[0.3em] text-[10px] transition-colors">
                                        Explore Varieties
                                        <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                )}
                            </motion.div>
                        );
                    })}
                </section>

                {/* SECTION 3: GLOBEXISIMPEX INFO CARD */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white shadow-xl border-l-[6px] border-r-[6px] border-brand-navy px-8 md:px-16 py-14 mb-24 relative overflow-hidden"
                >
                    <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-brand-gold/5 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="text-center mb-10">
                            <span className="text-brand-gold font-sans font-extrabold uppercase tracking-[0.4em] text-[11px]">Who We Are</span>
                            <h2 className="text-2xl md:text-4xl font-sans font-black text-brand-navy text-center leading-tight mt-4">
                                Your Trusted Himalayan Salt Partner in Pakistan
                            </h2>
                            <span className="block w-16 h-0.5 bg-brand-gold mx-auto mt-6" />
                        </div>

                        <div className="space-y-6 text-slate-500 font-sans font-light leading-relaxed text-left max-w-4xl mx-auto">
                            <p>
                                GlobexisImpex is a certified bulk <a href="#contact" className="text-brand-navy font-bold underline">Himalayan salt manufacturer</a> and exporter based in Pakistan, serving global food and wellness brands for more than two decades. Our operations are backed by ISO 9001, HACCP, HALAL, Kosher, and GMP accreditations — benchmarks that reflect the discipline behind every shipment we release.
                            </p>
                            <p>
                                Every kilogram of our edible salt is drawn from premium-grade Himalayan rock and moved through a tightly controlled production chain. As a leading <a href="#contact" className="text-brand-navy underline">Himalayan salt supplier in Pakistan</a>, we rely on dedicated quality checkpoints, traceable batch numbers, and in-house lab analysis to ensure that what leaves our facility meets the purity, granule, and moisture tolerances you specify — nothing less.
                            </p>
                            <p>
                                That same commitment is why wholesalers, distributors, and private-label brands choose us as their preferred <a href="#contact" className="text-brand-navy underline">Himalayan salt exporter</a>. Whether you need retail pouches, 25 kg PP sacks, or 1-ton FIBC jumbo bags, we tailor packaging, labeling, and logistics to fit your market — at prices structured for long-term partnership rather than one-off deals.
                            </p>
                            <p>
                                Today, GlobexisImpex ships Himalayan edible salt across Asia, Europe, the Middle East, Africa, and North America, earning the loyalty of importers who value reliability, full documentation, and a clean, authentic product they can put their name on with confidence.
                            </p>
                        </div>

                        <div className="mt-12 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
                            <span className="text-brand-navy/60 font-sans font-black uppercase tracking-[0.3em] text-[10px] mr-2">Certified By</span>
                            {CERTIFICATIONS.map((cert) => (
                                <span
                                    key={cert}
                                    className="inline-block px-5 py-2 rounded-full border border-brand-navy/20 text-brand-navy text-[10px] font-sans font-black uppercase tracking-[0.2em]"
                                >
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* SECTION 3B: SPECIFICATIONS TABLE */}
                <SpecTable
                    title="Salt Specifications & Packing"
                    subtitle="A reference list of our edible and industrial salt grades with article codes, mesh or grain size, and available packing formats. Custom grades and private-label packaging can be produced on request."
                    groups={SALT_SPEC_GROUPS}
                    defaultPacking={DEFAULT_PACKING}
                />

                {/* SECTION 4: ON DEMAND */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full flex items-center justify-center"
                    >
                        <img
                            src="/img/pink salt.png"
                            alt="Himalayan pink salt on a wooden spoon"
                            className="w-full max-w-lg h-auto object-contain"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white rounded-md shadow-xl p-10 lg:p-14 relative"
                    >
                        <h3 className="text-2xl md:text-3xl font-sans font-black text-brand-navy text-center mb-4">
                            On Demand
                        </h3>
                        <div className="flex items-center justify-center gap-2 mb-8">
                            <span className="w-2 h-2 rounded-full bg-brand-navy/60" />
                            <span className="w-2 h-2 rounded-full bg-brand-navy/60" />
                            <span className="w-2 h-2 rounded-full bg-brand-navy/60" />
                            <span className="w-16 h-0.5 bg-brand-navy ml-2" />
                        </div>
                        <div className="space-y-6 text-slate-600 font-sans font-light leading-relaxed text-center">
                            <p>
                                Any <span className="font-bold text-brand-navy">mesh</span> / <span className="font-bold text-brand-navy">grain</span> size can be produced.
                            </p>
                            <p>
                                Packing : <span className="font-bold text-brand-navy">Bulk</span> &amp; <span className="font-bold text-brand-navy">Retail</span>
                                <br />
                                25 kg, 50 kg, 1M.Ton Jumbo Bags.
                            </p>
                            <p>
                                <span className="font-bold text-brand-navy">Private labels</span> / brands can be placed.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* SECTION 5: CLOSING CTA */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-24 bg-gradient-to-br from-brand-navy via-[#002a56] to-brand-navy rounded-md shadow-2xl p-10 md:p-16 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <span className="text-brand-gold font-sans font-extrabold uppercase tracking-[0.4em] text-[11px]">Ready to Partner?</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight">
                            Request a Quote or Sample
                        </h2>
                        <p className="text-white/60 font-sans font-light mt-6 leading-relaxed">
                            Tell us the grade, packaging, and quantity you need. Our export team responds within one business day with a tailored proposal and full lab documentation.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={goToContact}
                            className="inline-flex items-center gap-4 mt-10 bg-brand-gold text-white font-sans font-black uppercase tracking-[0.3em] text-xs px-10 py-5 rounded-full shadow-xl hover:bg-[#d4b069] transition-colors"
                        >
                            Get in Touch
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>
                </motion.section>

            </div>
        </div>
    );
};

export default HimalayanEdibleSaltPage;
