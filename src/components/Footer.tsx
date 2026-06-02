/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionId } from '../types';
import { ArrowUp, Instagram, Linkedin, Compass, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (section: SectionId) => {
    onNavigate(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-brand-linen-low border-t border-brand-charcoal/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Studio Column */}
          <div className="lg:pr-8">
            <h3 className="font-serif text-2xl tracking-tight text-brand-charcoal mb-4">
              Satyam Design Studio
            </h3>
            <p className="text-brand-zinc text-sm leading-relaxed mb-6">
              Curators of refined lifestyles. We transform environments into architectural statements of elegance and intentionality, crafting customized spaces that speak to your distinct narrative.
            </p>
            <div className="flex items-center space-x-3 text-brand-zinc text-xs tracking-wider uppercase font-semibold">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Accepting Late 2024 Projects</span>
            </div>
          </div>

          {/* Directory Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal mb-6 border-b border-brand-charcoal/5 pb-2">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Studio Home', id: 'home' },
                { name: 'About Philosophy', id: 'about' },
                { name: 'Core Capabilities', id: 'services' },
                { name: 'Client Chronicles', id: 'portfolio' },
                { name: 'Creation Process', id: 'process' },
                { name: 'Inquire & Connect', id: 'contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(item.id as SectionId)}
                    className="text-sm text-brand-zinc hover:text-brand-charcoal transition-colors duration-300 text-left cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal mb-6 border-b border-brand-charcoal/5 pb-2">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://instagram.com/satyam_design_studio"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-brand-zinc hover:text-brand-charcoal transition-colors duration-300 flex items-center space-x-2.5"
                >
                  <Instagram size={15} />
                  <span>@satyam_design_studio</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-brand-zinc hover:text-brand-charcoal transition-colors duration-300 flex items-center space-x-2.5"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn / satyam-design</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-brand-zinc hover:text-brand-charcoal transition-colors duration-300 flex items-center space-x-2.5"
                >
                  <Compass size={15} />
                  <span>Pinterest @satyamdesign</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal mb-6 border-b border-brand-charcoal/5 pb-2">
              Studio Details
            </h4>
            <ul className="space-y-4 text-sm text-brand-zinc">
              <li className="flex items-start space-x-2.5">
                <span className="font-semibold text-brand-charcoal min-w-[55px]">Call:</span>
                <span className="hover:text-brand-charcoal transition-colors duration-300">
                  +91 6350227188
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="font-semibold text-brand-charcoal min-w-[55px]">Email:</span>
                <a
                  href="mailto:piubhati58@gmail.com"
                  className="hover:text-brand-charcoal transition-colors duration-300 break-all"
                >
                  piubhati58@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="font-semibold text-brand-charcoal min-w-[55px]">Studio:</span>
                <span>Rajasthan, India</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock size={15} className="mt-0.5 text-brand-charcoal shrink-0" />
                <span className="text-xs">Mon - Sat: 9:00 AM - 7:00 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and bottom credits */}
        <div className="border-t border-brand-charcoal/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-zinc text-center sm:text-left">
            © {new Date().getFullYear()} Satyam Design Studio. All Rights Reserved. Curators of refined lifestyles.
          </p>
          <div className="flex items-center space-x-8">
            <div className="flex space-x-4 text-xs text-brand-zinc">
              <a href="#" className="hover:text-brand-charcoal transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-brand-charcoal transition-colors">Terms of Service</a>
            </div>
            <button
              onClick={scrollToTop}
              className="bg-brand-charcoal hover:bg-transparent hover:text-brand-charcoal text-brand-linen p-2.5 group transition-all duration-300 border border-brand-charcoal hover:border-brand-charcoal cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
