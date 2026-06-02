/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionId } from '../types';
import { HERO_BACKGROUND } from '../data';
import { ArrowRight, Sparkles, MoveDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeSectionProps {
  onNavigate: (section: SectionId) => void;
}

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <section id="section-home" className="relative min-h-screen bg-brand-linen flex flex-col justify-between overflow-hidden">
      {/* Background Image with elegant overlay */}
      <div 
        id="home-bg-image"
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-102"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
      >
        <div className="absolute inset-0 bg-neutral-950/50 backdrop-brightness-[0.82] backdrop-contrast-[1.02]" />
      </div>

      {/* Spacing alignment for absolute centered typography */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-40 md:pt-48 pb-16 flex-grow flex flex-col justify-center">
        <div className="max-w-4xl text-left text-white">
          {/* Tagline / Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-brand-beige-light"></span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-brand-linen-dim">
              Premium Interior Solutions
            </span>
          </motion.div>

          {/* Slogan Headings in Serif and Sans-serif pairings */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-8 font-normal"
          >
            Transforming <br />
            <span className="italic font-normal font-serif text-brand-linen-dim">Spaces</span> Into <br />
            <span className="text-brand-linen font-serif">Experiences.</span>
          </motion.h1>

          {/* Understatement description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-brand-linen-dim/95 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-12 font-sans"
          >
            Premium interior design and structural curation solutions for bespoke luxury homes, contemporary corporate offices, and discerning wellness/hospitality spaces.
          </motion.p>

          {/* Action Curation Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.99 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="bg-brand-linen text-brand-charcoal hover:bg-transparent hover:text-white text-xs md:text-sm uppercase tracking-widest font-semibold py-4 px-8 border border-brand-linen hover:border-white transition-all duration-500 cursor-pointer w-full sm:w-auto text-center"
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => onNavigate('process')}
              className="bg-transparent hover:bg-white hover:text-brand-charcoal text-brand-linen text-xs md:text-sm uppercase tracking-widest font-semibold py-4 px-8 border border-white/30 hover:border-white transition-all duration-500 cursor-pointer w-full sm:w-auto text-center flex items-center justify-center space-x-2"
            >
              <span>View Process</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom highlights bar */}
      <div className="relative w-full z-10 bg-brand-charcoal/10 border-t border-white/10 backdrop-blur-sm py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-white">
          <div className="flex items-center space-x-2.5 text-xs tracking-wider uppercase text-brand-linen-dim">
            <Sparkles size={14} className="text-white" />
            <span>Harmonizing architectural form and organic stillness</span>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('interactive-highlights');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs uppercase tracking-widest font-semibold text-brand-linen-dim hover:text-white transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
          >
            <span>Explore Details</span>
            <MoveDown size={14} className="animate-bounce" />
          </button>
        </div>
      </div>

      {/* Interactive Highlights section that scrolls down */}
      <div id="interactive-highlights" className="relative w-full bg-brand-linen py-24 border-y border-brand-linen-high">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-2 border-l border-brand-linen-high pl-6">
              <span className="font-serif text-3xl font-light text-brand-charcoal block mb-3">01</span>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-charcoal mb-2">
                Bespoke Curation
              </h4>
              <p className="text-xs sm:text-sm text-brand-linen-dim leading-relaxed">
                We custom-source material pieces globally to create architectural harmony unique to your psychology.
              </p>
            </div>
            <div className="p-2 border-l border-brand-linen-high pl-6">
              <span className="font-serif text-3xl font-light text-brand-charcoal block mb-3">02</span>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-charcoal mb-2">
                Uncompromising Detail
              </h4>
              <p className="text-xs sm:text-sm text-brand-linen-dim leading-relaxed">
                Zero tolerances. Every drawer slider, corner join, and light projection is engineered to perfection.
              </p>
            </div>
            <div className="p-2 border-l border-brand-linen-high pl-6">
              <span className="font-serif text-3xl font-light text-brand-charcoal block mb-3">03</span>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-charcoal mb-2">
                Turnkey Execution
              </h4>
              <p className="text-xs sm:text-sm text-brand-linen-dim leading-relaxed">
                From structural blueprints, building permits to interior styling staging, we take absolute responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
