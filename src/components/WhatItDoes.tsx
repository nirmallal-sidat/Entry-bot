"use client";

import { Wand2, BarChart3, LineChart, Network, Sparkles, ArrowLeftRight, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const WhatItDoes = () => {
  const features = [
    {
      icon: <Wand2 size={24} className="text-black" />,
      title: "AI-assisted workflows",
      description: "Categorization, reconciliation and schedules done automatically",
    },
    {
      icon: <BarChart3 size={24} className="text-black" />,
      title: "Real-time dashboards",
      description: "Cash, burn, runway, and trends in one place.",
    },
    {
      icon: <LineChart size={24} className="text-black" />,
      title: "Revenue recognition",
      description: "Automates revenue workflows and keeps revenue reporting accurate.",
    },
    {
      icon: <Network size={24} className="text-black" />,
      title: "Native integrations",
      description: "Tools like Stripe, Mercury, Ramp, Brex, Deel, and Gusto keep data real-time",
    },
    {
      icon: <Sparkles size={24} className="text-black" />,
      title: "Automated accuracy reviews",
      description: "Catch mistakes early and build confidence in your numbers",
    },
    {
      icon: <ArrowLeftRight size={24} className="text-black" />,
      title: "Effortless Migration",
      description: "White-glove support and free migrations with 100% data accuracy",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white font-nunito">
      <div className="max-w-[1900px] mx-auto lg:px-20 text-center">
        <h2 className="text-[40px] md:text-[56px] font-bold text-black mb-6 leading-tight">
          What Entrybot does
        </h2>
        <p className="text-[16px] md:text-[18px] text-black max-w-3xl mx-auto mb-20 font-medium">
          Entrybot uses AI to support startups, SMBs and their accounting firms, by automating the busywork—so humans can focus on accuracy, insight and growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-10 bg-white border border-black rounded-[32px] text-left relative hover:border-black transition-all duration-300 cursor-pointer"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-[20px] font-bold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-[15px] text-black leading-relaxed font-medium">
                {feature.description}
              </p>
              
              <div className="absolute top-8 right-8 text-black opacity-30 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-xl hover:bg-zinc-800 transition-all duration-300 text-[16px] font-medium"
          >
            Book a demo
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatItDoes;
