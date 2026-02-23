"use client";

import Image from "next/image";
import Link from "next/link";
import { Handshake, TrendingUp, Users, Gift, ArrowRight, CheckCircle2, Star, Zap } from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const PartnerPage = () => {
  const partnerTypes = [
    {
      title: "Accounting Firms",
      description: "Scale your practice by automating client bookkeeping. Get exclusive tools and dedicated firm support.",
      icon: <Users size={32} className="text-black" />,
      bgColor: "bg-[#D4F4DD]"
    },
    {
      title: "Platform Partners",
      description: "Integrate Entrybot into your ecosystem. Build seamless financial experiences for your own users.",
      icon: <Zap size={32} className="text-black" />,
      bgColor: "bg-[#D9F7FF]"
    },
    {
      title: "Affiliate Partners",
      description: "Earn industry-leading commissions for every business you refer to the Entrybot platform.",
      icon: <Gift size={32} className="text-black" />,
      bgColor: "bg-[#FFE5D9]"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Handshake size={16} /> Join the Entrybot Ecosystem
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Grow Your Business by Partnering with Ours
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Whether you're an accountant, a developer, or a community leader, 
            we have a partnership program designed to help you and your clients succeed.
          </p>
        </div>
      </section>

      {/* Main Partnership Value Section */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Unlock New Revenue Streams
              </h2>
              <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium">
                <p>
                  Partnering with Entrybot means more than just a referral link. 
                  You get access to co-marketing opportunities, technical support, 
                  and a dedicated partner manager to help you scale.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Generous revenue share models",
                    "Early access to new product features",
                    "Customized onboarding for your clients",
                    "Priority technical and account support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-zinc-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                  <Link 
                    href="#apply" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-black transition-all group"
                  >
                    Become a Partner
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[550px] bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-black order-1 lg:order-2">
              <Image 
                src="/ourstory.png" 
                alt="Partnership" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types Grid */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-16 text-center leading-tight">
            Choose Your Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className={`${type.bgColor} p-10 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}>
                <div className="mb-6">
                  {type.icon}
                </div>
                <h3 className="text-[24px] font-bold text-black mb-4">
                  {type.title}
                </h3>
                <p className="text-[16px] text-black leading-relaxed font-medium">
                  {type.description}
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
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Active Partners</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">$5M+</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Commissions Paid</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">40%</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Avg. Partner Growth</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/5 to-transparent skew-x-12 translate-x-32" />
      </section>

      {/* Application CTA Section */}
      <section id="apply" className="py-24 px-4 bg-white font-nunito border-t border-zinc-100 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <TrendingUp size={64} className="text-black" />
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
            Ready to Start Growing?
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Fill out our partner application and a member of our team will 
            be in touch within 24 hours to discuss the next steps.
          </p>
          <button className="px-12 py-6 bg-zinc-900 text-white rounded-full font-bold text-[18px] hover:bg-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            Apply Now
          </button>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default PartnerPage;
