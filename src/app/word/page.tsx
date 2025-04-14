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
    <div className="bg-secondary opacity-40">
      <div className="bg-[url('/search-bg.jpeg')] bg-cover w-full h-screen opacity-20 grid grid-rows-[20%_80%] -z-10">
        <div className="flex items-center justify-center z-50">
          <div className="w-2xl relative bg-white rounded-full px-4 py-2">
            <input type="text" placeholder="Search for word" className="bg-white"/>
          </div>
        </div>
        <div className="bg-cyan-400"></div>

      </div>
    </div>
  );
}
