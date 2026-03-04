"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState<"Companies" | "Accounting firms">("Companies");

  const companyFAQs = [
    "Why is Entrybot better than QuickBooks?",
    "Does Entrybot replace my bookkeeper?",
    "How does Entrybot keep me tax-ready?",
    "How does Entrybot help me understand my business better?",
    "How does Entrybot keep me fundraise ready?",
    "Why can't I rely solely on Stripe, Brex, and Ramp for accounting?",
    "Can I get started on my own (with no accounting experience)?",
  ];

  const firmFAQs = [
    "How does Entrybot integrate with our current workflow?",
    "Can we manage multiple clients through one dashboard?",
    "What kind of reporting accuracy can we expect?",
    "Is there a partnership program for accounting firms?",
    "How does Entrybot handle complex revenue recognition?",
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const currentFAQs = activeTab === "Companies" ? companyFAQs : firmFAQs;

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 bg-white font-nunito">
      <div className="max-w-[1900px] mx-auto lg:px-20">
        <h2 className="text-[48px] md:text-[64px] font-bold text-black text-center mb-12 tracking-tight leading-[100%]">
          FAQs
        </h2>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-20">
          <div className="bg-[#FFE500] p-1.5 rounded-full flex gap-1 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-black/5">
            <button
              onClick={() => {
                setActiveTab("Companies");
                setActiveIndex(null);
              }}
              className={`px-10 py-3 rounded-full text-[16px] font-bold transition-all duration-300 ${
                activeTab === "Companies"
                  ? "bg-black text-white shadow-xl scale-105"
                  : "text-black hover:bg-black/5"
              }`}
            >
              Companies
            </button>
            <button
              onClick={() => {
                setActiveTab("Accounting firms");
                setActiveIndex(null);
              }}
              className={`px-10 py-3 rounded-full text-[16px] font-bold transition-all duration-300 ${
                activeTab === "Accounting firms"
                  ? "bg-black text-white shadow-xl scale-105"
                  : "text-black hover:bg-black/5"
              }`}
            >
              Accounting firms
            </button>
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-5xl mx-auto">
          {currentFAQs.map((question, index) => (
            <div
              key={index}
              className="border-b border-zinc-100 last:border-0"
            >
              <div 
                onClick={() => toggleFAQ(index)}
                className={`py-6 flex items-center justify-between group cursor-pointer px-6 rounded-2xl transition-all duration-300 ${
                  activeIndex === index ? "bg-zinc-50" : "hover:bg-zinc-50/50"
                }`}
              >
                <h3 className={`text-[18px] md:text-[22px] font-bold text-black transition-all duration-300 leading-tight ${
                  activeIndex === index ? "text-zinc-900" : "text-zinc-800"
                }`}>
                  {question}
                </h3>
                <div className={`transition-all duration-300 ${
                  activeIndex === index 
                    ? "rotate-90 text-black translate-x-1" 
                    : "text-zinc-400 group-hover:text-black group-hover:translate-x-2"
                }`}>
                  <ChevronRight size={24} strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Answer Area (Accordion Content) */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-[500px] pb-10 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-6 text-[18px] md:text-[20px] text-zinc-600 leading-relaxed max-w-4xl font-normal font-roboto">
                  Entrybot is designed to automate the heavy lifting of accounting using advanced AI. 
                  It seamlessly handles categorization, reconciliations, and real-time reporting, 
                  allowing you to focus on growing your business while maintaining 100% financial accuracy.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
