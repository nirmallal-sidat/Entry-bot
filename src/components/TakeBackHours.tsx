"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const TakeBackHours = () => {
  return (
    <section className="relative py-32 px-4 bg-[#FFE500] overflow-hidden font-nunito">
      {/* Abstract Shape Assets */}
      <div className="absolute top-0 left-0 w-[180px] h-[180px] opacity-100 hidden lg:block">
        <Image src="/Rblack.avif" alt="Shape" fill className="object-contain object-top-left" />
      </div>

      <div className="absolute top-0 right-0 w-[220px] h-[220px] opacity-100 hidden lg:block">
        <Image src="/RWhite.avif" alt="Shape" fill className="object-contain object-top-right" />
      </div>

      <div className="absolute bottom-0 left-0 w-[220px] h-[220px] opacity-100 hidden lg:block">
        <Image src="/RWhite1.avif" alt="Shape" fill className="object-contain object-bottom-left" />
      </div>

      <div className="absolute bottom-0 right-0 w-[180px] h-[180px] opacity-100 hidden lg:block">
        <Image src="/RBlack2.avif" alt="Shape" fill className="object-contain object-bottom-right" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-[100%] font-nunito">
          Ready to take back<br />hours every week?
        </h2>
        <p className="text-[18px] text-black max-w-xl mx-auto mb-12 font-normal font-roboto leading-[100%]">
          Join the 7,000+ companies and firms using Puzzle to keep books accurate, up to date, and fast to close.
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
