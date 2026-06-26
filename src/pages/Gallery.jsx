import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { completedProjects, ongoingProjects } from '../data/projects';
import { X, ZoomIn } from 'lucide-react';
import StarBorder from '../components/StarBorder';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Combine project images with authentic project photos
  const galleryItems = [
    ...completedProjects.map(p => ({ src: p.image, title: p.title, category: "Completed Project" })),
    ...ongoingProjects.map(p => ({ src: p.image, title: p.title, category: "Ongoing Project" })),
    { src: "/2.jpeg", title: "Site View", category: "Gallery" },
    { src: "/ap2.jpeg", title: "Apartment", category: "Gallery" },
    { src: "/as.jpeg", title: "Site View", category: "Gallery" },
    { src: "/c2.jpeg", title: "Commercial", category: "Gallery" },
    { src: "/c3.jpeg", title: "Commercial", category: "Gallery" },
    { src: "/car.jpeg", title: "Parking", category: "Gallery" },
    { src: "/h1.jpeg", title: "Residential", category: "Gallery" },
    { src: "/h3.1.jpeg", title: "Residential", category: "Gallery" },
    { src: "/jvp1.jpeg", title: "Project View", category: "Gallery" },
    { src: "/khilam.jpeg", title: "Project View", category: "Gallery" },
    { src: "/l2.jpeg", title: "Construction", category: "Gallery" },
    { src: "/mduap.jpeg", title: "Madurai Project", category: "Gallery" },
    { src: "/mduprj.jpeg", title: "Madurai Project", category: "Gallery" },
    { src: "/thalambur.jpeg", title: "Thalambur", category: "Gallery" },
    { src: "/mduap2.jpeg", title: "Madurai Project", category: "Gallery" }
  ];

  return (
    <div className="bg-white min-h-screen pt-40 pb-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-blue-600/5 to-transparent blur-[100px]" />
        <div className="absolute bottom-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-tl from-[#b88d44]/10 to-transparent blur-[100px]" />
      </div>

      <section className="px-6 max-w-7xl mx-auto text-center mb-16 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif text-[#0b1d35] mb-6 tracking-tight"
        >
          Gallery
        </motion.h1>
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#b88d44] to-transparent mx-auto mb-8" />
        <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light mb-12">
          A visual showcase of our premium properties, construction capabilities, and completed projects.
        </p>

        {/* Hero Video */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative group bg-black"
        >
          <video 
            src="/v.mp4" 
            className="w-full h-auto object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            autoPlay 
            loop 
            muted 
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          
          {/* Logo Overlay */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10 pointer-events-none">
            <img 
              src="/logo.png" 
              alt="Pinnacle Builders Logo" 
              className="h-12 md:h-20 w-auto object-contain bg-white/95 p-2 md:p-3 rounded-xl shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {galleryItems.map((item, idx) => (
            <StarBorder
              as={motion.div}
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer border border-[#b88d44]/30 shadow-xl bg-slate-900 aspect-[4/3]"
              onClick={() => setSelectedImage(item)}
              color="#b88d44"
              thickness={3}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-end">
                  <div>
                    <span className="text-[#b88d44] text-xs font-bold tracking-widest uppercase mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl font-medium">{item.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 hover:bg-[#b88d44] transition-colors">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </div>
            </StarBorder>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Zoom Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-8 text-center"
            >
              <p className="text-[#b88d44] tracking-widest uppercase text-sm font-bold mb-2">{selectedImage.category}</p>
              <h2 className="text-white text-2xl font-medium">{selectedImage.title}</h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
