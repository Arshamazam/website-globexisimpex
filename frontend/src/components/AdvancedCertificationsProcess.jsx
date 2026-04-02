import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Step 8.4: Advanced Certifications & Process Experience.
 * Features: Interactive Lightbox for certificates, animated SVG-connector timeline, 
 * and a high-impact B2B reliability panel.
 */

const CERTIFICATES = [
    { id: 1, name: "ISO 9001:2015", img: "/img/ISO 90012015.png", tag: "Quality Management" },
    { id: 2, name: "HACCP Certified", img: "/img/HACCP_Certified.png", tag: "Food Safety" },
    { id: 3, name: "HALAL Pakistan", img: "/img/pakistan-halal.png", tag: "Global Compliance" },
    { id: 4, name: "ISO Certified", img: "/img/ISO.png", tag: "Process Standardization" }
];



const AdvancedCertificationsProcess = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certifications" className="py-32 bg-transparent px-6 lg:px-20 relative overflow-hidden">
            
            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-[2000] bg-brand-navy/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
                    >
                        <motion.button 
                            className="absolute top-10 right-10 text-white text-4xl hover:text-brand-gold transition-colors"
                            onClick={() => setSelectedCert(null)}
                        >
                            ✕
                        </motion.button>
                        <motion.div 
                            initial={{ scale: 0.8, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.8, y: 50, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="max-w-4xl w-full bg-white rounded-[40px] p-4 shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={selectedCert.img} 
                                alt={selectedCert.name} 
                                className="w-full h-auto rounded-[32px] shadow-inner"
                            />
                            <div className="p-8 text-center">
                                <h3 className="text-3xl font-black text-brand-navy uppercase tracking-tighter">{selectedCert.name}</h3>
                                <p className="text-brand-gold font-bold tracking-[0.3em] text-xs mt-2 uppercase">{selectedCert.tag}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto">
                
                {/* 1. CERTIFICATIONS GRID */}
                <div className="mb-32">
                    <div className="text-center mb-16 px-4">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy tracking-tight leading-tight lg:leading-tight"
                        >
                            HACCP, Quality Lab<br className="md:hidden" /> Reports & <span className="text-brand-gold italic text-opacity-90">Partners</span>
                        </motion.h2>
                        <div className="h-1.5 bg-brand-gold w-24 mx-auto rounded-full mt-6" />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {CERTIFICATES.map((cert) => (
                            <motion.div
                                key={cert.id}
                                whileHover={{ y: -10, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedCert(cert)}
                                className="group relative bg-slate-50/50 backdrop-blur-sm p-6 rounded-[40px] border border-slate-100 cursor-zoom-in transition-shadow hover:shadow-2xl flex flex-col items-center"
                            >
                                <div className="aspect-square bg-white rounded-[32px] w-full mb-6 flex items-center justify-center shadow-inner relative overflow-hidden">
                                    <img src={cert.img} alt={cert.name} className="w-1/2 max-h-1/2 object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-sm" />
                                    <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/5 transition-colors" />
                                </div>
                                <h4 className="text-lg font-bold text-brand-navy text-center mb-1">{cert.name}</h4>
                                <span className="text-[10px] text-brand-gold font-black uppercase tracking-[0.2em]">{cert.tag}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>




            </div>
        </section>
    );
};



export default AdvancedCertificationsProcess;
