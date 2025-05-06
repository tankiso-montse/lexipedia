'use client';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative h-screen w-full bg-cover bg-center bg-[url('/bg-landing-page.png')] bg-no-repeat">
        <div className="h-screen w-full bg-black/50 flex flex-col items-center justify-center">
          <div className="h-1/2 w-1/2 ">
            <div className="font-averia font-bold text-center ">
                <h1 className="mt-4 mb-6 text-9xl tracking-[0.9rem]  text-white uppercase">
                  Lexipedia
                </h1>

                <h2 className=" text-3xl tracking-[0.3rem] text-amber-300">
                  Explore the depths of language
                </h2>
            </div>
            <div className=" h-1/2 w-full pt-35 flex items-center justify-center " >
                <button
                onClick={() => router.push('/search')}
                  className="
                    w-42 h-16
                    bg-amber-500  text-white text-3xl font-averia
                    rounded-[2rem]
                    hover:scale-105 transition duration-200
                    flex items-center justify-center gap-2
                  "
                >
                  Discover <ArrowRight size={32} />
                </button>
            </div>
          </div>

        </div>
    </main>
  );
}