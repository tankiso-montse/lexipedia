'use client';

import { Search } from "lucide-react";
import { useRouter } from 'next/navigation';
import SearchBar from "../components/SearchBar";


export default function SearchPage() {

  const router = useRouter();
  
    return (

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
  