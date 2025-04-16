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
    <div className="flex items-center rounded-full px-4 py-2 w-1/4 shadow-lg bg-searchBar border border-amber-200">
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
        className="hidden xl:block ml-2 bg-amber-700/70 text-white cursor-pointer px-4 py-1 rounded-full hover:bg-amber-600/80 transition-colors duration-300 border border-white/40"
      >
        Search
      </button>
    </div>
  );
}
