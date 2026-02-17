"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative  justify-center flex items-center pt-4 overflow-hidden font-nunito bg-white">
      {/* Social Icons - Left Side */}
      <div className="fixed left-10 bottom-10 hidden lg:flex flex-col gap-10 z-50">
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

      <div className="max-w-[1900px] mx-auto px-4 lg:px-20 w-full flex flex-col lg:flex-row items-start justify-between ">
        {/* Text Content */}
        <div className="flex-1 z-10 text-center lg:text-left pt-32">
          <h1 className="text-[64px] lg:text-[100px] font-bold text-black leading-none mb-6 tracking-tight">
                Transform Documents into Data, Instantly
          </h1>
          <p className="text-[18px] text-black max-w-lg mb-12 leading-relaxed font-medium">
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

        {/* Banner Image Container */}
        <div className="flex-[1.5] relative w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[500px] xl:h-[600px] min-[1700px]:h-[700px] flex justify-end mt-16 lg:mt-0">
          <div className="relative w-full h-full opacity-100 max-w-[1000px] lg:max-w-[900px]">
            <Image 
              src="/Bannerimg.png" 
              alt="Entrybot Banner" 
              fill
              className="object-right object-contain md:object-cover lg:object-cover"
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
