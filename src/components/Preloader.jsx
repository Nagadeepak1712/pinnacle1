import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader({ onComplete }) {
  const [stage, setStage] = useState('logo'); // 'logo' -> 'opening'

  useEffect(() => {
    // Disable scroll while preloader is active
    document.body.style.overflow = 'hidden';

    // After 2.5 seconds, start the cinematic opening (curtains part ways)
    const timer1 = setTimeout(() => {
      setStage('opening');
    }, 2800);

    // After the opening animation completes (1.4s), notify parent to unmount
    const timer2 = setTimeout(() => {
      document.body.style.overflow = '';
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-auto">
      {/* Top Curtain */}
      <motion.div 
        className="absolute top-0 left-0 w-full bg-white z-0"
        initial={{ height: "50vh" }}
        animate={stage === 'opening' ? { height: "0vh" } : { height: "50vh" }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Bottom Curtain */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full bg-white z-0"
        initial={{ height: "50vh" }}
        animate={stage === 'opening' ? { height: "0vh" } : { height: "50vh" }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Logo and Typography */}
      <AnimatePresence>
        {stage === 'logo' && (
          <motion.div 
            className="relative z-10 flex flex-col items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.85, filter: 'blur(15px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative mb-6 md:mb-8">
              {/* Luxury gold glow effect behind the logo */}
              <motion.div 
                className="absolute inset-0 bg-[#b88d44] rounded-full blur-[60px] opacity-20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <img 
                src="/logo.png" 
                alt="Pinnacle Builders Logo" 
                className="h-28 md:h-36 lg:h-44 w-auto object-contain relative z-10 drop-shadow-xl" 
              />
            </div>
            
            <div className="flex flex-col items-center justify-center leading-none overflow-hidden">
              <motion.span 
                className="text-4xl md:text-[48px] lg:text-[56px] font-serif tracking-[0.25em] mb-4 text-[#0b1d35] drop-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
                PINNACLE
              </motion.span>
              <motion.div 
                className="flex items-center w-full gap-3 px-4"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#b88d44] to-[#b88d44] flex-grow"></div>
                <span className="text-[10px] md:text-[12px] lg:text-[14px] font-sans font-bold tracking-[0.4em] text-[#b88d44] uppercase whitespace-nowrap">
                  BUILDERS & PROMOTERS
                </span>
                <div className="h-[1px] bg-gradient-to-l from-transparent via-[#b88d44] to-[#b88d44] flex-grow"></div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
