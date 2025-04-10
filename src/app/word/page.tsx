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
    <div className="bg-secondary opacity-40">
      <div className="bg-[url('/search-bg.jpeg')] bg-cover w-full h-screen opacity-20">
      </div>
    </div>
  );
}
