import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white  text-gray-800 py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div className="flex flex-col">
          <h4 className="text-xl font-medium mb-4">About</h4>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            At MuscleForge, we believe in the power of dedication and hard work.
            Our mission is to provide you with the tools, resources, and
            community you need to build the body of your dreams.
          </p>
          <div className="border-t border-gray-500 pt-3 w-48 flex items-center gap-3">
            <h5 className="font-bold text-sm">Social Media:</h5>
            <ul className="flex gap-4 font-bold text-sm">
              <li className="cursor-pointer hover:text-blue-600 transition">
                Fb
              </li>
              <li className="cursor-pointer hover:text-blue-700 transition">
                In
              </li>
              <li className="cursor-pointer hover:text-blue-400 transition">
                Tw
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-xl font-medium mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="hover:translate-x-1 transition-transform cursor-pointer">
              Home
            </li>
            <li className="hover:translate-x-1 transition-transform cursor-pointer">
              Our gym location
            </li>
            <li className="hover:translate-x-1 transition-transform cursor-pointer">
              Contact Us
            </li>
            <li className="hover:translate-x-1 transition-transform cursor-pointer">
              Privacy policy
            </li>
          </ul>
        </div>

        {/* Our Service Section */}
        <div>
          <h4 className="text-xl font-medium mb-4">Our Service</h4>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="hover:translate-x-1 transition-transform cursor-pointer">
              Indoor gym
            </li>
            <li className="hover:translate-x-1 transition-transform cursor-pointer">
              Outdoor gym
            </li>
            <li className="hover:translate-x-1 transition-transform cursor-pointer">
              On ground gym
            </li>
            <li className="hover:translate-x-1 transition-transform cursor-pointer">
              Yoga class
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h4 className="text-xl font-medium mb-4">Contact Info</h4>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li>
              <span className="font-bold text-gray-800">Mail:</span>{" "}
              info@example.com
            </li>
            <li>
              <span className="font-bold text-gray-800">Call:</span> +91
              9876543210
            </li>
            <li>
              <span className="font-bold text-gray-800">Location:</span> New
              York, 235 Lane, 10001
            </li>
            <li>
              <span className="font-bold text-gray-800">Time:</span> Workout
              Hours: 5AM - 8PM
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-200 pt-8">
        <p className="text-center text-gray-500 text-sm">
          PowerGrid Fitness.com &copy;2024 all right reserve
        </p>
      </div>
    </footer>
  );
};

export default Footer;
