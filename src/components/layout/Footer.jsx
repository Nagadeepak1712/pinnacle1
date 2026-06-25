import React from 'react';
import { Link } from 'react-router-dom';
import PixelSnow from '../PixelSnow';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10 px-6 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <PixelSnow 
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={200}
          speed={1.25}
          density={0.3}
          direction={125}
          brightness={1}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm hover:text-white/70 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white/70 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm hover:text-white/70 transition-colors">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-sm text-white/80">info@pinnaclebuilders.co</li>
              <li className="text-sm text-white/80">
                <a href="https://wa.me/918190028664?text=Hi%2C%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">
                  +91 81900 28664
                </a>
              </li>
              <li className="text-sm text-white/80">
                <a href="https://wa.me/919787848664?text=Hi%2C%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">
                  +91 97878 48664
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-sm hover:text-white/70 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-white/70 transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-sm hover:text-white/70 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-6">Social</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm hover:text-white/70 transition-colors flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white/70 transition-colors flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white/70 transition-colors flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> Facebook
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <Link to="/" className="flex items-center gap-4 md:gap-6 mb-8 md:mb-0">
             <img src="/logo.png" alt="Pinnacle Builders & Promoters Logo" className="h-16 md:h-24 w-auto object-contain rounded-md" />
             <div className="flex flex-col items-center justify-center leading-none mt-1 ml-1">
               <span className="text-4xl md:text-5xl font-serif text-white tracking-[0.15em] mb-2">
                 PINNACLE
               </span>
               <div className="flex items-center w-full gap-2">
                 <div className="h-[2px] bg-[#b88d44] flex-grow"></div>
                 <span className="text-[10px] md:text-sm font-sans font-semibold tracking-[0.2em] text-[#b88d44] uppercase whitespace-nowrap">
                   BUILDERS & PROMOTERS
                 </span>
                 <div className="h-[2px] bg-[#b88d44] flex-grow"></div>
               </div>
             </div>
          </Link>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Pinnacle Builders & Promoters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
