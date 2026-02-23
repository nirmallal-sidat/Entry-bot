"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, Lock, Eye, CheckCircle2, ArrowRight, ShieldCheck, FileText, Database } from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const SecurityPage = () => {
  const securityFeatures = [
    {
      title: "Bank-Grade Encryption",
      description: "Your data is encrypted at rest and in transit using 256-bit AES encryption, the industry standard for financial institutions.",
      icon: <Lock size={32} className="text-black" />,
      bgColor: "bg-[#D4F4DD]"
    },
    {
      title: "SOC 2 Type II Compliant",
      description: "We undergo annual independent audits to ensure our security, availability, and confidentiality controls are operating effectively.",
      icon: <FileText size={32} className="text-black" />,
      bgColor: "bg-[#D9F7FF]"
    },
    {
      title: "Data Sovereignty",
      description: "You own your data. We never sell your information and strictly follow local data protection regulations like GDPR and CCPA.",
      icon: <Database size={32} className="text-black" />,
      bgColor: "bg-[#FFE5D9]"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Shield size={16} /> Trusted by 7,000+ Businesses
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Enterprise-Grade Security for Every Business
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            We understand that your financial data is your most sensitive asset. 
            That's why security isn't just a feature—it's the core of everything we build.
          </p>
        </div>
      </section>

      {/* Security Infrastructure Section */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[550px] bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-black">
              <Image 
                src="/automation.png" 
                alt="Security Infrastructure" 
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Built to Protect Your Financial Assets
              </h2>
              <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium">
                <p>
                  Entrybot employs multi-layered security protocols to ensure your 
                  data is safe from modern threats. From physical data center 
                  security to advanced application-layer firewalls, we've got you covered.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Continuous security monitoring and 24/7 incident response",
                    "Regular third-party penetration testing",
                    "Mandatory multi-factor authentication (MFA) for all users",
                    "Vulnerability disclosure program"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-zinc-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-16 text-center leading-tight">
            Our Security Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
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

      {/* Compliance Section */}
      <section className="py-24 px-4 bg-zinc-900 text-white font-nunito rounded-[50px] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-[1900px] mx-auto lg:px-20 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <ShieldCheck size={64} className="text-white mx-auto" strokeWidth={1.5} />
            </div>
            <h2 className="text-[36px] md:text-[48px] font-bold mb-8 leading-tight">
              Privacy and Compliance
            </h2>
            <p className="text-[18px] text-zinc-400 leading-relaxed mb-12 max-w-2xl font-medium">
              We comply with global privacy standards to ensure your business 
              and your customers' data are handled with the highest level of care.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center backdrop-blur-sm">
                <div className="text-[24px] font-bold mb-2">SOC 2</div>
                <div className="text-[12px] text-zinc-500 font-bold uppercase tracking-widest">Type II</div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center backdrop-blur-sm">
                <div className="text-[24px] font-bold mb-2">GDPR</div>
                <div className="text-[12px] text-zinc-500 font-bold uppercase tracking-widest">Compliant</div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center backdrop-blur-sm">
                <div className="text-[24px] font-bold mb-2">HIPAA</div>
                <div className="text-[12px] text-zinc-500 font-bold uppercase tracking-widest">Ready</div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center backdrop-blur-sm">
                <div className="text-[24px] font-bold mb-2">ISO 27001</div>
                <div className="text-[12px] text-zinc-500 font-bold uppercase tracking-widest">Standard</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/5 to-transparent skew-x-12 translate-x-32" />
      </section>

      {/* Security Report CTA */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[36px] font-bold text-black mb-6">Need more details?</h2>
          <p className="text-[18px] text-black font-medium mb-10">
            Enterprise customers can request our full security whitepaper and latest SOC 2 report.
          </p>
          <Link 
            href="/contact-support" 
            className="inline-flex items-center gap-2 px-10 py-5 bg-zinc-900 text-white rounded-full font-bold hover:bg-black transition-all group"
          >
            Contact Security Team
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default SecurityPage;
