import React, { useState, useRef, useEffect } from "react";
import { faqs } from "../../constants/constants.js"; // path adjust kar
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleFaq = (index) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  useEffect(() => {
    faqRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: i * 0.1, // stagger effect
        }
      );
    });
  }, []);

  return (
    <div className="w-4/5 mx-auto my-10 cursor-none">
      {faqs.map((faq, index) => (
        <div
          key={index}
          ref={(el) => (faqRefs.current[index] = el)}
          className="border-b border-gray-400 py-4"
        >
          <div
            onClick={() => toggleFaq(index)}
            className="flex justify-between items-center cursor-pointer"
          >
            <h3 className="text-black font-semibold text-lg">{faq.q}</h3>
            <span className="text-black text-xl">
              {openIndex === index ? "-" : "+"}
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <p className="text-black">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
