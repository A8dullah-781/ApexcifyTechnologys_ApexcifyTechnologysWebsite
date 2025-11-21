import React from "react";
import Counter from "./Counter";
import { MdOutlineDoneOutline } from "react-icons/md";
import { faqs } from "../../constants/constants";
import Circle from "./Circle";

const Aboutt = () => {
  return (
    <div id="about">
      <div>
        <div
          className="mt-[10vh] w-full bg-no-repeat bg-cover bg-bottom overflow-x-hidden"
          style={{ backgroundImage: "url('/images/bg.PNG')" }}
        >
          <div className="flex flex-col lg:flex-row text-white">
            <div className="flex lg:justify-end justify-center items-center py-10 lg:w-[45%]">
              <img
                src="/images/since.PNG"
                alt=""
                className="
      w-[80vw] max-w-full h-auto
      lg:w-[40vw] lg:h-auto
      object-contain
      transition-all duration-300
      hover:scale-105
    "
              />
            </div>

            <div className=" lg:pb-0 pb-10  px-10 gap-3 flex flex-col justify-center items-center lg:w-[55%]">
              <div className="text-[3vw] lg:text-[1.3vw] ">
                With years of experience and a knack for creative
                problem-solving, our team brings together diverse skills and
                expertise. We pride ourselves on creating visually engaging and
                technically robust digital experiences that not only meet but
                exceed expectations. From the first conversation to final launch
                and beyond, Apexify Technologies is here to support your growth
                journey with a client-centric approach, tailored solutions, and
                unwavering commitment to quality.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:my-10 my-5 main w-full lg:flex-row flex-col flex">
        <div className=" flex  lg:justify-end justify-center  items-center  px-10  lg:w-1/2 h-full ">
          <div
            className="rounded-4xl my-10 lg:my-0 md:w-[70%] w-[85%] md:h-[500px] h-[300px]  flex flex-col items-center justify-center lg:gap-10 gap-4 bg-no-repeat bg-cover bg-bottom overflow-x-hidden"
            style={{ backgroundImage: "url('/images/bg.PNG')" }}
          >
            <div className="flex justify-center gap-0 items-center flex-col">
              <div className="lg:text-[5vw] text-[9vw]  font-bold text-white">
                <Counter target={500} />+
              </div>
              <div className="lg:text-[1.5vw] text-[3vw] font-semibold  text-white">
                Projects Delivered with <br /> Expertise and Excellence.
              </div>
            </div>
            <div className="flex justify-center gap-0 items-center flex-col">
              <div className="lg:text-[5vw] text-[9vw]   font-bold text-white">
                <Counter target={30} />+
              </div>
              <div className="lg:text-[1.5vw] text-[3vw]  font-semibold  text-white">
                Awards Recognizing Our <br /> Commitment to Excellence.
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 h-full lg:-ml-22 justify-center items-center lg:items-start flex gap-6 flex-col  lg:pl-30 ">
          <div className="lg:text-[3vw] text-[6vw]  font-semibold ">
            Leading the way in <br /> innovative solutions
          </div>
          <div>
            <div className="flex justify-start  gap-2 items-center text-[3vw] lg:text-[1.5vw] ">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>Dedicated Project Managers</div>
            </div>
            <div className="flex justify-start  gap-2 items-center text-[3vw] lg:text-[1.5vw] ">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>100% Satisfaction Guarantee</div>
            </div>
            <div className="flex justify-start  gap-2 items-center text-[3vw] lg:text-[1.5vw] ">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>Bringing your vision to life</div>
            </div>
          </div>
          <div className="flex gap-5 lg:gap-0">
            <div className="flex flex-col px-5 lg:px-0 items-center justify-center">
              <Circle target={58} />
              <div className="text-[3vw] lg:text-[1.5vw]  font-semibold ">
                Company Growth
              </div>
            </div>
            <div className="flex flex-col px-5 lg:px-0items-center justify-center">
              <Circle target={92} />
              <div className="text-[3vw] lg:text-[1.5vw] font-semibold">
                Satisfied Clients
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Aboutt;
