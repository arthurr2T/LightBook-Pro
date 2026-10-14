/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero, Deliverables } from './components/Sections1to5';
import { Bonuses, Pricing } from './components/Sections6to10';
import { Testimonials, Guarantee, FAQ, FinalCTA, Footer } from './components/Sections11toFooter';

export default function App() {
  return (
    <main className="min-h-screen bg-[#F4EFE5] flex flex-col font-sans overflow-x-hidden">
      <Hero />
      <Deliverables />
      <Bonuses />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
