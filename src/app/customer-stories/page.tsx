"use client";

import Link from "next/link";
import { useState } from "react";
import {

  Star,
  Quote,
  Building2,
  Rocket,
  Users2,
  TrendingUp,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const stories = [
  {
    company: "Nair & Associates",
    industry: "Accounting Firm",
    icon: <Building2 size={24} className="text-black" />,
    bg: "bg-[#D4F4DD]",
    logo: "N",
    stat: "3×",
    statLabel: "More clients served",
    quote:
      "We went from managing 40 clients to 120 in a single year without adding any headcount. Entrybot handles the bookkeeping; we handle the strategy.",
    name: "Priya Nair, CPA",
    role: "Founder, Nair & Associates",
    tags: ["Accounting Firm", "100+ Clients"],
    results: [
      { val: "3×", label: "Client Growth" },
      { val: "0", label: "Extra Hires" },
      { val: "80%", label: "Less Admin Time" },
    ],
  },
  {
    company: "Clearwave SaaS",
    industry: "Tech Startup",
    icon: <Rocket size={24} className="text-black" />,
    bg: "bg-[#D9F7FF]",
    logo: "C",
    stat: "$2M+",
    statLabel: "Capital tracked",
    quote:
      "As a Series A startup, we needed real-time burn rate visibility. Entrybot gave us that on day one — no setup nightmare, no consultant fees.",
    name: "Arjun Mehta",
    role: "Co-Founder & CFO, Clearwave",
    tags: ["SaaS Startup", "Series A"],
    results: [
      { val: "$2M+", label: "Capital Tracked" },
      { val: "15 min", label: "Setup Time" },
      { val: "100%", label: "Automated" },
    ],
  },
  {
    company: "Mehta & Co.",
    industry: "Chartered Accountants",
    icon: <Users2 size={24} className="text-black" />,
    bg: "bg-[#FFE5D9]",
    logo: "M",
    stat: "92%",
    statLabel: "Staff time saved",
    quote:
      "Our junior staff used to spend 70% of their time on data entry. Now they're doing real accounting work. Entrybot completely changed how we operate.",
    name: "Rahul Mehta, CA",
    role: "Managing Partner, Mehta & Co.",
    tags: ["CA Firm", "50+ Staff"],
    results: [
      { val: "92%", label: "Time Saved" },
      { val: "50+", label: "Staff Members" },
      { val: "300+", label: "Clients" },
    ],
  },
  {
    company: "GreenRoot Retail",
    industry: "E-Commerce & Retail",
    icon: <TrendingUp size={24} className="text-black" />,
    bg: "bg-[#F0E6FF]",
    logo: "G",
    stat: "40 hrs",
    statLabel: "Saved every month",
    quote:
      "We run 3 Shopify stores and a physical outlet. Entrybot consolidates everything — sales, expenses, reconciliation — into one clean view. Game changer.",
    name: "Sunita Rao",
    role: "Founder, GreenRoot Retail",
    tags: ["Retail", "Multi-channel"],
    results: [
      { val: "40 hrs", label: "Saved/Month" },
      { val: "4", label: "Channels Unified" },
      { val: "0", label: "Manual Entry" },
    ],
  },
];

const allTestimonials = [
  {
    quote: "I wasted 3 years on QuickBooks. Switching to Entrybot was the best financial decision I've made for my business.",
    name: "Ankit Sharma",
    role: "Founder, Sharma Accounting",
    initial: "A",
  },
  {
    quote: "The migration was seamless. Six years of data imported perfectly. I expected chaos — it was the complete opposite.",
    name: "Meena Pillai, CA",
    role: "Director, Pillai & Partners",
    initial: "M",
  },
  {
    quote: "Real-time P&L at my fingertips every morning. I finally feel in control of my business finances.",
    name: "Karan Singhania",
    role: "CEO, Singhania Exports",
    initial: "K",
  },
  {
    quote: "The customer support is genuinely exceptional. A real person picked up in two rings and solved my issue on the spot.",
    name: "Divya Kapoor",
    role: "CFO, Kapoor Industries",
    initial: "D",
  },
  {
    quote: "We onboarded 60 new clients in Q1 without extra staff. That's simply not possible without Entrybot.",
    name: "Vikram Nayak",
    role: "Partner, Nayak & Associates",
    initial: "V",
  },
  {
    quote: "I run three restaurants. Entrybot consolidates all my accounts — it's like having a CFO for a fraction of the cost.",
    name: "Asha Reddy",
    role: "Owner, Reddy Hospitality Group",
    initial: "A",
  },
];

const CustomerStoriesPage = () => {
  const [activeStory, setActiveStory] = useState(0);

  const prev = () => setActiveStory((p) => (p === 0 ? stories.length - 1 : p - 1));
  const next = () => setActiveStory((p) => (p === stories.length - 1 ? 0 : p + 1));

  const story = stories[activeStory];

  return (
    <>
      {/* Hero */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Star size={16} className="fill-yellow-400 text-yellow-400" /> Real Stories, Real Results
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            How Businesses Win With Entrybot
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            From solo accountants to 300-client firms — see how businesses just
            like yours are saving time, growing faster, and staying in control
            of their finances.
          </p>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-12 px-4 bg-zinc-900 font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { val: "50,000+", label: "Businesses Served" },
              { val: "4.9 / 5", label: "Average Rating" },
              { val: "40 hrs", label: "Saved Per Month" },
              { val: "98%", label: "Customer Retention" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-[32px] md:text-[40px] font-bold">{s.val}</div>
                <div className="text-zinc-400 text-[13px] font-bold uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story Carousel */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-16 text-center leading-tight">
            Featured Stories
          </h2>

          <div className={`${story.bg} border-2 border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300`}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — Story Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  {/* Company badge */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-white border-2 border-black rounded-xl flex items-center justify-center font-black text-[20px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {story.logo}
                    </div>
                    <div>
                      <p className="font-black text-black text-[16px]">{story.company}</p>
                      <p className="text-zinc-600 text-[13px] font-medium">{story.industry}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap mb-8">
                    {story.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white border-2 border-black rounded-full text-[12px] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote size={32} className="text-black/20 mb-4" />
                  <blockquote className="text-[20px] md:text-[24px] font-bold text-black leading-relaxed mb-8">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                      {story.logo}
                    </div>
                    <div>
                      <p className="font-bold text-black">{story.name}</p>
                      <p className="text-zinc-500 text-[13px]">{story.role}</p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prev}
                    className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-zinc-100 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div className="flex gap-2">
                    {stories.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStory(i)}
                        className={`h-2 rounded-full transition-all duration-300 border border-black ${i === activeStory ? "w-8 bg-black" : "w-2 bg-white"}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-zinc-100 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <span className="text-[13px] font-bold text-zinc-500 ml-2">
                    {activeStory + 1} / {stories.length}
                  </span>
                </div>
              </div>

              {/* Right — Results Panel */}
              <div className="bg-zinc-900 text-white p-10 lg:p-14 flex flex-col justify-center gap-8">
                <h3 className="text-[20px] font-bold text-zinc-400 uppercase tracking-wider">Results at a Glance</h3>
                {story.results.map((r, i) => (
                  <div key={i} className="border-b border-zinc-700 pb-8 last:border-0 last:pb-0">
                    <div className="text-[48px] font-black text-white leading-none mb-1">{r.val}</div>
                    <div className="text-zinc-400 text-[14px] font-bold uppercase tracking-widest">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Cards Grid */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            More Success Stories
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Businesses across every industry are transforming their finances with Entrybot.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((s, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveStory(i);
                  document.getElementById("featured-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${s.bg} text-left p-8 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all ${i === activeStory ? "ring-2 ring-offset-2 ring-black" : ""}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white border-2 border-black rounded-lg flex items-center justify-center font-black text-[16px]">
                      {s.logo}
                    </div>
                    <div>
                      <p className="font-black text-black text-[15px]">{s.company}</p>
                      <p className="text-zinc-500 text-[12px] font-medium">{s.industry}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[24px] font-black text-black">{s.stat}</div>
                    <div className="text-[11px] text-zinc-500 font-bold uppercase tracking-wide">{s.statLabel}</div>
                  </div>
                </div>
                <p className="text-[14px] text-black font-medium leading-relaxed line-clamp-2 mb-4">
                  &ldquo;{s.quote}&rdquo;
                </p>
                <div className="flex gap-2 flex-wrap">
                  {s.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-0.5 bg-white border border-black rounded-full text-[11px] font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Wall of Testimonials */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Thousands of businesses. One consistent story.
          </p>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {allTestimonials.map((t, i) => (
              <div
                key={i}
                className="break-inside-avoid bg-zinc-900 text-white border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-[15px] font-medium leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-zinc-700 rounded-full flex items-center justify-center font-bold text-[14px] border border-zinc-600 shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-white text-[13px]">{t.name}</p>
                    <p className="text-zinc-400 text-[11px]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-24 px-4 bg-zinc-900 text-white font-nunito rounded-[50px] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-[1900px] mx-auto lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "50,000+", label: "Businesses Powered" },
              { value: "4.9 / 5", label: "Average Customer Rating" },
              { value: "98%", label: "Would Recommend Entrybot" },
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
            Ready to write your success story?
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Join 50,000+ businesses that have transformed their finances with
            Entrybot. Start free — no credit card required.
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

export default CustomerStoriesPage;
