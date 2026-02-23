"use client";

import Image from "next/image";
import Link from "next/link";
import { Briefcase, Heart, Globe, ArrowRight, Zap, Target, Star } from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const CareersPage = () => {
  const benefits = [
    {
      title: "Remote-First",
      description: "Work from anywhere in the world. We believe in results, not clock-watching at a desk.",
      icon: <Globe size={32} className="text-black" />,
      bgColor: "bg-[#D4F4DD]"
    },
    {
      title: "Full Ownership",
      description: "You own your projects from conception to launch. No bureaucracy, just pure innovation.",
      icon: <Target size={32} className="text-black" />,
      bgColor: "bg-[#D9F7FF]"
    },
    {
      title: "Annual Retreats",
      description: "We gather twice a year in exotic locations to bond, strategize, and celebrate our wins.",
      icon: <Star size={32} className="text-black" />,
      bgColor: "bg-[#FFE5D9]"
    }
  ];

  const jobs = [
    { title: "Senior Backend Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Product Designer", team: "Design", location: "Global Remote", type: "Full-time" },
    { title: "Growth Marketing Manager", team: "Marketing", location: "USA/Europe", type: "Full-time" },
    { title: "Customer Success Lead", team: "Operations", location: "Eastern Time", type: "Full-time" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Build the Future of Finance
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            We're looking for ambitious thinkers and builders to join our mission 
            in making accounting autonomous and real-time for every business.
          </p>
        </div>
      </section>

      {/* Workplace Culture Section */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                A Culture of Speed and Excellence
              </h2>
              <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium">
                <p>
                  At Entrybot, we move fast and break ground. We're a team of engineers, 
                  product lovers, and industry experts who obsessed with simplifying 
                  the most complex financial workflows.
                </p>
                <p>
                  We value honesty, radical transparency, and the drive to make an 
                  impact. You'll be joining a high-growth startup environment where 
                  your voice is heard and your work is seen.
                </p>
                <div className="pt-4 flex gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-full text-black font-bold text-[14px]">
                    <Zap size={16} /> Fast-Paced
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-full text-black font-bold text-[14px]">
                    <Heart size={16} /> People-First
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-black">
              <Image 
                src="/meetourteam.png" 
                alt="Entrybot Team" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-16 text-center leading-tight">
            Why You'll Love It Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`${benefit.bgColor} p-10 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}>
                <div className="mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-[24px] font-bold text-black mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[16px] text-black leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20 text-center">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-16 leading-tight">
            Open Positions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl border-2 border-black flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="text-left">
                  <h3 className="text-[20px] font-bold text-black mb-2">{job.title}</h3>
                  <div className="flex gap-4 text-zinc-600 font-bold text-[14px] uppercase tracking-wider">
                    <span>{job.team}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <Link 
                  href="#" 
                  className="flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white rounded-full font-bold hover:bg-black transition-all group"
                >
                  Apply Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p className="text-zinc-600 font-bold italic">
              Don't see a perfect fit? Send us an open application at careers@entrybot.com
            </p>
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default CareersPage;
