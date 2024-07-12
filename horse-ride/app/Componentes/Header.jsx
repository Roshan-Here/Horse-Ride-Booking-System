"use client";
import React from "react";
import Image from "next/image";
import { lexend } from "./fonts/font";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="absolute inset-x-0 top-0 w-full flex flex-row justify-between shadow-lg shadow-gray-400 p-4 border-2 border-b border-[#9F7F7F] bg-white z-20">
      <div className="ml-4 flex flex-row justify-between">
        <Image
          width={500}
          height={500}
          className="w-32 h-10"
          src="/Logo.png"
          alt="BookHorseRidingLogo"
        />
        <p
          className={`${lexend.className} font-bold text-[#802b2b] mt-1 hidden md:block`}
        >
          Book Horse Riding Holiday
        </p>
      </div>
      <div className="mr-6">
        <a href="#avhorse">
          <motion.button
            initial={{
              rotate: "0deg",
            }}
            whileTap={{
              rotate: "3deg",
            }}
            className="w-24 h-12 border-2  border-[#9F7F7F] text-black"
          >
            Book Now
          </motion.button>
        </a>
      </div>
    </div>
  );
}

export default Header;
