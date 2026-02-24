"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  ArrowRight, 
  Zap,
  LayoutGrid,
  Cpu,
  Layers,
  ShieldCheck,
  Plus
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const IntegrationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Accounting", "Payments", "HR & Payroll", "Ecommerce", "Banking"];

  const integrations = [
    {
      name: "QuickBooks",
      description: "Sync your transactions and automate your journal entries.",
      category: "Accounting",
      icon: "https://www.vectorlogo.zone/logos/intuit_quickbooks/intuit_quickbooks-icon.svg",
      bgColor: "bg-[#D4F4DD]"
    },
    {
      name: "Stripe",
      description: "Automatically reconcile your payments and payouts.",
      category: "Payments",
      icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
      bgColor: "bg-[#D9F7FF]"
    },
    {
      name: "Gusto",
      description: "Sync payroll data and employee benefits automatically.",
      category: "HR & Payroll",
      icon: "https://www.vectorlogo.zone/logos/gusto/gusto-icon.svg",
      bgColor: "bg-[#FFE5D9]"
    },
    {
      name: "Xero",
      description: "Two-way sync for invoices, expenses and bank feeds.",
      category: "Accounting",
      icon: "https://www.vectorlogo.zone/logos/xero/xero-icon.svg",
      bgColor: "bg-[#D9F7FF]"
    },
    {
      name: "Shopify",
      description: "Real-time sales tracking and inventory reconciliation.",
      category: "Ecommerce",
      icon: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
      bgColor: "bg-[#D4F4DD]"
    },
    {
      name: "Mercury",
      description: "Direct bank feed integration for seamless reconciliation.",
      category: "Banking",
      icon: "https://www.vectorlogo.zone/logos/mercury/mercury-icon.svg",
      bgColor: "bg-[#F5F5F5]"
    },
    {
      name: "Deel",
      description: "Automate global contractor payments and compliance.",
      category: "HR & Payroll",
      icon: "/deel-icon.png", 
      bgColor: "bg-[#FFE5D9]"
    },
    {
      name: "Ramp",
      description: "Sync corporate card spend and expense policies.",
      category: "Payments",
      icon: "https://www.vectorlogo.zone/logos/ramp/ramp-icon.svg",
      bgColor: "bg-[#F5F5F5]"
    }
  ];

  const filteredIntegrations = integrations.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section - Matching other pages */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Zap size={16} /> Connected Ecosystem
            </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Works with the tools you already use
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Entrybot integrates with your entire financial stack to automate bookkeeping, 
            provide real-time insights, and eliminate manual data entry.
          </p>
        </div>
      </section>

      {/* Search and Filters - Integrated Layout */}
      <section className="py-12 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-center mb-16">
            {/* Search Bar */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
              <input 
                type="text" 
                placeholder="Search integrations..."
                className="w-full pl-12 pr-4 py-4 bg-[#F4F4F4] border-2 border-black rounded-full font-bold text-black focus:outline-hidden transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full border-2 border-black font-bold transition-all ${
                    activeCategory === cat 
                      ? "bg-black text-white shadow-none" 
                      : "bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Integrations Grid - Matching other pages' card style */}
          {filteredIntegrations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {filteredIntegrations.map((app, index) => (
                <div 
                  key={index}
                  className={`${app.bgColor} p-10 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col`}
                >
                  <div className="w-14 h-14 bg-white border-2 border-black rounded-xl flex items-center justify-center mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    {app.icon.startsWith("http") ? (
                      <img src={app.icon} alt={app.name} className="w-8 h-8 object-contain" />
                    ) : (
                      <LayoutGrid size={28} />
                    )}
                  </div>
                  <h3 className="text-[24px] font-bold text-black mb-4">{app.name}</h3>
                  <p className="text-[16px] text-black leading-relaxed font-medium mb-8 flex-grow">
                    {app.description}
                  </p>
                  <button className="flex items-center gap-2 font-bold text-black group">
                    Connect Now
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <h2 className="text-[32px] font-bold text-black mb-4">No integrations found</h2>
              <p className="text-zinc-500 font-medium">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Capabilities Section - Matching other pages' 3-column style */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20 text-center mb-16">
            <h2 className="text-[36px] md:text-[48px] font-bold text-black leading-tight">Built for modern financial teams</h2>
        </div>
        <div className="max-w-[1900px] mx-auto lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white border-2 border-black rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-12 h-12 bg-[#D4F4DD] rounded-lg flex items-center justify-center mb-6 border-2 border-black">
                    <Cpu size={24} />
                </div>
                <h3 className="text-[22px] font-bold mb-4">Universal Sync</h3>
                <p className="text-zinc-600 font-medium leading-relaxed">Connect once and watch as data flows seamlessly between all your platforms.</p>
            </div>
            <div className="p-10 bg-white border-2 border-black rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-12 h-12 bg-[#D9F7FF] rounded-lg flex items-center justify-center mb-6 border-2 border-black">
                    <Layers size={24} />
                </div>
                <h3 className="text-[22px] font-bold mb-4">Data Cleanliness</h3>
                <p className="text-zinc-600 font-medium leading-relaxed">AI automatically maps transactions to your chart of accounts accurately.</p>
            </div>
            <div className="p-10 bg-white border-2 border-black rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-12 h-12 bg-[#FFE5D9] rounded-lg flex items-center justify-center mb-6 border-2 border-black">
                    <ShieldCheck size={24} />
                </div>
                <h3 className="text-[22px] font-bold mb-4">Tier-1 Security</h3>
                <p className="text-zinc-600 font-medium leading-relaxed">Bank-level encryption and Oauth connections keep your data safe.</p>
            </div>
        </div>
      </section>

      {/* Metrics Section - Matching other pages */}
      <section className="py-24 px-4 bg-zinc-900 text-white font-nunito rounded-[50px] mx-4 mb-24 overflow-hidden relative mt-24">
        <div className="max-w-[1900px] mx-auto lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">100+</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Native Integrations</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">1M+</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Syncs Daily</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">99.9%</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Uptime SLA</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/5 to-transparent skew-x-12 translate-x-32" />
      </section>
      
      <TakeBackHours />
    </>
  );
};

export default IntegrationsPage;
