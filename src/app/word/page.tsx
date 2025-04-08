"use client";

import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(query.trim() !== "");
  }, [query]);

  return (
    <div className="relative min-h-screen text-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/search-bg.jpeg')] bg-cover bg-center bg-no-repeat z-0" />

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-[rgba(34,17,9,0.88)] z-10" />

      {/* Search Bar - Fixed */}
      <div className="fixed top-60 left-1/2 transform -translate-x-1/2 z-30">
        <div
          className={`flex items-center rounded-full px-4 py-2 w-[500px] shadow-lg border-2 ${
            isTyping ? "border-amber-400 animate-pulse" : "border-transparent"
          } bg-[rgba(255,255,255,0.22)] transition`}
        >
          <div className="text-[rgba(244,244,244,0.88)] mr-2">
            <Search size={20} />
          </div>

          <input
            type="text"
            placeholder="Search for a word"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow bg-transparent outline-none text-[rgba(244,244,244,0.88)] placeholder-[rgba(187,187,187,0.88)]"
          />

          <button
            onClick={() => router.push('/word')}
            className="w-[100px] bg-[#804a04] text-white px-4 py-2 rounded-full hover:bg-[#d3740e] transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 pt-100 px-120 flex">
        {/* Column */}
        <div className="mr-10">
          <h2 className="text-8xl text-[#e1c56e] font-averia ">Aa</h2>
        </div>

        {/* Vertical Line */}
        <div className="border-l-3 border-[#938048] h-[500px] mr-10" />


        {/* Mock Word Content (change later) */}
        <div className="text-[#e1c56e] font-averia space-y-2 pt-15">
          <h3 className="text-9xl">aphotic</h3>
          <h4 className="text-4xl">(adj.)</h4>
          <p className="text-2xl pt-4 max-w-xl">
            Completely without light. Example, the deep ocean is an aphotic zone.
          </p>
        </div>
      </div>
    </div>
  );
}
