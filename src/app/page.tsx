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
            <div className="h-full w-full bg-black/50 flex flex-col items-center justify-center border border-solid border-red-500">
                {/* <div className="font-averia font-bold text-center"> */}
                    <h1 className="text-center text-5xl mb-8 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white uppercase">
                      Lexipedia
                    </h1>

                    <h2 className=" text-center text-1xl mb-24 sm:text-1xl md:text-2xl lg:text-2xl xl:text-4xl text-amber-300">
                      Explore the depths of language
                    </h2>
                {/* </div> */}
              {/* <div className=" w-full flex items-center justify-center " > */}
                  <button
                  onClick={() => router.push('/search')}
                    className="
                      w-25 h-10
                      sm:w-35 sm:h-13
                      md:w-36 md:h-12
                      lg:w-48 lg:h-20
                      xl:w-64 xl:h-24
                      mt-32
                      bg-amber-500  text-white text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-averia
                      rounded-[4rem]
                      hover:scale-105 transition duration-200
                      flex items-center justify-center gap-2
                    "
                  >
                    Discover <ArrowRight size={19} className=" lg:size-8"/>
                  </button>
              {/* </div> */}
          </div>
    </main>
  );
}