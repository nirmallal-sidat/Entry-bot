import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-black font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm rounded-full shrink-0">01</span>
                Information We Collect
              </h2>
              <p className="pl-0 md:pl-11">
                At Entrybot, we collect information that you provide directly to us when you create an account, use our services, or communicate with us. This includes your name, email address, company details, and financial data required for bookkeeping automation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm rounded-full shrink-0">02</span>
                How We Use Your Data
              </h2>
              <p className="pl-0 md:pl-11">
                We use the information we collect to provide, maintain, and improve our services, including to process transactions, send technical notices, and provide customer support. Your financial clarity is our priority, and we use data insights to help you amplify your business growth.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm rounded-full shrink-0">03</span>
                Security Measures
              </h2>
              <p className="border-l-4 border-black ml-0 md:ml-4 py-2 pl-4 md:pl-7 bg-white">
                We implement industry-standard security measures to protect your data. Entrybot uses advanced encryption protocols and secure server infrastructure to ensure your financial information remains confidential and safe from unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm rounded-full shrink-0">04</span>
                Your Rights
              </h2>
              <p className="pl-0 md:pl-11">
                You have the right to access, update, or delete your personal information at any time. If you have questions about our data practices, please contact our support team.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t-2 border-dashed border-zinc-300 flex justify-between items-center text-zinc-500 font-bold text-sm">
            <span>LAST UPDATED: FEBRUARY 2026</span>
            <span>ENTRYBOT COMPLIANCE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
