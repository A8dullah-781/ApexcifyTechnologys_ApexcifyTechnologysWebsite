import React from "react";
import { useState, useEffect, useRef } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import Navbar from "./Navbar";

const Home = () => {

 useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const gsapModule = await import("gsap");
        const { gsap } = gsapModule;

        const scrollModule = await import("gsap/ScrollTrigger");
        const { ScrollTrigger } = scrollModule;
        gsap.registerPlugin(ScrollTrigger);

        if (textRef.current) {
          gsap.fromTo(
            textRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
          );
        }
      })();
    }
  }, []);

  const target = 276;
  const [count, setCount] = useState(0);
  const textRef = useRef();

  useEffect(() => {
    let current = 0;

    const increment = Math.ceil(276 / 100);
    const interval = setInterval(() => {
      current += increment;
      if (current >= 276) {
        current = 276;
        clearInterval(interval);
      }
      setCount(current);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="w-full h-[60vh] lg:h-screen pt-[10vh]  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bg.PNG')",
        borderBottomLeftRadius: "30% 10%",
        borderBottomRightRadius: "30% 10%",
      }}
    >
      <Navbar />
      <div className="flex text-white pt-5 justify-center items-start">
        <div className="  flex lg:mt-15 mt-10 flex-col w-[90vw] lg:w-[80vw]">
          <div className=" gap-4  justify-center items-center flex flex-col h-full ">
            <div
              ref={textRef}
              className=" flex textt justify-center text-center items-center flex-col"
            >
              <div className="font-semibold md:leading-none text-[5vw] lg:text-[4.5vw] uppercase">
                We create digital experiences{" "}
              </div>
              <div className="font-semibold  leading-none  text-[6vw] lg:text-[5vw] uppercase">
                {" "}
                that inspire growth.
              </div>
              <div className="font-normal w-[90%] text-center pt-4 lg:pt-7 text-[3vw] lg:text-[1.5vw]">
                Empowering businesses with creative, reliable, and innovative
                digital solutions that drive growth and lasting impact.
              </div>
              <button
                className="
        px-8 py-3 
        lg:text-[1.3vw]
        text-[3vw]
        lg:mt-7
        mt-4
        text-white 
        cursor-none
        bg-blue-500 
        rounded-2xl 
        transition 
        duration-200 
        hover:shadow-[0_0_6px_#fff] 
        hover:border-[#fff] 
      "
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center m-5 sm:m-10">
            <div className="relative w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] aspect-[7/6] lg:h-[50vh] rounded-4xl bg-blue-500 flex justify-center items-center">
              <div className="absolute inset-1 rounded-4xl bg-blue-600 flex justify-center items-center">
                <div className="absolute inset-1 rounded-4xl bg-blue-700 flex justify-center items-center">
                  <div className="absolute inset-1 rounded-4xl overflow-hidden bg-blue-800 flex justify-center items-center">
                    <img
                      className="w-full h-full object-cover object-top"
                      src="/images/ofc.webp"
                      alt="Office"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex marquee invert moveX mt-5 mb-20  md:mt-0 gap-4">
        {[...Array(16)].map((_, i) => (
          <img
            key={i}
            src={`/images/${
              i % 4 === 0
                ? "dribble"
                : i % 4 === 1
                ? "envato"
                : i % 4 === 2
                ? "insta"
                : "jquery"
            }.png`}
            alt=""
            className="
        w-[30vw] sm:w-[20vw] md:w-[15vw] 
        h-auto 
        object-contain
        flex-shrink-0
      "
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
