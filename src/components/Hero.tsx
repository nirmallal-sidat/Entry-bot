"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative  justify-center flex items-center pt-4 overflow-hidden font-nunito bg-white">
      {/* Social Icons - Left Side */}
      <div className="fixed left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-10 z-50">
        <Link href="#" className="text-black hover:text-zinc-600 hover:scale-110 transition-all duration-300">
          <Twitter size={32} />
        </Link>
        <Link href="#" className="text-black hover:text-zinc-600 hover:scale-110 transition-all duration-300">
          <Facebook size={32} />
        </Link>
        <Link href="#" className="text-black hover:text-zinc-600 hover:scale-110 transition-all duration-300">
          <Instagram size={32} />
        </Link>
        <Link href="#" className="text-black hover:text-zinc-600 hover:scale-110 transition-all duration-300">
          <Linkedin size={32} />
        </Link>
      </div>

      <div className="max-w-[1900px] mx-auto px-4 lg:px-20 w-full relative min-h-[600px] lg:min-h-[760px] flex items-center">
        {/* Text Content */}
        <div className="max-w-4xl z-10 text-center lg:text-left pt-20 lg:pt-0">
          <h1 className="text-[56px] md:text-[80px] xl:text-[100px] font-bold text-black leading-[110%] md:leading-[136px] mb-6 tracking-tight font-nunito">
                Transform Documents into Data.
          </h1>
          <p className="text-[18px] text-black max-w-lg mb-12 leading-[120%] md:leading-[21px] font-normal mx-auto lg:mx-0 font-roboto">
            Entrybot uses intelligent OCR and AI vision to extract, process, and manage data from any document type - invoices, receipts, bank statements, or scanned files.
          </p>
          
          <Link href="#" className="inline-flex items-center group">
            <span className="text-[18px] font-medium text-black mr-3">Start Free Trial</span>
            <div className="relative w-[80px] h-[40px] group-hover:translate-x-3 transition-transform duration-300">
              <Image 
                src="/Arrowdesign.png" 
                alt="Arrow" 
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Banner Image Container - Now Background & Right Aligned */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[95%] h-full lg:h-[120%] z-0 opacity-40 lg:opacity-100 pointer-events-none">
          <div className="relative w-full h-full">
            <Image 
              src="/Bannerimg.png" 
              alt="Entrybot Banner" 
              fill
              className="object-right object-contain"
              style={{ transform: 'rotate(0deg)' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
