'use client';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="h-full w-full">
      <div className="h-screen w-full relative">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/bg-landing-page.png')] bg-cover bg-center bg-no-repeat"></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="w-[547px] h-[52px] font-averia text-[96px] font-bold leading-[1.2] tracking-[0.1em] text-center text-[#F5F5F5] uppercase mt-[-290px]">
            Lexipedia
          </h1>

          <h2 className="w-[547px] h-[52px] font-averia text-[26px] font-bold leading-[52px] tracking-[0px] text-center text-[#fed018e6] mt-12">
            Explore the depths of language
          </h2>

          <button
          onClick={() => router.push('/search')}
            className="
              w-[200px] h-[70px] mt-12
              bg-[#d3740e]  text-white  leading-[1.2] text-3xl font-averia
              rounded-[2rem]
              hover:scale-105 transition duration-200
              flex items-center justify-center gap-2
            "
          >
            Discover <ArrowRight size={32} />
          </button>

        </div>
      </div>
    </main>
  );
}
