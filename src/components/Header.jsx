import React from 'react';
import { Bell, Search, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative z-20 pt-6 px-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/10 border border-white/15 overflow-hidden flex items-center justify-center">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#ed7621] to-[#cf3527]" />
          </div>
          <div className="text-white">
            <div className="text-xs uppercase tracking-wider text-white/60">Current Location</div>
            <div className="flex items-center gap-1.5 text-[13px] font-medium leading-tight">
              <MapPin className="h-3.5 w-3.5 text-[#ed7621]" />
              <span>Shams, Rabat Street, Abu Dhabi</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <button aria-label="notifications" className="h-10 w-10 grid place-items-center rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition">
            <Bell className="h-5 w-5" />
          </button>
          <button aria-label="search" className="h-10 w-10 grid place-items-center rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
