'use client';

import { Search } from "lucide-react";
import { useRouter } from 'next/navigation';
import SearchBar from "../components/SearchBar";


export default function SearchPage() {

  const router = useRouter();
  
    return (

      <div className="bg-secondary h-full">
        <div className=" flex items-center justify-center z-10 h-1/6 ">
          


        <div className="flex items-center rounded-full bg-[rgba(255,255,255,0.22)]  px-4 py-2 w-[500px] shadow-lg border-2 ">

       
         <div className="text-[rgba(244,244,244,0.88)] mr-2">
           <Search size={20} />
         </div>

      
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
        <div className="h-5/5 flex gap-4 absolute w-5/6 right-0 text-textColor ">
          <div className="h-6/8 w-0.5 bg-[#938048] ml-40"></div>
          <div className="flex pt-45 pl-20 flex-col gap-5">
          <span className="text-7xl">Type a word to lookup</span>
          <span className="text-4xl pl-23 pt-0">Lexipedia will reveal its meaning</span>
          </div>
        </div>

      </div>
      


  );

  }
  