'use client';

import { Search } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function SearchPage() {

  const router = useRouter();
  
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
                className="flex-grow bg-transparent outline-none text-[rgba(244,244,244,0.88)] placeholder-[rgba(187,187,187,0.88)] "
              />

              {/* Curved Search Button */}
            <button onClick={() => router.push('/word')}  className="w-[100px] bg-[#804a04] text-white px-4 py-2 rounded-full hover:bg-[#d3740e] transition">
                Search
              </button>
          </div>
        
        </div>

        <div className="absolute top-[400px] z-30">
          <p className="font-averia text-[#b69e58] text-6xl">Type a word to lookup</p>
          <p className="mt-5 ml-15 font-averia text-[#a59051] text-3xl">Lexipedia will reveal its meaning</p>
        </div>
      </div>
      


  );

  }
  