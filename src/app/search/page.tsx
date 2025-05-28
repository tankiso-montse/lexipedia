'use client';
import { Search } from "lucide-react";
import { useRouter } from 'next/navigation';
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function SearchPage() {
  const router = useRouter();
  const [queryWord, setQueryWord] = useState<string>("");

  const handleSearch = () => {
    if (queryWord.trim() !== "") {
      router.push(`/word/${queryWord}`)
    }
  }
  
    return (
      <div className="relative min-h-screen flex items-center justify-center text-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/search-bg.jpeg')] bg-[length:100%] bg-center bg-no-repeat z-0" />

        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[rgba(34,17,9,0.88)] z-10" />
        <div className="fixed top-60 left-1/2 transform -translate-x-1/2  z-30">
          <div className="flex items-center rounded-full bg-[rgba(255,255,255,0.22)]  px-4 py-2 w-[500px] shadow-lg border-2 ">

              {/* Search Icon */}
              <div className="text-[rgba(244,244,244,0.88)] mr-2">
                <Search size={20} />
              </div>

              {/* Input Field */}
              <input
                type="text"
                placeholder="Search for a word"
                value={queryWord}
                onChange={(e) => setQueryWord(e.target.value)}
                className="flex-grow bg-transparent outline-none text-[rgba(244,244,244,0.88)] placeholder-[rgba(187,187,187,0.88)] "
              />

              {/* Curved Search Button */}
            <button onClick={handleSearch}  className="w-[100px] bg-[#804a04] text-white px-4 py-2 rounded-full hover:bg-[#d3740e] transition">
                Search
              </button>

      <div className="bg-secondary h-full">
        <div className=" flex items-center justify-center z-10 h-1/6 ">
          <SearchBar></SearchBar>
        </div>
        <div className="h-5/5 flex gap-4 absolute w-5/6 right-0 text-textColor ">
          <div className="h-6/8 w-0.5 bg-amber-200 ml-40"></div>
          {/* bg-[#938048]  colour for text */}
          <div className="flex pt-45 pl-20 flex-col gap-5">
          <span className="text-7xl">Type a word to lookup</span>
          <span className="text-4xl pl-23 pt-0">Lexipedia will reveal its meaning</span>
          </div>
        </div>

      </div>
      


  );

  }
  