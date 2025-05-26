'use client';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (<main className="h-screen w-full
                          bg-[url('/bg-landing-page.png')]
                          bg-cover
                          bg-center 
                          bg-no-repeat
                          ">
            <div className="h-full w-full bg-black/50 flex flex-col items-center justify-center">
                
                    <h1 className="text-center font-averia font-bold text-5xl mb-8 sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl lg:mt-6 xl:mt-3 2xl:-mt-8 text-white uppercase">
                      Lexipedia
                    </h1>

                    <h2 className=" text-center font-averia font-bold text-1xl mb-24 sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl text-amber-300">
                      Explore the depths of language
                    </h2>
                

                    <button
                    onClick={() => router.push('/search')}
                      className="
                        w-25 h-10
                        sm:w-35 sm:h-13
                        md:w-36 md:h-12
                        lg:w-52 lg:h-18
                        xl:w-52 xl:h-20
                        2xl:w-64 2xl:h-20

                        lg:mt-20
                        xl:mt-18
                        2xl:mt-12
                        mt-32
                        bg-amber-500  text-white text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-averia
                        rounded-[4rem]
                        hover:scale-105 transition duration-200
                        flex items-center justify-center gap-2
                      ">
                        Discover <ArrowRight size={19} className=" lg:size-8"/>
                      </button>
              
          </div>
    </main>
  );
}