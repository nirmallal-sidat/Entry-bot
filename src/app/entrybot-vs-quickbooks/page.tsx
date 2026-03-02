"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  Clock,
  TrendingUp,
  ShieldCheck,
  HeadphonesIcon,
  BarChart3,
  RefreshCw,
  Globe,
  Plus,
  Star,
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const comparisonRows = [
  { feature: "Automated bookkeeping", entrybot: true, qb: false },
  { feature: "Real-time cash flow dashboard", entrybot: true, qb: false },
  { feature: "AI transaction categorisation", entrybot: true, qb: false },
  { feature: "Multi-entity management", entrybot: true, qb: false },
  { feature: "Automated bank reconciliation", entrybot: true, qb: false },
  { feature: "Burn rate & runway tracking", entrybot: true, qb: false },
  { feature: "White-labelled client reports", entrybot: true, qb: false },
  { feature: "API & webhook integrations", entrybot: true, qb: true },
  { feature: "Invoicing & billing", entrybot: true, qb: true },
  { feature: "Payroll support", entrybot: true, qb: true },
  { feature: "GST / VAT compliance", entrybot: true, qb: true },
  { feature: "Dedicated onboarding support", entrybot: true, qb: false },
  { feature: "Transparent flat pricing", entrybot: true, qb: false },
  { feature: "No per-user seat fees", entrybot: true, qb: false },
];

const whySwitch = [
  {
    icon: <Zap size={28} className="text-black" />,
    title: "10× Faster Setup",
    desc: "Be live in 15 minutes, not 15 days. Entrybot connects to your bank, pulls history, and starts categorising from day one.",
    bg: "bg-[#D4F4DD]",
  },
  {
    icon: <Clock size={28} className="text-black" />,
    title: "40 Hrs Saved Monthly",
    desc: "Automation handles data entry, reconciliation, and reporting. Your team works on what actually matters.",
    bg: "bg-[#D9F7FF]",
  },
  {
    icon: <TrendingUp size={28} className="text-black" />,
    title: "Built for Growth",
    desc: "From a solo founder to a 500-staff company — Entrybot scales without adding complexity or headcount.",
    bg: "bg-[#FFE5D9]",
  },
  {
    icon: <ShieldCheck size={28} className="text-black" />,
    title: "Always Audit-Ready",
    desc: "Every transaction is logged with an unbreakable trail. Walk into any audit with complete confidence.",
    bg: "bg-[#F0E6FF]",
  },
  {
    icon: <HeadphonesIcon size={28} className="text-black" />,
    title: "Real Human Support",
    desc: "No chatbots, no automated queues. A dedicated account manager is available whenever you need help.",
    bg: "bg-[#FFF3D9]",
  },
  {
    icon: <Globe size={28} className="text-black" />,
    title: "Multi-Currency Built In",
    desc: "Operate globally without add-ons. Entrybot handles international transactions and currency conversion natively.",
    bg: "bg-[#D9F7FF]",
  },
];

const EntryBotVsQuickBooksPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <BarChart3 size={16} /> Side-by-Side Comparison
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Entrybot vs QuickBooks
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            QuickBooks was built for the desktop era. Entrybot was built for
            the way modern businesses actually work — automated, real-time, and
            built to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-[16px] hover:bg-black transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              Try Entrybot Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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

      {/* Quick Stats Strip */}
      <section className="py-12 px-4 bg-zinc-900 font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { val: "15 min", label: "Setup time vs. 15 days" },
              { val: "40 hrs", label: "Saved every month" },
              { val: "3×", label: "Cheaper than QuickBooks" },
              { val: "99.9%", label: "Uptime SLA" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-[32px] md:text-[40px] font-bold">{s.val}</div>
                <div className="text-zinc-400 text-[13px] font-bold uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Feature Comparison Table */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Feature-by-Feature Breakdown
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-xl mx-auto">
            See exactly what you get — and what QuickBooks leaves out.
          </p>

          <div className="border-2 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-zinc-900 text-white">
              <div className="p-5 text-[13px] font-bold uppercase tracking-wider border-r border-white/10">
                Feature
              </div>
              <div className="p-5 text-center text-[13px] font-bold uppercase tracking-wider border-r border-white/10">
                <span className="text-yellow-400">Entrybot</span>
              </div>
              <div className="p-5 text-center text-[13px] font-bold uppercase tracking-wider text-zinc-400">
                QuickBooks
              </div>
            </div>

            {/* Table Rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-t border-zinc-100 ${
                  i % 2 === 0 ? "bg-white" : "bg-zinc-50"
                }`}
              >
                <div className="p-4 text-[14px] font-bold text-black border-r border-zinc-100 flex items-center">
                  {row.feature}
                </div>
                <div className="p-4 flex items-center justify-center border-r border-zinc-100">
                  {row.entrybot ? (
                    <CheckCircle2 size={22} className="text-emerald-600" />
                  ) : (
                    <XCircle size={22} className="text-zinc-300" />
                  )}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {row.qb ? (
                    <CheckCircle2 size={22} className="text-emerald-600" />
                  ) : (
                    <XCircle size={22} className="text-zinc-300" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Pricing That Makes Sense
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            QuickBooks charges per user, per add-on, per everything. Entrybot
            keeps it simple — one flat price that scales with you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Entrybot Card */}
            <div className="bg-zinc-900 text-white border-2 border-black rounded-3xl p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 text-black rounded-full text-[12px] font-black mb-6">
                ★ RECOMMENDED
              </div>
              <h3 className="text-[28px] font-bold mb-2">Entrybot</h3>
              <p className="text-zinc-400 text-[14px] font-medium mb-8">
                Everything included. No surprises.
              </p>
              <div className="text-[48px] font-black mb-2">$49<span className="text-[20px] font-bold text-zinc-400">/mo</span></div>
              <p className="text-zinc-400 text-[13px] mb-8">Flat rate. Unlimited users. All features.</p>
              <ul className="space-y-3 mb-10">
                {[
                  "Unlimited team members",
                  "All integrations included",
                  "Real-time AI bookkeeping",
                  "Dedicated support manager",
                  "No per-user fees",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] font-medium">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-[15px] hover:bg-yellow-300 transition-all group w-full justify-center"
              >
                Start Free Trial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-tl-full" />
            </div>

            {/* QuickBooks Card */}
            <div className="bg-white border-2 border-black rounded-3xl p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-500 rounded-full text-[12px] font-black mb-6">
                COMPETITOR
              </div>
              <h3 className="text-[28px] font-bold text-black mb-2">QuickBooks</h3>
              <p className="text-zinc-400 text-[14px] font-medium mb-8">
                Legacy pricing, legacy software.
              </p>
              <div className="text-[48px] font-black text-black mb-2">$170+<span className="text-[20px] font-bold text-zinc-400">/mo</span></div>
              <p className="text-zinc-400 text-[13px] mb-8">Plus add-ons, per-user fees & surprise charges.</p>
              <ul className="space-y-3 mb-10">
                {[
                  "Extra cost per additional user",
                  "Payroll is a separate add-on",
                  "Manual reconciliation required",
                  "Limited automation",
                  "Long-term contracts",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] font-medium text-zinc-500">
                    <XCircle size={18} className="text-zinc-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="px-8 py-4 bg-zinc-100 text-zinc-400 rounded-full font-bold text-[15px] w-full cursor-not-allowed"
              >
                Stay with the old way
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            6 Reasons to Make the Switch
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Thousands of businesses have already moved from QuickBooks to Entrybot. Here&apos;s why.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whySwitch.map((item, i) => (
              <div
                key={i}
                className={`${item.bg} p-10 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-[20px] font-bold text-black mb-3">{item.title}</h3>
                <p className="text-[15px] text-black leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Migrating From QuickBooks? <br /> We Handle Everything.
              </h2>
              <div className="space-y-6 text-[16px] text-black font-medium">
                <p className="leading-relaxed">
                  Worried about switching? Don&apos;t be. Our migration team will
                  import your entire QuickBooks history — transactions, customers,
                  invoices, and reports — with zero data loss.
                </p>
                <ul className="space-y-4 pt-2">
                  {[
                    "Full historical data import from QuickBooks",
                    "Dedicated migration specialist assigned",
                    "Zero downtime during transition",
                    "30-day free parallel run",
                    "Your old data is never deleted",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-zinc-900 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-black transition-all group"
                  >
                    Start Your Migration
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {[
                { step: "01", title: "Sign Up & Connect", desc: "Create your Entrybot account and connect your bank accounts in under 15 minutes." },
                { step: "02", title: "We Import Your Data", desc: "Our migration team pulls your entire QuickBooks history — customers, invoices, transactions." },
                { step: "03", title: "Review & Verify", desc: "Go through your data with your dedicated specialist to confirm everything is perfect." },
                { step: "04", title: "Go Live Confidently", desc: "Cut over to Entrybot with zero stress. We&apos;re there every step of the way." },
              ].map((s, i) => (
                <div key={i} className="bg-white border-2 border-black rounded-2xl p-6 flex gap-5 items-start shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-[32px] font-black text-zinc-200 leading-none shrink-0 select-none">{s.step}</div>
                  <div>
                    <h4 className="text-[17px] font-bold text-black mb-1">{s.title}</h4>
                    <p className="text-[14px] text-zinc-500 font-medium leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-12 leading-tight">
            What Switchers Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "I wasted 3 years on QuickBooks. Switching to Entrybot was the best financial decision I've made for my firm. Setup took one afternoon.",
                name: "Ankit Sharma",
                role: "Founder, Sharma Accounting",
                initial: "A",
              },
              {
                quote: "The migration was seamless. Six years of QuickBooks data imported perfectly. I expected chaos — it was the opposite.",
                name: "Meena Pillai, CA",
                role: "Director, Pillai & Partners",
                initial: "M",
              },
            ].map((t, i) => (
              <div key={i} className="bg-zinc-900 text-white border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-left">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-[16px] font-medium leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-700 rounded-full border border-zinc-600 flex items-center justify-center font-bold text-[16px]">
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
              { value: "50,000+", label: "Businesses Switched" },
              { value: "4.9 / 5", label: "Average Rating" },
              { value: "$0", label: "Migration Cost" },
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
            Ready to leave QuickBooks behind?
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Start your free trial today. No credit card required. Our team
            will migrate your QuickBooks data at no extra cost.
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

export default EntryBotVsQuickBooksPage;
