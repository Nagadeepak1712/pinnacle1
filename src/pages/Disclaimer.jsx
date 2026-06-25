import React from 'react';
import { motion } from 'motion/react';

export default function Disclaimer() {
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-40 pb-32 text-slate-800 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-slate-200/50 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#b88d44]/10 blur-[120px]" />
      </div>

      <section className="px-6 max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">
            Disclaimer
          </h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#b88d44] to-transparent mx-auto" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-slate-100 text-slate-600 leading-relaxed text-justify space-y-6"
        >
          <p>
            When you voluntarily send us an email or fill out a form, we will keep a record of this information in order to respond to you. We only collect information from you when you register on our site or complete a form. When filling out a form on our site, you may be asked to provide your name, email address, or phone number. However, you may visit our site anonymously. If you submit your personal information and contact details, we reserve the right to call, SMS, email, or message you via WhatsApp about our products and offers, even if your number has DND (Do Not Disturb) activated.
          </p>
          <p>
            The information contained in this site is for prospective purchasers and general guidance on matters of interest only. Pinnacle Builders & Promoters provides information based on sources believed to be accurate and reliable. Users are responsible for seeking the advice of professionals, as appropriate, regarding the information, specifications, features, opinions, FAQs, advice or content available at Pinnacle Builders & Promoters. Pinnacle Builders & Promoters makes no representations and disclaims all warranties, whether express, implied, or statutory, including but not limited to warranties as to accuracy, reliability, usefulness, completeness, or fitness of information for any particular purpose, non-infringement and any damages ensuing thereby. In no event shall Pinnacle Builders & Promoters or its Chairman, Managing Director, directors, managers, officers, employees or content providers be liable for any direct, indirect, special, incidental, exemplary, punitive or consequential damages, whether or not advised of the possibility of such damages including without limitation, those pertaining to lost profits to any Pinnacle Builders & Promoters subscriber, participant, customer, or other person or entity for furnishing of information or arising from the contents/use of this website.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
