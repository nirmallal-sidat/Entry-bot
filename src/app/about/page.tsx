"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const AboutPage = () => {
  const values = [
    {
      title: "Simplicity",
      description: "We believe accounting should be simple, not complicated. Our platform removes the complexity so you can focus on what matters.",
      bgColor: "bg-[#D4F4DD]"
    },
    {
      title: "Accuracy",
      description: "100% financial accuracy isn't optional—it's essential. Our AI ensures every transaction is categorized correctly.",
      bgColor: "bg-[#D9F7FF]"
    },
    {
      title: "Transparency",
      description: "Real-time visibility into your finances. No waiting weeks for reports. Know where you stand, right now.",
      bgColor: "bg-[#FFE5D9]"
    }
  ];

  const team = [
    { name: "Sarah Park", role: "CEO & Co-founder", image: "/team1.jpg" },
    { name: "Michael Chen", role: "CTO & Co-founder", image: "/team2.jpg" },
    { name: "Jessica Williams", role: "Head of Product", image: "/team3.jpg" },
    { name: "David Kumar", role: "Head of Engineering", image: "/team4.jpg" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="mt-20 bg-[#F4F4F4] font-nunito">
        <div className="py-20 md:py-24 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-[36px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            About Entrybot
          </h1>
          <p className="text-[16px] md:text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            We're on a mission to make accounting simple, accurate, and real-time for modern businesses. 
            Founded in 2020, Entrybot has helped thousands of companies automate their bookkeeping and gain 
            instant financial clarity.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Our Story
              </h2>
              <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium">
                <p>
                  Entrybot was born from frustration. Our founders spent countless hours each month reconciling 
                  transactions, categorizing expenses, and waiting for month-end reports that were already outdated.
                </p>
                <p>
                  We knew there had to be a better way. So we built it. Using advanced AI and seamless integrations 
                  with the tools businesses already use, Entrybot automates the busywork and delivers real-time 
                  financial insights.
                </p>
                <p>
                  Today, over 7,000 companies and accounting firms trust Entrybot to keep their books accurate, 
                  up-to-date, and ready for anything—from tax season to fundraising rounds.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] bg-zinc-100 rounded-3xl overflow-hidden">
              <Image 
                src="/ourstory.png" 
                alt="Our Story" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="pb-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-16 text-center leading-tight">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`${value.bgColor} p-10 rounded-3xl`}>
                <h3 className="text-[24px] font-bold text-black mb-4 font-roboto">
                  {value.title}
                </h3>
                <p className="text-[16px] text-black leading-relaxed font-normal font-roboto">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="pb-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-16 text-center leading-tight">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-full aspect-square bg-zinc-100 rounded-2xl overflow-hidden mb-6">
                  <Image 
                    src="/meetourteam.png" 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[20px] font-bold text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-[15px] text-zinc-600 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default AboutPage;
