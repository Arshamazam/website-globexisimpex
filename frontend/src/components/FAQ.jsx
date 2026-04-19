import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

/**
 * Step 8.6: Advanced Searchable & Categorized FAQ Hub.
 * Features: Dynamic Category Tabs, Real-time Search, and One-at-a-time Accordions.
 * Branding: Navy (#003366) and Gold (#C5A059).
 */

const FAQ_CATEGORIES = ["All", "Shipping", "Packaging", "Product Quality"];

const FAQ_DATA = [
  { 
    id: 1, 
    category: "Shipping", 
    question: "How long does international shipping take?", 
    answer: "Standard ocean freight typically takes 20-35 days depending on the destination port. Air freight for smaller samples takes 5-7 business days." 
  },

  { 
    id: 3, 
    category: "Packaging", 
    question: "Do you offer custom private labeling?", 
    answer: "Yes! We specialize in end-to-end private labeling. From jar designs to custom pouches and master cartons, our design team handles everything for your brand." 
  },
  { 
    id: 4, 
    category: "Product Quality", 
    question: "Are your salt products certified for export?", 
    answer: "Every batch is ISO 9001, HALAL, and HACCP certified. We provide 3rd party lab reports (SGS or PCSI) with every shipment to guarantee purity levels." 
  },
  { 
    id: 5, 
    category: "Shipping", 
    question: "What is your Minimum Order Quantity (MOQ)?", 
    answer: "Our standard MOQ starts from one 20ft Full Container Load (FCL). However, we offer trial orders for premium specialty salts in LCL (Less than Container Load)." 
  },
  { 
    id: 6, 
    category: "Product Quality", 
    question: "Where is your Himalayan salt sourced from?", 
    answer: "Our salt is hand-mined directly from the Khewra and Kalabagh regions of Pakistan, ensuring 100% authenticity and 84 essential trace minerals." 
  },
  { 
    id: 7, 
    category: "Packaging", 
    question: "What bulk packaging sizes do you offer?", 
    answer: "We provide 25kg, 50kg, and 1000kg Jumbo Bags. For retailers, we offer standard pouch sizes from 200g up to 5kg." 
  }
];

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [openId, setOpenId] = useState(1);

    // Filtering Logic (Category + Search)
    const filteredFAQs = useMemo(() => {
        return FAQ_DATA.filter(item => {
            const matchesCategory = activeCategory === "All" || item.category === activeCategory;
            const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 item.answer.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="w-full max-w-5xl mx-auto py-10 px-4">
                
                {/* 1. SECTION HEADER */}
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-navy tracking-tight">
                        FAQ <span className="text-brand-gold italic">Hub</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-brand-gold mx-auto rounded-full" />
                    <p className="text-slate-500 text-lg font-light italic mt-6 max-w-2xl mx-auto">
                        Everything you need to know about our global export process.
                    </p>
                </div>

                {/* 2. SEARCH BAR & CATEGORIES */}
                <div className="max-w-4xl mx-auto mb-16 space-y-8">
                    
                    {/* Search Input */}
                    <div className="relative group">
                        <input 
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search your question..."
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl px-10 py-5 text-base focus:outline-none focus:border-brand-gold transition-all duration-300"
                        />
                    </div>

                    {/* Category Navigation */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {FAQ_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                                    activeCategory === cat 
                                    ? "bg-brand-navy border-brand-navy text-white" 
                                    : "bg-white border-slate-100 text-slate-400 hover:border-brand-gold"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3. ACCORDION FAQ ITEMS */}
                <div className="max-w-4xl mx-auto space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    <AnimatePresence mode="popLayout">
                        {filteredFAQs.length > 0 ? (
                            filteredFAQs.map((faq, idx) => (
                                <motion.div
                                    key={faq.id}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className={`rounded-2xl border transition-all duration-300 ${
                                        openId === faq.id 
                                        ? "border-brand-gold bg-slate-50 shadow-lg" 
                                        : "border-slate-100 bg-white"
                                    }`}
                                >
                                    <button 
                                        onClick={() => toggleAccordion(faq.id)}
                                        className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                                    >
                                        <div className="space-y-1">
                                            <span className="text-[9px] font-black uppercase text-brand-gold tracking-[0.3em] opacity-60">
                                                {faq.category}
                                            </span>
                                            <h4 className={`text-base md:text-lg font-bold tracking-tight ${
                                                openId === faq.id ? "text-brand-gold" : "text-brand-navy"
                                            }`}>
                                                {faq.question}
                                            </h4>
                                        </div>
                                        <motion.div 
                                            animate={{ rotate: openId === faq.id ? 180 : 0 }}
                                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                                                openId === faq.id ? "bg-brand-gold text-white" : "bg-slate-50 text-brand-navy"
                                            }`}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {openId === faq.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-6 md:p-8 pt-0 text-slate-500 text-sm leading-relaxed font-light border-t border-brand-gold/10 mt-2 italic">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-10 text-slate-300 italic text-base">
                                No matching questions found.
                            </div>
                        )}
                    </AnimatePresence>
                </div>
        </div>
    );
};

export default FAQ;
