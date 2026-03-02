"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Users2,
  LayoutDashboard,
  FileBarChart2,
  Globe,
  ShieldCheck,
  Layers,
  Plus,
  Star,
  TrendingUp,
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const EntryBotForFirmsPage = () => {
  const features = [
    {
      title: "Firm-Wide Dashboard",
      description:
        "See every client's financial health at a glance. One login, unlimited portfolios — no tab juggling required.",
      icon: <LayoutDashboard size={32} className="text-black" />,
      bgColor: "bg-[#D4F4DD]",
    },
    {
      title: "Team & Role Management",
      description:
        "Assign clients to staff, set permission levels, and track workloads across your entire firm from one place.",
      icon: <Users2 size={32} className="text-black" />,
      bgColor: "bg-[#D9F7FF]",
    },
    {
      title: "Scalable Reporting",
      description:
        "Generate white-labelled P&L, cash flow, and tax reports for hundreds of clients — all in minutes, not days.",
      icon: <FileBarChart2 size={32} className="text-black" />,
      bgColor: "bg-[#FFE5D9]",
    },
  ];

  const whyFeatures = [
    {
      icon: <Globe size={24} className="text-black shrink-0" />,
      title: "Multi-Entity & Multi-Currency",
      desc: "Support clients with international operations — handle multiple currencies and entities from a single view.",
    },
    {
      icon: <Layers size={24} className="text-black shrink-0" />,
      title: "Unlimited Client Portfolios",
      desc: "Scale from 10 to 10,000 clients without extra complexity. Our infrastructure grows with your firm.",
    },
    {
      icon: <ShieldCheck size={24} className="text-black shrink-0" />,
      title: "Enterprise-Grade Security",
      desc: "SOC 2 Type II certified. Bank-level encryption, two-factor authentication, and granular audit logs.",
    },
    {
      icon: <TrendingUp size={24} className="text-black shrink-0" />,
      title: "Performance Analytics",
      desc: "Track firm-wide KPIs — billable hours saved, client satisfaction, revenue growth — all in one report.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Onboard Your Entire Firm",
      desc: "Import your existing client list, set up staff accounts, and assign roles in minutes. Entrybot integrates with the tools you already use.",
    },
    {
      step: "02",
      title: "Automate Client Bookkeeping",
      desc: "Bank feeds, invoice matching, and reconciliation run on autopilot for every client simultaneously.",
    },
    {
      step: "03",
      title: "Collaborate as a Team",
      desc: "Staff handle day-to-day entries while managers review and approve. Workflow queues keep everyone on track.",
    },
    {
      step: "04",
      title: "Deliver & Bill with Confidence",
      desc: "Send white-labelled reports, track time spent per client, and export data for billing — all from one platform.",
    },
  ];

  const metrics = [
    { value: "1,200+", label: "Accounting Firms" },
    { value: "500K+", label: "Client Entities Managed" },
    { value: "92%", label: "Staff Time Saved on Data Entry" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Briefcase size={16} /> Built for Accounting Firms
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            The Operating System for Modern Accounting Firms
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Run your entire firm from one platform. Entrybot gives accounting
            firms the infrastructure to manage hundreds of clients, collaborate
            as a team, and deliver exceptional service — at scale.
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

      {/* Main Value Prop */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[550px] bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-black order-2 lg:order-1">
              <Image
                src="/ourstory.png"
                alt="Accounting firm team using Entrybot"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Run Your Firm Like <br /> a Well-Oiled Machine.
              </h2>
              <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium">
                <p>
                  Managing a firm means juggling staff, clients, deadlines, and
                  compliance simultaneously. Entrybot brings it all under one
                  roof — so your team spends less time on admin and more time
                  delivering value to clients.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Centralised multi-client dashboard",
                    "Staff workload & task management",
                    "Automated bookkeeping for all clients",
                    "White-labelled branded reports",
                    "Multi-currency & multi-entity support",
                    "SOC 2 certified security & audit logs",
                  ].map((item, i) => (
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

      {/* Feature Cards */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Built for Firms, Not Just Businesses
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Every feature is designed around how real accounting firms operate —
            multi-staff, multi-client, and always deadline-driven.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* Why Entrybot for Firms */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Why Leading Firms <br /> Choose Entrybot
              </h2>
              <div className="space-y-6">
                {whyFeatures.map((item, i) => (
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

            {/* Testimonials */}
            <div className="flex flex-col gap-6">
              <div className="bg-zinc-900 text-white border-2 border-black rounded-3xl p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-[18px] font-medium leading-relaxed mb-8">
                  &ldquo;We scaled from 80 to 300 clients in 18 months without
                  hiring a single extra bookkeeper. Entrybot handles the
                  volume so our team handles the relationships.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-700 rounded-full border-2 border-zinc-600 flex items-center justify-center text-white font-bold text-[18px]">
                    R
                  </div>
                  <div>
                    <p className="font-bold text-white">Rahul Mehta, CA</p>
                    <p className="text-zinc-400 text-[13px]">Managing Partner, Mehta & Co.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#D9F7FF] border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-[15px] font-medium text-black leading-relaxed mb-6">
                  &ldquo;Our junior staff now spends 70% less time on data
                  entry. They&apos;re actually learning accounting — not just
                  copying numbers between spreadsheets.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-200 rounded-full border border-zinc-300 flex items-center justify-center text-black font-bold text-[14px]">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-black text-[14px]">Sunita Rao</p>
                    <p className="text-zinc-500 text-[12px]">Director, SR Accounting Firm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            How Entrybot Powers Your Firm
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            From onboarding to delivery — every step streamlined for firms
            handling multiple clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflowSteps.map((step, i) => (
              <div
                key={i}
                className="bg-[#F4F4F4] border-2 border-black rounded-3xl p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="text-[48px] font-black text-zinc-200 leading-none mb-4 select-none">
                  {step.step}
                </div>
                <h3 className="text-[22px] font-bold text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-[15px] text-zinc-600 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
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
            Ready to scale your firm?
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Join 1,200+ accounting firms that have transformed their operations
            with Entrybot. Start today — no credit card required.
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

export default EntryBotForFirmsPage;
