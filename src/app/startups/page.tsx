"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  Globe,
  Plus
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const StartupsPage = () => {
  const startupFeatures = [
    {
      title: "Scale at Speed",
      description: "Automate your seed-to-IPO accounting. Handle high transaction volumes without adding headcount.",
      icon: <Rocket size={32} className="text-black" />,
      bgColor: "bg-[#D4F4DD]"
    },
    {
      title: "Burn Rate Tracking",
      description: "Real-time visibility into your cash position and runway. No more manual spreadsheet updates.",
      icon: <TrendingUp size={32} className="text-black" />,
      bgColor: "bg-[#D9F7FF]"
    },
    {
      title: "Tax Ready",
      description: "Maintain a tax-ready ledger from day one. Seamless export to leading tax software.",
      icon: <ShieldCheck size={32} className="text-black" />,
      bgColor: "bg-[#FFE5D9]"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Rocket size={16} /> Built for the Next Unicorns
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Accounting Infrastructure for Modern Startups
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Stop wasting founder time on bookkeeping. Entrybot automates your back-office so 
            you can focus on building what matters.
          </p>
        </div>
      </section>

      {/* Main Value Proposition Section */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[550px] bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-black order-2 lg:order-1">
              <Image 
                src="/ourstory.png" 
                alt="Startup Growth" 
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                From Seed to IPO, <br /> We Grow With You.
              </h2>
              <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium">
                <p>
                  Founders shouldn&apos;t be accountants. Entrybot provides the financial 
                  visibility you need to make critical decisions, without the manual effort. 
                  Our platform connects to your entire stack—from Stripe to Mercury to Gusto.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Daily automated bookkeeping",
                    "Real-time burn & runway metrics",
                    "Seamless cap table integration",
                    "Investor-ready financial reporting"
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
          </div>
        </div>
      </section>

      {/* Startup Features Grid */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-16 text-center leading-tight">
            Designed for Modern Finance Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {startupFeatures.map((feature, index) => (
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
              <div className="text-[48px] md:text-[64px] font-bold mb-2">500+</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Venture-backed Startups</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">$2B+</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Capital Tracked</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">YC</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Preferred Partner</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/5 to-transparent skew-x-12 translate-x-32" />
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <Plus size={64} className="text-black" />
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
            Ready to scale your finance stack?
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Join the world&apos;s fastest growing startups and automate 
            your back-office today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-6 bg-zinc-900 text-white rounded-full font-bold text-[18px] hover:bg-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                Start Free Trial
            </button>
             <button className="px-12 py-6 bg-white text-black border-2 border-black rounded-full font-bold text-[18px] hover:bg-zinc-50 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                Book a Demo
            </button>
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default StartupsPage;
