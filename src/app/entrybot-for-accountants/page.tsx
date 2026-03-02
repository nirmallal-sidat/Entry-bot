"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calculator,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Users2,
  FileText,
  BarChart3,
  RefreshCw,
  ShieldCheck,
  Plus,
  Star,
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const EntryботForAccountantsPage = () => {
  const features = [
    {
      title: "Client Management Hub",
      description:
        "Manage all your clients from one dashboard. Switch between books, track deadlines, and never miss a filing date.",
      icon: <Users2 size={32} className="text-black" />,
      bgColor: "bg-[#D4F4DD]",
    },
    {
      title: "Automated Reconciliation",
      description:
        "Bank feeds match automatically. Spend minutes — not hours — on monthly reconciliations for every client.",
      icon: <RefreshCw size={32} className="text-black" />,
      bgColor: "bg-[#D9F7FF]",
    },
    {
      title: "Compliance & Tax Filing",
      description:
        "GST, VAT, payroll taxes — stay compliant automatically. Export tax-ready reports with a single click.",
      icon: <ClipboardList size={32} className="text-black" />,
      bgColor: "bg-[#FFE5D9]",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Onboard Clients in Minutes",
      desc: "Connect your client's bank accounts, payment processors, and existing software. Entrybot pulls in historical data and starts categorising from day one.",
    },
    {
      step: "02",
      title: "Automate Daily Bookkeeping",
      desc: "Transactions are categorised, matched, and reconciled automatically. You review exceptions, not every single line item.",
    },
    {
      step: "03",
      title: "Generate Instant Reports",
      desc: "P&L, balance sheets, and cash flow statements are always up to date. Share white-labelled reports with clients at any time.",
    },
    {
      step: "04",
      title: "File With Confidence",
      desc: "Tax-ready ledgers mean less prep work at year end. Export to leading tax software or file directly through Entrybot.",
    },
  ];

  const metrics = [
    { value: "5,000+", label: "Accounting Firms" },
    { value: "80%", label: "Less Manual Work" },
    { value: "3×", label: "More Clients Served" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Calculator size={16} /> Built for Professional Accountants
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            The Accounting Platform Built for Accountants
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Stop drowning in client data entry. Entrybot automates the
            repetitive work so you can focus on advisory, grow your practice,
            and actually enjoy accounting again.
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
                alt="Accountant working with Entrybot"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Serve More Clients. <br /> Work Less Hours.
              </h2>
              <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium">
                <p>
                  The average accountant spends 60% of their time on data entry
                  and reconciliation. Entrybot eliminates that. Our AI
                  categorises transactions, matches invoices, and flags
                  anomalies — so you only touch the work that needs your
                  expertise.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Multi-client dashboard with instant switching",
                    "Automated bank feeds & reconciliation",
                    "White-labelled client reports",
                    "GST / VAT compliance built in",
                    "Role-based team access",
                    "Direct export to leading tax software",
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
            Everything an Accountant Needs
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Entrybot is designed around real accounting workflows — not generic
            business software with a rebrand.
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

      {/* How It Works — Workflow Steps */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Your New Accounting Workflow
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            From client onboarding to tax filing — Entrybot keeps every step
            smooth and automated.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflowSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white border-2 border-black rounded-3xl p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
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

      {/* Additional Accountant Tools */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Tools That Make You <br /> Look Like a Rockstar
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <FileText size={24} className="text-black shrink-0" />,
                    title: "White-Labelled Reports",
                    desc: "Send clients branded P&L, balance sheet, and cash flow reports — all generated automatically.",
                  },
                  {
                    icon: <BarChart3 size={24} className="text-black shrink-0" />,
                    title: "Real-Time Dashboards",
                    desc: "Your clients see their live financial position at any time. No more waiting for month-end.",
                  },
                  {
                    icon: <ShieldCheck size={24} className="text-black shrink-0" />,
                    title: "Audit Trail",
                    desc: "Every transaction change is logged. Unbreakable audit trails protect you and your clients.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-6 bg-[#F4F4F4] border-2 border-black rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-zinc-200">
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

            {/* Testimonial */}
            <div className="flex flex-col gap-6">
              <div className="bg-zinc-900 text-white border-2 border-black rounded-3xl p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-[18px] font-medium leading-relaxed mb-8">
                  &ldquo;We went from managing 40 clients to 120 in a single year
                  without adding any headcount. Entrybot handles the
                  bookkeeping; we handle the strategy.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-700 rounded-full border-2 border-zinc-600 flex items-center justify-center text-white font-bold text-[18px]">
                    P
                  </div>
                  <div>
                    <p className="font-bold text-white">Priya Nair, CPA</p>
                    <p className="text-zinc-400 text-[13px]">Founder, Nair & Associates</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#D4F4DD] border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-[22px] font-bold text-black mb-4">
                  Entrybot Certification
                </h3>
                <p className="text-[15px] text-black font-medium mb-6 leading-relaxed">
                  Become a certified Entrybot partner. Get priority placement
                  in our accountant directory and exclusive training resources.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-bold text-[14px] hover:bg-black transition-all group"
                >
                  Get Certified
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
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
            Ready to transform your practice?
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Join 5,000+ accounting firms that have automated the busywork and
            reclaimed their time with Entrybot.
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

export default EntryботForAccountantsPage;
