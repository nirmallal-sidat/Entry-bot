"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PartnersSection = () => {
  const partners = [
    { name: "stripe", type: "text" },
    { name: "deel.", type: "text" },
    { name: "MERCURY", type: "text" },
    { name: "ramp", type: "text" },
    { name: "Brex", type: "text" },
    { name: "RIPPLING", type: "text" },
    { name: "shopify", type: "text" },
    { name: "box", type: "element" },
    { name: "empty", type: "empty" },
    { name: "gusto", type: "text" },
  ];

  return (
    <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
      <div className="max-w-[1900px] mx-auto lg:px-20">
        {/* Header Area */}
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-[40px] md:text-[56px] font-bold text-black mb-6 leading-[100%] font-nunito">
                Build with the teams shaping<br className="hidden md:block" /> the modern financial stack.
              </h2>
              <p className="text-[18px] text-black max-w-2xl font-normal font-roboto leading-[100%]">
                Entrybot partners with leading fintech and software platforms to deliver real-time, reliable accounting infrastructure. If you're building where modern businesses live, you should be building with us.
              </p>
            </div>
            
            <Link href="#" className="inline-flex items-center group mb-2">
              <span className="text-[18px] font-medium text-black mr-3">More</span>
              <div className="relative w-[80px] h-[40px]">
                <Image 
                  src="/Arrowdesign.png" 
                  alt="Arrow" 
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Partners Grid Section */}
        <div className="relative max-w-[1500px] mx-auto">
          {/* Corner Accents - Perfectly Flush */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-black z-10" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-black z-10" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-black z-10" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-black z-10" />

          {/* Grid container with light gray borders */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border border-zinc-200">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`h-28 flex items-center justify-center border-zinc-200 transition-colors duration-200 hover:bg-zinc-50
                  ${index % 5 !== 4 ? 'lg:border-r' : ''} 
                  ${index < 5 ? 'lg:border-b' : ''}
                  ${index % 3 !== 2 ? 'md:border-r' : ''}
                  ${index % 2 !== 1 ? 'border-r' : ''}
                  ${index < 6 || (index > 6 && index < 10) ? 'md:border-b' : ''}
                  ${index < 8 || index === 9 ? 'border-b' : ''}
                `}
              >
                {partner.name === "box" ? (
                  <div className="w-16 h-10 bg-zinc-500/50 rounded-sm"></div>
                ) : partner.name === "empty" ? (
                  <div className="h-full w-full"></div>
                ) : (
                  <span className={`text-zinc-600 font-bold flex items-center gap-2 transition-all hover:text-black ${
                    partner.name === "stripe" ? "text-xl font-bold tracking-tight" :
                    partner.name === "deel." ? "text-xl font-black" :
                    partner.name === "MERCURY" ? "text-sm tracking-[0.2em] font-medium" :
                    partner.name === "ramp" ? "text-xl italic font-bold" :
                    partner.name === "Brex" ? "text-xl font-bold" : "text-lg"
                  }`}>
                    {partner.name === "MERCURY" && (
                      <div className="w-5 h-5 rounded-full border border-zinc-400 flex items-center justify-center">
                          <div className="grid grid-cols-2 gap-0.5">
                              <div className="w-1 h-1 rounded-full bg-zinc-400"></div>
                              <div className="w-1 h-1 rounded-full bg-zinc-400"></div>
                              <div className="w-1 h-1 rounded-full bg-zinc-400"></div>
                              <div className="w-1 h-1 rounded-full bg-zinc-400"></div>
                          </div>
                      </div>
                    )}
                    {partner.name === "RIPPLING" && (
                      <div className="flex items-center gap-1.5 opacity-70">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 12h20M2 12a10 10 0 0 1 20 0M2 12a10 10 0 0 0 20 0"/>
                          </svg>
                          <span className="text-base tracking-[0.1em] font-bold">RIPPLING</span>
                      </div>
                    )}
                    {partner.name === "shopify" && (
                      <div className="flex items-center gap-2 opacity-70">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
                          </svg>
                          <span className="text-lg font-bold">shopify</span>
                      </div>
                    )}
                    {partner.name === "Brex" && (
                      <div className="flex items-center gap-2">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
                         </svg>
                         <span>Brex</span>
                      </div>
                    )}
                    {partner.name !== "RIPPLING" && partner.name !== "shopify" && partner.name !== "Brex" && partner.name}
                    {partner.name === "ramp" && (
                      <ArrowRight size={14} className="-rotate-45 opacity-50" />
                    )}
                    {partner.name === "Brex" && (
                      <ArrowRight size={14} className="-rotate-45 opacity-50" />
                    )}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
