/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { SectionId } from '../types';
import { PROCESS_STEPS } from '../data';
import { 
  MessageSquare, 
  Lightbulb, 
  Eye, 
  Layers, 
  Hammer, 
  Key, 
  CheckCircle, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Compass 
} from 'lucide-react';

interface ProcessSectionProps {
  onNavigate: (section: SectionId) => void;
}

export default function ProcessSection({ onNavigate }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Render proper icon based on string key
  const renderStepIcon = (type: string) => {
    switch (type) {
      case 'chat':
        return <MessageSquare size={18} />;
      case 'bulb':
        return <Lightbulb size={18} />;
      case 'visualization':
        return <Eye size={18} />;
      case 'materials':
        return <Layers size={18} />;
      case 'tools':
        return <Hammer size={18} />;
      case 'key':
        return <Key size={18} />;
      default:
        return <CheckCircle size={18} />;
    }
  };

  return (
    <section id="section-process" className="bg-brand-linen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Title */}
        <div id="process-title" className="max-w-3xl mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-charcoal font-semibold block">
            The Journey of Creation
          </span>
          <h2 className="font-serif text-[42px] sm:text-[54px] md:text-[64px] tracking-tight leading-[1.1] text-brand-charcoal">
            Crafting space with <br />architectural precision.
          </h2>
          <div className="w-16 h-[1px] bg-brand-charcoal my-6" />
          <p className="text-brand-zinc text-sm sm:text-base leading-relaxed font-light font-sans max-w-xl">
            From the first conceptual spark to the final handover, our process is a transparent, collaborative journey designed to bring your vision to life with uncompromising quality.
          </p>
        </div>

        {/* Interactive Step Navigator Row */}
        <div id="process-step-tabs" className="mb-16 border-b border-brand-linen-high pb-4 hidden md:flex space-x-1 justify-between">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`flex-1 py-3 text-center transition-all cursor-pointer group uppercase tracking-widest text-[10px] font-semibold border-b-2 ${
                activeStep === idx 
                  ? 'border-brand-charcoal text-brand-charcoal' 
                  : 'border-transparent text-brand-zinc hover:text-brand-charcoal'
              }`}
            >
              <span className="block font-sans text-sm font-light mb-1">{step.number}</span>
              {step.title}
            </button>
          ))}
        </div>

        {/* Quick details of selected step first */}
        <div id="active-step-panel" className="bg-white border border-brand-linen-high p-6 md:p-10 mb-20 shadow-sm md:hidden">
          <div className="flex items-center space-x-3 mb-4">
            <span className="font-sans text-xl font-bold text-brand-charcoal">{PROCESS_STEPS[activeStep].number}</span>
            <h4 className="font-serif text-xl tracking-wide text-brand-charcoal uppercase">{PROCESS_STEPS[activeStep].title}</h4>
          </div>
          <p className="text-brand-zinc text-xs mb-6 font-light leading-relaxed">{PROCESS_STEPS[activeStep].description}</p>
          <div className="flex justify-between items-center">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 5))}
              className="text-[10px] text-brand-zinc hover:text-brand-charcoal tracking-wider uppercase font-semibold"
            >
              ← Previous
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < 5 ? prev + 1 : 0))}
              className="text-[10px] text-brand-zinc hover:text-brand-charcoal tracking-wider uppercase font-semibold"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Complete Timeline Structure: Alternating columns */}
        <div id="process-timeline" className="relative mb-32">
          {/* Centered vertical running line in timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-brand-linen-high hidden lg:block" />

          <div className="space-y-16 lg:space-y-24 relative">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.id}
                  id={`timeline-row-${step.id}`}
                  onClick={() => setActiveStep(idx)}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center cursor-pointer group ${
                    activeStep === idx ? 'opacity-100Scale' : 'opacity-85'
                  }`}
                >
                  
                  {/* Left Column content item */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:text-right lg:order-1' : 'lg:order-3'}`}>
                    {isEven ? (
                      <div className="space-y-4">
                        <span className="font-sans text-4xl sm:text-5xl font-bold text-brand-zinc group-hover:text-brand-charcoal transition-colors block">
                          {step.number}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal">
                          {step.title}
                        </h3>
                        <p className="text-brand-zinc text-xs sm:text-sm leading-relaxed font-light">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      // Image on the left for odd items
                      <div className="bg-brand-linen-low border border-brand-linen-high p-3 shadow-md hover:border-brand-charcoal transition-all duration-500">
                        <img
                          src={step.imageUrl}
                          alt={step.title}
                          className="w-full h-[240px] md:h-[280px] object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>

                  {/* Centered Indicator Badge */}
                  <div className="hidden lg:flex lg:col-span-2 items-center justify-center lg:order-2 relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 shadow-sm ${
                        activeStep === idx 
                          ? 'bg-brand-charcoal text-brand-linen border-brand-charcoal scale-110 shadow-md' 
                          : 'bg-white border-brand-linen-high text-brand-zinc group-hover:border-brand-charcoal group-hover:text-brand-charcoal'
                      }`}
                    >
                      {renderStepIcon(step.iconType)}
                    </div>
                  </div>

                  {/* Right Column content item */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-3' : 'lg:order-1'}`}>
                    {isEven ? (
                      // Image on high for even items
                      <div className="bg-brand-linen-low border border-brand-linen-high p-3 shadow-md hover:border-brand-charcoal transition-all duration-500">
                        <img
                          src={step.imageUrl}
                          alt={step.title}
                          className="w-full h-[240px] md:h-[280px] object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className="space-y-4 lg:text-left">
                        <span className="font-sans text-4xl sm:text-5xl font-bold text-brand-zinc group-hover:text-brand-charcoal transition-colors block">
                          {step.number}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal">
                          {step.title}
                        </h3>
                        <p className="text-brand-zinc text-xs sm:text-sm leading-relaxed font-light">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Tri-Values Segment */}
        <div id="process-values" className="border-t border-brand-linen-high pt-20 mb-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4 md:pr-4">
            <div className="mx-auto md:mx-0 w-10 h-10 flex items-center justify-center border border-brand-linen-high text-brand-charcoal rounded-full bg-white">
              <ShieldCheck size={18} />
            </div>
            <h4 className="font-serif text-xl tracking-wide text-brand-charcoal">
              Uncompromising Quality
            </h4>
            <p className="text-brand-zinc text-xs sm:text-sm leading-relaxed font-light">
              We partner with global artisans and use only the finest raw materials to ensure longevity and aesthetic timelessness in every commission.
            </p>
          </div>

          <div className="space-y-4 md:px-4 md:border-x border-brand-linen-high">
            <div className="mx-auto md:mx-0 w-10 h-10 flex items-center justify-center border border-brand-linen-high text-brand-charcoal rounded-full bg-white">
              <Clock size={18} />
            </div>
            <h4 className="font-serif text-xl tracking-wide text-brand-charcoal">
              Timely Delivery
            </h4>
            <p className="text-brand-zinc text-xs sm:text-sm leading-relaxed font-light">
              Our disciplined project managers and real-time Gantt tracking ensures your vision is realized on budget and exactly on schedule.
            </p>
          </div>

          <div className="space-y-4 md:pl-4">
            <div className="mx-auto md:mx-0 w-10 h-10 flex items-center justify-center border border-brand-linen-high text-brand-charcoal rounded-full bg-white">
              <Compass size={18} />
            </div>
            <h4 className="font-serif text-xl tracking-wide text-brand-charcoal">
              Intentional Design
            </h4>
            <p className="text-brand-zinc text-xs sm:text-sm leading-relaxed font-light">
              Every line, texture shadow range, and recessed light aperture is selected with ultimate purpose, curated to amplify human wellbeing.
            </p>
          </div>
        </div>

        {/* Ready to Begin Curation Panel */}
        <div id="ready-panel" className="border border-brand-linen-high p-10 md:p-16 text-center max-w-4xl mx-auto bg-white shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-linen-high block blur-2xl group-hover:bg-brand-linen-low transition-all duration-300" />
          <h3 className="font-serif text-3xl sm:text-4xl text-brand-charcoal mb-4">
            Ready to begin your journey?
          </h3>
          <p className="text-brand-zinc text-xs sm:text-sm max-w-lg mx-auto leading-relaxed font-light mb-8 font-sans">
            Let's discuss how we can transform your space into a curated sanctuary of quiet luxury and architectural utility.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-brand-charcoal text-brand-linen hover:bg-transparent hover:text-brand-charcoal px-8 py-3.5 text-xs font-semibold uppercase tracking-widest border border-brand-charcoal transition-all duration-500 cursor-pointer text-center"
          >
            Schedule An Introduction
          </button>
        </div>

      </div>
    </section>
  );
}
