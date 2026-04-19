import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import QuoteFormModal from "./QuoteFormModal";
import SpecTable from "./SpecTable";

const WELLNESS_SPEC_GROUPS = [
    {
        group: "Salt Lamps",
        items: [
            { sr: "01", art: "WL-LMP-N-S",  name: "Natural Salt Lamp – Small",  size: "2 – 3 kg" },
            { sr: "02", art: "WL-LMP-N-M",  name: "Natural Salt Lamp – Medium", size: "3 – 5 kg" },
            { sr: "03", art: "WL-LMP-N-L",  name: "Natural Salt Lamp – Large",  size: "5 – 7 kg" },
            { sr: "04", art: "WL-LMP-N-XL", name: "Natural Salt Lamp – XL",     size: "7 – 11 kg" },
            { sr: "05", art: "WL-LMP-C",    name: "Crafted Lamp (Pyramid / Sphere / Bowl)", size: "2 – 4 kg" },
        ],
    },
    {
        group: "Candle Holders",
        items: [
            { sr: "06", art: "WL-CDL-1", name: "Single Candle Holder", size: "1 – 2 kg" },
            { sr: "07", art: "WL-CDL-3", name: "Triple Candle Holder", size: "3 – 4 kg" },
            { sr: "08", art: "WL-CDL-C", name: "Cubic Candle Holder",  size: "2 – 3 kg" },
        ],
    },
    {
        group: "Aromatherapy",
        items: [
            { sr: "09", art: "WL-ARO-D", name: "Salt Aromatherapy Diffuser", size: "1.5 – 3 kg" },
            { sr: "10", art: "WL-ARO-O", name: "Essential Oil Set (Lavender · Eucalyptus · Rose)", size: "10 ml × 3" },
        ],
    },
    {
        group: "Salt Room Elements",
        items: [
            { sr: "11", art: "WL-RM-BRK", name: "Salt Room Bricks",   size: "20 × 10 × 5 cm" },
            { sr: "12", art: "WL-RM-TLE", name: "Salt Room Tiles",    size: "20 × 20 × 2.5 cm" },
            { sr: "13", art: "WL-RM-FLR", name: "Halite Floor Salt",  size: "2 – 10 mm" },
        ],
    },
];

const WELLNESS_DEFAULT_PACKING = "Bubble-wrap, Gift box, Master carton, Private Label";

/**
 * Wellness landing page.
 * Linked from the "View Specifications" button of the "Wellness"
 * StoryPanel on ProductExperience. Hash route: "#/wellness".
 */

const WELLNESS_PRODUCTS = [
    {
        name: "Salt Lamp",
        tag: "Hand-carved Himalayan pink salt lamps that release a warm amber glow — known to purify the air, calm the mind, and transform any space into a wellness retreat.",
        img: "/img/Salt Lamps.png",
        specs: [
            { label: "Weight", value: "2–5 kg · 5–7 kg · 7–11 kg" },
            { label: "Finish", value: "Natural rough · Polished · Shaped" },
            { label: "Use", value: "Air ionization · Ambient lighting" },
        ],
    },
    {
        name: "Salt Candle Holder",
        tag: "Hand-crafted salt candle holders that bathe the room in a soft rose glow. A centerpiece-ready wellness accent for spas, yoga studios, and premium retail gifting.",
        img: "/img/Salt candle holder.png",
        specs: [
            { label: "Forms", value: "Single · Triple · Cubic · Sculpted" },
            { label: "Finish", value: "Natural crystal · Polished" },
            { label: "Use", value: "Ambience · Meditation · Gifting" },
        ],
    },
    {
        name: "Salt Aroma Therapy",
        tag: "Aromatherapy diffusers carved from solid Himalayan salt. Pair with essential oils to enrich the air with both mineral ions and calming fragrance — the complete sensory wellness ritual.",
        img: "/img/Aroma Therapy (1).png",
        specs: [
            { label: "Oils", value: "Lavender · Eucalyptus · Rose · Custom" },
            { label: "Finish", value: "Hand-carved salt body" },
            { label: "Use", value: "Halo-aromatherapy · Relaxation" },
        ],
    },
    {
        name: "Salt Room",
        tag: "Turn-key halotherapy rooms — walls, tiles, and flooring crafted from premium Himalayan salt bricks. Engineered for medical-grade spas, hotels, and wellness clinics worldwide.",
        img: "/img/salt room (1).png",
        specs: [
            { label: "Elements", value: "Bricks · Tiles · Floor Salt · Panels" },
            { label: "Installation", value: "Turn-key · Custom blueprint" },
            { label: "Use", value: "Halotherapy · Spa · Clinic" },
        ],
    },
];

const goBack = () => {
    if (typeof window !== "undefined") {
        window.location.hash = "";
        window.scrollTo({ top: 0, behavior: "instant" });
    }
};

const WellnessPage = () => {
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
                        <span className="text-brand-gold">Wellness</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-none">
                        Salt <span className="text-brand-gold italic">Wellness</span>
                    </h1>
                    <p className="text-white/60 font-sans font-light mt-8 max-w-2xl text-lg leading-relaxed">
                        Hand-carved Himalayan salt products engineered for spas, halotherapy clinics, hotels, and premium retail — the complete wellness range, supplied directly from the Khewra mines.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 lg:px-20 max-w-7xl pt-20">

                {/* WELLNESS PRODUCT GRID */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {WELLNESS_PRODUCTS.map((p, idx) => (
                        <WellnessCard key={p.name} product={p} delay={idx * 0.12} />
                    ))}
                </section>

                {/* SPECIFICATIONS TABLE */}
                <SpecTable
                    title="Wellness Specifications & Packing"
                    subtitle="Hand-carved Himalayan salt wellness line — lamps, candle holders, aromatherapy diffusers, and turn-key halotherapy room elements. Custom shapes and private-label packaging on request."
                    groups={WELLNESS_SPEC_GROUPS}
                    defaultPacking={WELLNESS_DEFAULT_PACKING}
                />
            </div>

            {/* GET A QUOTE CTA */}
            <WellnessCTA onOpen={() => setQuoteOpen(true)} />

            <QuoteFormModal
                open={quoteOpen}
                onClose={() => setQuoteOpen(false)}
                productCategory="Salt Wellness"
            />
        </div>
    );
};

/**
 * Wellness product card — large image header + spec list below.
 */
const WellnessCard = ({ product, delay }) => (
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
                    Wellness · Artisan
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
                    <div key={s.label} className="grid grid-cols-[130px_1fr] gap-4 py-3">
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
 * Full-width CTA banner mirroring the Salt Culinary / Pink / White / Black pages.
 */
const WellnessCTA = ({ onOpen }) => (
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
                        B2B · Spa · Retail · Private Label
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black leading-[1.05] mt-5">
                        Launch your own <br />
                        <span className="text-brand-gold italic">Wellness range</span>
                    </h2>
                    <p className="text-white/60 font-sans font-light mt-6 max-w-xl leading-relaxed">
                        From statement salt lamps to turn-key halotherapy rooms — tell us the product mix, finish, and MOQ and our team will reply with a tailored FOB/CIF proposal within one business day.
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

export default WellnessPage;
