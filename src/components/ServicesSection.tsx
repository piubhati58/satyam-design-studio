/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SectionId } from '../types';
import { SERVICE_ITEMS } from '../data';
import { ArrowRight, Compass, Maximize, Ruler, Sofa, Check } from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (section: SectionId) => void;
}

export default function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const [activeService, setActiveService] = useState<string | null>(null);

  // Extra details shown on interaction for ultra-premium high fidelity feel
  const serviceSpecs: Record<string, { materials: string[]; leadTime: string; focus: string }> = {
    residential: {
      materials: ['Carrara Marble', 'Smoked Oak Flooring', 'Raw Brass Accents'],
      leadTime: '16 - 24 Weeks',
      focus: 'Heritage restoration, Private villas, High-ceiling estates'
    },
    commercial: {
      materials: ['Acoustic Felt Slats', 'Fluted Glass Walls', 'Brushed Aluminum'],
      leadTime: '12 - 18 Weeks',
      focus: 'Boutique workspaces, Luxury showrooms, Executive suites'
    },
    kitchens: {
      materials: ['Dekton Countertops', 'Fenix NTM Matt Cabinetry', 'Miele Appliances'],
      leadTime: '8 - 12 Weeks',
      focus: 'Architectural integration, Retractable columns, Hidden pantries'
    },
    'living-rooms': {
      materials: ['Aniline Leather', 'Bouclé Fabrics', 'Travertine Accents'],
      leadTime: '6 - 10 Weeks',
      focus: 'Lighting layering, Integrated media, Acoustic containment'
    },
    turnkey: {
      materials: ['Full structural staging', 'Custom fixture fabrication', 'Art curation'],
      leadTime: '24 - 48 Weeks',
      focus: 'Single-source accountability, Global building permits, Bespoke delivery'
    }
  };

  return (
    <section id="section-services" className="bg-brand-linen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div id="services-header-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-beige block mb-3">
              Our Capabilities
            </span>
            <h2 className="font-serif text-[42px] sm:text-[54px] md:text-[64px] tracking-tight leading-[1.1] text-brand-charcoal">
              Crafting Bespoke <br />Environments.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l border-brand-charcoal/10 pt-4 lg:pt-0">
            <p className="text-brand-zinc text-sm sm:text-base leading-relaxed font-light font-sans">
              We translate architectural vision into tangible luxury, meticulously detailing every surface to define a lifestyle of quiet authority. Our methodology blends traditional master construction with modern high-technology.
            </p>
          </div>
        </div>

        {/* Dynamic & Interactive Showcase Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {SERVICE_ITEMS.map((service) => {
            const isSelected = activeService === service.id;
            const spec = serviceSpecs[service.id];

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => setActiveService(isSelected ? null : service.id)}
                className="bg-white border border-brand-linen-high hover:border-brand-charcoal transition-all duration-500 cursor-pointer flex flex-col justify-between group overflow-hidden relative shadow-sm"
              >
                <div>
                  {/* Image wrapper */}
                  <div className="relative overflow-hidden h-[240px] md:h-[280px]">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-104"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Index overline */}
                    <div className="absolute top-4 left-4 bg-brand-linen/90 border border-brand-linen-high text-brand-charcoal text-[11px] font-semibold py-1 px-2.5 uppercase tracking-widest font-mono">
                      {service.number}
                    </div>

                    <div className="absolute bottom-4 right-4 bg-black/50 p-2 text-white border border-white/20 transition-all group-hover:bg-brand-charcoal">
                      <Maximize size={14} className="stroke-2" />
                    </div>
                  </div>

                  {/* Body text information */}
                  <div className="p-6 md:p-8">
                    <h3 className="font-serif text-2xl tracking-wide text-brand-charcoal mb-3">
                      {service.title}
                    </h3>
                    <p className="text-brand-zinc text-xs sm:text-sm leading-relaxed font-light mb-4">
                      {service.description}
                    </p>

                    {/* Interactive Slide-down details */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isSelected ? 'max-h-[220px] opacity-100 mt-6 pt-6 border-t border-brand-linen-high' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="space-y-3.5 text-xs">
                        <div>
                          <span className="text-brand-zinc font-semibold block uppercase tracking-wider text-[10px] mb-1">Curation Materials:</span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {spec?.materials.map((mat, i) => (
                              <span key={i} className="bg-brand-linen-low text-brand-charcoal border border-brand-linen-high px-2 py-0.5 uppercase text-[9px] tracking-wider font-semibold">
                                {mat}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          <div>
                            <span className="text-brand-zinc font-medium block uppercase tracking-wider text-[9px]">Timeline:</span>
                            <span className="font-serif text-brand-charcoal text-xs">{spec?.leadTime}</span>
                          </div>
                          <div>
                            <span className="text-brand-zinc font-medium block uppercase tracking-wider text-[9px]">Aesthetic:</span>
                            <span className="text-brand-charcoal font-sans font-light text-[11px] leading-tight block mt-0.5">{spec?.focus}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Bar */}
                <div className="px-6 md:px-8 pb-6 pt-2 flex items-center justify-between border-t border-brand-linen-high mt-auto">
                  <span className="text-[10px] uppercase tracking-widest text-brand-zinc font-semibold">
                    {isSelected ? 'Click to collapse details' : 'Explore Specifications'}
                  </span>
                  <div className={`p-1.5 border border-brand-linen-high group-hover:border-brand-charcoal transition-colors ${isSelected ? 'rotate-90 bg-brand-charcoal border-brand-charcoal text-white' : 'text-brand-charcoal'}`}>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cinematic Render Banner Block */}
        <div id="services-banner" className="relative group bg-neutral-950 text-brand-linen border border-brand-linen-high overflow-hidden mb-32">
          {/* Cover image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200"
              alt="High fidelity bedroom visualizer render bedroom"
              className="w-full h-full object-cover opacity-35 scale-102 transition-transform duration-[1500ms] group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-neutral-950/70" />
          </div>

          <div className="relative z-10 px-8 py-20 md:p-24 max-w-4xl">
            <span className="text-white text-[10px] uppercase tracking-[0.3em] font-semibold block mb-4">
              Digital Craftsmanship
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.2] mb-6">
              High-Fidelity 3D <br />Pre-Visualization.
            </h3>
            <p className="text-brand-linen-dim text-sm sm:text-base leading-relaxed font-light mb-8 max-w-2xl font-sans">
              Walk through your future space before a single brick is laid. Our cinematic CGI renderings capture solar light patterns, textile textures, and raw stone grain reflections with absolute physical fidelity, eliminating all execution ambiguities.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <button
                onClick={() => onNavigate('process')}
                className="bg-brand-linen text-brand-charcoal hover:bg-transparent hover:text-white px-8 py-4 text-xs uppercase tracking-widest font-semibold border border-brand-linen hover:border-white transition-all duration-300 cursor-pointer"
              >
                Verify Our Process
              </button>
            </div>
          </div>
        </div>

        {/* The Satyam Advantage Segment */}
        <div id="services-advantage-box" className="bg-brand-charcoal text-white p-8 md:p-16 border border-brand-charcoal">
          <div className="mb-14 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-[10px] text-brand-linen-dim uppercase tracking-[0.25em] font-semibold block mb-3">
                Studio Ethos
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl tracking-tight text-white">
                The Satyam Advantage
              </h3>
            </div>
            <p className="text-brand-linen-dim text-xs sm:text-sm font-light max-w-md font-sans">
              We don't just design rooms; we curate the subtle details that elevate everyday living into an art form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Advantage item: Material selection */}
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center border border-white/20 text-white">
                <Compass size={22} className="stroke-1" />
              </div>
              <h4 className="font-serif text-2xl tracking-wide text-white">
                Material Selection
              </h4>
              <p className="text-brand-linen-dim text-xs sm:text-sm leading-relaxed font-light font-sans">
                An obsessive curation of rare stones, sustainable hardwoods, and hand-woven artisanal textiles sourced globally, pre-qualified for extreme durability and sensory resonance.
              </p>
            </div>

            {/* Advantage item: Furniture planning */}
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center border border-white/20 text-white">
                <Sofa size={22} className="stroke-1" />
              </div>
              <h4 className="font-serif text-2xl tracking-wide text-white">
                Furniture Planning
              </h4>
              <p className="text-brand-linen-dim text-xs sm:text-sm leading-relaxed font-light font-sans">
                Bespoke furniture layout schematics that prioritize elegant ergonomic flow, spatial balance, and visual acoustics while maintaining strict mathematical architectural symmetry.
              </p>
            </div>

            {/* Advantage item: Space planning */}
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center border border-white/20 text-white">
                <Ruler size={22} className="stroke-1" />
              </div>
              <h4 className="font-serif text-2xl tracking-wide text-white">
                Space Planning
              </h4>
              <p className="text-brand-linen-dim text-xs sm:text-sm leading-relaxed font-light font-sans">
                Mathematical precision in defining circulation corridors, sightlines, and smart zoning panels to maximize spatial functionality work within an uncompromising minimalist frame.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
