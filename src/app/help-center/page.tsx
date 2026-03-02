"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  Search,
  BookOpen,
  Zap,
  RefreshCw,
  BarChart3,
  ShieldCheck,
  Users2,
  Code2,
  ChevronRight,
  MessageCircle,
  Mail,
  Phone,
  Plus,
  ArrowRight,
  Star,
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const categories = [
  {
    icon: <Zap size={28} className="text-black" />,
    title: "Getting Started",
    desc: "Set up your account, connect your bank, and run your first reconciliation.",
    articles: 12,
    bg: "bg-[#D4F4DD]",
    topics: ["Account setup", "Connecting bank accounts", "First reconciliation", "Inviting team members"],
  },
  {
    icon: <RefreshCw size={28} className="text-black" />,
    title: "Automation & Reconciliation",
    desc: "Learn how Entrybot automates your bookkeeping and keeps your books balanced.",
    articles: 18,
    bg: "bg-[#D9F7FF]",
    topics: ["Bank feed setup", "Auto-categorisation rules", "Reconciliation reports", "Handling exceptions"],
  },
  {
    icon: <BarChart3 size={28} className="text-black" />,
    title: "Reports & Dashboards",
    desc: "Generate P&L, balance sheets, cash flow reports and customise your dashboard.",
    articles: 15,
    bg: "bg-[#FFE5D9]",
    topics: ["P&L report", "Balance sheet", "Cash flow statement", "Custom date ranges"],
  },
  {
    icon: <Users2 size={28} className="text-black" />,
    title: "Team & Client Management",
    desc: "Manage roles, permissions, and multi-client access for your firm or team.",
    articles: 10,
    bg: "bg-[#F0E6FF]",
    topics: ["Adding team members", "Role permissions", "Client switching", "White-label reports"],
  },
  {
    icon: <ShieldCheck size={28} className="text-black" />,
    title: "Compliance & Tax",
    desc: "Set up GST, VAT, and tax compliance workflows for your jurisdiction.",
    articles: 14,
    bg: "bg-[#FFF3D9]",
    topics: ["GST setup", "VAT configuration", "Tax-ready reports", "Audit trail"],
  },
  {
    icon: <Code2 size={28} className="text-black" />,
    title: "Integrations & API",
    desc: "Connect Entrybot to Stripe, Shopify, Gusto, and build custom integrations.",
    articles: 20,
    bg: "bg-[#D4F4DD]",
    topics: ["Stripe integration", "Shopify integration", "API authentication", "Webhooks"],
  },
];

const popularArticles = [
  { title: "How to connect your bank account to Entrybot", category: "Getting Started", time: "3 min read" },
  { title: "Setting up automated reconciliation rules", category: "Automation", time: "5 min read" },
  { title: "Generating your first P&L report", category: "Reports", time: "4 min read" },
  { title: "How to invite a team member and set permissions", category: "Team Management", time: "2 min read" },
  { title: "Configuring GST for Indian businesses", category: "Compliance", time: "6 min read" },
  { title: "Connecting Stripe to Entrybot", category: "Integrations", time: "4 min read" },
  { title: "Migrating from QuickBooks — step by step", category: "Getting Started", time: "8 min read" },
  { title: "Understanding your cash flow dashboard", category: "Reports", time: "3 min read" },
];

