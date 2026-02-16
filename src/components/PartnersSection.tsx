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

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border border-zinc-200 rounded-xl overflow-hidden">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="h-32 flex items-center justify-center border-zinc-100 border-[0.5px] hover:bg-zinc-50 transition-colors duration-200"
            >
              <span className={`text-zinc-400 font-bold opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100 ${
                partner.name === "stripe" ? "text-2xl lowercase tracking-tighter" :
                partner.name === "deel." ? "text-2xl lowercase font-black" :
                partner.name === "MERCURY" ? "text-lg tracking-widest uppercase font-medium" :
                partner.name === "ramp" ? "text-xl font-bold italic" :
                partner.name === "Brex" ? "text-xl font-black tracking-tight" :
                partner.name === "RIPPLING" ? "text-lg tracking-widest font-bold" :
                partner.name === "shopify" ? "text-xl font-bold" :
                partner.name === "gusto" ? "text-2xl font-medium tracking-tight" : "text-xl"
              }`}>
                {partner.name}
              </span>
            </div>
          ))}
          {/* Fillers for the grid if needed */}
          <div className="h-32 border-zinc-100 border-[0.5px] hidden lg:block"></div>
          <div className="h-32 border-zinc-100 border-[0.5px] hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
