"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  BadgeCheck,
  Star,
  ArrowRight,
  Users2,
  Globe,
  Briefcase,
  Filter,
  Plus,
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const accountants = [
  {
    name: "Priya Nair, CPA",
    firm: "Nair & Associates",
    location: "Mumbai, India",
    specialties: ["Startups", "SaaS", "Tax Compliance"],
    level: "Platinum",
    rating: 5.0,
    reviews: 48,
    clients: "120+",
    languages: ["English", "Hindi"],
    bg: "bg-[#D4F4DD]",
  },
  {
    name: "Rahul Mehta, CA",
    firm: "Mehta & Co.",
    location: "Delhi, India",
    specialties: ["Accounting Firms", "Multi-entity", "GST"],
    level: "Platinum",
    rating: 4.9,
    reviews: 63,
    clients: "300+",
    languages: ["English", "Hindi"],
    bg: "bg-[#D9F7FF]",
  },
  {
    name: "Sunita Rao",
    firm: "SR Advisory",
    location: "Bangalore, India",
    specialties: ["E-Commerce", "Shopify", "Retail"],
    level: "Gold",
    rating: 4.8,
    reviews: 31,
    clients: "50+",
    languages: ["English", "Kannada"],
    bg: "bg-[#FFE5D9]",
  },
  {
    name: "Vikram Nayak, CA",
    firm: "Nayak Advisory",
    location: "Pune, India",
    specialties: ["SMBs", "Manufacturing", "Payroll"],
    level: "Gold",
    rating: 4.9,
    reviews: 27,
    clients: "80+",
    languages: ["English", "Marathi"],
    bg: "bg-[#F0E6FF]",
  },
  {
    name: "Anika Joshi",
    firm: "Joshi Advisory",
    location: "Hyderabad, India",
    specialties: ["Hospitality", "Real Estate", "VAT"],
    level: "Gold",
    rating: 4.7,
    reviews: 19,
    clients: "40+",
    languages: ["English", "Telugu"],
    bg: "bg-[#FFF3D9]",
  },
  {
    name: "Ankit Sharma",
    firm: "Sharma Accounting",
    location: "Chennai, India",
    specialties: ["Startups", "VC-backed", "Cap Table"],
    level: "Silver",
    rating: 4.8,
    reviews: 14,
    clients: "25+",
    languages: ["English", "Tamil"],
    bg: "bg-[#D4F4DD]",
  },
];

const levelColors: Record<string, string> = {
  Platinum: "bg-black text-white border-black",
  Gold: "bg-yellow-400 text-black border-yellow-500",
  Silver: "bg-zinc-200 text-zinc-700 border-zinc-400",
};

const specialtyOptions = [
  "All", "Startups", "SaaS", "SMBs", "E-Commerce", "Retail",
  "Manufacturing", "Hospitality", "Real Estate", "Tax Compliance",
  "GST", "VAT", "Payroll", "Multi-entity",
];

