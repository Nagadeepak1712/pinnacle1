import React from 'react';
import * as Icons from 'lucide-react';
import { lifecycle, domains } from '../data/services';

const IconWrapper = ({ name, className }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) return null;
  return <IconComponent size={32} className={className} />;
};

const IconSmallWrapper = ({ name, className }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) return null;
  return <IconComponent size={24} className={className} />;
};

export default function Services() {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-brand-blue font-semibold tracking-wider uppercase mb-2 text-sm">Our Services</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Comprehensive Architectural Lifecycle</h2>
          <p className="text-slate-600 text-lg">We handle every aspect of your project from the first sketch to the final keys.</p>
        </div>

        {/* Lifecycle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {lifecycle.map((service, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <IconWrapper name={service.icon} />
              </div>
              <div className="bg-white/60 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <IconWrapper name={service.icon} className="text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">
                <span className="text-brand-blue/50 mr-2 text-xl">{index + 1}.</span>
                {service.title}
              </h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Specialized Domains */}
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none"></div>
          
          <div className="mb-10 text-center md:text-left">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">Specialized Domains & Works</h3>
            <p className="text-slate-600 max-w-2xl">Beyond the standard lifecycle, we offer specialized services tailored to complex structural and development needs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {domains.map((domain, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 items-start p-6 rounded-xl hover:bg-white/40 transition-colors bg-white/20 border border-white/30">
                <div className="bg-brand-blue text-white p-3 rounded-lg shadow-md shrink-0">
                  <IconSmallWrapper name={domain.icon} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">{domain.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{domain.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
