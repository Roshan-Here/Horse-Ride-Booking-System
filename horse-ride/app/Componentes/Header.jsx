'use client'
import React from "react";
import Image from "next/image";
import { lexend } from "./fonts/font";

function Header() {
  return (
    <div className="absolute inset-x-0 top-0 w-full flex flex-row justify-between shadow-lg shadow-gray-400 p-4 border-2 border-b border-[#9F7F7F]">
      <div className="ml-4 flex flex-row justify-between">
        <Image
          width={500}
          height={500}
          className="w-32 h-10"
          src="/Logo.png"
          alt="BookHorseRidingLogo"
        />
        <p
          className={`${lexend.className} font-bold text-slate-700 mt-1 hidden md:block`}
        >
          Book Horse Riding Holiday
        </p>
      </div>
      <div className="mr-6">
        <button className="w-24 h-12 border-2  border-[#9F7F7F] text-black">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Header;
