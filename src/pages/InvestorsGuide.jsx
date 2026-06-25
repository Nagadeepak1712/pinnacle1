import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ClipboardCheck } from 'lucide-react';

const nriFaqs = [
  { 
    question: "Who is an NRI Investor?", 
    answer: "An NRI (Non-Resident Indian) is a Person of Indian Origin (PIO) and can own both residential as well as commercial properties in India and there is no restriction on the number of properties that can be bought.\n\nHowever, they cannot purchase/own any agricultural land, farm house and plantation property unless it is gifted or inherited. In case the property (irrespective of its nature) is acquired when you were a resident of India, you can sell or build on the property without the approval of the Reserve Bank of India. However, if you wish to sell it, you must be a resident citizen of India." 
  },
  { question: "What should be the currency for transaction?", answer: "All property transactions in India must be executed in Indian Rupees (INR). Remittances from abroad should be routed through normal banking channels." },
  { question: "Can NRIs opt for loans in India?", answer: "Yes, NRIs can avail of home loans from authorized dealers and housing finance institutions in India for purchasing residential property." },
  { question: "What should an NRI Investor watch out for?", answer: "Ensure clear titles, verify builder track records, check all necessary approvals from local bodies, and verify power of attorney protocols if not present in person." },
  { question: "What are the other factors that can influence loan eligibility of an NRI?", answer: "Age, income, qualifications, number of dependents, stability of employment, and credit history both in India and the current country of residence." },
  { question: "Can an NRI get overseas fund to buy property in India?", answer: "Yes, funds can be remitted into India from an overseas bank account through normal banking channels or from NRE/FCNR/NRO accounts maintained in India." },
  { question: "How can an NRI make remittances?", answer: "Remittances can be made through wire transfers, drafts, or cheques drawn on their NRE/NRO accounts." },
  { question: "Can an NRI use Power of Attorney for all the transactions?", answer: "Yes, an NRI can execute a Power of Attorney (PoA) in favor of a resident Indian to handle property transactions on their behalf. The PoA must be properly notarized and registered." },
  { question: "What is the procedure for purchase of property?", answer: "The procedure involves selecting the property, verifying the title, executing an agreement to sell, making the payment, and registering the sale deed before the sub-registrar." },
];

const indianInvestorChecklist = [
  "Make sure that the Title deed is clear - in original, and that it is solely in the name of the seller.",
  "Ensure that the title papers of the property are sound, especially if it is inherited or jointly held.",
  "Get a bank release in case it was at any point of time under mortgage.",
  "Choose a builder with integrity and expertise. Your greatest assurance is a good track record.",
  "Do a background check on the Builder, the Properties their Company has developed and the quality of construction.",
  "Find if the Builder has a traceable track record for new launches and under-construction projects.",
  "Assess the execution capability of the developer on timeliness and quality control.",
  "Compare the Project you want to invest in with that of the Developers' competitors generally and with other Projects in the Location you are considering.",
  "It will be wise to get all the papers verified by a lawyer before going ahead. They scrutinize original title, encumbrance certificates, building permits, land ceiling clearances and other relevant documents. The buyer-builder agreements should be equitable and should not contain clauses that are volatile of an investor's rights and interests.",
  "Ascertain that the property has secured all clearances required by law, such as environment and municipal clearances and the authority to transfer the undivided share of land to each apartment owner and the entire plot to the society upon completion of the project. For projects under construction, insist on these documents to ensure that your investment is safe.",
  "Your apartment has to be assessed not only from the point of utility but also from the point of yields and appreciation as an investment. An apartment has greater value when the project has adhered to approvals and other sanctions of the various agencies, government authorities.",
  "If the seller is unable to produce the original and shares a photocopy, there is a possibility that a loan has been taken against the property. Initiate a thorough check to avoid the pitfall of the sale being challenged at a later stage."
];

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-0 bg-white">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-6 text-left transition-colors ${isOpen ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
      >
        <span className="font-bold text-slate-900 text-lg">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#b88d44] text-white' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 mt-2 leading-relaxed font-light whitespace-pre-wrap">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function InvestorsGuide() {
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-40 pb-32 text-slate-800 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-slate-200/50 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#b88d44]/10 blur-[120px]" />
      </div>

      {/* Header */}
      <section className="px-6 max-w-7xl mx-auto text-center mb-24 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tight"
        >
          Investor's Guide
        </motion.h1>
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#b88d44] to-transparent mx-auto mb-8" />
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-light">
          Essential insights and guidelines for navigating the real estate market confidently.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-32">
        
        {/* Indian Investor Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Indian Investor</h2>
            <p className="text-[#b88d44] tracking-widest uppercase text-sm font-bold">Buying a home? Here's what you should know.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {indianInvestorChecklist.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex gap-6 hover:shadow-2xl hover:border-[#b88d44]/30 transition-all duration-500 group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#b88d44] to-orange-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <ClipboardCheck size={28} />
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-light">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* NRI Investor Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto w-full"
        >
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">NRI Investor</h2>
            <p className="text-slate-600 font-light leading-relaxed max-w-3xl mx-auto mb-6 text-sm md:text-base">
              In recent years, non-resident Indians (NRIs) have played a very important role in transforming the Indian real estate market. NRI investments in real estate offer the advantage of repatriation of the capital invested and even the rental proceeds under the circumstances prescribed by RBI.
            </p>
            <p className="text-[#b88d44] tracking-widest uppercase text-sm font-bold">Frequently Asked Questions</p>
          </div>
          
          <div className="flex flex-col gap-4">
            {nriFaqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#b88d44]/50 shadow-sm transition-colors duration-300">
                  <FaqItem question={`${idx + 1}) ${faq.question}`} answer={faq.answer} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
