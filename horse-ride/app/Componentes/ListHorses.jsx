import React from "react";
import { motion } from "framer-motion";
import { karma,hony } from "./fonts/font";
import Image from "next/image";
import Link from "next/link";
import HorseData from "./Utils/HorseData";

function ListHorses() {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <p
        id="avhorse"
        className={`${karma.className} text-center mt-6 text-black text-4xl`}
      >
        List of available Horses
      </p>
      <div className="p-10 flex flex-row justify-between">
        <div className="mt-10 md:ml-12 flex flex-col justify-center items-center">
          <p className="text-4xl text-black">4</p>
          <p className="text-lg text-[#9c3a3a]">Horses available</p>
        </div>
        <motion.button
          initial={{
            rotate: "0deg",
          }}
          whileTap={{
            rotate: "3deg",
          }}
          className="mt-10 w-24 h-12 border-2  border-[#9F7F7F] text-black"
        >
          Book Now
        </motion.button>
      </div>
      <div className="ml-6 mr-6 overflow-x-auto w-full flex flex-row gap-4 justify-center items-center no-scroolbar">
        {HorseData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-60 h-80 border-2 border-[#9F7F7F] hover:shadow-lg hover:shadow-[#212636] flex-shrink-0"
            >
              <div className="flex flex-col w-full">
                <Image
                  className="object-fill w-full h-60 border-b border-black"
                  src={item.image_link}
                  alt="Horse image"
                  height={500}
                  width={500}
                />
                <div className="ml-2 mr-2 flex flex-row justify-between items-center">
                  <p className={`${hony.className} mt-2`}>{item.name}</p>
                  <Link href={`/book/${item.name}`}>
                    <motion.button
                      initial={{
                        rotate: "0deg",
                      }}
                      whileTap={{
                        rotate: "3deg",
                      }}
                      className="mt-2 w-24 h-12 border-2 rounded-xl bg-[#9F7F7F] hover:bg-white text-white  border-[#ada7a7] hover:text-black"
                    >
                      Book Now
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ListHorses;
