"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ProblemSection = () => {
  const problems = [
    {
      icon: <Image src="/Background.png" alt="Icon 1" width={48} height={48} />,
      text: "Drowning in document processing by typing data",
    },
    {
      icon: <Image src="/Container.png" alt="Icon 2" width={48} height={48} />,
      text: "Manual entry leads to costly mistakes that damage client relationships",
    },
    {
      icon: <Image src="/Background (1).png" alt="Icon 3" width={48} height={48} />,
      text: "Juggling multiple tools, email attachments, and spreadsheets creates bottlenecks",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white font-nunito">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Label and Heading */}
        <p className="text-[20px] font-bold text-black mb-4 font-roboto">The Problem</p>
        <h2 className="text-[36px] md:text-[48px] xl:text-[55px] font-bold text-black mb-8 leading-[110%] md:leading-[60px] font-nunito">
          Your team deserves better than manual data entry
        </h2>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mb-8">
          {problems.map((problem, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">
                {problem.icon}
              </div>
              <p className="text-[18px] font-normal text-black leading-[100%] font-roboto text-center max-w-[300px]">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-xl hover:bg-zinc-800 transition-colors text-[18px] font-medium"
          >
            Discover Our Solution
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
