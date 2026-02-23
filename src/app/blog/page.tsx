"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import TakeBackHours from "@/components/TakeBackHours";

const BlogPage = () => {
  const posts = [
    {
      title: "How AI is Transforming Modern Bookkeeping",
      excerpt: "Discover how intelligent OCR and machine learning are reducing manual data entry by up to 90%.",
      category: "Technology",
      author: "Michael Chen",
      date: "Feb 15, 2026",
      readTime: "5 min read",
      image: "/ourstory.png"
    },
    {
      title: "Top 5 Accounting Trends to Watch in 2026",
      excerpt: "From real-time financial reporting to automated compliance, here's what your firm needs to know.",
      category: "Industry",
      author: "Sarah Park",
      date: "Feb 10, 2026",
      readTime: "8 min read",
      image: "/ourstory.png"
    },
    {
      title: "Reducing Burn Rate: A Guide for Early-Stage Startups",
      excerpt: "Learn how to use daily financial insights to stretch your runway and make better hiring decisions.",
      category: "Business",
      author: "Jessica Williams",
      date: "Feb 5, 2026",
      readTime: "6 min read",
      image: "/ourstory.png"
    },
    {
        title: "The Future of Revenue Automation",
        excerpt: "Why traditional month-end closes are becoming a thing of the past in the age of automation.",
        category: "Product",
        author: "David Kumar",
        date: "Jan 28, 2026",
        readTime: "4 min read",
        image: "/ourstory.png"
      }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-white font-nunito relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-[48px] md:text-[64px] font-bold text-black mb-8 leading-tight">
            Blog & News
          </h1>
          <p className="text-[18px] text-zinc-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Stay updated with the latest in AI accounting, financial technology, and 
            expert tips for growing your business.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-4 bg-zinc-50 font-nunito border-t border-zinc-200">
        <div className="max-w-[1900px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden border-2 border-zinc-100 hover:border-black transition-all group flex flex-col md:flex-row">
                <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-zinc-500 text-[13px] font-bold mb-4 uppercase tracking-wider">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                    </div>
                    <h2 className="text-[24px] md:text-[28px] font-bold text-black mb-4 leading-tight group-hover:text-zinc-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[16px] text-zinc-500 font-medium mb-8 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#FFE500] rounded-full flex items-center justify-center font-bold text-[12px]">
                            {post.author[0]}
                        </div>
                        <span className="text-[14px] font-bold text-black">{post.author}</span>
                    </div>
                    <Link href="#" className="flex items-center gap-2 font-bold text-black group/link">
                       Read More <ArrowRight size={18} className="translate-x-0 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="px-12 py-5 bg-black text-white rounded-2xl font-bold text-[18px] hover:bg-zinc-800 transition-all shadow-xl">
                Load More Articles
            </button>
          </div>
        </div>
      </section>

      <TakeBackHours />
    </>
  );
};

export default BlogPage;
