import React, { useEffect, useRef } from "react";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineAppShortcut } from "react-icons/md";
import { MdOutlineDraw } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 }, 
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current, 
          start: "top 80%", 
          toggleActions: "play none none none", 
        },
      }
    );
  }, []);

  return (
    <div id="services">
      <div
        ref={textRef}
        className="flex   flex-col justify-center items-center"
      >
        <div className=" flex justify-center items-center pt-10 md:pt-25 pb-5 flex-col leading-none">
          <div className="font-bold text-[7vw] md:text-[4.5vw] uppercase ">
            We offer a wide range
          </div>
          <div className="font-bold text-[7vw] md:text-[4.5vw] uppercase ">
            of Services
          </div>
        </div>
        <div className="font-medium text-center  md:px-0 px-10 text-[4vw  md:text-[2vw]">
          {" "}
          Our team is here to offer peace of mind, so you can focus on growing
          your business.
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-5 justify-center px-5 py-10">
          <div className="lg:w-1/4 md:w-[45%] w-full h-[320px] md:h-[350px] flex flex-col items-center rounded-3xl border-3 border-purple-500 p-4 transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(102,0,153,0.5)]">
            <div className="py-3 ">
              <CgWebsite className="text-[15vw] sm:text-[8vw] lg:text-[4vw]  " />
            </div>
            <div className="pb-3 text-[6vw] lg:text-[2vw] sm:text-[3vw] font-bold">
              Website Design <br /> & Development
            </div>
            <p className="px-6">
              Lorem ipsum, dolor sit amet consectetur adipis icing elit.
              Reprehen derit, necessit atibus ipsum, officia ad porro
            </p>
          </div>
          <div className="lg:w-1/4 md:w-[45%] w-full h-[320px] md:h-[350px] flex flex-col items-center rounded-3xl border-3 border-purple-500 p-4 transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(102,0,153,0.5)]">
            <div className="py-3  ">
              <MdOutlineAppShortcut className="text-[15vw] sm:text-[8vw] lg:text-[4vw] " />
            </div>
            <div className="pb-3 text-[6vw] lg:text-[2vw] sm:text-[3vw] font-bold">
              Application Design <br /> & Development
            </div>
            <p className="px-6">
              Lorem ipsum, dolor sit amet consectetur adipis icing elit. Reprehe
              nderit, necessita tibus ipsum, officia ad porro
            </p>
          </div>
          <div className="lg:w-1/4 md:w-[45%] w-full h-[320px] md:h-[350px] flex flex-col items-center rounded-3xl border-3 border-purple-500 p-4 transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(102,0,153,0.5)]">
            <div className="py-3 ">
              <MdOutlineDraw className="text-[15vw] sm:text-[8vw] lg:text-[4vw] " />
            </div>
            <div className="pb-3 text-[6vw] lg:text-[2vw] sm:text-[3vw] font-bold">
              Graphic Design <br /> & Logo Design
            </div>
            <p className="px-6">
              Lorem ipsum, dolor sit amet consectetur adipis icing elit. Repre
              henderit, necessi tatibus ipsum, officia ad porro
            </p>
          </div>
          <div className="lg:w-1/4 md:w-[45%] w-full h-[320px] md:h-[350px] flex flex-col items-center rounded-3xl border-3 border-purple-500 p-4 transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(102,0,153,0.5)]">
            <div className="py-3 ">
              <MdSupportAgent className="text-[15vw] sm:text-[8vw] lg:text-[4vw] " />
            </div>
            <div className="pb-3 text-[6vw] lg:text-[2vw] sm:text-[3vw] font-bold">
              Maintainance <br /> & Support
            </div>
            <p className="px-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehe
              nderit, necessi tatibus ipsum, officia ad porro
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center py-5 flex-col leading-none">
        <div className="font-bold text-[4vw] md:px-0 px-10 text-center  md:text-[2vw] uppercase ">
          Bringing your project to life, every step of the way.
        </div>
      </div>
    </div>
  );
};

export default Services;
