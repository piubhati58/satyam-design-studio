/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProcessStep, ServiceItem, TestimonialItem, PortfolioProject } from './types';
import modularKitchenImg from './assets/images/modular_kitchen_1780477323580.png';

export const HERO_BACKGROUND = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600';

export const PROCESS_HERO_BG = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600';

export const CONTACT_HERO_BG = 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=1600';

export const ABOUT_MAIN_IMAGE = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'consultation',
    number: '01',
    title: 'Consultation',
    description: 'We begin with an in-depth dialogue to understand your lifestyle, aesthetic aspirations, and functional requirements. This is where we align our creative vision with your personal goals.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    iconType: 'chat'
  },
  {
    id: 'concept-design',
    number: '02',
    title: 'Concept Design',
    description: 'Translating our initial dialogue into a cohesive design narrative. We develop mood boards, color palettes, and spatial layouts that define the soul of the project.',
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
    iconType: 'bulb'
  },
  {
    id: 'visualization',
    number: '03',
    title: '3D Visualization',
    description: 'Experience your future space before it exists. We create photorealistic 3D renderings that capture lighting, material interplay, and atmosphere with absolute fidelity.',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
    iconType: 'visualization'
  },
  {
    id: 'material-selection',
    number: '04',
    title: 'Material Selection',
    description: 'The touch of luxury. We hand-select premium materials—from rare stones to bespoke textiles—ensuring every surface contributes to the tactile narrative of your home.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    iconType: 'materials'
  },
  {
    id: 'execution',
    number: '05',
    title: 'Execution',
    description: 'Our master craftsmen and project managers oversee every detail. We manage timelines, contractors, and quality control with architectural rigor and precision.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    iconType: 'tools'
  },
  {
    id: 'handover',
    number: '06',
    title: 'Handover',
    description: 'The final unveiling. We walk you through your transformed space, ensuring every element is perfect before we hand over the keys to your new lifestyle.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    iconType: 'key'
  }
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'residential',
    number: '01',
    title: 'Residential Design',
    description: 'Comprehensive interior transformations for private estates, blending heritage elegance with contemporary functionality.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'commercial',
    number: '02',
    title: 'Commercial Spaces',
    description: 'Bespoke environments for retail, corporate hubs, and hospitality that communicate brand identity through spatial narrative.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kitchens',
    number: '03',
    title: 'Modular Kitchens',
    description: 'Precision engineering meets culinary artistry with state-of-the-art Italian hardware.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'living-rooms',
    number: '04',
    title: 'Living Rooms',
    description: 'Curated social anchors designed for unhurried comfort and sophisticated entertaining.',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'turnkey',
    number: '05',
    title: 'Turnkey Solutions',
    description: 'From conceptual blue-prints to the final handover, we manage every facet of the project.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'julian',
    quote: 'Satyam Design Studio transformed our home into a functional, elegant, and inspiring environment that has completely elevated our daily living.',
    author: 'Rohan Malhotra',
    role: 'CEO, Horizon Ventures',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    isLarge: true
  },
  {
    id: 'elena',
    quote: 'The process was as seamless as the result. A truly bespoke experience that understands the nuances of architectural flow.',
    author: 'Anshika Sharma',
    role: 'Architectural Consultant',
    imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sarah',
    quote: 'Quiet luxury personified. They don’t just design rooms; they curate atmospheres.',
    author: 'Priya Iyer',
    role: 'Art Curation Advisory'
  },
  {
    id: 'marcus',
    quote: 'A sanctuary in the middle of the city. Every corner tells a story of intentionality.',
    author: 'Aditya Birla',
    role: 'Luxury Space Investor',
    imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PHILOSOPHY_ITEMS = [
  {
    title: 'Functional Luxury',
    description: 'Designing for the way you move, breathe, and live. Every element we introduce serves a purpose beyond the visual, combining the ritual of daily life through ergonomic perfection and material integrity.',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Minimalist Aesthetics',
    description: 'A rejection of noise. We embrace the power of silence in design—using generous volumes of space, rhythmic architectural lines, and a restrained color palette to create a sense of profound calm.',
    imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800'
  }
];

export const WHY_CHOOSE_SATYAM = [
  {
    title: 'Deep Expertise',
    text: 'A decade of specialized experience in high-end residential and commercial architecture.'
  },
  {
    title: 'Turnkey Solutions',
    text: 'Seamless accountability from draft sketch to construction procurement, styling, and final polish.',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Personalized Approach',
    text: 'We don’t impose a style; we extract yours. Each project is a bespoke response to the client’s unique psychology and aspirations.'
  }
];

export const ROADMAP_STEPS = [
  {
    number: '01',
    title: 'Discovery & Immersion',
    text: 'Understanding your lifestyle, spatial challenges, and subconscious aesthetic preferences.'
  },
  {
    number: '02',
    title: 'Curation & Design',
    text: 'Crafting the narrative, materials boards, space plans, and rendering realistic visual guides.'
  },
  {
    number: '03',
    title: 'Execution & Delivery',
    text: 'Managing master builders, bespoke artisans, quality inspections, and staging the final reveal.'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'oakridge',
    title: 'The Oakridge Penthouse',
    category: 'Residential',
    location: 'Jaipur, Rajasthan',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    description: 'A double-height penthouse styled with premium Belgian linen, custom dark oak joinery, and sculptural Jodhpur stone transitions.',
    materials: ['Dark Oak', 'Italian Travertine', 'Belgian Linen', 'Brushed Brass'],
    size: '4,200 sq. ft.'
  },
  {
    id: 'sanctuary',
    title: 'Minimalist Sanctuary Villa',
    category: 'Residential',
    location: 'Jodhpur, Rajasthan',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    description: 'An architectural residence prioritizing raw tactile plaster, natural ventilation paths, and minimalist interior zoning.',
    materials: ['Polished Concrete', 'Teak Wood', 'Raw Brass', 'Structured Plaster'],
    size: '6,800 sq. ft.'
  },
  {
    id: 'obsidian',
    title: 'The Obsidian Workspace',
    category: 'Commercial',
    location: 'GIFT City, Gujarat',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    description: 'Sleek creative boutique corporate headquarters using structural steel framing, matte obsidian stones, and fluted acoustics.',
    materials: ['Powder Steel', 'Wool Felt', 'Smoked Glass', 'Anorite Stone'],
    size: '12,500 sq. ft.'
  },
  {
    id: 'haveli',
    title: 'Alwar Heritage Haveli Suite',
    category: 'Heritage',
    location: 'Alwar, Rajasthan',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    description: 'Restoration of a 19th-century courtyard suite infusing contemporary automated utility controls and bespoke hand-carved daybeds.',
    materials: ['Lime Plaster', 'Hand Teak', 'Local Sandstone', 'Copper Accents'],
    size: '1,800 sq. ft.'
  },
  {
    id: 'culinary',
    title: 'The Serene Culinary Lab',
    category: 'Kitchens',
    location: 'Udaipur, Rajasthan',
    year: '2024',
    imageUrl: modularKitchenImg,
    description: 'Built for professional culinary design, this modular kitchen blends Italian cabinetry layout and integrated sensory appliances.',
    materials: ['Sintered Stone', 'Fluted Oak', 'Stainless Steel', 'Hidden LEDs'],
    size: '650 sq. ft.'
  },
  {
    id: 'pine-forest',
    title: 'Bespoke Oasis Forest Lodge',
    category: 'Residential',
    location: 'Gir Forest, Gujarat',
    year: '2022',
    imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200',
    description: 'A cozy elevated getaway with panoramic forest-view glass windows, local stone fireplaces and natural textured fabrics.',
    materials: ['Local Pine', 'Slate Slabs', 'Textured Wool', 'Wrought Iron'],
    size: '2,900 sq. ft.'
  }
];

