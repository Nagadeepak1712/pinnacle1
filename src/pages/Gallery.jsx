import React from 'react';

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1629196914285-b153b984bf41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="pt-32 pb-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-brand-blue font-semibold tracking-wider uppercase mb-2 text-sm">Visual Showcase</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Gallery</h2>
          <p className="text-slate-600 text-lg">A glimpse into our architectural frameworks, finished structures, and land developments.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden group h-72">
              <img 
                src={src} 
                alt={`Gallery visual ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
