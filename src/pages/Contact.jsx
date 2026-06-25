import React from 'react';
import { Phone, Mail, MapPin, Send, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <div>
            <h1 className="text-brand-blue font-semibold tracking-wider uppercase mb-2 text-sm">Get in Touch</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Let's Build Your Future</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Ready to start your dream project? Contact us today for a consultation or a detailed estimation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/60 p-4 rounded-full shadow-sm">
                  <MapPin size={24} className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-1">Office Address</h3>
                  <p className="text-slate-600 leading-relaxed max-w-sm">
                    No.747, 1st Floor, Johnson Complex, <br />
                    Thalambur Koot Road (Thalambur Main Road), <br />
                    Navalur, Chennai - 600130.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/60 p-4 rounded-full shadow-sm">
                  <Phone size={24} className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-1">Phone Numbers</h3>
                  <p className="text-slate-600">+91 81900 28664</p>
                  <p className="text-slate-600">+91 97878 48664</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/60 p-4 rounded-full shadow-sm">
                  <Globe size={24} className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-1">Website</h3>
                  <p className="text-slate-600">www.pinnaclebuilders.co</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel rounded-3xl p-8 relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Send Us a Message</h3>
            
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">First Name</label>
                  <input type="text" className="w-full bg-white/50 border border-white/50 text-slate-800 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white/50 border border-white/50 text-slate-800 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Email Address</label>
                <input type="email" className="w-full bg-white/50 border border-white/50 text-slate-800 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Project Details</label>
                <textarea rows="4" className="w-full bg-white/50 border border-white/50 text-slate-800 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all resize-none"></textarea>
              </div>

              <button type="button" className="w-full glass-button py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 mt-4">
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
