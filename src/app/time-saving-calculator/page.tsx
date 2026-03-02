"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  Clock,
  ArrowRight,
  DollarSign,
  CalendarDays,
  Users2,
  Briefcase,
  CheckCircle2,
  Plus,
  TrendingDown,
  Star,
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const TimeSavingCalculatorPage = () => {
  const [clients, setClients] = useState(10);
  const [hoursPerClient, setHoursPerClient] = useState(4);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [teamSize, setTeamSize] = useState(3);

  const results = useMemo(() => {
    const totalHoursNow = clients * hoursPerClient;
    const savedPercent = 0.80; // Entrybot saves ~80% of bookkeeping time
    const hoursSaved = Math.round(totalHoursNow * savedPercent);
    const hoursWithEntrybot = totalHoursNow - hoursSaved;
    const moneySaved = hoursSaved * hourlyRate;
    const annualSaved = moneySaved * 12;
    const daysPerMonth = (hoursSaved / 8).toFixed(1);
    const extraClients = Math.floor(hoursSaved / hoursPerClient);

    return {
      totalHoursNow,
      hoursSaved,
      hoursWithEntrybot,
      moneySaved,
      annualSaved,
      daysPerMonth,
      extraClients,
    };
  }, [clients, hoursPerClient, hourlyRate, teamSize]);

  const SliderInput = ({
    label,
    value,
    min,
    max,
    step = 1,
    unit = "",
    prefix = "",
    onChange,
    icon,
  }: {
    label: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    unit?: string;
    prefix?: string;
    onChange: (v: number) => void;
    icon: React.ReactNode;
  }) => (
    <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-zinc-100 rounded-lg border border-zinc-200 flex items-center justify-center">
            {icon}
          </div>
          <span className="text-[14px] font-bold text-black">{label}</span>
        </div>
        <span className="text-[22px] font-black text-black">
          {prefix}{value.toLocaleString()}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-zinc-200 rounded-full appearance-none cursor-pointer accent-black"
      />
      <div className="flex justify-between mt-2 text-[11px] text-zinc-400 font-bold">
        <span>{prefix}{min}{unit}</span>
        <span>{prefix}{max}{unit}</span>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Clock size={16} /> See Your Savings in Seconds
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            How Much Time Could You Save?
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Use our free calculator to find out exactly how many hours — and
            how much money — Entrybot would save your business every month.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — Inputs */}
            <div>
              <h2 className="text-[28px] font-bold text-black mb-8">
                Tell us about your business
              </h2>
              <div className="space-y-6">
                <SliderInput
                  label="Number of clients / entities"
                  value={clients}
                  min={1}
                  max={200}
                  step={1}
                  onChange={setClients}
                  icon={<Users2 size={16} className="text-black" />}
                />
                <SliderInput
                  label="Hours spent on bookkeeping per client/month"
                  value={hoursPerClient}
                  min={1}
                  max={20}
                  step={1}
                  unit=" hrs"
                  onChange={setHoursPerClient}
                  icon={<Clock size={16} className="text-black" />}
                />
                <SliderInput
                  label="Your hourly rate"
                  value={hourlyRate}
                  min={10}
                  max={300}
                  step={5}
                  prefix="$"
                  onChange={setHourlyRate}
                  icon={<DollarSign size={16} className="text-black" />}
                />
                <SliderInput
                  label="Team members doing bookkeeping"
                  value={teamSize}
                  min={1}
                  max={50}
                  step={1}
                  onChange={setTeamSize}
                  icon={<Briefcase size={16} className="text-black" />}
                />
              </div>

              {/* What's included note */}
              <div className="mt-8 bg-[#D4F4DD] border-2 border-black rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-[13px] font-bold text-black mb-3">
                  ✦ Entrybot automates:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Bank reconciliation",
                    "Transaction categorisation",
                    "Invoice matching",
                    "Report generation",
                    "Multi-entity syncing",
                    "Compliance checks",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-black shrink-0" />
                      <span className="text-[12px] font-medium text-black">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Results */}
            <div className="sticky top-28">
              <h2 className="text-[28px] font-bold text-black mb-8">
                Your estimated savings
              </h2>

              {/* Big result cards */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-zinc-900 text-white border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] col-span-2">
                  <p className="text-zinc-400 text-[13px] font-bold uppercase tracking-widest mb-2">Hours saved per month</p>
                  <div className="text-[64px] font-black leading-none mb-1 text-yellow-400">
                    {results.hoursSaved}
                    <span className="text-[24px] text-zinc-400 font-bold ml-2">hrs</span>
                  </div>
                  <p className="text-zinc-400 text-[13px] font-medium">
                    Down from <strong className="text-white">{results.totalHoursNow} hrs</strong> to <strong className="text-white">{results.hoursWithEntrybot} hrs</strong> — an 80% reduction
                  </p>
                </div>

                <div className="bg-[#D4F4DD] border-2 border-black rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Saved / month</p>
                  <div className="text-[36px] font-black text-black leading-none">
                    ${results.moneySaved.toLocaleString()}
                  </div>
                  <p className="text-[12px] text-zinc-600 font-medium mt-1">in staff cost</p>
                </div>

                <div className="bg-[#D9F7FF] border-2 border-black rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Saved / year</p>
                  <div className="text-[36px] font-black text-black leading-none">
                    ${results.annualSaved.toLocaleString()}
                  </div>
                  <p className="text-[12px] text-zinc-600 font-medium mt-1">annual value</p>
                </div>
              </div>

              {/* Secondary metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#FFE5D9] border-2 border-black rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarDays size={16} className="text-black" />
                    <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Days freed up</span>
                  </div>
                  <div className="text-[28px] font-black text-black">{results.daysPerMonth}<span className="text-[14px] font-bold text-zinc-500 ml-1">days/mo</span></div>
                </div>

                <div className="bg-[#F0E6FF] border-2 border-black rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown size={16} className="text-black" />
                    <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Extra capacity</span>
                  </div>
                  <div className="text-[28px] font-black text-black">+{results.extraClients}<span className="text-[14px] font-bold text-zinc-500 ml-1">clients</span></div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/pricing"
                className="flex items-center justify-center gap-2 w-full px-8 py-5 bg-zinc-900 text-white rounded-full font-bold text-[16px] hover:bg-black transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                Start Saving — It&apos;s Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-center text-[12px] text-zinc-400 font-medium mt-3">
                No credit card required · Setup in 15 minutes
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How Entrybot saves you time */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Where Does the Time Go?
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Entrybot eliminates the most time-consuming parts of bookkeeping —
            so your team focuses on work that actually matters.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                task: "Bank Reconciliation",
                before: "8 hrs/mo",
                after: "0 hrs",
                bg: "bg-[#D4F4DD]",
                saving: "100% automated",
              },
              {
                task: "Transaction Categorisation",
                before: "6 hrs/mo",
                after: "30 min",
                bg: "bg-[#D9F7FF]",
                saving: "AI-powered",
              },
              {
                task: "Report Generation",
                before: "4 hrs/mo",
                after: "5 min",
                bg: "bg-[#FFE5D9]",
                saving: "One click",
              },
              {
                task: "Invoice Matching",
                before: "5 hrs/mo",
                after: "0 hrs",
                bg: "bg-[#F0E6FF]",
                saving: "100% automated",
              },
              {
                task: "Compliance Checks",
                before: "3 hrs/mo",
                after: "15 min",
                bg: "bg-[#FFF3D9]",
                saving: "Built-in rules",
              },
              {
                task: "Month-End Close",
                before: "10 hrs/mo",
                after: "1 hr",
                bg: "bg-[#D4F4DD]",
                saving: "Always up to date",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.bg} border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <h3 className="text-[18px] font-bold text-black mb-5">{item.task}</h3>
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-center">
                    <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Before</div>
                    <div className="text-[20px] font-black text-zinc-400 line-through">{item.before}</div>
                  </div>
                  <ArrowRight size={20} className="text-black shrink-0" />
                  <div className="text-center">
                    <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-1">With Entrybot</div>
                    <div className="text-[20px] font-black text-black">{item.after}</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-black rounded-full text-[11px] font-bold">
                  <CheckCircle2 size={12} className="text-black" />
                  {item.saving}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-12 text-center">
            Real Time Savings, Real Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "I used to spend 40 hours a month on bookkeeping across my clients. With Entrybot it's under 8. That's 32 hours back every month.",
                name: "Priya Nair, CPA",
                role: "Nair & Associates · 40+ Clients",
                initial: "P",
                hours: "32 hrs",
                label: "saved/month",
              },
              {
                quote: "Our team's month-end close used to take 3 days. It now takes 4 hours. Our clients think we're magicians.",
                name: "Rahul Mehta, CA",
                role: "Mehta & Co. · 300+ Clients",
                initial: "R",
                hours: "3 days",
                label: "→ 4 hours",
              },
            ].map((t, i) => (
              <div key={i} className="bg-zinc-900 text-white border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 text-black rounded-full text-[13px] font-black mb-5">
                  <Clock size={14} />
                  {t.hours} <span className="font-medium">{t.label}</span>
                </div>
                <blockquote className="text-[15px] font-medium leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center font-bold text-[15px] border border-zinc-600 shrink-0">
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
              { value: "40 hrs", label: "Average Hours Saved Per Month" },
              { value: "80%", label: "Reduction in Bookkeeping Time" },
              { value: "$24,000+", label: "Average Annual Saving per Firm" },
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
            Stop losing time. Start saving it.
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Start your free trial today and reclaim your hours from day one.
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="px-12 py-6 bg-zinc-900 text-white rounded-full font-bold text-[18px] hover:bg-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact-support"
              className="px-12 py-6 bg-white text-black border-2 border-black rounded-full font-bold text-[18px] hover:bg-zinc-50 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default TimeSavingCalculatorPage;
