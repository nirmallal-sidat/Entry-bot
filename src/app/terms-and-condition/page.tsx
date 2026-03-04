import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white font-nunito pt-32 pb-24 px-4 overflow-hidden relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-black transition-colors mb-12 group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Back to Home</span>
        </Link>
        
        <div className="relative p-6 md:p-12 bg-zinc-50 border-2 border-black rounded-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-black" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-black" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-black" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-black" />

          <h1 className="text-3xl md:text-5xl font-black text-black mb-8 tracking-tighter uppercase italic">
            Terms & Conditions
          </h1>
          
          <div className="space-y-10 text-black font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold bg-[#FFE500] inline-block px-4 py-1 border-2 border-black mb-6">
                1. Acceptance of Terms
              </h2>
              <p className="pl-2">
                By accessing and using Entrybot, you agree to comply with and be bound by these Terms and Conditions. Our platform is designed to automate accounting tasks and provide daily financial insights. Your use of these services constitutes acceptance of these regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-[#FFE500] inline-block px-4 py-1 border-2 border-black mb-6">
                2. User Responsibilities
              </h2>
              <ul className="space-y-4 pl-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 shrink-0" />
                  <span>You must provide accurate and complete financial information for the automation to function correctly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 shrink-0" />
                  <span>Account security is your responsibility; keep your credentials confidential at all times.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-1 shrink-0" />
                  <span>Entrybot is a tool to assist, but final financial decisions remain with the account owner.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-[#FFE500] inline-block px-4 py-1 border-2 border-black mb-6">
                3. Service Availability
              </h2>
              <p className="pl-2 bg-black text-white p-4 md:p-6 border-l-8 border-[#FFE500]">
                We strive for 99.9% uptime, but we do not guarantee uninterrupted service. Maintenance and updates are performed to amplify the platform's performance and clarity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-[#FFE500] inline-block px-4 py-1 border-2 border-black mb-6">
                4. Intellectual Property
              </h2>
              <p className="pl-2">
                All content, features, and functionality on Entrybot are the exclusive property of Entrybot and its licensors. You may not reproduce or reuse our proprietary algorithms or UI components without explicit permission.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t-2 border-dashed border-zinc-300 flex justify-between items-center text-zinc-500 font-bold text-sm">
            <span>VERSION 1.2 (2026)</span>
            <span>LEGAL DEPARTMENT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
