"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative  justify-center flex items-center pt-4 overflow-hidden font-nunito bg-white">
      {/* Social Icons - Left Side */}
      <div className="fixed left-10 bottom-10 flex flex-col gap-6 z-50 hidden lg:flex">
        <Link href="#" className="text-black hover:text-black hover:scale-110 transition-all duration-300">
          <Twitter size={20} />
        </Link>
        <Link href="#" className="text-black hover:text-black hover:scale-110 transition-all duration-300">
          <Facebook size={20} />
        </Link>
        <Link href="#" className="text-black hover:text-black hover:scale-110 transition-all duration-300">
          <Instagram size={20} />
        </Link>
        <Link href="#" className="text-black hover:text-black hover:scale-110 transition-all duration-300">
          <Linkedin size={20} />
        </Link>
      </div>

      <div className="max-w-[1900px] mx-auto px-4 lg:px-20 w-full flex flex-col lg:flex-row items-start justify-between ">
        {/* Text Content */}
        <div className="flex-1 z-10 text-center lg:text-left pt-32">
          <h1 className="text-[64px] lg:text-[100px] font-bold text-black leading-[1] mb-6 tracking-tight">
            Entrybot
          </h1>
          <p className="text-[18px] text-black max-w-lg mb-12 leading-relaxed font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sem enim tellus vel molestie donec quis. Est maecenas ultrices magna nibh mi habitasse elementum nisi.
          </p>
          
          <Link href="#" className="inline-flex items-center group">
            <span className="text-[18px] font-medium text-black mr-3">More</span>
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
