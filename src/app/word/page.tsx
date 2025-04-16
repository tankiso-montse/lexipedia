"use client";

import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SearchBar from "../components/SearchBar";

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(query.trim() !== "");
  }, [query]);

  return (
    <div className="bg-secondary h-full">
        <div className="flex items-center justify-center z-50 h-1/6">
          <SearchBar />
        </div>
        <div className="h-5/6 flex gap-4 absolute w-5/6 right-0 text-textColor pr-12 pt-4">
          <div>
            <span className="text-7xl">Aa</span>
          </div>
          <div className="h-11/12 w-0.5 bg-[#938048] mb-6"></div>
          <div className="pl-8 pr-20 pt-16 flex flex-col gap-4">
            <span className="text-8xl">architect</span>
            <span className="text-3xl mb-3">(noun)</span>
            <span className="text-xl">A creature that sleeps two hours a week consumes entirely too much caffeine and likes overuse, 
                  words such as juxtaposition.
            </span>


          </div>
        </div>
    </div>
  );
}
