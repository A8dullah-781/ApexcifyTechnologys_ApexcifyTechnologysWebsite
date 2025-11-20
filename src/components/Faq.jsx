import React, { useState } from "react";
import { faqs } from "../../constants/constants.js"; // path adjust kar

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // close if already open
    } else {
      setOpenIndex(index); // open clicked
    }
  };

  return (
    <div className="w-4/5  
        cursor-none mx-auto my-10">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-400 py-4"
        >
          <div
            onClick={() => toggleFaq(index)}
            className="flex justify-between items-center"
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
