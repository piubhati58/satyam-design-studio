/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SectionId = 'home' | 'about' | 'services' | 'portfolio' | 'process' | 'contact';

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  iconType: 'chat' | 'bulb' | 'visualization' | 'materials' | 'tools' | 'key';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  imageUrl?: string;
  isLarge?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
  description: string;
  materials: string[];
  size?: string;
}

export interface InquiryFormInput {
  fullName: string;
  email: string;
  projectType: string;
  message: string;
}
