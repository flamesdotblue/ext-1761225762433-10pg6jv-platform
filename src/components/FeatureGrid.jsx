import React from 'react';
import { Calendar, Trophy, GraduationCap, Users } from 'lucide-react';

const cards = [
  {
    title: 'Book a Court',
    subtitle: 'Find and reserve nearby courts',
    icon: Calendar,
    accentFrom: '#ed7621',
    accentTo: '#cf3527',
  },
  {
    title: 'Tournaments',
    subtitle: 'Compete and climb ranks',
    icon: Trophy,
    accentFrom: '#cf3527',
    accentTo: '#ed7621',
  },
  {
    title: 'Coaching',
    subtitle: 'Train with pros',
    icon: GraduationCap,
    accentFrom: '#ed7621',
    accentTo: '#ed7621',
  },
  {
    title: 'My Teams',
    subtitle: 'Manage squads & matches',
    icon: Users,
    accentFrom: '#cf3527',
    accentTo: '#cf3527',
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card, idx) => (
        <FeatureCard key={idx} {...card} />
      ))}
    </div>
  );
}

function FeatureCard({ title, subtitle, icon: Icon, accentFrom, accentTo }) {
  return (
    <button className="group relative overflow-hidden rounded-[16px] bg-[#13182d] border border-white/10 p-4 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.6)] text-left focus:outline-none focus:ring-2 focus:ring-[#ed7621]/60">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-80" style={{
        background: `radial-gradient(60px 60px at center, ${accentFrom}, transparent 60%)`,
      }} />
      <div className="absolute right-0 bottom-0 h-20 w-20 opacity-70" style={{
        background: `conic-gradient(from 180deg at 50% 50%, ${accentFrom}, ${accentTo}, transparent)`,
        filter: 'blur(12px)'
      }} />
      <div className="relative z-10 flex flex-col gap-3">
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 flex items-center justify-center text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-white text-[15px] font-semibold leading-tight">{title}</h3>
          <p className="text-[12px] text-white/60 mt-1">{subtitle}</p>
        </div>
      </div>
    </button>
  );
}
