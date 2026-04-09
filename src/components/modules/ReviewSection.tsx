"use client";

import Image from "next/image";

import { FaStar } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
import { motion, Variants, easeOut } from "framer-motion";

const reviews = [
  { id: 1, img: "/assets/man.png" },
  { id: 2, img: "/assets/man (1).png" },
  { id: 3, img: "/assets/man (2).png" },
  { id: 4, img: "/assets/man (3).png" },
  { id: 5, img: "/assets/man (4).png" },
  { id: 6, img: "/assets/man (5).png" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const ReviewSection = () => {
  return (
    <section className=" py-16 px-6 mt-16 lg:mt-42 md:px-12 lg:px-20 rounded-[40px]">
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-700 mb-2">
          What Our Clients Are Saying
        </h3>
        <h5 className="text-gray-500 text-lg">
          Real Stories, Real Results — Hear From Our Athletes
        </h5>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-black text-white p-8 rounded-[30px] shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-200">
                The Best Training Program!
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                The boxing program helped me build confidence, strength, and
                endurance. The coaches are supportive and push you to be your
                best. Highly recommend for anyone serious about their fitness!
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                  <Image
                    src={review.img}
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Stive Meloni</h5>
                  <p className="text-gray-500 text-xs text-nowrap">
                    Ceo Of Miko
                  </p>
                </div>
              </div>

              <div className="flex items-end gap-1">
                <div className="flex text-yellow-400 text-xs gap-0.5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <IoStarHalf />
                </div>
                <span className="text-gray-400 text-[10px] mt-1">(4.5)</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ReviewSection;
