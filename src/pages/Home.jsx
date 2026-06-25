import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Plus, Minus, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

export default function Home() {
  const [openService, setOpenService] = useState(0);

  const services = [
    {
      title: "Construction & Contracting",
      desc: "End-to-end residential and commercial building construction adhering strictly to engineering standards and safety protocols. We manage everything from foundation to finishing.",
      img: "/h3.jpeg"
    },
    {
      title: "2D & 3D Architectural Planning",
      desc: "Comprehensive floor plans, spatial optimization, and photorealistic 3D elevations to give you a clear vision of your project before execution.",
      img: "/h3.1.jpeg"
    },
    {
      title: "Estimation & Fabrication",
      desc: "Detailed structural material estimation and heavy industrial steel fabrication, ensuring accurate budgeting and structural integrity.",
      img: "/as.jpeg"
    },
    {
      title: "Site Developing Work",
      desc: "Land surveying, leveling, fencing, and complete site preparation for large plots and gated communities.",
      img: "/h4.1.jpeg"
    }
  ];

  const processSteps = [
    { title: "Consultation & Planning", desc: "We begin by understanding your vision, budget, and timeline to craft a personalized roadmap." },
    { title: "Design & Architectural Approvals", desc: "Our architects draft 2D/3D models and secure all necessary local regulatory approvals." },
    { title: "Material Selection & Budgeting", desc: "Transparent cost estimation and premium material selection without hidden fees." },
    { title: "Foundation & Core Structure", desc: "Rigorous site preparation followed by robust structural engineering and foundation work." },
    { title: "Interior & Finishing", desc: "Applying the finest details, from premium flooring to custom millwork and smart home integrations." },
    { title: "Final Inspection & Handover", desc: "A comprehensive multi-point quality check ensures your property is flawless before keys are handed over." }
  ];

  const galleryImages = [
    '/khilam.jpeg', '/1.jpeg', '/2.jpeg', '/3.jpeg', '/4.jpeg', '/5.jpeg', 
    '/ap1.jpeg', '/ap2.jpeg', '/as.jpeg', '/c1.jpeg', '/c2.jpeg', '/c3.jpeg', 
    '/car.jpeg', '/h1.jpeg', '/h3.1.jpeg', '/h3.jpeg', '/h4.1.jpeg', '/h4.jpeg', 
    '/jvp1.jpeg', '/l1.jpeg', '/l2.jpeg', '/madurai ring road.jpeg', '/mduap.jpeg', 
    '/mduap2.jpeg', '/navalur.jpeg'
  ];

  return (
    <div className="font-sans text-slate-900 overflow-x-hidden selection:bg-slate-900 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen bg-white pt-32 pb-20 px-6 flex flex-col justify-between overflow-hidden">
        

        {/* Massive Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none z-10 mt-10">
          <h1 className="text-[18vw] font-black text-white text-center leading-none tracking-tighter mix-blend-overlay drop-shadow-xl">
            BUILDERS
          </h1>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-start gap-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-2xl leading-[1.1] text-slate-900 pointer-events-auto mix-blend-luminosity">
              Building your vision -<br /> with excellence.
            </h2>
            
            {/* Floating Pills */}
            <div className="flex flex-col gap-3 items-start md:items-end">
              <span className="bg-white/40 backdrop-blur-md px-6 py-2 rounded-full text-sm font-medium border border-white/50">Local Market Leaders</span>
              <span className="bg-white/40 backdrop-blur-md px-6 py-2 rounded-full text-sm font-medium border border-white/50">Transparent & Quality Service</span>
              <span className="bg-white/40 backdrop-blur-md px-6 py-2 rounded-full text-sm font-medium border border-white/50">18+ Years Experience</span>
            </div>
          </motion.div>

          {/* Center Video */}
          <div className="mt-12 md:mt-24 relative w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 pointer-events-auto mix-blend-luminosity">
            <video 
              src="/v.mp4" 
              className="w-full h-auto opacity-90"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Bottom Hero */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 pointer-events-auto">
            <div className="flex gap-4">
              <Link to="/contact" className="bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm hover:scale-105 transition-transform mix-blend-luminosity">
                Book a Consultation <span className="bg-slate-900 text-white rounded-full p-1"><ArrowUpRight size={14} /></span>
              </Link>
              <Link to="/projects" className="bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm hover:scale-105 transition-transform">
                View Portfolio <span className="bg-slate-900 text-white rounded-full p-1"><ArrowUpRight size={14} /></span>
              </Link>
            </div>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-500 max-w-sm text-center md:text-right">
              Trusted independent engineering guidance for residential, commercial, and industrial construction.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="relative py-32 bg-[#eef2f6] overflow-hidden">
        {/* Soft gradient bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-200/50 to-transparent pointer-events-none" />
        
        {/* Massive Background Text */}
        <motion.div 
          initial={{ zIndex: 20 }}
          whileInView={{ zIndex: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0, delay: 1.4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 150, scale: 1.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4, duration: 2.5 }}
            className="text-[15vw] italic font-light text-slate-400/70 text-center leading-none tracking-tighter drop-shadow-sm"
          >
            Welcome
          </motion.h2>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-[60vh] flex flex-col justify-between">
          
          {/* Center Cutout Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[80%] max-w-[500px] pointer-events-none mix-blend-multiply">
            <motion.img 
              initial={{ opacity: 0, scale: 0.3, y: 150 }}
              whileInView={{ opacity: 0.95, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.4, duration: 2.0, delay: 0.4 }}
              src="/building_cutout.png" 
              alt="Modern Building" 
              className="w-full h-auto drop-shadow-2xl" 
            />
          </div>

          {/* Scattered Tags */}
          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, type: "spring", duration: 1.2 }} viewport={{ once: true }} className="absolute top-10 left-10 hidden md:block">
            <span className="bg-white border border-slate-200 px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">Licensed Engineers</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0, type: "spring", duration: 1.2 }} viewport={{ once: true }} className="absolute top-20 right-20 hidden md:block">
            <span className="bg-white border border-slate-200 px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">Deep structural knowledge</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, type: "spring", duration: 1.2 }} viewport={{ once: true }} className="absolute bottom-40 left-1/4 hidden md:block">
            <span className="bg-white border border-slate-200 px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">Proven execution track record</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4, type: "spring", duration: 1.2 }} viewport={{ once: true }} className="absolute bottom-32 right-1/4 hidden md:block">
            <span className="bg-white border border-slate-200 px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">Transparent, zero-hidden-costs</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-auto grid md:grid-cols-2 gap-12 items-end"
          >
            <div>
              <p className="text-xl font-light mb-2">WE ARE</p>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight">PINNACLE BUILDERS & PROMOTERS</h3>
              <p className="text-sm font-bold tracking-widest uppercase mt-4 text-slate-600">ENGINEERING & CONSTRUCTION</p>
            </div>
            
            <div className="max-w-md ml-auto">
              <p className="text-sm leading-relaxed text-slate-700 mb-6 font-medium">
                Pinnacle Builders & Promoters is a dedicated engineering firm known for its honest guidance, market expertise, and quality-first approach. With 18 years of experience, we combine modern construction strategy with personal service to help clients build confidently.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full text-xs font-bold border border-slate-200 hover:bg-slate-50 transition-colors">
                Learn More <span className="bg-slate-900 text-white rounded-full p-0.5"><ArrowUpRight size={12} /></span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (DARK) */}
      <section id="services" className="bg-black text-white py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight sticky top-32">
              How Pinnacle Builders & Promoters builds your future
            </h2>
          </div>

          <div className="lg:w-2/3 border-t border-white/20">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-b border-white/20"
              >
                <button 
                  onClick={() => setOpenService(openService === idx ? null : idx)}
                  className="w-full py-8 flex items-center justify-between text-left group hover:text-slate-300 transition-colors"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-xs font-mono text-white/50">/00{idx + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-medium">{service.title}</h3>
                  </div>
                  <span className="text-white/50 group-hover:text-white transition-colors">
                    {openService === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openService === idx ? 'max-h-[800px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col md:flex-row gap-8 pl-16">
                    <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                      {service.desc}
                    </p>
                    <div className="w-full md:w-64 h-40 rounded-xl overflow-hidden shrink-0">
                      <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4.5. GALLERY SECTION (DARK) */}
      <section id="gallery" className="py-32 bg-[#0a0a0b] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Full Project Gallery</h2>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                className="break-inside-avoid relative group rounded-xl overflow-hidden bg-white/5"
              >
                <img 
                  src={src} 
                  alt={`Gallery Image ${idx + 1}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <Plus size={32} className="text-white drop-shadow-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS (DARK) */}
      <section id="testimonials" className="bg-[#0f1012] text-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-12">
              Trusted by homeowners, developers & investors
            </h2>
            <div className="relative">
              <Quote size={64} className="text-white/10 absolute -top-8 -left-8" />
              <p className="text-2xl font-light leading-relaxed mb-8 relative z-10">
                "Smooth from start to finish. Pinnacle Builders & Promoters guided us through the entire construction phase with total clarity. From planning to execution, everything felt stress-free. We built faster than expected and above our target quality. Highly recommended!"
              </p>
              <div>
                <p className="font-bold tracking-wide uppercase text-sm">Mr. Rajesh K.</p>
                <p className="text-white/50 text-sm">Residential Villa Owner</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden h-[600px]">
              <img src="/mduap2.jpeg" alt="Happy Client" className="w-full h-full object-cover" />
            </div>
            {/* Small floating secondary image */}
            <div className="absolute -bottom-10 -right-10 w-64 h-48 rounded-2xl overflow-hidden border-8 border-[#0f1012] hidden md:block">
              <img src="/l2.jpeg" alt="Completed Home" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. PROCESS SECTION (LIGHT) */}
      <section className="py-32 bg-gradient-to-b from-white to-[#eef2f6] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-4">How it works</h3>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">A simple, stress-free process</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-t border-slate-300 pt-6"
              >
                <span className="text-xs font-bold tracking-widest uppercase text-slate-400 block mb-4">STEP 0{idx + 1}</span>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="relative py-40 overflow-hidden bg-slate-900 px-6">
        <div className="absolute inset-0 z-0">
          <img src="/sections.jpeg" alt="Architecture CTA" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        
        {/* Massive Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none z-0">
          <h2 className="text-[7vw] md:text-[6vw] font-black text-white/10 text-center leading-none tracking-tighter mix-blend-overlay">
            PINNACLE BUILDERS & PROMOTERS
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-10 leading-tight">
            Let's Make Your Next Project Simple and Successful
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Get Started Today <span className="bg-slate-900 text-white rounded-full p-1"><ArrowUpRight size={18} /></span>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
