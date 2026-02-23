"use client";

import { Twitter, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] border-t my-6 mx-8 border-2 border-zinc-200 font-nunito">
      <div className="max-w-[1900px] mx-auto lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Column 1: Logo & Socials */}
          <div className="py-16 pr-8 border-b lg:border-b-0 lg:border-r border-zinc-200">
            <h2 className="text-2xl font-black text-black mb-8 tracking-tighter">ENTRYBOT</h2>
            <p className="text-black text-[15px] leading-relaxed mb-10 max-w-[280px] font-medium">
              Automated bookkeeping tasks and daily insights that amplify your financial clarity.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-12 h-12 bg-black text-white rounded flex items-center justify-center hover:bg-zinc-800 transition-all hover:scale-110">
                <Twitter size={22} />
              </Link>
              <Link href="#" className="w-12 h-12 bg-black text-white rounded flex items-center justify-center hover:bg-zinc-800 transition-all hover:scale-110">
                <Youtube size={22} />
              </Link>
              <Link href="#" className="w-12 h-12 bg-black text-white rounded flex items-center justify-center hover:bg-zinc-800 transition-all hover:scale-110">
                <Linkedin size={22} />
              </Link>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="py-16 px-8 border-b lg:border-b-0 lg:border-r border-zinc-200">
            <h3 className="text-[14px] font-bold text-black mb-8 tracking-wider">SOLUTIONS</h3>
            
            <div className="mb-8">
              <span className="text-zinc-400 text-[13px] font-medium block mb-4 uppercase tracking-tighter">- Product</span>
              <ul className="space-y-4">
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Integrations</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Revenue automation</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">API</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Embedded accounting</Link></li>
              </ul>
            </div>

            <div>
              <span className="text-zinc-400 text-[13px] font-medium block mb-4 uppercase tracking-tighter">- Business Stage</span>
              <ul className="space-y-4">
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Startups</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Small & medium business</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Accountants & Resources */}
          <div className="py-16 px-8 border-b lg:border-b-0 lg:border-r border-zinc-200">
            <div className="mb-12">
              <h3 className="text-[14px] font-bold text-black mb-6 tracking-wider">FOR ACCOUNTANTS & FIRMS</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Entrybot for accountants</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Entrybot for firms</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[14px] font-bold text-black mb-6 tracking-wider">RESOURCES</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Entrybot vs QuickBooks</Link></li>
                <li><Link href="/blog" className="text-black text-[15px] font-bold hover:underline transition-all">Blog & news</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Customer stories</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Partner rewards</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Time saving calculator</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Entrybot Certification Training</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Support & Company */}
          <div className="py-16 pl-8">
            <div className="mb-12">
              <h3 className="text-[14px] font-bold text-black mb-6 tracking-wider">SUPPORT</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Find an Accountant</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Help center</Link></li>
                <li><Link href="/contact-support" className="text-black text-[15px] font-bold hover:underline transition-all">Contact support</Link></li>
                <li><Link href="/#faq" className="text-black text-[15px] font-bold hover:underline transition-all">FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[14px] font-bold text-black mb-6 tracking-wider">COMPANY</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Pricing</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">About Entrybot</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">How it works</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Partner with Us</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Careers</Link></li>
                <li><Link href="#" className="text-black text-[15px] font-bold hover:underline transition-all">Security</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-[14px] font-bold">Copyright © Entrybot 2026</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-zinc-400 text-[14px] font-bold hover:text-black transition-colors">New privacy policy</Link>
            <Link href="/terms" className="text-zinc-400 text-[14px] font-bold hover:text-black transition-colors">Terms and conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
