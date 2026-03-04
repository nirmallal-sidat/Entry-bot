"use client";

import Link from "next/link";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import { useState } from "react";
import TakeBackHours from "@/components/TakeBackHours";

const PricingPage = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };


  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for freelancers and side projects.",
      features: [
        "Up to 50 transactions/mo",
        "Basic bank integrations",
        "Real-time dashboard",
        "Community support"
      ],
      buttonText: "Start for Free",
      bgColor: "bg-[#D4F4DD]",
      highlight: false
    },
    {
      name: "Professional",
      price: "$49",
      description: "The complete solution for growing businesses.",
      features: [
        "Unlimited transactions",
        "Priority bank integrations",
        "Automatic categorization",
        "Email & Chat support",
        "SOC2 Security compliance"
      ],
      buttonText: "Start 14-day Trial",
      bgColor: "bg-white",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced controls for complex operations.",
      features: [
        "Multi-entity management",
        "API Access (Full suite)",
        "Dedicated Account Manager",
        "Custom implementation",
        "On-premise deployment options"
      ],
      buttonText: "Contact Sales",
      bgColor: "bg-[#FFE5D9]",
      highlight: false
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="mt-20 bg-[#F4F4F4] font-nunito">
        <div className="py-24 px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Choose the plan that fits your business stage. No hidden fees, 
            no long-term contracts. Scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`
                  ${plan.bgColor} p-10 rounded-3xl border-2 border-black transition-all
                  ${plan.highlight ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] scale-105 z-10' : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}
                `}
              >
                <div className="mb-8">
                  <h3 className="text-[24px] font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-[15px] text-zinc-600 font-medium mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[48px] font-bold text-black">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-[18px] text-zinc-600 font-bold">/mo</span>}
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-[16px] text-black font-medium">
                      <div className="shrink-0 mt-1">
                        <Check size={18} className="text-black" strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="#" 
                  className={`
                    flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold transition-all group
                    ${plan.highlight ? 'bg-zinc-900 text-white hover:bg-black' : 'bg-white border-2 border-black text-black hover:bg-zinc-50'}
                  `}
                >
                  {plan.buttonText}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[48px] md:text-[64px] font-bold text-black text-center mb-12 tracking-tight leading-[100%]">
            FAQs
          </h2>
          
          <div className="max-w-5xl mx-auto">
              {[
                {
                  question: "Why is Entrybot better than QuickBooks?",
                  answer: "Entrybot is designed to automate the heavy lifting of accounting using advanced AI. It seamlessly handles categorization, reconciliations, and real-time reporting, allowing you to focus on growing your business while maintaining 100% financial accuracy."
                },
                {
                  question: "Does Entrybot replace my bookkeeper?",
                  answer: "Entrybot automates 90% of bookkeeping tasks. For many startups, it replaces the need for an external bookkeeper entirely. For larger firms, it acts as a powerful assistant that makes your current bookkeeper 10x more efficient."
                },
                {
                  question: "How does Entrybot keep me tax-ready?",
                  answer: "We ensure all your transactions are categorized correctly in real-time. By the time tax season rolls around, your books are perfectly organized, reconciliations are done, and you can export everything for your CPA with one click."
                },
                {
                  question: "How does Entrybot help me understand my business better?",
                  answer: "Entrybot provides a real-time dashboard of your finances. You don't have to wait for the end of the month to know your burn rate, runway, or profitability. We provide interactive insights that help you make better strategic decisions."
                },
                {
                  question: "How does Entrybot keep me fundraise ready?",
                  answer: "Investors love clean books. Entrybot ensures your financial data is always professional, accurate, and ready for due diligence. We help you maintain bank-grade records from day one."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-zinc-100 last:border-0"
                >
                  <div 
                    onClick={() => toggleFAQ(index)}
                    className={`py-6 flex items-center justify-between group cursor-pointer px-6 rounded-2xl transition-all duration-300 ${
                      activeFaqIndex === index ? "bg-zinc-50" : "hover:bg-zinc-50/50"
                    }`}
                  >
                    <h3 className={`text-[18px] md:text-[22px] font-bold text-black transition-all duration-300 leading-tight ${
                      activeFaqIndex === index ? "text-zinc-900" : "text-zinc-800"
                    }`}>
                      {faq.question}
                    </h3>
                    <div className={`transition-all duration-300 ${
                      activeFaqIndex === index 
                        ? "rotate-90 text-black translate-x-1" 
                        : "text-zinc-400 group-hover:text-black group-hover:translate-x-2"
                    }`}>
                      <ChevronRight size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  {/* Answer Area (Accordion Content) */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeFaqIndex === index ? "max-h-[500px] pb-10 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="px-6 text-[18px] md:text-[20px] text-zinc-600 leading-relaxed max-w-4xl font-normal font-roboto">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default PricingPage;
