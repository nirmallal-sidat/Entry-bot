"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap, Boxes, Code, Shield, ArrowRight } from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const FeaturesPage = () => {
  const mainFeatures = [
    {
      title: "Integrations",
      description: "Seamlessly connect with Mercury, Ramp, Brex, Rippling, Shopify, and more. Your data stays in sync everywhere.",
      icon: <Zap size={32} className="text-black" />,
      bgColor: "bg-[#D4F4DD]"
    },
    {
      title: "Revenue Automation",
      description: "Automatic daily bookkeeping that never misses a beat. Real-time reconciliation for all your business transactions.",
      icon: <Boxes size={32} className="text-black" />,
      bgColor: "bg-[#D9F7FF]"
    },
    {
      title: "API Access",
      description: "Build custom workflows and integrate our powerful accounting engine directly into your own product stack.",
      icon: <Code size={32} className="text-black" />,
      bgColor: "bg-[#FFE5D9]"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="mt-20 bg-[#F4F4F4] font-nunito">
        <div className="py-24 px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Powerful Features for Modern Finance
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Everything you need to automate your bookkeeping, manage expenses, 
            and scale your business with total financial clarity.
          </p>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Automate Your Entire Bookkeeping Workflow
              </h2>
              <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium">
                <p>
                  Stop wasting time on manual data entry. Entrybot's AI automatically categorizes 
                  transactions and reconciles your accounts daily, so your books are always ready.
                </p>
                <p>
                  Our platform learns your business patterns over time, becoming more accurate and 
                  efficient the more you use it. Say goodbye to month-end stress.
                </p>
                <div className="pt-4">
                  <Link 
                    href="#" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-black transition-all group"
                  >
                    Start Free Trial
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-black">
              <Image 
                src="/automation.png" 
                alt="Automation Workflow" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-16 text-center leading-tight">
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`${feature.bgColor} p-10 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}>
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-[24px] font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-black leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section (About-like secondary section) */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8 text-black">
              <Shield size={64} />
            </div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
              Bank-Grade Security
            </h2>
            <p className="text-[18px] text-black leading-relaxed mb-12 font-medium">
              Your financial data is encrypted with the highest industry standards. 
              We are SOC2 compliant and follow strict security protocols to ensure 
              your information never leaves your control.
            </p>
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default FeaturesPage;
