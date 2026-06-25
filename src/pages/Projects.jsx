import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { completedProjects, ongoingProjects } from '../data/projects';
import { MapPin } from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('completed');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryFilter = searchParams.get('category');

  const activeProjects = activeTab === 'completed' ? completedProjects : ongoingProjects;
  
  const filteredProjects = categoryFilter
    ? activeProjects.filter(p => p.category === categoryFilter)
    : activeProjects;

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif text-[#0b1d35] mb-6"
        >
          Signature {categoryFilter ? categoryFilter : 'Projects'}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-24 h-[2px] bg-[#b88d44] mx-auto mb-8"
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light"
        >
          A curated selection of our finest residential and commercial developments, representing the pinnacle of architectural excellence.
        </motion.p>
      </section>

      {/* Segmented Navigation */}
      <div className="flex justify-center mb-24 px-6">
        <div className="bg-white p-2 rounded-full inline-flex shadow-xl border border-slate-100 relative">
          <button 
            onClick={() => setActiveTab('completed')}
            className={`px-8 md:px-12 py-3 md:py-4 rounded-full font-sans text-xs md:text-sm uppercase tracking-widest font-bold transition-all duration-500 z-10 ${activeTab === 'completed' ? 'text-white bg-[#0b1d35] shadow-lg' : 'text-slate-500 hover:text-[#0b1d35]'}`}
          >
            Completed
          </button>
          <button 
            onClick={() => setActiveTab('ongoing')}
            className={`px-8 md:px-12 py-3 md:py-4 rounded-full font-sans text-xs md:text-sm uppercase tracking-widest font-bold transition-all duration-500 z-10 ${activeTab === 'ongoing' ? 'text-white bg-[#0b1d35] shadow-lg' : 'text-slate-500 hover:text-[#0b1d35]'}`}
          >
            Ongoing
          </button>
        </div>
      </div>

      {/* Projects List (Zig-Zag) */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-slate-500 font-medium">
              No {categoryFilter} projects found in the {activeTab} section.
            </div>
          ) : (
            filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24 group`}
              >
                {/* Image Side */}
                <div className="w-full md:w-[55%] overflow-hidden rounded-[2rem] shadow-2xl relative bg-slate-100">
                   <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md text-[#0b1d35] px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                     {project.status}
                   </div>
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-auto max-h-[700px] object-contain transition-transform duration-1000 group-hover:scale-105"
                   />
                </div>

                {/* Text Side */}
                <div className="w-full md:w-[45%] flex flex-col justify-center">
                  <span className="text-6xl md:text-8xl font-serif text-slate-200 mb-2 md:mb-6 opacity-50 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif text-[#0b1d35] mb-6 leading-tight">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 mb-8 text-[#b88d44]">
                    <MapPin size={20} />
                    <span className="uppercase tracking-widest text-sm font-bold">{project.location}</span>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light max-w-md">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })
          )}
        </div>
      </section>
    </div>
  );
}
