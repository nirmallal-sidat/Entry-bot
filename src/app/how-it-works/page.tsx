"use client";

import Link from "next/link";
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  BarChart3,
  ShieldCheck,
  Plug,
  Brain,
  Clock,
  Star,
  Plus,
  Play,
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const steps = [
  {
    number: "01",
    title: "Connect Your Bank in 60 Seconds",
    desc: "Link your bank accounts, credit cards, and payment processors (Stripe, Razorpay, PayPal) securely using bank-grade encryption. Entrybot instantly pulls in your transaction history — no CSV uploads, no manual entry.",
    icon: <Plug size={32} className="text-black" />,
    bg: "bg-[#D4F4DD]",
    points: [
      "Supports 10,000+ banks worldwide",
      "256-bit SSL encryption",
      "Read-only access — Entrybot never moves money",
      "Historical data imported automatically",
    ],
  },
  {
    number: "02",
    title: "AI Categorises Every Transaction",
    desc: "Entrybot's AI analyses every transaction and categorises it to the correct account with over 98% accuracy — GST, VAT, payroll, expenses, sales, everything. Custom rules let you teach Entrybot your preferences once, and it remembers forever.",
    icon: <Brain size={32} className="text-black" />,
    bg: "bg-[#D9F7FF]",
    points: [
      "98%+ categorisation accuracy",
      "Learns your preferences over time",
      "Custom rules for exceptions",
      "Flags anomalies for your review",
    ],
  },
  {
    number: "03",
    title: "Books Reconcile Automatically",
    desc: "Every imported transaction is matched against your invoices, receipts, and bank statements automatically. Entrybot closes your books daily — so you're never scrambling at month-end or quarter-end again.",
    icon: <RefreshCw size={32} className="text-black" />,
    bg: "bg-[#FFE5D9]",
    points: [
      "Daily automated reconciliation",
      "Invoice & receipt matching",
      "Month-end close in under 1 hour",
      "Audit trail for every match",
    ],
  },
  {
    number: "04",
    title: "Real-Time Reports & Insights",
    desc: "Access live P&L, balance sheets, cash flow statements, and tax-ready reports from your dashboard at any time. Share white-labelled reports with clients in one click — no formatting, no spreadsheets.",
    icon: <BarChart3 size={32} className="text-black" />,
    bg: "bg-[#F0E6FF]",
    points: [
      "Live P&L and balance sheet",
      "Cash flow forecasting",
      "Tax-ready GST / VAT reports",
      "One-click client report sharing",
    ],
  },
];

const features = [
  {
    icon: <Zap size={24} className="text-black" />,
    title: "15-Minute Setup",
    desc: "Connect your bank, invite your team, and your first reconciliation runs automatically.",
    bg: "bg-[#D4F4DD]",
  },
  {
    icon: <Clock size={24} className="text-black" />,
    title: "Always Up to Date",
    desc: "Transactions sync every few hours — your books are never more than a few hours behind.",
    bg: "bg-[#D9F7FF]",
  },
  {
    icon: <ShieldCheck size={24} className="text-black" />,
    title: "Bank-Grade Security",
    desc: "SOC 2 Type II certified. 256-bit encryption. Read-only access. Your data is always safe.",
    bg: "bg-[#FFE5D9]",
  },
  {
    icon: <RefreshCw size={24} className="text-black" />,
    title: "Multi-Entity Support",
    desc: "Manage unlimited companies, clients, or entities from one dashboard — no switching accounts.",
    bg: "bg-[#F0E6FF]",
  },
];

const HowItWorksPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Play size={14} className="fill-black" /> See How Entrybot Works
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Bookkeeping That Runs Itself
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Entrybot connects to your bank, categorises every transaction, and
            reconciles your books automatically — every single day, while you
            focus on your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-[16px] hover:bg-black transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              Start Free Trial
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-full font-bold text-[16px] hover:bg-zinc-50 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-zinc-900 font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { val: "15 min", label: "To Set Up" },
              { val: "98%+", label: "AI Accuracy" },
              { val: "40 hrs", label: "Saved Per Month" },
              { val: "0", label: "Manual Data Entry" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-[32px] md:text-[40px] font-bold">{s.val}</div>
                <div className="text-zinc-400 text-[13px] font-bold uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Four Steps to Zero Manual Work
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-20 max-w-2xl mx-auto">
            From bank connection to live reports — Entrybot handles every step
            of your bookkeeping automatically.
          </p>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Text Side */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-[80px] font-black text-zinc-100 leading-none mb-2 select-none">
                    {step.number}
                  </div>
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-[28px] md:text-[36px] font-bold text-black mb-5 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[16px] text-zinc-600 font-medium leading-relaxed mb-8">
                    {step.desc}
                  </p>
                  <ul className="space-y-3">
                    {step.points.map((pt, j) => (
                      <li key={j} className="flex items-center gap-3 text-[15px] font-medium text-black">
                        <CheckCircle2 size={18} className="text-black shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Side */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className={`${step.bg} border-2 border-black rounded-3xl p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center min-h-[320px]`}
                  >
                    <div className="w-20 h-20 bg-white border-2 border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                      {step.icon}
                    </div>
                    <div className="text-[72px] font-black text-black/10 leading-none select-none">
                      {step.number}
                    </div>
                    <p className="text-[18px] font-bold text-black text-center mt-4">
                      {step.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Pills */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Built for the Way You Work
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Entrybot fits into your existing workflow — not the other way around.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className={`${f.bg} border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-[18px] font-bold text-black mb-3">{f.title}</h3>
                <p className="text-[14px] text-black font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — Before vs After */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Before Entrybot vs. After
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            The difference is night and day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-zinc-100 border-2 border-zinc-300 rounded-3xl p-8">
              <h3 className="text-[20px] font-black text-zinc-500 mb-6 uppercase tracking-wider">
                ✗ Before Entrybot
              </h3>
              <ul className="space-y-4">
                {[
                  "40+ hours per month on manual data entry",
                  "Month-end close takes 3–5 days",
                  "Chasing receipts and invoices every week",
                  "P&L only available after close — never real-time",
                  "Errors discovered weeks after they happen",
                  "Reconciliation done by hand in spreadsheets",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] font-medium text-zinc-500 line-through decoration-zinc-400">
                    <span className="w-5 h-5 rounded-full bg-zinc-300 text-zinc-500 flex items-center justify-center text-[11px] font-black shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-[#D4F4DD] border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-[20px] font-black text-black mb-6 uppercase tracking-wider">
                ✓ With Entrybot
              </h3>
              <ul className="space-y-4">
                {[
                  "Zero manual data entry — ever",
                  "Month-end close in under 1 hour",
                  "Receipts and invoices matched automatically",
                  "Live P&L available 24/7 on your dashboard",
                  "Anomalies flagged instantly by AI",
                  "Bank reconciliation done daily, automatically",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] font-medium text-black">
                    <CheckCircle2 size={20} className="text-black shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-12 text-center leading-tight">
            Hear It From Our Users
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "I was sceptical that anything could fully automate my reconciliation — Entrybot proved me wrong on the very first day. My books were cleaner than they'd been in years.",
                name: "Priya Nair, CPA",
                role: "Founder, Nair & Associates",
                initial: "P",
              },
              {
                quote: "Setup took 12 minutes. Not 12 hours — 12 minutes. And by the time I'd made a coffee, Entrybot had imported 6 months of transactions and categorised 94% of them correctly.",
                name: "Arjun Mehta",
                role: "Co-Founder, Clearwave SaaS",
                initial: "A",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-zinc-900 text-white border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-[16px] font-medium leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-700 rounded-full border border-zinc-600 flex items-center justify-center font-bold text-[15px] shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-white text-[14px]">{t.name}</p>
                    <p className="text-zinc-400 text-[12px]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 px-4 bg-zinc-900 text-white font-nunito rounded-[50px] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-[1900px] mx-auto lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "15 min", label: "Average Setup Time" },
              { value: "80%", label: "Reduction in Bookkeeping Time" },
              { value: "50,000+", label: "Businesses Automating with Entrybot" },
            ].map((m, i) => (
              <div key={i}>
                <div className="text-[48px] md:text-[64px] font-bold mb-2">{m.value}</div>
                <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/5 to-transparent skew-x-12 translate-x-32" />
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <Plus size={64} className="text-black" />
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
            See it for yourself — free for 14 days.
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            No credit card. No complex setup. Just connect your bank and watch
            Entrybot take over your bookkeeping in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="px-12 py-6 bg-zinc-900 text-white rounded-full font-bold text-[18px] hover:bg-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              Start Free Trial
            </Link>
            <Link
              href="/features"
              className="px-12 py-6 bg-white text-black border-2 border-black rounded-full font-bold text-[18px] hover:bg-zinc-50 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              Explore All Features
            </Link>
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default HowItWorksPage;
