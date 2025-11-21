import React from "react";

const About = () => {
  return (
    <div
      className="
   md:mt-[60vh] 
   marginn
  
  
  py-5 w-full bg-no-repeat bg-cover bg-bottom overflow-x-hidden"
      style={{ backgroundImage: "url('/images/bg.PNG')" }}
    >
      <div className="flex  flex-col md:flex-row text-white px-5 md:px-10 py-10 md:py-0 gap-5 md:gap-10  items-center">
        {/* Image Section */}
        <div className="flex justify-center md:justify-end items-center w-full md:w-3/10">
          <img
            src="/images/exp.PNG"
            alt=""
            className="w-[60vw] sm:w-[50vw] md:w-[20vw] h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex justify-center flex-col gap-3 w-full md:w-7/10">
          <div className="font-bold text-[6vw] sm:text-[4vw] md:text-[2vw]">
            About Our Company
          </div>
          <div className="text-[4vw] sm:text-[2.5vw] md:text-[1.3vw] leading-snug">
            With years of experience and a knack for creative problem-solving,
            our team brings together diverse skills and expertise. We pride
            ourselves on creating visually engaging and technically robust
            digital experiences that not only meet but exceed expectations. From
            the first conversation to final launch and beyond, Apexify
            Technologies is here to support your growth journey with a
            client-centric approach, tailored solutions, and unwavering
            commitment to quality.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
