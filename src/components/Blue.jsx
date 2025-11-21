import React from "react";
import { MdOutlineDoneOutline } from "react-icons/md";

const Blue = () => {
  return (
    <div
      className=" w-full py-10 flex  items-center justify-center gap-10 bg-no-repeat bg-cover bg-bottom overflow-x-hidden"
      style={{ backgroundImage: "url('/images/bg.PNG')" }}
    >
      <div className="flex flex-col justify-center items-center gap-10 md:gap-0 md:flex-row  text-white">
        <div className="flex px-8 font-bold text-[6vw] md:text-[2vw] items-center ">
          Grow business <br /> with creativity.
        </div>
        <div className="flex px-8 justify-center items-center gap-3">
          <div
            className="logo rounded-full flex justify-center items-center
                h-[10vw] w-[10vw] md:h-[5vw] md:w-[5vw] lg:h-[4vw] lg:w-[4vw]
                border border-white bg-blue-900 text-[6vw] md:text-[3vw] lg:text-[2vw]"
          >
            <MdOutlineDoneOutline />
          </div>

          <div className="flex flex-col justify-center items-start gap-2">
            <div className="title font-semibold text-[4vw] md:text-[2vw]">
              Professional Agency
            </div>

            <div className="kya font-medium text-[3vw] md:text-[1.2vw]">
              Your trusted partner for innovative, <br /> high impact digital
              solutions.
            </div>
          </div>
        </div>
        <div className="flex px-8 justify-center items-start gap-3">
          <div
            className="logo rounded-full flex justify-center items-center
                h-[10vw] w-[10vw] md:h-[5vw] md:w-[5vw] lg:h-[4vw] lg:w-[4vw]
                border border-white bg-blue-900 text-[6vw] md:text-[3vw] lg:text-[2vw]"
          >
            <MdOutlineDoneOutline />
          </div>

          <div className="flex flex-col justify-center items-start gap-2">
            <div className="title font-semibold text-[4vw] md:text-[2vw]">
              Solutions Provider
            </div>

            <div className="kya font-medium text-[3vw] md:text-[1.2vw]">
              Your trusted partner for innovative, <br /> high impact digital
              solutions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blue;
