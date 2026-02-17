"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ScaleFasterSection = () => {
  const [activeTab, setActiveTab] = useState("AI");

  const tabs = ["AI", "SaaS", "E-commerce", "Healthcare", "Real Estate"];

  const cards = [
    {
      title: "Real-time visibility",
      description: "All core financial metrics live in a single dashboard, giving the team instant clarity for faster decisions.",
      bgColor: "bg-white",
      logo: "Cactus",
      logoType: "text-black font-bold text-2xl"
    },
    {
      title: "$20K–$50K saved annually",
      description: "Always-current, reliable financial data without the overhead—giving the team confidence to move faster while cutting significant annual costs.",
      bgColor: "bg-[#D9F7FF]",
      logo: "REGIMEN",
      logoType: "text-black font-black tracking-tighter text-2xl"
    },
    {
      title: "Trusted by fast-growing AI teams",
      description: "Hyperspell has relied on Entrybot as its accounting system of record for over a year, supporting accurate, consistent financial operations as the team scales.",
      bgColor: "bg-[#FFF9E5]",
      logo: "Hyperspell",
      logoType: "text-black font-semibold text-2xl"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#FFE500] font-nunito">
      <div className="max-w-[1900px] mx-auto lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-[40px] md:text-[56px] font-bold text-black mb-6 leading-tight">
              How Modern Teams Scale Faster With Entrybot
            </h2>
            <p className="text-[18px] text-black max-w-xl font-medium">
              From AI startups to accounting firms, teams use Entrybot to automate workflows, close faster, and gain real-time financial clarity.
            </p>
          </div>
          
          <Link href="#" className="inline-flex items-center group mb-2">
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

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-[16px] font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "text-black hover:bg-black/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative ${card.bgColor} p-10 rounded-sm min-h-[440px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="relative z-10">
                <h3 className="text-[24px] font-bold text-black mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[17px] text-zinc-700 leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
              <div className="mt-auto">
                <div className={card.logoType}>
                    {card.logo === "Cactus" && (
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center p-2.5">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 3V21M12 11H7V8M12 14H17V11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <span className="text-2xl font-bold tracking-tight">Cactus</span>
                        </div>
                    )}
                    {card.logo === "REGIMEN" && (
                        <div className="flex flex-col leading-tight">
                            <span className="font-extrabold text-3xl tracking-tighter">REGIMEN</span>
                            <span className="text-[9px] tracking-[0.3em] font-bold text-zinc-500">MAXIMIZE YOUR POTENTIAL</span>
                        </div>
                    )}
                    {card.logo === "Hyperspell" && (
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col gap-1.5">
                                <div className="w-6 h-[3px] bg-black"></div>
                                <div className="w-10 h-[3px] bg-black"></div>
                                <div className="w-12 h-[3px] bg-black"></div>
                            </div>
                            <span className="font-bold text-2xl tracking-tight">Hyperspell</span>
                        </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScaleFasterSection;
