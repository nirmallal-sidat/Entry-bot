"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for freelancers and side projects.",
      features: [
        "Up to 50 transactions/mo",
        "Basic bank integrations",
        "Real-time dashboard",
        "Community support"
      ],
      buttonText: "Start for Free",
      bgColor: "bg-[#D4F4DD]",
      highlight: false
    },
    {
      name: "Professional",
      price: "$49",
      description: "The complete solution for growing businesses.",
      features: [
        "Unlimited transactions",
        "Priority bank integrations",
        "Automatic categorization",
        "Email & Chat support",
        "SOC2 Security compliance"
      ],
      buttonText: "Start 14-day Trial",
      bgColor: "bg-white",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced controls for complex operations.",
      features: [
        "Multi-entity management",
        "API Access (Full suite)",
        "Dedicated Account Manager",
        "Custom implementation",
        "On-premise deployment options"
      ],
      buttonText: "Contact Sales",
      bgColor: "bg-[#FFE5D9]",
      highlight: false
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Choose the plan that fits your business stage. No hidden fees, 
            no long-term contracts. Scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`
                  ${plan.bgColor} p-10 rounded-3xl border-2 border-black transition-all
                  ${plan.highlight ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] scale-105 z-10' : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}
                `}
              >
                <div className="mb-8">
                  <h3 className="text-[24px] font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-[15px] text-zinc-600 font-medium mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[48px] font-bold text-black">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-[18px] text-zinc-600 font-bold">/mo</span>}
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-[16px] text-black font-medium">
                      <div className="shrink-0 mt-1">
                        <Check size={18} className="text-black" strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="#" 
                  className={`
                    flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold transition-all group
                    ${plan.highlight ? 'bg-zinc-900 text-white hover:bg-black' : 'bg-white border-2 border-black text-black hover:bg-zinc-50'}
                  `}
                >
                  {plan.buttonText}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ or Comparison Section (Compact) */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8 text-left">
              <div>
                <h4 className="text-[20px] font-bold text-black mb-2">Can I change plans later?</h4>
                <p className="text-[16px] text-black font-medium">Yes, you can upgrade or downgrade your plan at any time directly from your dashboard settings.</p>
              </div>
              <div>
                <h4 className="text-[20px] font-bold text-black mb-2">What happens after my trial?</h4>
                <p className="text-[16px] text-black font-medium">After your 14-day Professional trial, you can either upgrade or you'll be automatically moved to our Starter plan.</p>
              </div>
              <div>
                <h4 className="text-[20px] font-bold text-black mb-2">Is my data secure?</h4>
                <p className="text-[16px] text-black font-medium">Absolutely. We use bank-grade encryption and are SOC2 compliant to ensure your financial data is always protected.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default PricingPage;
