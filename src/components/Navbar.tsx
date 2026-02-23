"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, History, Users, Code, Boxes, Zap, Shield, ArrowUpRight } from "lucide-react";

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

            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-2">
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

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-zinc-900 border-2 border-black p-4 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[320px]">
                  <div className="grid grid-cols-1 gap-1">
                    <Link href="#" className="flex items-start gap-4 p-3 rounded hover:bg-white/5 transition-colors group/item">
                      <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center shrink-0 group-hover/item:bg-white/10 transition-colors">
                        <Zap size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[15px] font-bold text-white mb-0.5">Integrations</p>
                        <p className="text-[12px] text-zinc-400 font-medium">Connect with your favorite tools</p>
                      </div>
                    </Link>
                    <Link href="#" className="flex items-start gap-4 p-3 rounded hover:bg-white/5 transition-colors group/item">
                      <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center shrink-0 group-hover/item:bg-white/10 transition-colors">
                        <Boxes size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[15px] font-bold text-white mb-0.5">Revenue Automation</p>
                        <p className="text-[12px] text-zinc-400 font-medium">Automatic daily bookkeeping</p>
                      </div>
                    </Link>
                    <Link href="#" className="flex items-start gap-4 p-3 rounded hover:bg-white/5 transition-colors group/item">
                      <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center shrink-0 group-hover/item:bg-white/10 transition-colors">
                        <Code size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[15px] font-bold text-white mb-0.5">API Access</p>
                        <p className="text-[12px] text-zinc-400 font-medium">Build custom workflows</p>
                      </div>
                    </Link>
                    <Link href="#" className="flex items-start gap-4 p-3 rounded hover:bg-white/5 transition-colors group/item">
                      <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center shrink-0 group-hover/item:bg-white/10 transition-colors">
                        <Shield size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[15px] font-bold text-white mb-0.5">Security</p>
                        <p className="text-[12px] text-zinc-400 font-medium">Bank-grade data protection</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </nav>
        </div>

        {/* Premium Spotlight-style Search Modal */}
        {isSearchOpen && (
          <div className="fixed inset-0 z-100 flex items-start justify-center pt-[10vh] px-4 font-nunito">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300"
              onClick={() => setIsSearchOpen(false)}
            />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-zinc-900 border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-4 border-b border-white/10 flex items-center gap-4">
                <svg 
                  className="text-zinc-500"
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Search features, solutions, or guides..."
                  className="flex-1 h-10 bg-transparent text-white text-[18px] font-medium focus:outline-none placeholder:text-zinc-600"
                  autoFocus
                />
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-zinc-500 bg-zinc-800 px-2 py-1 rounded border border-white/5 uppercase tracking-wider">ESC to close</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Quick Links</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      { icon: <Zap size={16} />, title: "Integrations", desc: "Apps & Tools" },
                      { icon: <Boxes size={16} />, title: "Automations", desc: "Workflows" },
                      { icon: <Code size={16} />, title: "API Docs", desc: "Builder guide" },
                      { icon: <Shield size={16} />, title: "Security", desc: "Trust center" }
                    ].map((item, i) => (
                      <button key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-all text-left">
                        <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center text-white shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-white">{item.title}</p>
                          <p className="text-[11px] text-zinc-500">{item.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Popular Pages</h4>
                  <div className="space-y-1">
                    {["Pricing Plans", "Become a Partner", "Customer Stories", "Our Story"].map((page, i) => (
                      <button key={i} className="w-full h-10 px-4 rounded-lg flex items-center justify-between text-zinc-300 hover:text-white hover:bg-white/5 transition-all">
                        <span className="text-[14px] font-medium">{page}</span>
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800/50 p-4 border-t border-white/5 flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-zinc-500 text-[11px] font-bold">
                    <span className="bg-zinc-700 px-1.5 py-0.5 rounded text-zinc-300">↑↓</span>
                    to navigate
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-500 text-[11px] font-bold">
                    <span className="bg-zinc-700 px-1.5 py-0.5 rounded text-zinc-300">Enter</span>
                    to select
                  </div>
                </div>
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="text-zinc-500 hover:text-white text-[12px] font-bold transition-colors"
                >
                  Close
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
            href="#features" 
            className="text-[20px] font-bold text-white border-b border-white/10 pb-2"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="#pricing" 
            className="text-[20px] font-bold text-white border-b border-white/10 pb-2"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="/#solutions" 
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
