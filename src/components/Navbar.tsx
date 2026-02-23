"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, History, Users, Code, Boxes, Zap, Shield, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Close search on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
 
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-[1900px] mx-auto px-4 lg:px-20 h-20 flex items-center justify-between font-nunito relative">
        {/* Left Side: Logo + Navigation */}
        <div className={`flex items-center gap-16 transition-all duration-300 ${isSearchOpen ? 'opacity-0 invisible md:opacity-100 md:visible' : 'opacity-100 visible'}`}>
          <div className="shrink-0 z-50">
            <Link 
              href="/" 
              className="text-[18px] font-medium text-black leading-none hover:text-zinc-600 transition-colors tracking-widest uppercase"
              onClick={() => setIsOpen(false)}
            >
              ENTRYBOT
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-12">
            {/* About Dropdown */}
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-2">
                <Link 
                  href="/about" 
                  className="text-[18px] font-medium text-black leading-none group-hover:text-zinc-600 transition-colors"
                >
                  About
                </Link>
                <svg 
                  width="10" 
                  height="6" 
                  viewBox="0 0 10 6" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-y-0.5 transition-transform text-black"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-zinc-900 border-2 border-black p-4 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[280px]">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about#story" className="flex items-start gap-4 p-3 rounded hover:bg-white/5 transition-colors group/item">
                        <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center shrink-0 group-hover/item:bg-white/10 transition-colors">
                          <History size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="text-[15px] font-bold text-white mb-0.5">Our Story</p>
                          <p className="text-[12px] text-zinc-400 font-medium">Our journey and mission</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about#team" className="flex items-start gap-4 p-3 rounded hover:bg-white/5 transition-colors group/item">
                        <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center shrink-0 group-hover/item:bg-white/10 transition-colors">
                          <Users size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="text-[15px] font-bold text-white mb-0.5">Meet the Team</p>
                          <p className="text-[12px] text-zinc-400 font-medium">The people behind Entrybot</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Link 
              href="/features" 
              className="text-[18px] font-medium text-black leading-none hover:text-zinc-600 transition-colors"
            >
              Features
            </Link>

            <Link 
              href="/pricing" 
              className="text-[18px] font-medium text-black leading-none hover:text-zinc-600 transition-colors"
            >
              Pricing
            </Link>

            <div className="flex items-center gap-2 group cursor-pointer">
              <Link 
                href="/solutions" 
                className="text-[18px] font-medium text-black leading-none group-hover:text-zinc-600 transition-colors"
              >
                Solutions
              </Link>
              <svg 
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-y-0.5 transition-transform text-black"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>




          </nav>
        </div>

        {/* Sleek Pill-shaped Search Bar (Image Match) */}
        {isSearchOpen && (
          <div className="fixed inset-0 z-100 flex items-start justify-center pt-[10vh] px-4 font-nunito">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-white/20 backdrop-blur-md transition-opacity duration-300"
              onClick={() => setIsSearchOpen(false)}
            />
            
            {/* Modal Content - Pill-shaped bar */}
            <div className="relative w-full max-w-4xl animate-in fade-in zoom-in duration-200">
              <div className="flex items-center bg-[#E5E7EB] rounded-full px-8 py-4 w-full shadow-sm">
                <input 
                  type="text" 
                  placeholder="Search"
                  className="flex-1 bg-transparent text-[#6B7280] text-[20px] focus:outline-none placeholder:text-[#6B7280]"
                  autoFocus
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-4"
                >
                  <svg 
                    className="text-[#3730A3]" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Right side - Search & Hamburger */}
        <div className={`flex items-center justify-end gap-4 z-50 transition-all duration-300 ${isSearchOpen ? 'opacity-0 invisible pointer-events-none' : 'opacity-100 visible'}`}>
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-black rounded-full transition-all hover:scale-110 duration-200 cursor-pointer"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-black z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div className={`fixed top-0 right-0 h-screen w-full sm:w-[300px] bg-zinc-900 z-60 flex flex-col pt-32 px-10 gap-8 shadow-2xl transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <Link 
            href="/about" 
            className="text-[20px] font-bold text-white border-b border-white/10 pb-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/features" 
            className="text-[20px] font-bold text-white border-b border-white/10 pb-2"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="/pricing" 
            className="text-[20px] font-bold text-white border-b border-white/10 pb-2"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="/solutions" 
            className="text-[20px] font-bold text-white border-b border-white/10 pb-2"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </Link>


        </div>

        {/* Backdrop for mobile menu */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-55 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
