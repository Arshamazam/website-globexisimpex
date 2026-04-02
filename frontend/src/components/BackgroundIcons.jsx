import React from 'react';
import { motion } from 'framer-motion';

const BackgroundIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Left Mountain */}
      <motion.img 
        src="/img/mountain.png" 
        alt="" 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 -left-20 w-[40%] max-w-lg opacity-10 blur-[1px]"
      />

      {/* Center Mountain (Watermark) */}
      <motion.img 
        src="/img/mountain.png" 
        alt="" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] max-w-2xl opacity-5 grayscale"
      />

      {/* Right Mountain */}
      <motion.img 
        src="/img/mountain.png" 
        alt="" 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 -right-20 w-[40%] max-w-lg opacity-10 blur-[1px]"
      />
    </div>
  );
};

export default BackgroundIcons;
