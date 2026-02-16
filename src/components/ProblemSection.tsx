"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ProblemSection = () => {
  const problems = [
    {
      icon: <Image src="/Background.png" alt="Icon 1" width={48} height={48} />,
      text: "Manual categorization, reconciliations, and cleanup steal hours every week.",
    },
    {
      icon: <Image src="/Container.png" alt="Icon 2" width={48} height={48} />,
      text: "Numbers arrive weeks late, so decisions get made with guesswork.",
    },
    {
      icon: <Image src="/Background (1).png" alt="Icon 3" width={48} height={48} />,
      text: "Disconnected tools, spreadsheets and broken automations create more work instead of less.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white font-nunito">
      <div className="max-w-7xl mx-auto text-center">
        {/* Label and Heading */}
        <p className="text-[20px] font-bold text-black mb-4 font-roboto">The Problem</p>
        <h2 className="text-[40px] md:text-[56px] font-bold text-black mb-16 leading-tight font-roboto">
          QuickBooks is slowing your business down.
        </h2>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-6">
                {problem.icon}
              </div>
              <p className="text-[18px] text-black leading-relaxed max-w-[300px]">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-xl hover:bg-zinc-800 transition-colors text-[16px] font-medium"
          >
            Explore how Entrybot is a modern Quickbooks alternative
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
