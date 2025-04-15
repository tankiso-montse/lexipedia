"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      router.push(`/search?word=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="flex items-center rounded-full px-4 py-2 w-[500px] shadow-lg z-10 bg-searchBar">
        <Search size={20} className="text-white/40" />
   
      <input
        type="text"
        placeholder="Search for a word"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow outline-none text-white/80 placeholder-white/40 ml-3 text-xl"
      />
      <button
        onClick={handleSearch}
        className="w-[100px] ml-2 bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-[#d3740e] transition"
      >
        Search
      </button>
    </div>
  );
}
