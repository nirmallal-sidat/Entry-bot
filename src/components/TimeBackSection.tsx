"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const TimeBackSection = () => {
  const startupsCards = [
    {
      title: "Close faster with less effort",
      description: "Cut month-end close time by up to 50 percent.",
      image: "/image1.png",
    },
    {
      title: "Know where you stand every day.",
      description: "See burn, runway, and cash position in real time.",
      image: "/image2.png",
    },
    {
      title: "Stop doing spreadsheet cleanup.",
      description: "Eliminate manual categorization and repetitive busywork.",
      image: "/image3.png",
    },
    {
      title: "Run on the modern financial stack.",
      description: "Native integrations keep data clean and reliable.",
      image: "/image4.png",
    },
  ];

  const accountingCards = [
    {
      title: "Cut month-end close time in half.",
      description: "98% automated categorization, reconciliation, and revenue recognition.",
      image: "/image5.png",
    },
    {
      title: "Win clients with technology that sets you apart.",
      description: "Real-time dashboards with burn, runway, and cash—not month-end PDFs.",
      image: "/image6.png",
    },
    {
      title: "Scale revenue, not costs.",
      description: "Add clients without proportional cost increases. Achieve 60-80% margins.",
      image: "/images7.png",
    },
    {
      title: "A partner that's never your competitor.",
      description: "White-glove support, free migrations, and a team that builds with you not against you.",
      image: "/image1.png",
    },
  ];

  const MoreButton = () => (
    <Link href="#" className="inline-flex items-center group">
      <span className="text-[16px] font-medium text-black mr-3">More</span>
      <div className="relative w-[80px] h-[40px] group-hover:translate-x-3 transition-transform duration-300">
        <Image 
          src="/Arrowdesign.png" 
          alt="Arrow" 
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );

  const CardRow = ({ title, cards }: { title: string, cards: typeof startupsCards }) => (
    <div className="mb-16 overflow-hidden">
      <div className="flex justify-between items-center mb-12 px-2">
        <h3 className="text-[30px] font-bold text-black font-nunito leading-[100%]">{title}</h3>
        <MoreButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#FFE500] pt-8 px-8 pb-0 rounded-[20px] flex flex-col w-full max-w-[348px] h-[428.5px] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-[20px] font-medium text-black mb-2 leading-[100%] font-roboto">{card.title}</h4>
            <p className="text-[18px] text-black mb-6 font-roboto font-normal leading-[100%]">{card.description}</p>
            <div className="mt-auto bg-white rounded-t-2xl w-full h-[250px] relative shadow-lg overflow-hidden translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="relative w-full h-full p-4">
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    className="object-contain object-bottom p-4"
                  />
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 px-4 bg-[#F4F4F4] font-nunito overflow-hidden">
      <div className="max-w-[1900px] mx-auto lg:px-20">
        <h2 className="text-[36px] md:text-[48px] xl:text-[55px] font-bold text-black text-center mb-20 leading-[110%] md:leading-[60px] font-nunito">
         Smart automation for every business size
        </h2>

        <CardRow title="For Startups and Growing Businesses" cards={startupsCards} />
        <CardRow title="For Accounting Firms" cards={accountingCards} />
      </div>
    </section>
  );
};

export default TimeBackSection;