const FindAnAccountantPage = () => {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");
  const [level, setLevel] = useState("All");

  const filtered = useMemo(() => {
    return accountants.filter((a) => {
      const matchSearch =
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.firm.toLowerCase().includes(search.toLowerCase()) ||
        a.location.toLowerCase().includes(search.toLowerCase());
      const matchSpecialty =
        specialty === "All" || a.specialties.includes(specialty);
      const matchLevel = level === "All" || a.level === level;
      return matchSearch && matchSpecialty && matchLevel;
    });
  }, [search, specialty, level]);

  return (
    <>
      {/* Hero */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Users2 size={16} /> Certified Entrybot Professionals
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Find Your Perfect Accountant
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Browse our directory of Entrybot-certified accountants and firms.
            Every professional listed here is trained, vetted, and ready to
            manage your books.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-zinc-900 font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { val: "2,500+", label: "Certified Accountants" },
              { val: "40+", label: "Countries Covered" },
              { val: "100%", label: "Entrybot Certified" },
              { val: "Free", label: "To Search & Connect" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-[32px] md:text-[40px] font-bold">{s.val}</div>
                <div className="text-zinc-400 text-[13px] font-bold uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter + Directory */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search by name, firm, or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-6 py-5 border-2 border-black rounded-full text-[16px] font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {/* Specialty filter */}
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-zinc-500" />
              <span className="text-[13px] font-bold text-zinc-500 uppercase tracking-wider">Specialty:</span>
            </div>
            {["All", "Startups", "SMBs", "E-Commerce", "Tax Compliance", "GST"].map((s) => (
              <button
                key={s}
                onClick={() => setSpecialty(s)}
                className={`px-4 py-2 rounded-full text-[13px] font-bold border-2 transition-all ${
                  specialty === s
                    ? "bg-zinc-900 text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white text-black border-black hover:bg-zinc-50"
                }`}
              >
                {s}
              </button>
            ))}

            <div className="w-px bg-zinc-200 mx-2 hidden md:block" />

            {/* Level filter */}
            {["All", "Platinum", "Gold", "Silver"].map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`px-4 py-2 rounded-full text-[13px] font-bold border-2 transition-all ${
                  level === l
                    ? "bg-zinc-900 text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white text-black border-black hover:bg-zinc-50"
                }`}
              >
                {l === "All" ? "All Levels" : `${l} ★`}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-[14px] font-bold text-zinc-500 mb-8">
            Showing <span className="text-black">{filtered.length}</span> certified accountants
            {search && <> matching &ldquo;<span className="text-black">{search}</span>&rdquo;</>}
          </p>

          {/* Directory Cards */}
          {filtered.length === 0 ? (
            <div className="text-center py-24 border-2 border-dashed border-zinc-300 rounded-3xl">
              <Search size={48} className="text-zinc-300 mx-auto mb-4" />
              <p className="text-[18px] font-bold text-zinc-400">No accountants found</p>
              <p className="text-[14px] text-zinc-400 font-medium mt-2">Try adjusting your filters or search term</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((a, i) => (
                <div
                  key={i}
                  className={`${a.bg} border-2 border-black rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-zinc-900 text-white rounded-xl border-2 border-black flex items-center justify-center font-black text-[18px] shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {a.name[0]}
                      </div>
                      <div>
                        <p className="font-black text-black text-[15px] leading-tight">{a.name}</p>
                        <p className="text-zinc-600 text-[12px] font-medium">{a.firm}</p>
                      </div>
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 border-2 rounded-full text-[11px] font-black shrink-0 ${levelColors[a.level]}`}>
                      <BadgeCheck size={12} />
                      {a.level}
                    </span>
                  </div>

                  {/* Location & Rating */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1.5 text-zinc-600">
                      <MapPin size={14} />
                      <span className="text-[13px] font-medium">{a.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={13} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-[13px] font-black text-black">{a.rating}</span>
                      <span className="text-[12px] text-zinc-500 font-medium">({a.reviews})</span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {a.specialties.map((s, j) => (
                      <span key={j} className="px-2 py-0.5 bg-white border border-black rounded-full text-[11px] font-bold">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 mb-6">
                    <div>
                      <p className="text-[18px] font-black text-black">{a.clients}</p>
                      <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wide">Clients</p>
                    </div>
                    <div>
                      <p className="text-[18px] font-black text-black">{a.languages.length}</p>
                      <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wide">Languages</p>
                    </div>
                    <div className="flex items-end gap-1 text-zinc-500">
                      <Globe size={14} />
                      <span className="text-[12px] font-medium">{a.languages.join(", ")}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="mt-auto w-full flex items-center justify-center gap-2 px-5 py-3 bg-zinc-900 text-white rounded-full font-bold text-[14px] hover:bg-black transition-all group border-2 border-black">
                    <Briefcase size={15} />
                    Contact {a.name.split(",")[0]}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Are you an accountant? */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Are You an Accountant? <br /> Get Listed for Free.
              </h2>
              <p className="text-[16px] text-black font-medium leading-relaxed mb-8">
                Earn your Entrybot certification and get a free listing in this
                directory. Thousands of businesses search here every month
                looking for professionals just like you.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Free listing for all certified partners",
                  "Inbound client leads directly to you",
                  "Platinum & Gold partners get priority placement",
                  "No subscription fee — ever",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px] font-medium text-black">
                    <BadgeCheck size={20} className="text-black shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/entrybot-certification"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-black transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                  Get Certified
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/partner-rewards"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-full font-bold hover:bg-zinc-50 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  View Partner Rewards
                </Link>
              </div>
            </div>

            {/* Levels side panel */}
            <div className="space-y-4">
              {[
                {
                  level: "Silver",
                  badge: "bg-zinc-200 text-zinc-700",
                  desc: "Basic listing in the directory after completing Foundations certification.",
                  perks: ["Directory listing", "Partner badge", "Standard placement"],
                },
                {
                  level: "Gold",
                  badge: "bg-yellow-400 text-black",
                  desc: "Enhanced listing with priority placement after Professional certification.",
                  perks: ["Priority placement", "Profile highlight", "Co-marketing support"],
                },
                {
                  level: "Platinum",
                  badge: "bg-black text-white",
                  desc: "Top-of-directory placement and featured profile after Expert certification.",
                  perks: ["Top placement", "Featured profile", "Quarterly business reviews"],
                },
              ].map((tier, i) => (
                <div key={i} className="bg-white border-2 border-black rounded-2xl p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[18px] font-bold text-black">{tier.level} Partner</h3>
                    <span className={`px-3 py-1 border-2 border-black rounded-full text-[12px] font-black ${tier.badge}`}>
                      {tier.level}
                    </span>
                  </div>
                  <p className="text-[13px] text-zinc-600 font-medium mb-3">{tier.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tier.perks.map((p, j) => (
                      <span key={j} className="px-2 py-0.5 bg-zinc-100 border border-zinc-300 rounded-full text-[11px] font-bold text-zinc-600">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 px-4 bg-zinc-900 text-white font-nunito rounded-[50px] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-[1900px] mx-auto lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "2,500+", label: "Certified Accountants Listed" },
              { value: "40+", label: "Countries & Regions" },
              { value: "10K+", label: "Businesses Connected Monthly" },
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
            Don&apos;t want to manage books yourself?
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Connect with a certified Entrybot accountant today — or use
            Entrybot yourself and let automation do the heavy lifting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="px-12 py-6 bg-zinc-900 text-white rounded-full font-bold text-[18px] hover:bg-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              Try Entrybot Free
            </Link>
            <Link
              href="/entrybot-certification"
              className="px-12 py-6 bg-white text-black border-2 border-black rounded-full font-bold text-[18px] hover:bg-zinc-50 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              Get Certified
            </Link>
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default FindAnAccountantPage;
