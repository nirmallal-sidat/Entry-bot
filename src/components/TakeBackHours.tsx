"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const TakeBackHours = () => {
  return (
    <section className="relative py-32 px-4 bg-[#FFE500] overflow-hidden font-nunito">
      {/* Abstract Shapes - Top Left (Black) */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-100 hidden lg:block">
        <div className="absolute top-0 left-0 w-24 h-24 bg-black rounded-br-[40px]"></div>
        <div className="absolute top-12 left-12 w-32 h-32 bg-black rounded-[40px]"></div>
        <div className="absolute top-48 left-0 w-20 h-20 bg-black rounded-tr-[40px]"></div>
      </div>

      {/* Abstract Shapes - Top Right (White) */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-100 hidden lg:block">
        <div className="absolute top-0 right-12 w-32 h-16 bg-white rounded-bl-[40px]"></div>
        <div className="absolute top-12 right-0 w-20 h-20 bg-white rounded-l-[40px]"></div>
      </div>

      {/* Abstract Shapes - Bottom Left (White/Zinc) */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-100 hidden lg:block">
        <div className="absolute bottom-12 left-0 w-24 h-24 bg-zinc-50 rounded-r-[40px]"></div>
        <div className="absolute bottom-0 left-24 w-16 h-32 bg-zinc-50 rounded-t-[40px]"></div>
        <div className="absolute bottom-0 left-48 w-16 h-16 bg-zinc-50 rounded-tl-[40px]"></div>
      </div>

      {/* Abstract Shapes - Bottom Right (Black) */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-100 hidden lg:block">
        <div className="absolute bottom-0 right-24 w-48 h-12 bg-black rounded-tl-[40px]"></div>
        <div className="absolute bottom-12 right-12 w-20 h-20 bg-black rounded-[40px]"></div>
        <div className="absolute bottom-32 right-0 w-16 h-16 bg-black rounded-bl-[40px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-[1.1]">
          Ready to take back<br />hours every week?
        </h2>
        <p className="text-[16px] md:text-[18px] text-black max-w-xl mx-auto mb-12 font-medium">
          Join the 7,000+ companies and firms using Entrybot to keep books accurate, up to date, and fast to close.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#"
            className="w-full sm:w-auto px-10 py-4 border border-black rounded-xl text-[16px] font-bold text-black hover:bg-black/5 transition-colors"
          >
            Book a demo
          </Link>
          <Link
            href="#"
            className="w-full sm:w-auto px-10 py-4 bg-[#C5B4FF] rounded-xl text-[16px] font-bold text-black flex items-center justify-center gap-2 hover:bg-[#b8a5fc] transition-colors"
          >
            Get started for free
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TakeBackHours;
