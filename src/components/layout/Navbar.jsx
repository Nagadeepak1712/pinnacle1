import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/#services' },
    { 
      name: 'Projects', 
      href: '/projects',
      subLinks: [
        { name: 'Residential', href: '/projects?category=Residential' },
        { name: 'Commercial', href: '/projects?category=Commercial' },
        { name: 'Apartments', href: '/projects?category=Apartments' }
      ]
    },
    { name: 'Investors Guide', href: '/investors' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Process', href: '/#process' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${
        isScrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
           <motion.img 
              animate={{ y: [0, -4, 0] }}
              whileHover={{ scale: 1.05, rotate: -2, filter: 'brightness(1.2)' }}
              transition={{ 
                y: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
                scale: { type: 'spring', stiffness: 400, damping: 10 },
                rotate: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              src="/logo.png" alt="Pinnacle Builders & Promoters Logo" className="h-16 md:h-20 w-auto object-contain rounded-md -my-4" 
           />
           <div className="flex flex-col items-center justify-center leading-none mt-1 ml-1">
             <span className="text-2xl md:text-[28px] font-serif text-[#0b1d35] tracking-[0.15em] mb-1.5">
               PINNACLE
             </span>
             <div className="flex items-center w-full gap-1.5">
               <div className="h-[1px] bg-[#b88d44] flex-grow"></div>
               <span className="text-[7px] md:text-[8.5px] font-sans font-semibold tracking-[0.2em] text-[#b88d44] uppercase whitespace-nowrap">
                 BUILDERS & PROMOTERS
               </span>
               <div className="h-[1px] bg-[#b88d44] flex-grow"></div>
             </div>
           </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <div className="relative group">
                  {link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link
                      to={link.href}
                      className="relative text-xs font-bold tracking-widest text-slate-600 hover:text-blue-600 uppercase transition-colors inline-block py-2"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="relative text-xs font-bold tracking-widest text-slate-600 hover:text-blue-600 uppercase transition-colors inline-block py-2"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  )}

                  {link.subLinks && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden flex flex-col">
                      {link.subLinks.map(subLink => (
                        <Link 
                          key={subLink.name} 
                          to={subLink.href} 
                          className="px-5 py-3 text-xs font-bold tracking-widest text-slate-600 hover:text-blue-600 hover:bg-slate-50 uppercase transition-colors border-b border-slate-50 last:border-0"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden md:flex items-center"
        >
          <a
            href="https://wa.me/918190028664?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wide flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-600/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get In Touch 
              <span className="bg-white/20 text-white rounded-full p-1 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
              </span>
            </span>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-800 transition-colors z-50 relative outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-3xl border border-white/40 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl md:hidden origin-top"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col"
                  >
                    <a
                      href={link.href}
                      className="block py-3 px-4 rounded-xl text-slate-800 font-bold text-lg uppercase tracking-wider hover:bg-slate-50 hover:text-blue-600 transition-colors"
                      onClick={() => !link.subLinks && setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                    {link.subLinks && (
                      <div className="flex flex-col pl-6 mt-1 border-l-2 border-slate-100 ml-6 gap-2">
                        {link.subLinks.map(subLink => (
                          <Link 
                            key={subLink.name} 
                            to={subLink.href}
                            className="py-2 text-slate-600 font-bold text-sm uppercase tracking-wider hover:text-blue-600 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
              <div className="h-px w-full bg-slate-100 my-2" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://wa.me/918190028664?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-5 py-4 rounded-full text-center font-bold tracking-wide flex items-center justify-center gap-2 hover:bg-slate-900 transition-colors shadow-lg hover:shadow-blue-600/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get In Touch <ArrowUpRight size={18} />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
