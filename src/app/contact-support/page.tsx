"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MessageSquare, Phone, MapPin, ArrowRight } from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const ContactSupportPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-[#FFE500] font-nunito relative overflow-hidden">
        {/* Abstract Corner Shapes (reusing styles from other sections) */}
        <div className="absolute top-0 left-0 w-[180px] h-[180px] opacity-100 hidden lg:block pointer-events-none">
          <Image src="/Rblack.avif" alt="Shape" fill className="object-contain object-top-left" />
        </div>
        <div className="absolute bottom-0 right-0 w-[180px] h-[180px] opacity-100 hidden lg:block pointer-events-none">
          <Image src="/RBlack2.avif" alt="Shape" fill className="object-contain object-bottom-right" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Contact Support
          </h1>
          <p className="text-[18px] text-black leading-relaxed max-w-2xl mx-auto font-medium">
            Have a question or need technical assistance? Our team of experts is here to help you 
            get the most out of Entrybot.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-4 bg-white font-nunito">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side: Contact Channels */}
            <div className="space-y-12">
              <div>
                <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-6">How can we help?</h2>
                <p className="text-[18px] text-zinc-600 font-medium max-w-lg">
                  Choose the channel that works best for you. We typically respond within 2 hours during business hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 border-2 border-zinc-100 rounded-2xl hover:border-black transition-all group">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-[20px] font-bold text-black mb-2">Email Support</h3>
                  <p className="text-[14px] text-zinc-500 font-medium mb-4">Detailed technical help</p>
                  <Link href="mailto:support@entrybot.com" className="text-black font-bold flex items-center gap-2 hover:underline">
                    support@entrybot.com <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="p-8 border-2 border-zinc-100 rounded-2xl hover:border-black transition-all group">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="text-[20px] font-bold text-black mb-2">Live Chat</h3>
                  <p className="text-[14px] text-zinc-500 font-medium mb-4">Quick questions & fixes</p>
                  <button className="text-black font-bold flex items-center gap-2 hover:underline">
                    Start a conversation <ArrowRight size={16} />
                  </button>
                </div>

                <div className="p-8 border-2 border-zinc-100 rounded-2xl hover:border-black transition-all group">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-[20px] font-bold text-black mb-2">Phone Support</h3>
                  <p className="text-[14px] text-zinc-500 font-medium mb-4">Urgent matters only</p>
                  <Link href="tel:+1800ENTBOT" className="text-black font-bold flex items-center gap-2 hover:underline">
                    +1 (800) ENT-BOT <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="p-8 border-2 border-zinc-100 rounded-2xl hover:border-black transition-all group">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-[20px] font-bold text-black mb-2">Headquarters</h3>
                  <p className="text-[14px] text-zinc-500 font-medium mb-4">San Francisco, CA</p>
                  <p className="text-black font-bold">123 AI Plaza, SF 94103</p>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-zinc-50 p-8 md:p-12 rounded-3xl border-2 border-zinc-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[14px] font-bold text-black uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full h-14 px-4 rounded-xl bg-white border-2 border-zinc-200 focus:border-black focus:outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[14px] font-bold text-black uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full h-14 px-4 rounded-xl bg-white border-2 border-zinc-200 focus:border-black focus:outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-black uppercase tracking-wider">Subject</label>
                  <select className="w-full h-14 px-4 rounded-xl bg-white border-2 border-zinc-200 focus:border-black focus:outline-none transition-all font-medium appearance-none">
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                    <option>Partner Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-black uppercase tracking-wider">How can we help?</label>
                  <textarea 
                    placeholder="Describe your issue in detail..." 
                    className="w-full h-40 p-4 rounded-xl bg-white border-2 border-zinc-200 focus:border-black focus:outline-none transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full h-16 bg-black text-white rounded-xl font-bold text-[18px] hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group shadow-xl"
                >
                  Send Message
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default ContactSupportPage;
