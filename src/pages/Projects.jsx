import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { landProjects, constructionProjects } from '../data/projects';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('construction'); // 'construction' or 'land'

  const activeProjects = activeTab === 'construction' ? constructionProjects : landProjects;
  const linkPrefix = activeTab === 'construction' ? '/projects/construction/' : '/projects/land/';

  return (
    <div className="pt-32 pb-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-brand-blue font-semibold tracking-wider uppercase mb-2 text-sm">Our Portfolio</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Featured Projects</h2>
          <p className="text-slate-600 text-lg">Explore our diverse portfolio of high-end structural developments and premium land projects.</p>
        </div>

        {/* Segmented Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass-panel p-1 rounded-full inline-flex">
            <button 
              onClick={() => setActiveTab('construction')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'construction' ? 'bg-brand-blue text-white shadow-md' : 'text-slate-600 hover:text-brand-blue'}`}
            >
              Structural & Construction
            </button>
            <button 
              onClick={() => setActiveTab('land')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'land' ? 'bg-brand-blue text-white shadow-md' : 'text-slate-600 hover:text-brand-blue'}`}
            >
              Land Development
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {activeProjects.map(project => (
            <div key={project.id} className="glass-card rounded-3xl overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-blue uppercase tracking-wider">
                  {project.status}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                  <MapPin size={16} /> {project.location}
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">{project.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">{project.description}</p>
                
                <div className="flex items-center justify-between border-t border-slate-200/50 pt-6">
                  <div className="text-sm">
                    <span className="block text-slate-400">Area</span>
                    <span className="font-bold text-brand-dark">{project.area}</span>
                  </div>
                  <Link to={`${linkPrefix}${project.id}`} className="glass-button p-3 rounded-full hover:-rotate-45 transition-transform duration-300">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
