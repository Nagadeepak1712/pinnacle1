import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { constructionProjects } from '../data/projects';
import { MapPin, ArrowLeft, Clock, Building } from 'lucide-react';

export default function ConstructionProjectDetails() {
  const { id } = useParams();
  const project = constructionProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen">
        <h2 className="text-2xl font-bold text-brand-dark">Project Not Found</h2>
        <Link to="/projects" className="text-brand-blue hover:underline mt-4 inline-block">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        <Link to="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors mb-8">
          <ArrowLeft size={20} /> Back to Projects
        </Link>

        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Image */}
            <div className="relative h-96 lg:h-auto rounded-3xl overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-brand-blue uppercase tracking-wider shadow-sm">
                {project.status}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-slate-500 text-sm mb-4 bg-white/50 px-4 py-2 rounded-full border border-white/40 w-fit">
                <MapPin size={16} className="text-brand-blue" /> {project.location}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">{project.title}</h1>
              
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/40 border border-white/50 rounded-2xl p-4">
                  <p className="text-slate-500 text-sm mb-1">Total Built-up Area</p>
                  <p className="font-bold text-xl text-brand-dark">{project.area}</p>
                </div>
                <div className="bg-white/40 border border-white/50 rounded-2xl p-4">
                  <p className="text-slate-500 text-sm mb-1">Building Type</p>
                  <p className="font-bold text-xl text-brand-dark">{project.type}</p>
                </div>
                <div className="bg-white/40 border border-white/50 rounded-2xl p-4">
                  <p className="text-slate-500 text-sm mb-1">Client</p>
                  <p className="font-bold text-xl text-brand-dark">{project.client}</p>
                </div>
                <div className="bg-white/40 border border-white/50 rounded-2xl p-4">
                  <p className="text-slate-500 text-sm mb-1">Timeline</p>
                  <p className="font-bold text-xl text-brand-dark">{project.timeline}</p>
                </div>
              </div>

            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
