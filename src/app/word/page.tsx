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
        <div className="flex items-center justify-center z-50 h-2/6">
          <SearchBar />
        </div>
        <div className="bg-cyan-400"></div>
    </div>
  );
}
