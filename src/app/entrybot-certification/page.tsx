"use client";

import Link from "next/link";
import {
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  BadgeCheck,
  Star,
  Clock,
  BookOpen,
  Trophy,
  Users2,
  Zap,
  Globe,
  ShieldCheck,
  Play,
  Plus,
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const courses = [
  {
    level: "Beginner",
    badge: "bg-[#D4F4DD] text-black border-black",
    dot: "bg-emerald-500",
    title: "Entrybot Foundations",
    desc: "Master the basics — set up your account, connect bank feeds, and run your first automated reconciliation. Perfect for new users.",
    duration: "4 hours",
    modules: 6,
    topics: [
      "Account setup & onboarding",
      "Connecting bank accounts",
      "Your first automated reconciliation",
      "Understanding the dashboard",
      "Basic report generation",
      "Client access & permissions",
    ],
    outcome: "Entrybot Foundations Certificate",
    featured: false,
  },
  {
    level: "Intermediate",
    badge: "bg-zinc-900 text-yellow-400 border-zinc-700",
    dot: "bg-yellow-400",
    title: "Entrybot Professional",
    desc: "Go deeper — multi-entity management, advanced automation rules, integrations, and white-labelled reporting for your clients.",
    duration: "8 hours",
    modules: 10,
    topics: [
      "Multi-entity & multi-currency",
      "Advanced automation rules",
      "Integration setup (Stripe, Shopify)",
      "White-labelled client reports",
      "GST / VAT compliance workflows",
      "Team collaboration & roles",
      "Workflow queue management",
      "Custom chart of accounts",
    ],
    outcome: "Entrybot Professional Certificate",
    featured: true,
  },
  {
    level: "Expert",
    badge: "bg-black text-white border-black",
    dot: "bg-black",
    title: "Entrybot Expert & Advisor",
    desc: "The highest level. Learn to build custom integrations via API, advise clients on financial strategy, and become a recognised Entrybot Expert.",
    duration: "12 hours",
    modules: 14,
    topics: [
      "Full API & webhook mastery",
      "Building custom integrations",
      "Strategic financial advisory",
      "Practice scaling with Entrybot",
      "Advanced tax compliance",
      "Client migration strategies",
      "Audit trail & compliance deep dive",
      "Partner directory optimisation",
    ],
    outcome: "Entrybot Expert Certificate + Partner Badge",
    featured: false,
  },
];

const benefits = [
  {
    icon: <Globe size={28} className="text-black" />,
    title: "Partner Directory Listing",
    desc: "Certified professionals are listed in the Entrybot public Partner Directory, sending you inbound clients automatically.",
    bg: "bg-[#D4F4DD]",
  },
  {
    icon: <BadgeCheck size={28} className="text-black" />,
    title: "Official Certification Badge",
    desc: "Display your Entrybot certification on your website, LinkedIn, and email signature to stand out from competitors.",
    bg: "bg-[#D9F7FF]",
  },
  {
    icon: <Trophy size={28} className="text-black" />,
    title: "Expert Status Recognition",
    desc: "Entrybot Experts are featured in our newsletter, social channels, and introduced to our network of 50,000+ businesses.",
    bg: "bg-[#FFE5D9]",
  },
  {
    icon: <Zap size={28} className="text-black" />,
    title: "Early Feature Access",
    desc: "Certified advisors get exclusive early access to new Entrybot features before they launch publicly.",
    bg: "bg-[#F0E6FF]",
  },
  {
    icon: <Users2 size={28} className="text-black" />,
    title: "Expert Community",
    desc: "Join a private community of 2,500+ certified accountants, advisors, and firm owners sharing best practices.",
    bg: "bg-[#FFF3D9]",
  },
  {
    icon: <ShieldCheck size={28} className="text-black" />,
    title: "Higher Commission Rate",
    desc: "Certified partners automatically unlock higher referral commission rates in the Entrybot Partner Rewards Programme.",
    bg: "bg-[#D4F4DD]",
  },
];

const EntryBotCertificationPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <GraduationCap size={16} /> Official Entrybot Training Programme
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Become a Certified Entrybot Professional
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Learn from the experts, earn your certification, and unlock
            exclusive benefits — from directory listings to higher commissions.
            Free for all Entrybot users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="#courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-[16px] hover:bg-black transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              Explore Courses
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/partner-rewards"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-full font-bold text-[16px] hover:bg-zinc-50 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              View Partner Rewards
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-zinc-900 font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { val: "3", label: "Certification Levels" },
              { val: "30 hrs", label: "Total Course Content" },
              { val: "$0", label: "Cost for Entrybot Users" },
              { val: "2,500+", label: "Certified Professionals" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-[32px] md:text-[40px] font-bold">{s.val}</div>
                <div className="text-zinc-400 text-[13px] font-bold uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            Choose Your Certification Path
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Start at Foundations and progress to Expert. Each level unlocks
            bigger benefits and more recognition.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <div
                key={i}
                className={`border-2 border-black rounded-3xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                  ${course.featured ? "bg-zinc-900 lg:-translate-y-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" : "bg-white"}`}
              >
                {course.featured && (
                  <div className="bg-yellow-400 border-b-2 border-black text-black text-center py-2 text-[13px] font-black uppercase tracking-wider">
                    ★ Most Popular
                  </div>
                )}
                <div className="p-8">
                  {/* Level Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 border-2 rounded-full text-[12px] font-black mb-6 ${course.badge}`}>
                    <span className={`w-2 h-2 rounded-full ${course.dot}`} />
                    {course.level}
                  </div>

                  <h3 className={`text-[24px] font-bold mb-3 ${course.featured ? "text-white" : "text-black"}`}>
                    {course.title}
                  </h3>
                  <p className={`text-[14px] font-medium leading-relaxed mb-6 ${course.featured ? "text-zinc-400" : "text-zinc-600"}`}>
                    {course.desc}
                  </p>

                  {/* Meta */}
                  <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className={course.featured ? "text-zinc-400" : "text-zinc-500"} />
                      <span className={`text-[13px] font-bold ${course.featured ? "text-zinc-400" : "text-zinc-500"}`}>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={14} className={course.featured ? "text-zinc-400" : "text-zinc-500"} />
                      <span className={`text-[13px] font-bold ${course.featured ? "text-zinc-400" : "text-zinc-500"}`}>{course.modules} modules</span>
                    </div>
                  </div>

                  {/* Topics */}
                  <ul className="space-y-2 mb-8">
                    {course.topics.map((topic, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className={`mt-0.5 shrink-0 ${course.featured ? "text-yellow-400" : "text-zinc-700"}`}
                        />
                        <span className={`text-[13px] font-medium ${course.featured ? "text-zinc-300" : "text-black"}`}>
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Outcome */}
                  <div className={`flex items-center gap-2 p-4 rounded-xl mb-8 border ${course.featured ? "bg-zinc-800 border-zinc-700" : "bg-zinc-50 border-zinc-200"}`}>
                    <BadgeCheck size={16} className={course.featured ? "text-yellow-400 shrink-0" : "text-black shrink-0"} />
                    <span className={`text-[12px] font-bold ${course.featured ? "text-yellow-400" : "text-black"}`}>
                      {course.outcome}
                    </span>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/pricing"
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full font-bold text-[15px] transition-all group border-2
                      ${course.featured
                        ? "bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-300"
                        : "bg-zinc-900 text-white border-black hover:bg-zinc-800"
                      }`}
                  >
                    <Play size={16} />
                    Start Course — Free
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            What Certification Unlocks
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            Getting certified isn&apos;t just about the credential — it comes
            with a full suite of privileges that grow your practice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`${b.bg} p-10 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div className="mb-5">{b.icon}</div>
                <h3 className="text-[20px] font-bold text-black mb-3">{b.title}</h3>
                <p className="text-[15px] text-black leading-relaxed font-medium">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-4 text-center leading-tight">
            How It Works
          </h2>
          <p className="text-center text-[16px] text-black font-medium mb-16 max-w-2xl mx-auto">
            From enrolment to certification in four simple steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: "01",
                title: "Enrol for Free",
                desc: "Any Entrybot user can enrol in the certification programme at no cost. Just log in and access the training portal from your dashboard.",
              },
              {
                step: "02",
                title: "Complete the Modules",
                desc: "Work through video lessons, interactive exercises, and real-world case studies at your own pace — on any device.",
              },
              {
                step: "03",
                title: "Pass the Assessment",
                desc: "Each certification ends with a practical assessment. Pass with 80%+ to earn your certificate. Unlimited retakes if needed.",
              },
              {
                step: "04",
                title: "Get Certified & Earn Perks",
                desc: "Receive your digital certificate and badge instantly. Your Partner Directory listing, commission upgrade, and community access activate automatically.",
              },
            ].map((step, i) => (
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

      {/* Testimonials */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-12 text-center leading-tight">
            What Certified Professionals Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The Professional certification took me 8 hours over two evenings. Within a week I had two inbound clients from the Partner Directory. Best ROI on my time ever.",
                name: "Priya Nair, CPA",
                role: "Entrybot Professional · Nair & Associates",
                initial: "P",
              },
              {
                quote: "Getting my Expert badge tripled trust with new clients. They see 'Entrybot Certified Expert' on my LinkedIn and that conversation is already half won.",
                name: "Vikram Nayak",
                role: "Entrybot Expert · Nayak Advisory",
                initial: "V",
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
              { value: "2,500+", label: "Certified Professionals" },
              { value: "30 hrs", label: "Total Course Content" },
              { value: "$0", label: "Cost for Entrybot Users" },
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
            Start your certification journey today.
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Free for all Entrybot users. Earn your badge, grow your practice,
            and join 2,500+ certified professionals worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="px-12 py-6 bg-zinc-900 text-white rounded-full font-bold text-[18px] hover:bg-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              Get Started Free
            </Link>
            <Link
              href="/partner-rewards"
              className="px-12 py-6 bg-white text-black border-2 border-black rounded-full font-bold text-[18px] hover:bg-zinc-50 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              View Partner Rewards
            </Link>
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default EntryBotCertificationPage;
