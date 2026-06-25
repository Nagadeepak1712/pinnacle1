import React from 'react';
import { Award, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '20+', icon: <Clock size={24} className="text-brand-blue" /> },
    { label: 'Years of Excellence', value: '18', icon: <Award size={24} className="text-brand-blue" /> },
    { label: 'Projects Delivered', value: '150+', icon: <CheckCircle2 size={24} className="text-brand-blue" /> },
    { label: 'Quality Assured', value: '100%', icon: <ShieldCheck size={24} className="text-brand-blue" /> },
  ];

  return (
    <div className="pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-brand-blue font-semibold tracking-wider uppercase mb-2 text-sm">About Us</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Building Legacies with Integrity & Passion</h2>
          <p className="text-slate-600 text-lg">Pinnacle Builders & Promoters is founded on the core values of uncompromised quality, transparent processes, and visionary design.</p>
        </div>

        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl font-bold text-brand-dark mb-6 leading-tight">
                Led by Experience. Driven by Excellence.
              </h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Under the expert leadership of our Managing Director, we have spent nearly two decades transforming the architectural landscape of Chennai and beyond. From residential complexes to heavy industrial fabrication, our commitment remains steadfast.
              </p>
              
              <div className="glass-card rounded-2xl p-6 inline-block mb-8 border-l-4 border-l-brand-blue bg-white/50">
                <h4 className="text-xl font-bold text-brand-dark">Er. R. Ramaraj, BE (Civil)</h4>
                <p className="text-brand-blue font-medium mb-2">Managing Director</p>
                <p className="text-slate-500 text-sm">Over 20+ years of structural experience ensuring the highest standards of safety, durability, and aesthetics in every project.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card rounded-2xl p-6 text-center group hover:-translate-y-1 transition-transform duration-300 bg-white/40">
                  <div className="bg-white/80 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {stat.icon}
                  </div>
                  <h5 className="text-3xl font-bold text-brand-dark mb-1">{stat.value}</h5>
                  <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
