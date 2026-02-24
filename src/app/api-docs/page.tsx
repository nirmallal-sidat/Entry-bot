"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Zap,
  Globe,
  Plus
} from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const APIPage = () => {
  const steps = [
    {
      title: "Get your API Key",
      description: "Sign up for a developer account and generate your production keys in seconds.",
      icon: <Zap size={32} className="text-black" />,
      bgColor: "bg-[#D4F4DD]"
    },
    {
      title: "Configure Webhooks",
      description: "Setup endpoints to receive real-time notifications for every transaction event.",
      icon: <Terminal size={32} className="text-black" />,
      bgColor: "bg-[#D9F7FF]"
    },
    {
      title: "Go Live",
      description: "Use our robust SDKs and comprehensive documentation to ship your integration.",
      icon: <Globe size={32} className="text-black" />,
      bgColor: "bg-[#FFE5D9]"
    }
  ];

  const codeSnippet = `
// Example: Fetch latest transactions
const entrybot = require('@entrybot/sdk');
const client = new entrybot.Client('YOUR_API_KEY');

async function syncBooks() {
  const transactions = await client.transactions.list({
    limit: 10,
    status: 'pending'
  });
  
  console.log('Syncing ' + transactions.length + ' entries...');
}
  `.trim();

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#F4F4F4] font-nunito">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-black font-bold text-[14px] mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Code2 size={16} /> For Developers, by Developers
          </div>
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            The API for Modern <br className="hidden md:block" /> Accounting Infrastructure
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Build seamless financial experiences. Our REST API gives you full control 
            over transactions, ledger entries, and automated bank reconciliation.
          </p>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
                Developer-First Experience
              </h2>
              <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium">
                <p>
                  We believe accounting should be programmable. Our API is designed 
                  to be intuitive, reliable, and extremely fast. Integrate with any 
                  stack using our official SDKs for Node.js, Python, and Go.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Standard RESTful architecture",
                    "Comprehensive Postman collection",
                    "Real-time webhook notifications",
                    "Predictable JSON error responses"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-zinc-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                  <Link 
                    href="#" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-black transition-all group"
                  >
                    Read Documentation
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-3xl p-8 shadow-2xl border-2 border-black order-1 lg:order-2 overflow-hidden relative group">
                {/* Mac-style window controls */}
                <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-zinc-300 font-mono text-[14px] md:text-[16px] overflow-x-auto leading-relaxed">
                    <code>{codeSnippet}</code>
                </pre>
                <div className="absolute inset-0 bg-linear-to-tr from-zinc-500/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Grid */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-16 text-center leading-tight">
            Start Building in Minutes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className={`${step.bgColor} p-10 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}>
                <div className="mb-6">
                  {step.icon}
                </div>
                <h3 className="text-[24px] font-bold text-black mb-4">
                  {step.title}
                </h3>
                <p className="text-[16px] text-black leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 px-4 bg-zinc-900 text-white font-nunito rounded-[50px] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-[1900px] mx-auto lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">99.99%</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">API Uptime</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">&lt;50ms</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Avg. Latency</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-bold mb-2">1M+</div>
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[14px]">Requests / Day</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/5 to-transparent skew-x-12 translate-x-32" />
      </section>

      {/* Application CTA Section */}
      <section className="py-24 px-4 bg-white font-nunito border-t border-zinc-100 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <Plus size={64} className="text-black" />
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
            Ready to integrate?
          </h2>
          <p className="text-[18px] text-black font-medium mb-12">
            Create your sandbox account today and start building. 
            No credit card required for testing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-6 bg-zinc-900 text-white rounded-full font-bold text-[18px] hover:bg-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                Get API Keys
            </button>
             <button className="px-12 py-6 bg-white text-black border-2 border-black rounded-full font-bold text-[18px] hover:bg-zinc-50 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                Chat with Sales
            </button>
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default APIPage;
