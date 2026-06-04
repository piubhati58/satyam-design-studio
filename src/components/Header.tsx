/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X, PhoneCall } from 'lucide-react';

interface HeaderProps {
  currentSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export default function Header({ currentSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: SectionId }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: SectionId) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-linen/95 md:py-4 py-3 border-b border-brand-linen-high shadow-none backdrop-blur-md'
          : 'bg-transparent md:py-6 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="logo-button"
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3.5 text-left group cursor-pointer"
        >
          {/* Custom SVG Architecture Logo converted from hand-drawn reference */}
          <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <svg
              viewBox="0 0 40 40"
              className="w-9 h-9 sm:w-10 sm:h-10 text-brand-charcoal"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Column 1 (left) */}
              <line x1="8" y1="14" x2="8" y2="34" />
              
              {/* Column 2 (middle-left) */}
              <line x1="14" y1="10" x2="14" y2="34" />
              
              {/* Column 3 (middle-right) */}
              <line x1="20" y1="14" x2="20" y2="34" />
              
              {/* Column 4 (right) */}
              <line x1="32" y1="6" x2="32" y2="34" />
              
              {/* Horizontal line of the left/lower frame */}
              <line x1="8" y1="14" x2="20" y2="14" />
              
              {/* Sloped roof of the right/taller frame */}
              <line x1="14" y1="10" x2="32" y2="6" />
              
              {/* Doorframe filled opening */}
              <rect x="23" y="16" width="6" height="18" fill="currentColor" stroke="none" />
              
              {/* Door leaf (open) with warm golden beige fill matching original screenshot and brand style */}
              <polygon points="23,16 26,18.5 26,31.5 23,34" fill="#C4B59F" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-sans text-lg sm:text-xl md:text-2xl tracking-tighter font-bold uppercase text-brand-charcoal block leading-none">
              Satyam Design Studio
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-brand-zinc group-hover:text-brand-charcoal transition-colors duration-300 mt-1 block">
              Interior Architecture
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-2 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer ${
                currentSection === item.id
                  ? 'text-brand-charcoal'
                  : 'text-brand-zinc hover:text-brand-charcoal'
              }`}
            >
              {item.label}
              {currentSection === item.id && (
                <span
                  id={`nav-active-line-${item.id}`}
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-charcoal"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div id="header-action" className="hidden lg:block">
          <button
            id="get-consultation-btn"
            onClick={() => handleNavClick('contact')}
            className="bg-transparent text-brand-charcoal border border-brand-beige-light hover:bg-brand-charcoal hover:border-brand-charcoal hover:text-white text-xs uppercase tracking-[0.2em] font-semibold py-3 px-6 transition-all duration-500 cursor-pointer"
          >
            Inquire
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-brand-charcoal hover:text-brand-zinc transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed top-[60px] sm:top-[72px] left-0 w-full h-[calc(100vh-60px)] bg-brand-linen z-40 border-t border-brand-linen-high flex flex-col px-6 py-8"
        >
          <div className="flex flex-col space-y-6 flex-grow py-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg font-sans tracking-tight py-2 border-b border-brand-linen-high flex justify-between items-center ${
                  currentSection === item.id ? 'text-brand-charcoal font-bold pl-2' : 'text-brand-zinc pl-0'
                } transition-all duration-300`}
              >
                <span>{item.label}</span>
                <span className="text-[10px] uppercase font-sans tracking-widest text-brand-zinc">
                  0{index + 1}
                </span>
              </button>
            ))}
          </div>
          <div className="border-t border-brand-linen-high pt-6 mt-auto">
            <button
              id="mobile-consult-btn"
              onClick={() => handleNavClick('contact')}
              className="w-full bg-brand-charcoal text-brand-linen py-4 text-sm uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 border border-brand-charcoal hover:bg-zinc-800 transition-colors duration-300"
            >
              <PhoneCall size={16} />
              <span>Get Free Consultation</span>
            </button>
            <p className="text-[11px] text-center text-brand-zinc mt-4 tracking-wider uppercase">
              +91 6350227188 • Rajasthan, India
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
