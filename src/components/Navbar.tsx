"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
                  className="group-hover:translate-y-0.5 transition-transform"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-white border-2 border-black p-6 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[200px]">
                  <ul className="space-y-4">
                    <li>
                      <Link href="/about/story" className="text-[16px] font-bold text-black hover:text-zinc-500 transition-colors block">
                        Our Story
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/team" className="text-[16px] font-bold text-black hover:text-zinc-500 transition-colors block">
                        Meet the Team
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Link 
              href="#features" 
              className="text-[18px] font-medium text-black leading-none hover:text-zinc-600 transition-colors"
            >
              Features
            </Link>

            <Link 
              href="#pricing" 
              className="text-[18px] font-medium text-black leading-none hover:text-zinc-600 transition-colors"
            >
              Pricing
            </Link>

            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="text-[18px] font-medium text-black leading-none group-hover:text-zinc-600 transition-colors">
                Solutions
              </span>
              <svg 
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-y-0.5 transition-transform"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </nav>
        </div>

        {/* Search Overlay/Bar */}
        <div className={`absolute inset-x-4 lg:inset-x-20 top-1/2 -translate-y-1/2 h-12 flex items-center transition-all duration-300 z-50 ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Search features, solutions, or guides..."
              className="w-full h-12 bg-zinc-100 border-2 border-black rounded-sm px-12 font-medium focus:outline-none focus:ring-2 focus:ring-black/5"
              autoFocus={isSearchOpen}
            />
            <svg 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="ml-4 p-2 hover:bg-zinc-100 rounded-full transition-colors"
          >
            <X size={24} className="text-black" />
          </button>
        </div>

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
            className="md:hidden p-2 text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div className={`fixed top-0 right-0 h-screen w-full sm:w-[300px] bg-white z-60 flex flex-col pt-32 px-10 gap-8 shadow-2xl transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <Link 
            href="/about" 
            className="text-[20px] font-bold text-black border-b border-zinc-100 pb-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#features" 
            className="text-[20px] font-bold text-black border-b border-zinc-100 pb-2"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="#pricing" 
            className="text-[20px] font-bold text-black border-b border-zinc-100 pb-2"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="#solutions" 
            className="text-[20px] font-bold text-black border-b border-zinc-100 pb-2"
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
