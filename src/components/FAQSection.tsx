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
        <h2 className="text-[40px] md:text-[56px] font-bold text-black text-center mb-10 leading-[100%] font-nunito">
          FAQs
        </h2>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#FFE500] p-1.5 rounded-full flex gap-1">
            <button
              onClick={() => {
                setActiveTab("Companies");
                setActiveIndex(null);
              }}
              className={`px-8 py-2.5 rounded-full text-[16px] font-bold transition-all duration-300 ${
                activeTab === "Companies"
                  ? "bg-black text-white shadow-lg"
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
              className={`px-8 py-2.5 rounded-full text-[16px] font-bold transition-all duration-300 ${
                activeTab === "Accounting firms"
                  ? "bg-black text-white shadow-lg"
                  : "text-black hover:bg-black/5"
              }`}
            >
              Accounting firms
            </button>
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-7xl mx-auto border-t border-zinc-100">
          {currentFAQs.map((question, index) => (
            <div
              key={index}
              className="border-b border-zinc-100 transition-all duration-200"
            >
              <div 
                onClick={() => toggleFAQ(index)}
                className="py-8 flex items-center justify-between group cursor-pointer hover:bg-zinc-50/50 px-4"
              >
                <h3 className="text-[18px] md:text-[20px] font-medium text-black transition-transform duration-300 font-roboto leading-[100%]">
                  {question}
                </h3>
                <ChevronRight 
                  size={20} 
                  className={`transition-all duration-300 ${
                    activeIndex === index 
                      ? "text-black rotate-90" 
                      : "text-zinc-300 group-hover:text-black group-hover:translate-x-1"
                  }`} 
                />
              </div>
              
              {/* Answer Area (Accordion Content) */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-4 text-[18px] text-black leading-[100%] max-w-4xl font-roboto font-normal">
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
