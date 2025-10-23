import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[280px] w-full">
      <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#121629]/20 to-[#121629]" />
      <div className="pointer-events-none absolute bottom-4 left-0 right-0 px-5 flex items-end justify-between">
        <div className="text-white">
          <h1 className="text-2xl font-semibold tracking-tight">Game on.</h1>
          <p className="text-sm text-white/70">Book courts, join tournaments, and play smarter.</p>
        </div>
        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#ed7621] to-[#cf3527] shadow-[0_10px_30px_-10px_rgba(207,53,39,0.6)] border border-white/10" />
      </div>
    </section>
  );
}
