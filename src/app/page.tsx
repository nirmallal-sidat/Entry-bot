import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import TimeBackSection from "@/components/TimeBackSection";
import WhatItDoes from "@/components/WhatItDoes";
import ScaleFasterSection from "@/components/ScaleFasterSection";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import TakeBackHours from "@/components/TakeBackHours";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <TimeBackSection />
      <WhatItDoes />
      <ScaleFasterSection />
      <PartnersSection />
      <FAQSection />
      <TakeBackHours />
    </>
  );
}
