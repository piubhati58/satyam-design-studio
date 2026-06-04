/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionId } from '../types';
import { PORTFOLIO_PROJECTS, TESTIMONIALS } from '../data';
import { 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Maximize2, 
  Minimize2, 
  Compass, 
  Sparkles, 
  Quote, 
  Layers,
  CheckCircle2,
  Heart
} from 'lucide-react';

interface PortfolioSectionProps {
  onNavigate: (section: SectionId) => void;
}

export default function PortfolioSection({ onNavigate }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  
  // High-fidelity local state for user project appreciation / styling bookmarks
  const [curatedIcons, setCuratedIcons] = useState<Record<string, number>>({
    oakridge: 48,
    sanctuary: 64,
    obsidian: 32,
    haveli: 41,
    culinary: 19,
    'pine-forest': 28
  });
  const [userAppreciated, setUserAppreciated] = useState<Record<string, boolean>>({});

  const handleAppreciate = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (userAppreciated[projectId]) return;
    setCuratedIcons(prev => ({ ...prev, [projectId]: prev[projectId] + 1 }));
    setUserAppreciated(prev => ({ ...prev, [projectId]: true }));
  };

  const categories = ['All', 'Residential', 'Commercial', 'Heritage', 'Kitchens'];

  const filteredProjects = selectedCategory === 'All' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="section-portfolio" className="bg-[#09090b] text-brand-linen pt-32 pb-24 border-b border-brand-linen-high">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div id="portfolio-header" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-400 block">
            The Curation Gallery
          </span>
          <h2 className="font-serif text-[42px] sm:text-[54px] md:text-[64px] tracking-tight leading-none text-white">
            Our Works
          </h2>
          <div className="w-16 h-[1.5px] bg-zinc-700 mx-auto my-6" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light font-sans max-w-xl mx-auto">
            Explore our physically materialized interior blueprints, custom stone carvings, and bespoke spatial orchestrations.
          </p>
        </div>

        {/* Curation Category Filters */}
        <div id="portfolio-filters" className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setExpandedProjectId(null); // Reset detail view on filter swap
              }}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Primary Portfolio Grid */}
        <div id="portfolio-projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-28">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProjectId === project.id;
              
              return (
                <motion.div
                  key={project.id}
                  layoutId={`project-container-${project.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setExpandedProjectId(isExpanded ? null : project.id)}
                  className={`bg-[#121214] border border-zinc-800 group overflow-hidden relative cursor-pointer hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between ${
                    isExpanded ? 'lg:col-span-2' : ''
                  }`}
                  style={{ minHeight: '460px' }}
                >
                  <div>
                    {/* Project Image Panel */}
                    <div className="relative h-[240px] md:h-[280px] w-full overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 font-sans"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
                      
                      {/* Floating Meta tags */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-stone-900/95 border border-zinc-700/50 text-[9px] uppercase font-bold tracking-widest text-[#fcfcfc] px-3 py-1">
                          {project.category}
                        </span>
                        {project.year && (
                          <span className="bg-stone-900/95 border border-zinc-700/50 text-[9px] uppercase font-bold tracking-widest text-zinc-400 px-2 py-1 flex items-center gap-1">
                            <Calendar size={10} />
                            {project.year}
                          </span>
                        )}
                      </div>

                      {/* Top Right Zoom Indicator */}
                      <button 
                        className="absolute bottom-4 right-4 bg-stone-950/80 p-2 text-white border border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-label="Toggle details view"
                      >
                        {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                      </button>
                    </div>

                    {/* Project Card Text Content */}
                    <div className="p-6 md:p-8 space-y-4">
                      {/* Category Location overline */}
                      <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">
                        <MapPin size={11} className="text-zinc-500" />
                        <span>{project.location}</span>
                      </div>

                      {/* Main Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-tight leading-tight group-hover:text-[#fafafa] transition-colors">
                        {project.title}
                      </h3>

                      {/* Interactive expanded description block via framer-motion */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden space-y-6 pt-2 border-t border-zinc-800"
                          >
                            <p className="text-sm font-sans text-zinc-300 font-light leading-relaxed">
                              {project.description}
                            </p>

                            {/* Curation specifications */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                              {project.size && (
                                <div className="space-y-1">
                                  <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold block">Physical Envelope</span>
                                  <span className="text-xs font-mono text-zinc-200">{project.size}</span>
                                </div>
                              )}
                              <div className="space-y-1">
                                <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold block">Principal Materials</span>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                  {project.materials.map((mat, idx) => (
                                    <span 
                                      key={idx} 
                                      className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-[9px] px-2 py-0.5 font-sans uppercase font-medium"
                                    >
                                      {mat}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Project Appreciation and Interactive detail clicker */}
                  <div className="px-6 md:px-8 py-5 border-t border-zinc-800 mt-auto flex items-center justify-between">
                    <button
                      onClick={(e) => handleAppreciate(project.id, e)}
                      className={`flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-widest py-1.5 px-3 border transition-all cursor-pointer ${
                        userAppreciated[project.id]
                          ? 'bg-zinc-800 border-zinc-700 text-white'
                          : 'bg-transparent border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      <Heart size={11} className={userAppreciated[project.id] ? 'fill-current text-white' : ''} />
                      <span>{userAppreciated[project.id] ? 'Curated' : 'Appreciate'} • {curatedIcons[project.id]}</span>
                    </button>

                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold group-hover:text-zinc-300 transition-colors">
                      {isExpanded ? 'Collapse Blueprint' : 'Inspect Blueprint'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Separator Section: Testimonials & Client Feedback (Correctly formatted as secondary context!) */}
        <div className="border-t border-zinc-800 pt-24 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-400 block">
              The Living Voice
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl tracking-tight text-white">
              Client Retrospectives
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm font-sans leading-relaxed max-w-md mx-auto">
              Real testimonials from patrons who live within our architectural blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div 
                key={testimonial.id}
                className="bg-[#121214] border border-zinc-800/60 p-8 flex flex-col justify-between space-y-8 hover:border-zinc-700/80 transition-all duration-300"
              >
                <div className="space-y-4">
                  <Quote size={32} className="text-zinc-600 stroke-1 opacity-40" />
                  <p className="font-serif text-lg leading-relaxed text-zinc-300 italic font-light">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-4 border-t border-zinc-800/50 pt-4">
                  {testimonial.imageUrl ? (
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover border border-zinc-800 font-sans"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400 uppercase">
                      {testimonial.author.slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-serif text-base text-white">{testimonial.author}</h4>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-sans">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Numeric Coordinates */}
        <div id="portfolio-metrics" className="border-y border-zinc-800 py-12 mb-28 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-[#0d0d0f]/50">
          <div className="space-y-1">
            <span className="font-serif text-5xl sm:text-6xl font-light text-white block">10+</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
               Bespoke Projects
            </span>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-x border-zinc-800 pt-6 md:pt-0 pr-0 md:px-6">
            <span className="font-serif text-5xl sm:text-6xl font-light text-white block">10+</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
               Design Certifications
            </span>
          </div>

          <div className="space-y-1 border-t md:border-t-0 pt-6 md:pt-0">
            <span className="font-serif text-5xl sm:text-6xl font-light text-white block">98%</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
               Client Retention Rate
            </span>
          </div>
        </div>

        {/* Black-Beige Transformation CTA Banner */}
        <div id="portfolio-cta" className="bg-[#121214] border border-zinc-800 p-10 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-900 block blur-3xl group-hover:bg-zinc-800/10 transition-all duration-300" />
          <span className="text-zinc-500 text-[10px] uppercase tracking-[0.25em] font-semibold block mb-4">
            Bespoke Commissions
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-white mb-6">
            Begin Your Transformation.
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-light mb-8">
            Our schedule is currently accepting inquiries for late 2024. Secure your bespoke initial blueprint consultation with our lead architectural curators.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-black hover:bg-transparent hover:text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer border border-white w-full sm:w-auto"
            >
              Start Project
            </button>
            <button
              onClick={() => onNavigate('process')}
              className="bg-transparent hover:bg-white/5 text-brand-linen hover:text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest border border-white/20 hover:border-white transition-all duration-300 cursor-pointer w-full sm:w-auto flex items-center justify-center space-x-2"
            >
              <span>View Process</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
