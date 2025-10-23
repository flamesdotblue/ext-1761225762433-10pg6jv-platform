import React from 'react';
import { Home, Search, Bookmark, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="absolute bottom-0 left-0 right-0 z-20 px-5 pb-6">
      <div className="mx-auto w-full rounded-2xl bg-[#0e1224]/80 backdrop-blur-md border border-white/10 p-3 flex items-center justify-between">
        <NavItem active icon={Home} label="Home" />
        <NavItem icon={Search} label="Search" />
        <NavItem icon={Bookmark} label="Saved" />
        <NavItem icon={User} label="Profile" />
      </div>
    </nav>
  );
}

function NavItem({ icon: Icon, label, active }) {
  return (
    <button className={`flex flex-col items-center gap-1 px-2 py-1 rounded-xl transition ${active ? 'text-white' : 'text-white/60 hover:text-white'}`}>
      <div className={`h-9 w-9 grid place-items-center rounded-xl border ${active ? 'bg-gradient-to-br from-[#ed7621] to-[#cf3527] border-white/10' : 'bg-white/5 border-white/10'}`}>
        <Icon className="h-4.5 w-4.5" />
      </div>
      <span className="text-[11px]">{label}</span>
    </button>
  );
}
