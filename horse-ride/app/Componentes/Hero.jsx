'use client'
import React from "react";
import Image from "next/image";
import { hony, karma } from "./fonts/font";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="w-full h-auto mt-20 flex flex-col">
      <Image
        width={500}
        height={500}
        className="relative object-fill w-full h-[24rem]"
        alt="Hero horse image"
        src="/static/horse.webp"
      />
      <div className="absolute ml-6 z-10 w-full h-[24rem] flex flex-col justify-center items-center text-center mx-auto">
        <motion.div
          initial={{
            scale: 0.6,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className={`${hony.className} mt-16 md:text-4xl text-2xl`}
        >
          Experience freedom in the saddle on a horse riding holiday
        </motion.div>
        <div
          className={`${karma.className} mt-3 text-lg md:text-xl text-white shadow-current`}
        >
          Find and compare horse riding tours and horse riding holidays from 162
          organizers worldwide!
        </div>
      </div>
    </div>
  );
}

export default Hero;
