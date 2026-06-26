import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../data/faqData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // We'll just display the first 10 for the homepage to keep it concise,
  // or all 20 if we want. Let's do top 10.
  const displayFaqs = faqData.slice(0, 10);

  return (
    <section className="py-24 bg-white relative z-10 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0b1d35] mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#b88d44] to-transparent mx-auto mb-8" />
          <p className="text-slate-600 text-lg font-light">
            Everything you need to know about building with Pinnacle Builders & Promoters.
          </p>
        </div>

        <div className="space-y-4">
          {displayFaqs.map((faq, index) => (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
              >
                <span className="text-lg font-medium text-slate-900 pr-8">{faq.question}</span>
                <div className="shrink-0 text-[#b88d44]">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-200/60 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
