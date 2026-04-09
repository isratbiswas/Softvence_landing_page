"use client";

import Image from "next/image";
import { IoPlay } from "react-icons/io5";
import { motion, Variants, easeOut } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const TrainingSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <motion.div
        className="mb-10 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          variants={fadeUp}
          className="text-xl md:text-4xl font-bold text-gray-700 mb-2"
        >
          Train Like a Champion
        </motion.h2>

        <motion.h5 variants={fadeUp} className="text-gray-500 text-lg">
          Unleash Your Power with Expert Boxing Training
        </motion.h5>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto bg-black rounded-[40px] p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          className="lg:col-span-4 relative h-[400px] md:h-[500px] w-full rounded-[30px] overflow-hidden"
        >
          <Image
            src="/assets/trainer.png"
            alt="Boxing Trainer"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="lg:col-span-4 space-y-8 flex flex-col h-full justify-between"
        >
          <div>
            <h4 className="text-xl font-bold text-gray-200 mb-12">
              Training Focus Areas:
            </h4>

            {[
              {
                title: "Strength & Conditioning",
                desc: "Develop knockout power with a mix of strength training and explosive movements.",
              },
              {
                title: "Speed & Agility",
                desc: "Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination.",
              },
              {
                title: "Endurance Training",
                desc: "Boost your stamina with high-intensity circuits that keep you fighting strong till the final round.",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="space-y-2 mb-6">
                <h6 className="text-gray-300 font-bold text-lg">
                  {item.title}
                </h6>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="lg:col-span-4 space-y-4 flex flex-col h-full justify-between"
        >
          <div>
            <h4 className="text-xl font-bold text-gray-200 mb-12">
              Why Train With Us:
            </h4>

            <div className="space-y-6 mb-8">
              <div>
                <h6 className="text-gray-300 font-bold text-lg">
                  Expert Coaches
                </h6>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our experienced boxing trainers have worked with amateur and
                  professional athletes, ensuring you get the best training
                  tailored to your goals.
                </p>
              </div>

              <div>
                <h6 className="text-gray-300 font-bold text-lg">
                  Flexible Programs
                </h6>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Whether you&apos;re a beginner or seasoned boxer, we offer
                  flexible programs that fit your schedule and needs.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#64bc44] text-white font-bold lg:px-10 lg:py-4 px-6 py-2 rounded-2xl hover:bg-[#529d38] transition-colors text-lg"
              >
                Punch Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-green-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur"></div>
                <div className="relative border-2 border-dashed border-green-900/50 p-3 rounded-full">
                  <IoPlay className="text-[#64bc44] text-3xl" />
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TrainingSection;
