import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center py-10 px-6 md:px-20"
    >
     
      <div className="w-full flex flex-col lg:flex-row gap-10">
      
        <div className="lg:w-1/2 sm:mt-15 my-5 flex flex-col gap-8">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="text-2xl sm:text-4xl font-bold mb-4">
              Contact Information
            </div>
            <div className="text-gray-700">
              Have questions or ready to start your project? Reach <br /> out to
              our team, and let’s bring your vision to life.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
            <div className="flex flex-col items-center sm:items-start">
              <div className="font-semibold">Phone Number</div>
              <div>+1 (682) 600-4502</div>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="font-semibold">Official Email</div>
              <div>info@apexifytechnologies.com</div>
            </div>
          </div>
        </div>

        
        <div className="lg:w-1/2 px-5 bg-white  rounded-lg">
      
          <div className="flex justify-center items-center">
            <div className="font-bold text-2xl sm:text-4xl  pb-7 md:text-3xl">
              Send us a Message
            </div>
          </div>

          <form
            action="https://formsubmit.co/hmabdullahfarooq781@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full border-b border-gray-400 py-2 text-black placeholder-gray-400 focus:outline-none"
            />
            <div className="flex gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className="w-1/2 border-b border-gray-400 py-2 text-black placeholder-gray-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-1/2 border-b border-gray-400 py-2 text-black placeholder-gray-400 focus:outline-none"
              />
            </div>
            <textarea
              name="message"
              rows="1"
              placeholder="Message"
              required
              className="w-full border-b border-gray-400 py-2 text-black placeholder-gray-400 focus:outline-none resize-none"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-2
        cursor-none bg-purple-700 text-white font-bold rounded-full hover:bg-purple-800 transition-transform transform hover:scale-105"
              >
                SUBMIT
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
