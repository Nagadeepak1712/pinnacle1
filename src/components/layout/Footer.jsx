import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
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
              <li className="text-sm text-white/80">+91 81900 28664</li>
              <li className="text-sm text-white/80">+91 97878 48664</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-sm hover:text-white/70 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-white/70 transition-colors">Terms and Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-6">Social</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm hover:text-white/70 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm hover:text-white/70 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm hover:text-white/70 transition-colors">Facebook</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <Link to="/" className="flex items-center gap-3 mb-4 md:mb-0">
             <img src="/logo.png" alt="Pinnacle Builders & Promoters Logo" className="h-8 w-auto object-contain rounded-md" />
             <div className="flex flex-col text-[#158cba] uppercase leading-none mt-1">
               <span className="text-xl md:text-[22px] font-black tracking-normal mb-[1px]">
                 PINNACLE
               </span>
               <span className="text-[8px] md:text-[9px] font-semibold tracking-[0.27em]">
                 BUILDERS
               </span>
               <span className="text-[8px] md:text-[9px] font-semibold tracking-[0.27em]">
                 & PROMOTERS
               </span>
             </div>
          </Link>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Pinnacle Builders & Promoters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
