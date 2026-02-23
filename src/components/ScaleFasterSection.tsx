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
            <h2 className="text-[40px] md:text-[55px] font-bold text-black mb-6 leading-[100%] font-nunito">
              How Modern Teams Scale Faster With Entrybot
            </h2>
            <p className="text-[18px] text-black max-w-xl font-normal font-roboto leading-[100%]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative ${card.bgColor} p-8 rounded-[20px] w-full max-w-[560px] h-[280px] flex flex-col justify-between transition-all duration-300`}
            >
              <div className="relative z-10">
                <h3 className="text-[22px] font-bold text-black mb-4 tracking-tight font-nunito leading-[100%]">
                  {card.title}
                </h3>
                <p className="text-[16px] text-black leading-[120%] font-roboto font-normal">
                  {card.description}
                </p>
              </div>
              <div className="mt-auto">
                <div className="relative h-14 w-full max-w-[180px]">
                  <Image 
                    src={card.logo === "Cactus" ? "/cactus.png" : card.logo === "REGIMEN" ? "/Regimen.png" : "/Hyperspell.png"} 
                    alt={card.logo}
                    fill
                    className="object-contain object-left"
                  />
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
