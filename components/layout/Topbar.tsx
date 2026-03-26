"use client";

// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { Sun, Moon, Bell, Search, User } from "lucide-react";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, User, Settings, LogOut, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import this

export default function Topbar() {

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
const pathname = usePathname(); 
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => setMounted(true), []);
  // 3. Create a helper to format the title
  const getPageTitle = () => {
    if (pathname === "/dashboard") return "Dashboard";
    if (pathname === "/profile") return "Profile & Settings";
    if (pathname === "/Portfolio") return "Financial Portfolio";
    if (pathname === "/mentor") return "AI Money Mentor";
    return "Money Mentor"; // Default fallback
  };

  // 4. Create a helper for the subtitle
  const getPageSubtitle = () => {
    if (pathname === "/profile") return "Manage your Indian financial identity";
    if (pathname === "/Portfolio") return "Track your ₹ spending patterns";
    return "Financial Intelligence"; // Default fallback
  };

  if (!mounted) return <div className="h-20 w-full" />;

  return (
    <div className="h-20 flex items-center justify-between px-8 transition-all duration-500
                bg-white/10 dark:bg-[#08080A]/80 border-b border-slate-200 dark:border-white/5
                backdrop-blur-md">

      <div className="flex flex-col  dark:text-slate-100">
       {/* THE DYNAMIC TITLE */}
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white transition-all duration-300">
          {getPageTitle()}
        </h1>
        {/* THE DYNAMIC SUBTITLE */}
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {getPageSubtitle()}
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* THE GLOBAL TOGGLE BUTTON */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-3 rounded-xl transition-all shadow-sm border group
                     bg-slate-50 border-slate-200 text-slate-600
                     dark:bg-[#1C1F26] dark:border-white/10 dark:text-slate-400
                     hover:border-indigo-500/50 dark:hover:border-indigo-500/50"
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-yellow-400 group-hover:rotate-45 transition-transform" />
          ) : (
            <Moon size={20} className="text-indigo-600 group-hover:-rotate-12 transition-transform" />
          )}
        </button>

        {/* PROFILE SECTION */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="h-11 w-11 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold 
                       shadow-lg shadow-indigo-600/20 hover:scale-105 transition-transform cursor-pointer"
          >
            <User size={20} />
          </button>

          {/* DROPDOWN MENU */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-56 rounded-2xl p-2 z-50 shadow-2xl
                            bg-white dark:bg-[#1C1F26] border border-slate-200 dark:border-white/10
                            animate-in fade-in zoom-in duration-200">
              <div className="px-4 py-3 border-b border-slate-100 dark:border-white/5 mb-1">
                <p className="text-sm font-semibold dark:text-white">John Doe</p>
                <p className="text-xs dark:text-slate-400">Premium Member</p>
              </div>

              <Link href="/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                <User size={16} /> Profile
              </Link>

              <div className="h-px bg-slate-100 dark:bg-white/5 my-1" />

              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors">
                <LogOut size={16} /> Log Out
              </button>
            </div>
          )}
        </div>




      </div>
    </div>
  );
}