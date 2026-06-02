/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { InquiryFormInput } from '../types';
import { CONTACT_HERO_BG } from '../data';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  MessageSquareCode, 
  Trash2, 
  History 
} from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState<InquiryFormInput>({
    fullName: '',
    email: '',
    projectType: 'Residential Transformation',
    message: ''
  });

  const [submittedInquiries, setSubmittedInquiries] = useState<InquiryFormInput[]>([]);
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mount/load inquiries from localStorage so the user can verify submissions
  useEffect(() => {
    const saved = localStorage.getItem('satyam_inquiries');
    if (saved) {
      try {
        setSubmittedInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse inquiries', e);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('');

    if (!form.fullName.trim()) {
      setErrorText('Please enter your full name.');
      return;
    }
    if (!form.email.trim() || !form.email.includes('@')) {
      setErrorText('Please enter a valid email address.');
      return;
    }
    if (!form.message.trim()) {
      setErrorText('Please enter your project message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate elite network relay
    setTimeout(() => {
      const newInquiry: InquiryFormInput = { ...form };
      const updatedList = [newInquiry, ...submittedInquiries];
      setSubmittedInquiries(updatedList);
      localStorage.setItem('satyam_inquiries', JSON.stringify(updatedList));

      setIsSubmitting(false);
      setSuccess(true);
      setForm({
        fullName: '',
        email: '',
        projectType: 'Residential Transformation',
        message: ''
      });
    }, 1200);
  };

  const clearHistory = () => {
    localStorage.removeItem('satyam_inquiries');
    setSubmittedInquiries([]);
  };

  const triggerWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Satyam Design Studio, I would like to inquire about a design consultation. My name is ${form.fullName || "Guest"}.`
    );
    window.open(`https://wa.me/916350227188?text=${text}`, '_blank');
  };

  return (
    <section id="section-contact" className="bg-brand-linen flex flex-col pt-24">
      
      {/* Dynamic contact page backdrop card */}
      <div 
        id="contact-hero-banner"
        className="relative h-[250px] sm:h-[350px] bg-cover bg-center flex items-center justify-center border-b border-brand-linen-high"
        style={{ backgroundImage: `url(${CONTACT_HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-neutral-950/45" />
        <div className="relative text-center max-w-xl px-4 space-y-3 z-10">
          <span className="text-white text-xs font-semibold uppercase tracking-[0.3em] block">
            Connect With Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Let's shape your vision <br />into reality.
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
        {/* Core two column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Inquiry Card */}
          <div className="lg:col-span-8 bg-white border border-brand-linen-high p-8 md:p-12 shadow-sm">
            <div className="mb-10">
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal mb-2">
                 Project Inquiry
              </h3>
              <p className="text-brand-zinc text-xs sm:text-sm leading-relaxed font-light font-sans">
                 Tell us about your project. Our lead curators will respond within 24 hours to schedule an initial discovery call.
              </p>
            </div>

            {/* Notification alert states */}
            {success ? (
              <div id="contact-success" className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 sm:p-8 mb-8 flex items-start space-x-4">
                <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                <div className="space-y-1.5">
                  <h4 className="font-serif text-lg font-semibold text-emerald-900">Inquiry Received</h4>
                  <p className="text-xs sm:text-sm font-light text-emerald-800 leading-relaxed">
                     Thank you for your trust. Your inquiry was securely compiled. A dedicated architectural curator will review your details and contact you via email within the next 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-900 underline mt-2 block cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : null}

            {errorText ? (
              <div id="contact-error" className="bg-rose-50 border border-rose-100 text-rose-700 p-4 mb-6 text-xs sm:text-sm">
                ⚠️ {errorText}
              </div>
            ) : null}

            {/* Real Inquiry Form */}
            <form onSubmit={handleSendMessage} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Full name input */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-zinc block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-brand-linen-high focus:border-brand-charcoal py-3 text-sm text-brand-charcoal focus:outline-none transition-all"
                  />
                </div>

                {/* Email address input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-zinc block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-brand-linen-high focus:border-brand-charcoal py-3 text-sm text-brand-charcoal focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Project Type Select Dropdown */}
              <div className="space-y-2">
                <label htmlFor="projectType" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-zinc block">
                  Project Type
                </label>
                <div className="relative">
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-brand-linen-high focus:border-brand-charcoal py-3 text-sm text-brand-charcoal focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="Residential Transformation">Residential Transformation</option>
                    <option value="Commercial Redesign">Commercial Redesign</option>
                    <option value="Modular Kitchen Curation">Modular Kitchen Curation</option>
                    <option value="Complete Turnkey Consultation">Complete Turnkey Consultation</option>
                  </select>
                  <div className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none text-brand-zinc text-xs">
                     ▼
                  </div>
                </div>
              </div>

              {/* Message Content Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-zinc block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your vision and requirements..."
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-brand-linen-high focus:border-brand-charcoal py-3 text-sm text-brand-charcoal focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submitting button container */}
              <div className="pt-4">
                <button
                  type="submit"
                  id="submit-inquiry"
                  disabled={isSubmitting}
                  className="bg-brand-charcoal text-brand-linen hover:bg-transparent hover:text-brand-charcoal uppercase tracking-widest text-xs font-semibold py-4 px-8 border border-brand-charcoal transition-all duration-300 cursor-pointer flex items-center justify-center space-x-3 w-full sm:w-auto"
                >
                  <span>{isSubmitting ? 'Transmitting Inbound...' : 'Send Inquiry'}</span>
                  <Send size={13} className={isSubmitting ? 'animate-pulse' : ''} />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Direct Details Card */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white border border-brand-linen-high p-8 shadow-sm space-y-8">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal border-b border-brand-linen-high pb-3">
                 Contact Details
              </h4>
              
              <ul className="space-y-6">
                {/* Telephone */}
                <li className="flex items-start space-x-4">
                  <div className="p-2 border border-brand-linen-high text-brand-charcoal mt-0.5">
                    <Phone size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-brand-zinc block mb-1">Call Curator</span>
                    <p className="text-sm font-semibold text-brand-charcoal hover:text-brand-zinc transition-colors">
                      +91 6350227188
                    </p>
                  </div>
                </li>

                {/* Email address */}
                <li className="flex items-start space-x-4">
                  <div className="p-2 border border-brand-linen-high text-brand-charcoal mt-0.5">
                    <Mail size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-brand-zinc block mb-1">Direct Email</span>
                    <a href="mailto:piubhati58@gmail.com" className="text-sm font-semibold text-brand-charcoal hover:text-brand-zinc transition-colors break-all">
                      piubhati58@gmail.com
                    </a>
                  </div>
                </li>

                {/* Address base */}
                <li className="flex items-start space-x-4">
                  <div className="p-2 border border-brand-linen-high text-brand-charcoal mt-0.5">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-brand-zinc block mb-1">Main Studio</span>
                    <p className="text-sm font-semibold text-brand-charcoal">
                      Rajasthan, India
                    </p>
                  </div>
                </li>
              </ul>

              {/* Special WhatsApp action consultation trigger button */}
              <div className="border-t border-brand-linen-high pt-6">
                <button
                  type="button"
                  onClick={triggerWhatsApp}
                  className="w-full bg-[#181c1c] text-white hover:bg-neutral-800 px-4 py-3.5 text-xs font-semibold uppercase tracking-widest text-center flex items-center justify-center space-x-2 border border-brand-charcoal transition-colors cursor-pointer shadow-sm"
                >
                  <MessageSquareCode size={16} />
                  <span>WhatsApp Consultation</span>
                </button>
              </div>
            </div>

            {/* Dynamic Local Storage Inquiry Inbox block */}
            {submittedInquiries.length > 0 && (
              <div className="bg-white border border-brand-linen-high p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-brand-linen-high pb-2">
                  <div className="flex items-center space-x-2 text-brand-charcoal text-xs font-semibold uppercase tracking-wider">
                    <History size={14} className="text-brand-charcoal" />
                    <span>Inquiry History ({submittedInquiries.length})</span>
                  </div>
                  <button
                    onClick={clearHistory}
                    className="text-brand-zinc hover:text-rose-600 p-1.5 transition-colors cursor-pointer"
                    title="Clear history"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>

                <div className="max-h-[180px] overflow-y-auto space-y-3.5 pr-1">
                  {submittedInquiries.map((inq, idx) => (
                    <div key={idx} className="bg-brand-linen-low border border-brand-linen-high p-3 space-y-1.5 text-xs">
                      <div className="flex justify-between items-center text-[10px] font-semibold uppercase text-brand-zinc">
                        <span>{inq.projectType}</span>
                        <span>Inbound 0{idx + 1}</span>
                      </div>
                      <p className="font-semibold text-brand-charcoal truncate">{inq.fullName}</p>
                      <p className="text-brand-zinc text-[11px] line-clamp-2 italic font-light">"{inq.message}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
