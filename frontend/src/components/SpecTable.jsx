import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable product specifications table.
 * Mirrors the table used on HimalayanEdibleSaltPage so every product line
 * (Culinary, Wellness, Bath, Animal Lick) shares the same catalogue format.
 *
 * Props:
 *  - eyebrow     : small gold label above the heading (default "Product Catalogue")
 *  - title       : large heading text
 *  - subtitle    : intro paragraph below the heading
 *  - groups      : [{ group: string, items: [{ sr, art, name, size, packing? }] }]
 *  - defaultPacking : fallback packing string when an item has no `packing`
 *  - sizeLabel   : header label for the size column (default "Size")
 */
const SpecTable = ({
    eyebrow = "Product Catalogue",
    title,
    subtitle,
    groups,
    defaultPacking,
    sizeLabel = "Size",
}) => (
    <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white rounded-md shadow-xl overflow-hidden mb-24"
    >
        <div className="px-5 sm:px-8 md:px-14 py-8 md:py-10 border-b border-slate-100 text-center">
            <span className="text-brand-gold font-sans font-extrabold uppercase tracking-[0.4em] text-[10px] md:text-[11px]">{eyebrow}</span>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-sans font-black text-brand-navy mt-3 md:mt-4 leading-tight">{title}</h2>
            {subtitle && (
                <p className="text-slate-500 font-sans font-light leading-relaxed mt-4 max-w-3xl mx-auto text-sm md:text-base">
                    {subtitle}
                </p>
            )}
        </div>

        {/* DESKTOP / TABLET TABLE — md and above */}
        <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-[760px] text-left border-collapse">
                <thead className="bg-brand-navy text-white">
                    <tr>
                        <th className="py-5 px-4 md:px-6 text-[10px] font-sans font-black uppercase tracking-[0.3em] w-[80px]">Sr #</th>
                        <th className="py-5 px-4 md:px-6 text-[10px] font-sans font-black uppercase tracking-[0.3em] w-[130px]">Art #</th>
                        <th className="py-5 px-4 md:px-6 text-[10px] font-sans font-black uppercase tracking-[0.3em]">Product Name</th>
                        <th className="py-5 px-4 md:px-6 text-[10px] font-sans font-black uppercase tracking-[0.3em] w-[170px]">{sizeLabel}</th>
                        <th className="py-5 px-4 md:px-6 text-[10px] font-sans font-black uppercase tracking-[0.3em] w-[280px]">Packing</th>
                    </tr>
                </thead>
                <tbody>
                    {groups.map((group) => (
                        <React.Fragment key={group.group}>
                            <tr className="bg-brand-navy/[0.04]">
                                <td colSpan={5} className="px-4 md:px-6 py-3">
                                    <span className="flex items-center gap-3 text-brand-navy font-sans font-black uppercase tracking-[0.25em] text-xs">
                                        <span className="w-2 h-2 rounded-full bg-brand-gold" />
                                        {group.group}
                                    </span>
                                </td>
                            </tr>
                            {group.items.map((item, idx) => (
                                <tr
                                    key={item.sr}
                                    className={`border-t border-slate-100 hover:bg-brand-gold/5 transition-colors ${idx % 2 === 1 ? "bg-slate-50/50" : ""}`}
                                >
                                    <td className="px-4 md:px-6 py-4 align-middle">
                                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-brand-gold/10 text-brand-gold font-sans font-black text-sm">
                                            {item.sr}
                                        </span>
                                    </td>
                                    <td className="px-4 md:px-6 py-4 font-mono text-brand-navy text-sm font-bold whitespace-nowrap align-middle">
                                        {item.art}
                                    </td>
                                    <td className="px-4 md:px-6 py-4 text-brand-navy font-sans font-bold align-middle">
                                        {item.name}
                                    </td>
                                    <td className="px-4 md:px-6 py-4 align-middle">
                                        <span className="inline-block px-3 py-1.5 rounded-full border border-brand-navy/20 text-brand-navy text-xs font-sans font-bold whitespace-nowrap">
                                            {item.size}
                                        </span>
                                    </td>
                                    <td className="px-4 md:px-6 py-4 text-slate-500 text-sm font-sans font-light align-middle">
                                        {item.packing || defaultPacking}
                                    </td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>

        {/* MOBILE CARDS — below md */}
        <div className="md:hidden">
            {groups.map((group) => (
                <div key={group.group}>
                    <div className="bg-brand-navy/[0.04] px-5 py-3 border-b border-slate-100">
                        <span className="flex items-center gap-3 text-brand-navy font-sans font-black uppercase tracking-[0.25em] text-[11px]">
                            <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                            {group.group}
                        </span>
                    </div>
                    {group.items.map((item, idx) => (
                        <div
                            key={item.sr}
                            className={`px-5 py-5 border-b border-slate-100 ${idx % 2 === 1 ? "bg-slate-50/50" : ""}`}
                        >
                            <div className="flex items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3 min-w-0">
                                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-brand-gold/10 text-brand-gold font-sans font-black text-sm flex-shrink-0">
                                        {item.sr}
                                    </span>
                                    <span className="font-mono text-brand-navy text-xs font-bold truncate">{item.art}</span>
                                </div>
                                <span className="inline-block px-3 py-1 rounded-full border border-brand-navy/20 text-brand-navy text-[11px] font-sans font-bold whitespace-nowrap flex-shrink-0">
                                    {item.size}
                                </span>
                            </div>
                            <h4 className="text-brand-navy font-sans font-bold leading-snug mb-3 text-[15px]">
                                {item.name}
                            </h4>
                            <div className="pt-3 border-t border-slate-100">
                                <span className="block text-[9px] font-sans font-black uppercase tracking-[0.3em] text-brand-navy/50 mb-1.5">Packing</span>
                                <span className="text-slate-500 text-[13px] font-sans font-light leading-relaxed">
                                    {item.packing || defaultPacking}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </motion.section>
);

export default SpecTable;
