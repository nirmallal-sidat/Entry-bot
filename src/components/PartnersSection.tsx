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
    { name: "gusto", type: "text" },
  ];

  return (
    <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
      <div className="max-w-[1900px] mx-auto lg:px-20">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-[40px] md:text-[56px] font-bold text-black mb-6 leading-tight">
              Build with the teams shaping<br className="hidden md:block" /> the modern financial stack.
            </h2>
            <p className="text-[18px] text-black max-w-2xl font-medium">
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

        {/* Partners Grid Section */}
        <div className="relative max-w-[1500px] mx-auto">
          {/* Corner Accents - Perfectly Flush */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-black z-10" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-black z-10" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-black z-10" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-black z-10" />

          {/* Grid container with full black borders */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-2 border-black">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`h-28 flex items-center justify-center border-zinc-200 transition-colors duration-200 hover:bg-zinc-50
                  ${index % 5 !== 4 ? 'lg:border-r' : ''} 
                  ${index < 5 ? 'lg:border-b' : ''}
                  ${index % 3 !== 2 ? 'md:border-r' : ''}
                  ${index < 6 ? 'md:border-b' : ''}
                  ${index % 2 !== 1 ? 'border-r' : ''}
                  border-b
                `}
              >
                <span className={`text-[#333] font-bold opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100 flex items-center gap-2 ${
                  partner.name === "stripe" ? "text-xl lowercase tracking-tighter" :
                  partner.name === "deel." ? "text-xl lowercase font-black" :
                  partner.name === "MERCURY" ? "text-sm tracking-[0.2em] uppercase font-semibold" :
                  partner.name === "ramp" ? "text-xl font-bold italic" :
                  partner.name === "Brex" ? "text-xl font-black tracking-tight" :
                  partner.name === "RIPPLING" ? "text-base tracking-widest font-bold" :
                  partner.name === "shopify" ? "text-xl font-bold" :
                  partner.name === "gusto" ? "text-xl font-medium tracking-tight" : "text-lg"
                }`}>
                  {partner.name === "MERCURY" && (
                    <div className="w-5 h-5 rounded-full border border-zinc-400 flex items-center justify-center opacity-70">
                        <div className="grid grid-cols-2 gap-0.5">
                            <div className="w-1 h-1 rounded-full bg-zinc-500"></div>
                            <div className="w-1 h-1 rounded-full bg-zinc-500"></div>
                            <div className="w-1 h-1 rounded-full bg-zinc-500"></div>
                            <div className="w-1 h-1 rounded-full bg-zinc-500"></div>
                        </div>
                    </div>
                  )}
                  {partner.name === "RIPPLING" && (
                    <div className="flex flex-col gap-0.5 mr-1">
                        <div className="w-4 h-[2px] bg-zinc-400"></div>
                        <div className="w-4 h-[2px] bg-zinc-400"></div>
                        <div className="w-4 h-[2px] bg-zinc-400"></div>
                    </div>
                  )}
                  {partner.name === "shopify" && (
                    <div className="w-5 h-5 bg-zinc-400/20 rounded-md flex items-center justify-center mr-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                    </div>
                  )}
                  {partner.name}
                  {(partner.name === "ramp" || partner.name === "Brex") && (
                    <ArrowRight size={14} className="-rotate-45 ml-1 opacity-50" />
                  )}
                </span>
              </div>
            ))}
            {/* Empty boxes to fill the grid if names are fewer than 10 */}
            {[...Array(10 - partners.length)].map((_, i) => (
              <div 
                key={`empty-${i}`} 
                className={`h-28 border-zinc-200 transition-colors duration-200
                  ${(partners.length + i) % 5 !== 4 ? 'lg:border-r' : ''} 
                  ${(partners.length + i) < 5 ? 'lg:border-b' : ''}
                  ${(partners.length + i) % 2 !== 1 ? 'border-r' : ''}
                  border-b
                `}
              >
                {/* Gray box as seen in the image for the 8th slot maybe? */}
                {(partners.length + i) === 7 && (
                    <div className="flex items-center justify-center h-full p-6">
                        <div className="w-16 h-12 bg-zinc-500/50 rounded-sm"></div>
                    </div>
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
