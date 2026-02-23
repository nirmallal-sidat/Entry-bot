"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap, Boxes, Code, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const SolutionsPage = () => {
  const industries = [
    {
      title: "For Startups",
      description: "Scale faster with automated seed-to-IPO accounting. Handle high transaction volumes without adding headcount.",
      icon: <Zap size={32} className="text-black" />,
      bgColor: "bg-[#D4F4DD]"
    },
    {
      title: "For E-commerce",
      description: "Seamlessly sync sales from Shopify, Amazon, and Stripe. Real-time inventory and payout reconciliation.",
      icon: <Boxes size={32} className="text-black" />,
      bgColor: "bg-[#D9F7FF]"
    },
    {
      title: "For Agencies",
      description: "Manage multiple client entities from a single dashboard. Automate billing and project-based expense tracking.",
      icon: <Code size={32} className="text-black" />,
      bgColor: "bg-[#FFE5D9]"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Tailored Solutions for Your Business
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            From early-stage startups to high-volume e-commerce brands, Entrybot 
            provides the infrastructure to automate your financial operations.
          </p>
        </div>
      </section>

      {/* Main Solution Feature */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[550px] bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-black order-2 lg:order-1">
              <Image 
                src="/automation.png" 
                alt="Business Solutions" 
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Enterprise-Grade Financial Control
              </h2>
              <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium">
                <p>
                  Entrybot isn't just a tool; it's your complete financial back-office. 
                  We handle the complexity of multi-entity accounting, international 
                  transactions, and complex tax requirements.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Consolidated financial reporting",
                    "Custom approval workflows",
                    "Advanced audit trails",
                    "Seamless ERP integrations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-zinc-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                  <Link 
                    href="/pricing" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-black transition-all group"
                  >
                    View Pricing Plans
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-16 text-center leading-tight">
            Built for Your Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className={`${industry.bgColor} p-10 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}>
                <div className="mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-[24px] font-bold text-black mb-4">
                  {industry.title}
                </h3>
                <p className="text-[16px] text-black leading-relaxed font-medium">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Metric Section */}
      <section className="py-24 px-4 bg-zinc-900 text-white font-nunito rounded-[50px] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-[1900px] mx-auto lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">$2B+</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Transactions Processed</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">99.9%</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">10k+</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Active Entities</div>
            </div>
          </div>
        </div>
        {/* Dynamic shape background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/5 to-transparent skew-x-12 translate-x-32" />
      </section>

      <TakeBackHours />
    </>
  );
};

export default SolutionsPage;