const HelpCenterPage = () => {
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    if (!search.trim()) return popularArticles;
    return popularArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      {/* Hero with Search */}
      <section className="py-24 px-4 bg-zinc-900 font-nunito relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border-2 border-white/20 rounded-full text-white font-bold text-[14px] mb-8">
            <BookOpen size={16} /> Entrybot Help Centre
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-white mb-6 leading-tight">
            How can we help you?
          </h1>
          <p className="text-[18px] text-zinc-400 leading-relaxed mb-10 font-medium">
            Search our knowledge base or browse categories below.
          </p>

          {/* Search */}
          <div className="relative">
            <Search size={22} className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search for articles, guides, topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-16 pr-6 py-5 bg-white border-2 border-black rounded-full text-[16px] font-medium text-black focus:outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder:text-zinc-400"
            />
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {["Getting Started", "Bank Connection", "Reconciliation", "Reports"].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearch(tag)}
                className="px-4 py-2 bg-white/10 border-2 border-white/20 rounded-full text-[13px] font-bold text-white hover:bg-white/20 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/5 to-transparent skew-x-12 translate-x-32" />
      </section>

      {/* Search Results */}
      {search && (
        <section className="py-12 px-4 bg-[#F4F4F4] font-nunito border-b border-zinc-200">
          <div className="max-w-3xl mx-auto">
            <p className="text-[14px] font-bold text-zinc-500 mb-6">
              {filteredArticles.length} result{filteredArticles.length !== 1 ? "s" : ""} for &ldquo;<span className="text-black">{search}</span>&rdquo;
            </p>
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-zinc-300 rounded-3xl">
                <Search size={40} className="text-zinc-300 mx-auto mb-3" />
                <p className="text-[16px] font-bold text-zinc-400">No articles found</p>
                <p className="text-[13px] text-zinc-400 font-medium mt-1">Try a different search term or browse categories below</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredArticles.map((a, i) => (
                  <div
                    key={i}
                    className="bg-white border-2 border-black rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <p className="font-bold text-black text-[15px] mb-1">{a.title}</p>
                      <div className="flex gap-3 items-center">
                        <span className="text-[12px] text-zinc-500 font-medium">{a.category}</span>
                        <span className="text-[12px] text-zinc-400">·</span>
                        <span className="text-[12px] text-zinc-500 font-medium">{a.time}</span>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-zinc-400 shrink-0" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Browse by Topic
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Find answers by topic — from first-time setup to advanced API integrations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`${cat.bg} border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer`}
              >
                <div className="mb-5">{cat.icon}</div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[20px] font-bold text-black">{cat.title}</h3>
                  <span className="text-[12px] font-black text-zinc-500 bg-white border border-zinc-300 rounded-full px-2 py-0.5 shrink-0 ml-2">
                    {cat.articles} articles
                  </span>
                </div>
                <p className="text-[14px] text-black font-medium leading-relaxed mb-5">{cat.desc}</p>
                <ul className="space-y-2">
                  {cat.topics.map((topic, j) => (
                    <li key={j} className="flex items-center gap-2 text-[13px] font-medium text-black hover:underline cursor-pointer">
                      <ChevronRight size={14} className="text-zinc-400 shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Popular Articles
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            The most-read guides by Entrybot users this week.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {popularArticles.map((a, i) => (
              <div
                key={i}
                className="bg-white border-2 border-black rounded-2xl p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-between gap-4 cursor-pointer"
              >
                <div>
                  <p className="font-bold text-black text-[15px] mb-1.5">{a.title}</p>
                  <div className="flex gap-3 items-center">
                    <span className="px-2 py-0.5 bg-zinc-100 border border-zinc-200 rounded-full text-[11px] font-bold text-zinc-600">
                      {a.category}
                    </span>
                    <span className="text-[12px] text-zinc-400 font-medium">{a.time}</span>
                  </div>
                </div>
                <ChevronRight size={18} className="text-zinc-400 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still need help? */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Still Need Help?
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Our support team is made up of real humans — no bots, no automated queues.
            We typically respond within 2 hours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <MessageCircle size={32} className="text-black" />,
                title: "Live Chat",
                desc: "Chat with our support team directly from your Entrybot dashboard. Available Mon–Fri, 9am–6pm.",
                cta: "Open Chat",
                href: "/contact-support",
                bg: "bg-[#D4F4DD]",
              },
              {
                icon: <Mail size={32} className="text-black" />,
                title: "Email Support",
                desc: "Send us a detailed message and we'll get back to you within 2 hours on business days.",
                cta: "Email Us",
                href: "/contact-support",
                bg: "bg-[#D9F7FF]",
              },
              {
                icon: <Phone size={32} className="text-black" />,
                title: "Book a Call",
                desc: "For complex issues, book a screen-sharing session with one of our senior support specialists.",
                cta: "Book a Session",
                href: "/contact-support",
                bg: "bg-[#FFE5D9]",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.bg} border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all text-center`}
              >
                <div className="flex justify-center mb-5">{item.icon}</div>
                <h3 className="text-[20px] font-bold text-black mb-3">{item.title}</h3>
                <p className="text-[14px] text-black font-medium leading-relaxed mb-6">{item.desc}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-bold text-[14px] hover:bg-black transition-all group"
                >
                  {item.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction */}
      <section className="py-16 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-[20px] font-bold text-black mb-2">4.9 / 5 Support Rating</p>
          <p className="text-[15px] text-zinc-600 font-medium">
            Based on 12,400+ support interactions. 97% of issues resolved on first contact.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 px-4 bg-zinc-900 text-white font-nunito rounded-[50px] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-[1900px] mx-auto lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "89", label: "Help Articles Available" },
              { value: "< 2 hrs", label: "Average Response Time" },
              { value: "97%", label: "First-Contact Resolution Rate" },
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
            Not yet an Entrybot user?
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Try Entrybot free for 14 days — no credit card required. Setup takes
            15 minutes and our team is with you every step of the way.
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
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default HelpCenterPage;
