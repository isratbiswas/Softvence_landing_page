"use client";

import Image from "next/image";
import { MdCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { motion, Variants, easeOut } from "framer-motion";

const products = [
  {
    id: 1,
    img: "https://i.pinimg.com/1200x/63/48/3e/63483ee3cac26ff1c15a5e2ca8981e37.jpg",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/e2/d4/03/e2d4036fa5e93bbe995399dcccf41fb1.jpg",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/1200x/5b/9f/4a/5b9f4af2b625774ca0b781ddefabf748.jpg",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/736x/8f/a3/88/8fa3883ea9082d66d76191a72e4e986c.jpg",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/1200x/72/b2/da/72b2da95b27e3c56fa8bbc60e8638b33.jpg",
  },
  {
    id: 6,
    img: "https://i.pinimg.com/736x/90/d5/67/90d56727b2f06ff7bd48832666b0cd29.jpg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const ProductSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <motion.div
        className="max-w-7xl mx-auto mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h3
          variants={cardVariants}
          className="text-4xl font-bold text-gray-800"
        >
          Our Products
        </motion.h3>

        <motion.p
          variants={cardVariants}
          className="text-gray-500 mt-2 text-lg"
        >
          Fuel Your Workouts with Protein-Packed Nutrition
        </motion.p>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {products.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-black rounded-[45px] p-4 flex flex-col group shadow-lg"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
              <Image
                src={item.img}
                alt="Product"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority={item.id <= 3}
              />
            </div>

            <div className="mt-6 px-4 pb-4 flex justify-between items-end">
              <div className="space-y-2">
                <h5 className="text-white text-base opacity-90">
                  Mint flavor chocolate
                </h5>

                <div className="flex items-center gap-4">
                  <div className="flex items-center text-white font-bold text-2xl">
                    <MdCurrencyRupee className="text-xl" />
                    <span>399.00</span>
                  </div>

                  <div className="flex text-[#64bc44] text-xs gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-gray-300" />
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Add to cart"
                className="bg-[#64bc44] text-white p-4 rounded-2xl hover:bg-[#52a637] transition-all shadow-[0_0_20px_rgba(100,188,68,0.2)]"
              >
                <FaPlus className="text-xl" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductSection;
