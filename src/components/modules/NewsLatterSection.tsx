import React from "react";

const NewsletterSection = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto bg-black rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"></div>

        <div className="relative z-10">
          <h4 className="text-lg md:text-xl font-medium mb-4">
            Join our community
          </h4>

          <h2 className="text-3xl md:text-5xl font-normal mb-6 text-white">
            Subscribe to our
            <span className="relative inline-block ml-2">
              newsletter
              <span className="absolute -bottom-2 left-0 w-full h-5">
                <svg
                  viewBox="0 0 200 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M2 15C40 5 160 5 198 15"
                    stroke="#FE552B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed mb-10 px-4">
            Join Our Community Of Fitness Enthusiasts And Athletes! By
            Subscribing To Our Newsletter, You&aposll Receive Expert Training
            Tips, Nutrition Guides, Exclusive Discounts, And The Latest News On
            Upcoming Events And Products.
          </p>

          <div className="max-w-2xl mx-auto relative flex items-center p-1 border border-gray-500 rounded-full focus-within:border-white transition-all">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full bg-transparent py-4 px-6 md:px-8 outline-none text-white placeholder-gray-500 text-sm md:text-base"
            />
            <button className="bg-white text-black font-bold text-xs md:text-sm px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-gray-200 transition-colors mr-1">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
