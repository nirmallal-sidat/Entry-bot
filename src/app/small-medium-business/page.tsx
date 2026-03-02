"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Users2,
  ShieldCheck,
  Clock,
  LineChart,
  Plus,
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const SmallMediumBusinessPage = () => {
  const smbFeatures = [
    {
      title: "Multi-Entity Accounting",
      description:
        "Manage books across multiple locations or entities from one unified dashboard. No more juggling separate spreadsheets.",
      icon: <Building2 size={32} className="text-black" />,
      bgColor: "bg-[#D4F4DD]",
    },
    {
      title: "Cash Flow Visibility",
      description:
        "Stay on top of receivables, payables, and cash positions in real time. Make confident decisions backed by live data.",
      icon: <BarChart3 size={32} className="text-black" />,
      bgColor: "bg-[#D9F7FF]",
    },
    {
      title: "Team Collaboration",
      description:
        "Give your finance team, accountants, and managers role-based access. Everyone sees exactly what they need.",
      icon: <Users2 size={32} className="text-black" />,
      bgColor: "bg-[#FFE5D9]",
    },
  ];

  const complianceFeatures = [
    "Automated bank reconciliation",
    "GST / VAT compliance reporting",
    "Payroll & expense integrations",
    "Audit-ready financial records",
    "Custom chart of accounts",
    "Role-based access control",
  ];

  const metrics = [
    { value: "10,000+", label: "SMBs Powered" },
    { value: "40 hrs", label: "Saved Per Month" },
    { value: "99.9%", label: "Uptime SLA" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Building2 size={16} /> Built for Growing Businesses
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Accounting That Grows With Your Business
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Stop patching together spreadsheets and legacy software. Entrybot
            gives small and medium businesses enterprise-grade financial clarity
            — without the enterprise price tag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-[16px] hover:bg-black transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              Start Free Trial
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-full font-bold text-[16px] hover:bg-zinc-50 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              See All Features
            </Link>
          </div>
        </div>
      </section>

      {/* Main Value Proposition Section */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[550px] bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-black order-2 lg:order-1">
              <Image
                src="/ourstory.png"
                alt="Small and Medium Business Growth"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Replace Chaos With <br /> Financial Clarity.
              </h2>
              <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium">
                <p>
                  Most SMBs spend 40+ hours a month wrestling with books.
                  Entrybot automates the tedious work — bank feeds, invoice
                  matching, reconciliation — so your team can focus on growing
                  the business, not managing spreadsheets.
                </p>
                <ul className="space-y-4 pt-4">
                  {complianceFeatures.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-zinc-900 shrink-0" />
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
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMB Features Grid */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Purpose-Built for SMB Finance Teams
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Every feature is designed around how real small and medium businesses
            actually operate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {smbFeatures.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} p-10 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div className="mb-6">{feature.icon}</div>
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

      {/* Why Entrybot Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Why SMBs Choose <br /> Entrybot Over QuickBooks
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Clock size={24} className="text-black shrink-0" />,
                    title: "Save 40+ Hours a Month",
                    desc: "Automated bookkeeping means your team can focus on growth, not data entry.",
                  },
                  {
                    icon: <LineChart size={24} className="text-black shrink-0" />,
                    title: "Real-Time Reporting",
                    desc: "P&L, balance sheet, and cash flow reports available instantly — no month-end scramble.",
                  },
                  {
                    icon: <ShieldCheck size={24} className="text-black shrink-0" />,
                    title: "Built-In Compliance",
                    desc: "Stay compliant with local tax rules automatically. Audit-ready records at every moment.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-6 bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center shrink-0 border border-zinc-200">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[18px] font-bold text-black mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[14px] text-zinc-600 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white border-2 border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <div className="grid grid-cols-3 bg-zinc-900 text-white text-[13px] font-bold uppercase tracking-wider">
                <div className="p-5 border-r border-white/10">Feature</div>
                <div className="p-5 border-r border-white/10 text-center">Entrybot</div>
                <div className="p-5 text-center">QuickBooks</div>
              </div>
              {[
                ["Automated bookkeeping", true, false],
                ["Real-time cash flow", true, false],
                ["Multi-entity support", true, false],
                ["API integrations", true, true],
                ["Burn rate tracking", true, false],
                ["Dedicated support", true, false],
              ].map(([feature, entrybot, qb], i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 border-t border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50"}`}
                >
                  <div className="p-4 text-[14px] font-bold text-black border-r border-zinc-100">
                    {feature as string}
                  </div>
                  <div className="p-4 text-center border-r border-zinc-100">
                    {entrybot ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-[#D4F4DD] border border-black rounded-full text-[12px] font-black">✓</span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-zinc-100 border border-zinc-300 rounded-full text-[12px] text-zinc-400 font-black">✕</span>
                    )}
                  </div>
                  <div className="p-4 text-center">
                    {qb ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-[#D4F4DD] border border-black rounded-full text-[12px] font-black">✓</span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-zinc-100 border border-zinc-300 rounded-full text-[12px] text-zinc-400 font-black">✕</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 px-4 bg-zinc-900 text-white font-nunito rounded-[50px] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-[1900px] mx-auto lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {metrics.map((m, i) => (
              <div key={i}>
                <div className="text-[48px] md:text-[64px] font-bold mb-2">{m.value}</div>
                <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">{m.label}</div>
              </div>
            ))}
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
            Ready to simplify your books?
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Join thousands of small and medium businesses that run their
            finances on Entrybot — no accountant required.
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

export default SmallMediumBusinessPage;
