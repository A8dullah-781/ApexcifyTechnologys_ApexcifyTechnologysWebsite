import { useEffect, useState, useRef } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Circle = ({ target = 90, color = "blue" }) => {
  const [percent, setPercent] = useState(0);
  const circleRef = useRef(null);
  const obj = useRef({ val: 0 });

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress = (percent / 100) * circumference;

  useEffect(() => {
    if (!circleRef.current) return;

    gsap.to(obj.current, {
      val: target,
      scrollTrigger: {
        trigger: circleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      duration: 2,
      ease: "power1.out",
      onUpdate: () => setPercent(Math.round(obj.current.val)),
    });
  }, [target]);

  return (
    <div
      ref={circleRef}
      className="
        relative bg-white
        w-[140px] h-[140px]
        sm:w-[160px] sm:h-[160px]
        md:w-[180px] md:h-[180px]
        lg:w-[200px] lg:h-[200px]
        xl:w-[220px] xl:h-[220px]
        rounded-full
      "
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 180 180"
        className="absolute top-0 left-0"
      >
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#919191"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.2s linear" }}
          className="rotate-[-90deg] origin-[50%_50%]"
        />
      </svg>

      <div
        className="
          absolute inset-0 flex justify-center items-center
          text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw]
          font-extrabold
        "
      >
        {percent}%
      </div>
    </div>
  );
};

export default Circle;
