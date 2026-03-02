"use client";

import Link from "next/link";
import {
  Gift,
  ArrowRight,
  CheckCircle2,
  Star,
  Zap,
  Users2,
  DollarSign,
  Trophy,
  BadgeCheck,
  Globe,
  Plus,
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const tiers = [
  {
    name: "Silver",
    bg: "bg-white",
    accent: "bg-zinc-100",
    badge: "bg-zinc-200 text-zinc-700",
    referrals: "1–5",
    commission: "15%",
    perks: [
      "15% recurring commission",
      "Entrybot Silver badge",
      "Partner portal access",
      "Marketing materials",
      "Email support",
    ],
    cta: "Get Started",
    href: "/partner-with-us",
    featured: false,
  },
  {
    name: "Gold",
    bg: "bg-zinc-900",
    accent: "bg-zinc-800",
    badge: "bg-yellow-400 text-black",
    referrals: "6–20",
    commission: "25%",
    perks: [
      "25% recurring commission",
      "Entrybot Gold badge",
      "Priority partner portal",
      "Co-marketing support",
      "Dedicated account manager",
      "Listed in Partner Directory",
    ],
    cta: "Apply for Gold",
    href: "/partner-with-us",
    featured: true,
  },
  {
    name: "Platinum",
    bg: "bg-[#D4F4DD]",
    accent: "bg-white",
    badge: "bg-black text-white",
    referrals: "21+",
    commission: "35%",
    perks: [
      "35% recurring commission",
      "Entrybot Platinum badge",
      "Top placement in directory",
      "Joint webinars & case studies",
      "Custom onboarding support",
      "Early access to new features",
      "Quarterly business reviews",
    ],
    cta: "Apply for Platinum",
    href: "/partner-with-us",
    featured: false,
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Sign Up as a Partner",
    desc: "Fill out our quick partner application. Most partners are approved within 24 hours.",
  },
  {
    step: "02",
    title: "Get Your Referral Link",
    desc: "Access your unique referral link, tracking dashboard, and branded marketing materials from your partner portal.",
  },
  {
    step: "03",
    title: "Refer Clients",
    desc: "Share your link with clients, embed it on your website, or mention Entrybot in your newsletters. Every referral is tracked automatically.",
  },
  {
    step: "04",
    title: "Earn Every Month",
    desc: "Collect recurring commissions for as long as your referred clients stay with Entrybot — paid directly to your account each month.",
  },
];

const rewards = [
  {
    icon: <DollarSign size={28} className="text-black" />,
    title: "Recurring Commission",
    desc: "Earn up to 35% monthly recurring commission on every client you refer — for the lifetime of their subscription.",
    bg: "bg-[#D4F4DD]",
  },
  {
    icon: <Globe size={28} className="text-black" />,
    title: "Directory Listing",
    desc: "Gold & Platinum partners are featured in our public Partner Directory, bringing new clients to your firm.",
    bg: "bg-[#D9F7FF]",
  },
  {
    icon: <BadgeCheck size={28} className="text-black" />,
    title: "Certified Partner Badge",
    desc: "Display your Entrybot partner badge on your website, email signature, and marketing materials.",
    bg: "bg-[#FFE5D9]",
  },
  {
    icon: <Zap size={28} className="text-black" />,
    title: "Co-Marketing",
    desc: "Gold and Platinum partners get joint content, webinars, and case studies co-branded with Entrybot.",
    bg: "bg-[#F0E6FF]",
  },
  {
    icon: <Users2 size={28} className="text-black" />,
    title: "Dedicated Support",
    desc: "Priority access to a dedicated account manager who knows your clients and your business.",
    bg: "bg-[#FFF3D9]",
  },
  {
    icon: <Trophy size={28} className="text-black" />,
    title: "Annual Partner Awards",
    desc: "Top partners are recognised at our annual Partner Summit and featured across Entrybot's channels.",
    bg: "bg-[#D4F4DD]",
  },
];

const PartnerRewardsPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Gift size={16} /> Earn While You Refer
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Get Rewarded for Every Referral
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Join the Entrybot Partner Rewards Programme. Refer clients, earn
            recurring commissions, and unlock exclusive perks — the more you
            refer, the more you earn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/partner-with-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-[16px] hover:bg-black transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              Become a Partner
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#tiers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-full font-bold text-[16px] hover:bg-zinc-50 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              See Reward Tiers
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-zinc-900 font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { val: "35%", label: "Max Recurring Commission" },
              { val: "3 Tiers", label: "Silver · Gold · Platinum" },
              { val: "$0", label: "Cost to Join" },
              { val: "Monthly", label: "Payout Frequency" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-[32px] md:text-[40px] font-bold">{s.val}</div>
                <div className="text-zinc-400 text-[13px] font-bold uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward Tiers */}
      <section id="tiers" className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Choose Your Tier
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Start as Silver and grow automatically as you refer more clients.
            Higher tiers unlock bigger commissions and exclusive perks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`${tier.bg} border-2 border-black rounded-3xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${tier.featured ? "md:-translate-y-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" : ""} transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
              >
                {tier.featured && (
                  <div className="bg-yellow-400 border-b-2 border-black text-black text-center py-2 text-[13px] font-black uppercase tracking-wider">
                    ★ Most Popular
                  </div>
                )}
                <div className="p-10">
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 ${tier.badge} rounded-full text-[12px] font-black mb-6 border border-black`}>
                    <Star size={12} className={tier.featured ? "fill-black" : "fill-zinc-500"} />
                    {tier.name}
                  </div>

                  <div className="mb-2">
                    <span className={`text-[48px] font-black ${tier.featured ? "text-white" : "text-black"}`}>
                      {tier.commission}
                    </span>
                    <span className={`text-[16px] font-bold ml-2 ${tier.featured ? "text-zinc-400" : "text-zinc-500"}`}>
                      recurring/mo
                    </span>
                  </div>
                  <p className={`text-[14px] font-bold mb-8 ${tier.featured ? "text-zinc-400" : "text-zinc-500"}`}>
                    Starting from <strong className={tier.featured ? "text-white" : "text-black"}>{tier.referrals}</strong> referrals
                  </p>

                  <ul className="space-y-3 mb-10">
                    {tier.perks.map((perk, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2
                          size={18}
                          className={tier.featured ? "text-yellow-400 shrink-0" : "text-zinc-700 shrink-0"}
                        />
                        <span className={`text-[14px] font-medium ${tier.featured ? "text-white" : "text-black"}`}>
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.href}
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full font-bold text-[15px] transition-all group border-2 border-black
                      ${tier.featured
                        ? "bg-yellow-400 text-black hover:bg-yellow-300"
                        : "bg-black text-white hover:bg-zinc-800"
                      }`}
                  >
                    {tier.cta}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward Benefits Grid */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            What You Unlock as a Partner
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Commissions are just the beginning. Entrybot partners get a full
            suite of tools and support to grow their referral income.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rewards.map((r, i) => (
              <div
                key={i}
                className={`${r.bg} p-10 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div className="mb-5">{r.icon}</div>
                <h3 className="text-[20px] font-bold text-black mb-3">{r.title}</h3>
                <p className="text-[15px] text-black leading-relaxed font-medium">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            How the Programme Works
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Four simple steps from signing up to earning your first commission.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {howItWorks.map((step, i) => (
              <div
                key={i}
                className="bg-[#F4F4F4] border-2 border-black rounded-3xl p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="text-[48px] font-black text-zinc-200 leading-none mb-4 select-none">
                  {step.step}
                </div>
                <h3 className="text-[22px] font-bold text-black mb-3">{step.title}</h3>
                <p className="text-[15px] text-zinc-600 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-12 text-center leading-tight">
            What Our Partners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "I earn ₹80,000 a month in recurring commission from Entrybot referrals. It's the most passive income I've ever generated — and it keeps growing.",
                name: "Ravi Shankar, CA",
                role: "Platinum Partner · 40+ Referrals",
                initial: "R",
              },
              {
                quote: "The Gold tier directory listing brought us 6 new inbound clients last quarter. We didn't even have to do anything — Entrybot sent them to us.",
                name: "Anika Joshi",
                role: "Gold Partner · Joshi Advisory",
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

      {/* FAQ Strip */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[36px] md:text-[40px] font-bold text-black mb-12 text-center leading-tight">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How do I get paid?",
                a: "Commissions are paid monthly via bank transfer or your preferred method. Payments are processed on the 1st of each month for the previous month's referrals.",
              },
              {
                q: "When do I move to the next tier?",
                a: "Tier upgrades are automatic. As soon as your cumulative referrals hit the next threshold, your commission rate and perks upgrade instantly.",
              },
              {
                q: "Is there a minimum payout?",
                a: "There's no minimum payout. Even a single referral earns you a commission from day one.",
              },
              {
                q: "Can I refer my existing clients?",
                a: "Yes! If your existing clients aren't yet on Entrybot, you can refer them and earn commissions on their subscriptions.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-[#F4F4F4] border-2 border-black rounded-2xl p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="text-[17px] font-bold text-black mb-2">{faq.q}</h4>
                <p className="text-[14px] text-zinc-600 font-medium leading-relaxed">{faq.a}</p>
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
              { value: "2,500+", label: "Active Partners" },
              { value: "35%", label: "Max Commission Rate" },
              { value: "$0", label: "To Join the Programme" },
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
            Start earning today — it&apos;s free to join.
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Join 2,500+ accountants, consultants, and advisors earning
            recurring income with the Entrybot Partner Rewards Programme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partner-with-us"
              className="px-12 py-6 bg-zinc-900 text-white rounded-full font-bold text-[18px] hover:bg-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              Become a Partner
            </Link>
            <Link
              href="/contact-support"
              className="px-12 py-6 bg-white text-black border-2 border-black rounded-full font-bold text-[18px] hover:bg-zinc-50 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default PartnerRewardsPage;
