import React from 'react';
import Header from './components/Header';
import HeroCover from './components/HeroCover';
import FeatureGrid from './components/FeatureGrid';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#121629] flex items-center justify-center">
      <div className="relative w-[393px] h-[852px] bg-[#121629] rounded-[32px] overflow-hidden shadow-xl ring-1 ring-white/5">
        <HeroCover />
        <Header />
        <main className="relative z-10 px-5 -mt-8">
          <section aria-label="feature-grid" className="">
            <FeatureGrid />
          </section>
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
