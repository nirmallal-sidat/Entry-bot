"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Clock, 
  ShieldCheck, 
  Zap,
  DollarSign
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const RevenueAutomationPage = () => {
  const features = [
    {
      title: "Auto-Reconciliation",
      description: "Match payouts to bank deposits automatically with 99.9% accuracy.",
      icon: <Zap size={32} className="text-black" />,
      bgColor: "bg-[#D4F4DD]"
    },
    {
      title: "Real-time Reporting",
      description: "Get instant visibility into your MRR, churn, and cash flow without manual exports.",
      icon: <BarChart3 size={32} className="text-black" />,
      bgColor: "bg-[#D9F7FF]"
    },
    {
      title: "Multiple Currencies",
      description: "Automatically handle FX conversions and international tax compliance.",
      icon: <DollarSign size={32} className="text-black" />,
      bgColor: "bg-[#FFE5D9]"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <TrendingUp size={16} /> Maximize Financial Efficiency
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Automate Your Revenue Operations
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            From subscription billing to complex payout reconciliation, Entrybot 
            automates the entire revenue lifecycle so you can focus on growth.
          </p>
        </div>
      </section>

      {/* Main Feature Section */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Stop Chasing Payments. <br /> Start Automating.
              </h2>
              <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium">
                <p>
                  Manual revenue tracking is prone to errors and takes hours of your team&apos;s time. 
                  Entrybot&apos;s Revenue Automation engine connects directly to your payment 
                  processors and bank accounts to provide a single source of truth.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Daily automated bank reconciliation",
                    "Automated revenue recognition (ASC 606)",
                    "Subscription and recurring billing sync",
                    "Customizable financial alerts"
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
                    Get Started Free
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[550px] bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-black order-1 lg:order-2">
              <Image 
                src="/automation.png" 
                alt="Revenue Automation" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-16 text-center leading-tight">
            The Revenue Engine for Modern Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* Metrics Section */}
      <section className="py-24 px-4 bg-zinc-900 text-white font-nunito rounded-[50px] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-[1900px] mx-auto lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">20h+</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Saved Monthly</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">$10M+</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Revenue Tracked</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">0%</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Manual Data Entry</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/5 to-transparent skew-x-12 translate-x-32" />
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
             <Clock size={64} className="text-black" />
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
            Ready to reclaim your time?
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Join thousands of businesses that use Entrybot to automate their 
            financial operations and scale without the overhead.
          </p>
          <button className="px-12 py-6 bg-zinc-900 text-white rounded-full font-bold text-[18px] hover:bg-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            Schedule a Demo
          </button>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default RevenueAutomationPage;
