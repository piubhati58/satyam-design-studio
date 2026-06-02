/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SectionId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [section, setSection] = useState<SectionId>('home');

  const renderSection = () => {
    switch (section) {
      case 'home':
        return <HomeSection onNavigate={setSection} />;
      case 'about':
        return <AboutSection onNavigate={setSection} />;
      case 'services':
        return <ServicesSection onNavigate={setSection} />;
      case 'portfolio':
        return <PortfolioSection onNavigate={setSection} />;
      case 'process':
        return <ProcessSection onNavigate={setSection} />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection onNavigate={setSection} />;
    }
  };

  return (
    <div id="satyam-app-root" className="min-h-screen bg-brand-linen flex flex-col font-sans transition-colors duration-500">
      
      {/* Persistent Navigation Header */}
      <Header currentSection={section} onNavigate={setSection} />

      {/* Primary Section Switcher with elegant fade transitions */}
      <main id="app-main" className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer component */}
      <Footer onNavigate={setSection} />
    </div>
  );
}
