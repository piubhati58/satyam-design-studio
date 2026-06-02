/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionId } from '../types';
import { 
  ABOUT_MAIN_IMAGE, 
  PHILOSOPHY_ITEMS, 
  WHY_CHOOSE_SATYAM, 
  ROADMAP_STEPS 
} from '../data';
import { ArrowRight, CheckCircle, Quote, Star, Award, Shield } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (section: SectionId) => void;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <section id="section-about" className="bg-brand-linen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Header Section */}
        <div id="about-intro-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-beige block mb-4">
              Est. 2024
            </span>
            <h2 className="font-serif text-[42px] sm:text-[54px] md:text-[64px] tracking-tight leading-[1.1] text-brand-charcoal mb-8">
              Architects of Stillness <br />and Precision.
            </h2>
            <p className="text-brand-zinc text-base sm:text-lg md:text-xl leading-relaxed font-sans font-light">
              Satyam Design Studio is a boutique interior architecture firm dedicated to creating environments that transcend aesthetic trends. We curate refined lifestyles through intentionality, craftsmanship, and a profound respect for the dialogue between space and inhabitant.
            </p>
          </div>
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-brand-beige-light/20 -z-10 translate-x-2 translate-y-2 border border-brand-charcoal/10 transition-transform group-hover:translate-x-3 group-hover:translate-y-3 duration-500" />
            <div className="p-3 bg-white border border-brand-charcoal/10 shadow-sm">
              <img
                src={ABOUT_MAIN_IMAGE}
                alt="Satyam architectural kitchen slab"
                className="w-full h-[380px] md:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Our Philosophy Layer */}
        <div id="about-philosophy-segment" className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-zinc block mb-3">
              The Manifesto
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl tracking-tight text-brand-charcoal">
              Our Philosophy
            </h3>
            <div className="w-12 h-[1px] bg-brand-beige mx-auto mt-4"></div>
          </div>

          <div className="space-y-24">
            {PHILOSOPHY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Block */}
                <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? 'lg:order-2 lg:pl-12' : 'lg:pr-12'}`}>
                  <h4 className="font-serif text-2xl sm:text-3xl text-brand-charcoal">
                    {item.title}
                  </h4>
                  <p className="text-brand-zinc text-sm sm:text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                {/* Image Frame */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-brand-linen-low border border-brand-charcoal/10 p-3 shadow-sm hover:border-brand-beige transition-all duration-500">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-[280px] sm:h-[350px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Satyam Bento Grid */}
        <div id="about-why-satyam-segment" className="mb-32 bg-brand-linen-low border border-brand-linen-high p-8 md:p-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-zinc block mb-3">
              The Distinction
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl tracking-tight text-brand-charcoal">
              Why Choose Satyam
            </h3>
            <div className="w-12 h-[1px] bg-brand-charcoal mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Box 1: Deep Expertise */}
            <div className="bg-brand-charcoal text-brand-linen p-8 flex flex-col justify-between h-[360px] relative overflow-hidden group hover:border border-brand-charcoal transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-linen/5 rounded-full blur-xl group-hover:bg-brand-linen/10 transition-all duration-500" />
              <Shield size={32} className="text-white stroke-1 mb-6" />
              <div>
                <h4 className="font-serif text-2xl tracking-wide mb-3 text-white">
                  {WHY_CHOOSE_SATYAM[0].title}
                </h4>
                <p className="text-brand-linen-dim text-sm leading-relaxed font-light">
                  {WHY_CHOOSE_SATYAM[0].text}
                </p>
              </div>
            </div>

            {/* Box 2: Turnkey Solutions (Image centered) */}
            <div className="relative group h-[360px] overflow-hidden border border-brand-linen-high">
              <img
                src={WHY_CHOOSE_SATYAM[1].imageUrl}
                alt="Architect workspace drawing tables"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-900/60 transition-opacity group-hover:bg-neutral-900/70" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
                <Award size={32} className="text-white stroke-1" />
                <div>
                  <h4 className="font-serif text-2xl tracking-wide mb-2 text-white">
                    {WHY_CHOOSE_SATYAM[1].title}
                  </h4>
                  <p className="text-brand-linen-dim text-xs sm:text-sm leading-relaxed font-light">
                    {WHY_CHOOSE_SATYAM[1].text}
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3: Personalized Approach */}
            <div className="bg-white text-brand-charcoal p-8 flex flex-col justify-between h-[360px] border border-brand-linen-high relative overflow-hidden group hover:border-brand-charcoal transition-all duration-300">
              <Star size={32} className="text-brand-charcoal stroke-1 mb-6" />
              <div>
                <h4 className="font-serif text-2xl tracking-wide mb-3 text-brand-charcoal">
                  {WHY_CHOOSE_SATYAM[2].title}
                </h4>
                <p className="text-brand-zinc text-sm leading-relaxed font-light">
                  {WHY_CHOOSE_SATYAM[2].text}
                </p>
              </div>
            </div>
          </div>

          {/* Golden Quote Block in Clean Minimalism Monochrome Style */}
          <div className="bg-white border border-brand-linen-high border-l-[3.5px] border-l-brand-charcoal p-8 my-8 md:p-10 flex items-start space-x-6">
            <Quote className="text-brand-charcoal stroke-1 w-10 h-10 shrink-0 mt-1 opacity-70" />
            <div className="space-y-2">
              <p className="font-serif text-lg sm:text-xl italic leading-relaxed text-brand-charcoal font-light">
                "Satyam doesn't just design rooms; they design the feeling of home before you even step through the door."
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-zinc">
                — Satyam Design Studio
              </p>
            </div>
          </div>
        </div>

        {/* Client-Focused Approach Roadmap */}
        <div id="about-roadmap-segment" className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 pr-8">
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-brand-charcoal block mb-3">
                The Journey
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl tracking-tight text-brand-charcoal mb-6">
                Client-Focused Approach
              </h3>
              <p className="text-brand-zinc text-sm leading-relaxed font-light mb-8">
                The relationship between designer and client is one of trust and shared vision. We operate with radical transparency, managing every phase—from initial concept to final installation—to ensure a seamless, stress-free journey toward your new reality.
              </p>
              
              {/* Trust Badge */}
              <div className="border border-brand-linen-high p-5 bg-white flex items-center space-x-4">
                <div className="p-2.5 bg-brand-linen-low text-brand-charcoal border border-brand-linen-high">
                  <CheckCircle size={20} className="stroke-2" />
                </div>
                <div>
                  <h5 className="font-semibold text-xs uppercase tracking-wider text-brand-charcoal">
                     Radically Honest Timeline
                  </h5>
                  <p className="text-xs text-brand-zinc">
                    Real-time construction schedules updated daily.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {ROADMAP_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  id={`roadmap-step-${step.number}`}
                  className="bg-white border border-brand-linen-high hover:border-brand-charcoal p-6 md:p-8 flex items-start space-x-6 transition-all duration-300"
                >
                  <span className="font-serif text-2xl font-light text-brand-zinc mt-0.5">
                    {step.number}
                  </span>
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-xl text-brand-charcoal">
                      {step.title}
                    </h4>
                    <p className="text-brand-zinc text-xs sm:text-sm leading-relaxed font-light">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-brand-charcoal text-brand-linen p-12 md:p-16 text-center border-t border-brand-charcoal flex flex-col items-center justify-center space-y-8">
          <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-snug">
            Start Your Transformation.
          </h4>
          <p className="text-brand-linen-dim text-sm max-w-xl mx-auto leading-relaxed font-light">
            We only take on a limited number of commissions per season to ensure each project receives our absolute, undivided master craftsmanship and attention. Secure your initial portfolio review now.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-brand-linen text-brand-charcoal hover:bg-transparent hover:text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold border border-brand-linen hover:border-white transition-all duration-500 cursor-pointer"
          >
            Book A Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
