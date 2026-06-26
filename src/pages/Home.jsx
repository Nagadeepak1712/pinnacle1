import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Plus, Minus, Quote, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { completedProjects, ongoingProjects } from '../data/projects';
import CircularGallery from '../components/CircularGallery';

import { motion } from 'motion/react';

export default function Home() {
  const [openService, setOpenService] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  const services = [
    {
      title: "Luxury Villas",
      desc: "Custom-designed premium villas tailored to your lifestyle. We handle end-to-end construction, delivering exceptional architectural elegance, spacious layouts, and smart home integrations for ultimate comfort.",
      img: "/service_villas.png"
    },
    {
      title: "Premium Apartments",
      desc: "High-quality, multi-story residential apartments built with robust structural engineering. We focus on optimal space utilization, modern amenities, and adhering to the highest safety and regulatory standards.",
      img: "/service_apartments.png"
    },
    {
      title: "Commercial Buildings",
      desc: "State-of-the-art office complexes and retail spaces designed for business growth. Our commercial constructions emphasize functional design, aesthetic glass facades, and durable heavy-duty infrastructure.",
      img: "/service_commercial.png"
    },
    {
      title: "Row Houses",
      desc: "Beautifully connected modern row houses that offer the perfect balance of community living and private luxury. Ideal for suburban gated communities with identical, elegant architectural styling.",
      img: "/service_rowhouses.png"
    },
    {
      title: "Structural Fabrication",
      desc: "Professional industrial steel fabrication and erection. We provide heavy-duty structural framework, detailed material estimation, and precision engineering for massive infrastructure and industrial projects.",
      img: "/service_fabrication.png"
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

  const testimonials = [
    {
      name: "Mr. Rajesh K.",
      role: "Residential Villa Owner",
      text: "Smooth from start to finish. Pinnacle Builders & Promoters guided us through the entire construction phase with total clarity. From planning to execution, everything felt stress-free. We built faster than expected and above our target quality."
    },
    {
      name: "Mrs. Priya & Family",
      role: "Homeowner, Navalur",
      text: "Their attention to detail and adherence to quality standards is unmatched. They helped us with the 3D elevation and executed it exactly as planned. Extremely satisfied with our new home!"
    },
    {
      name: "Johnson Holdings",
      role: "Commercial Developers",
      text: "We partnered with Pinnacle for our commercial complex. The steel fabrication and structural integrity were flawless. They delivered on time and within budget. A highly professional team."
    }
  ];
  const galleryItems = [
    ...completedProjects.map(p => ({ image: p.image, text: p.title })),
    ...ongoingProjects.map(p => ({ image: p.image, text: p.title }))
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
          <div className="mt-12 md:mt-24 relative w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 pointer-events-auto mix-blend-luminosity group">
            <video 
              ref={videoRef}
              src="/web1.mp4" 
              className="w-full h-auto opacity-90"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Logo Overlay */}
            <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 z-10 pointer-events-none">
              <img 
                src="/logo.png" 
                alt="Pinnacle Builders Logo Overlay" 
                loading="lazy"
                className="h-16 md:h-32 w-auto object-contain bg-white/95 p-3 rounded-xl shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </div>

          {/* Bottom Hero */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 pointer-events-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/918190028664?text=Hi%2C%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm hover:scale-105 transition-transform mix-blend-luminosity">
                Contact Us on WhatsApp <span className="bg-slate-900 text-white rounded-full p-1"><ArrowUpRight size={14} /></span>
              </a>
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
              loading="lazy"
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
                      <img src={service.img} alt={service.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4.5. PROJECTS SECTION (PREMIUM) */}
      <section id="projects" className="py-32 bg-[#0a0a0b] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight mb-6">Our Projects</h2>
            <div className="w-24 h-[2px] bg-[#b88d44] mx-auto mb-8" />
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">A showcase of our completed and ongoing developments, demonstrating our commitment to quality, design, and structural excellence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Show a mix of completed and ongoing for the showcase */}
            {[...completedProjects.slice(0, 5), ...ongoingProjects.slice(0, 1)].map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="group cursor-pointer relative overflow-hidden rounded-[2rem] h-[500px] bg-[#0f1012] border border-white/5"
              >
                <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-contain p-4 transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-[#b88d44] text-[#0b1d35] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 inline-block mb-4 rounded-full">
                    {project.status}
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-3 leading-tight">{project.title}</h3>
                  <div className="flex items-center text-[#b88d44] mb-4 text-xs font-bold tracking-widest uppercase">
                    <MapPin size={16} className="mr-2" /> {project.location}
                  </div>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                    <p className="text-white/70 font-light line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Link to="/projects" className="inline-flex items-center gap-4 bg-transparent border border-[#b88d44] text-[#b88d44] px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#b88d44] hover:text-[#0b1d35] transition-all duration-300">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4.75. GALLERY SECTION */}
      <section id="gallery" className="bg-[#0f1012] text-white py-32 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Interactive Gallery</h2>
          <p className="text-white/50 text-lg">Swipe or drag to explore our stunning portfolio.</p>
        </div>
        <div style={{ height: '600px', position: 'relative' }} className="w-full">
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.15}
            font="bold 30px serif"
            scrollSpeed={5}
            items={galleryItems}
          />
        </div>
      </section>

      {/* 5. TESTIMONIALS (DARK) */}
      <section id="testimonials" className="bg-[#0f1012] text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-4">
              Trusted by homeowners, developers & investors
            </h2>
            <p className="text-white/50 text-lg">Don't just take our word for it. Here is what our clients have to say.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl relative group hover:border-[#b88d44]/50 transition-colors flex flex-col"
              >
                <Quote size={48} className="text-white/10 absolute top-6 right-6 group-hover:text-[#b88d44]/20 transition-colors" />
                <div className="mb-8 flex-grow">
                  <div className="flex gap-1 mb-6 text-[#b88d44]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg font-light leading-relaxed relative z-10 text-white/90">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className="font-bold tracking-wide uppercase text-sm">{testimonial.name}</p>
                  <p className="text-[#b88d44] text-xs font-medium uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION (LIGHT) */}
      <section id="process" className="py-32 bg-gradient-to-b from-white to-[#eef2f6] px-6">
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
