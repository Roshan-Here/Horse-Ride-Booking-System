"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/Componentes/Header";
import { hony } from "@/app/Componentes/fonts/font";
import HorseData from "@/app/Componentes/Utils/HorseData";
import Image from "next/image";
import { motion } from "framer-motion";

function BookHorse({ params }) {
  console.log(params);
  const [booked, setbooked] = useState(false);
  const [CurrentHorseData, setCurrentHorseData] = useState({});

  useEffect(() => {
    const horse = HorseData.find((value) => value.name === params.name);
    if (horse) {
      setCurrentHorseData(horse);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-100 no-scrollbar">
      <Header />
      <div className="mt-20 w-full flex flex-col justify-center">
        <p
          className={`${hony.className} mt-8 flex flex-row justify-center text-2xl text-center`}
        >
          Ride with {CurrentHorseData.name}
        </p>
        <div className="mt-3 flex flex-col justify-center items-center">
          <Image
            height={500}
            width={500}
            src={CurrentHorseData.image_link}
            alt={`${CurrentHorseData.name} image`}
            className="w-48 h-48 border-2 border-[#9F7F7F] shadow-sm shadow-black"
          />
          <motion.div
            initial={{
              rotate: "45deg",
            }}
            transition={{
              duration: 1,
            }}
            className={`${
              booked ? "" : "hidden"
            } absolute flex flex-row justify-center items-center w-64 bg-white h-6 rounded-lg border-2 border-[#9F7F7F]`}
          >
            Already Booked
          </motion.div>
        </div>
        <p className="mt-8 flex flex-row justify-center text-2xl text-center">
          Booked Details of {CurrentHorseData.name}
        </p>
        <div className="mt-3 ml-4 mr-4">
          <table className="table-auto w-full text-left border-2 border-black text-red-950">
            <thead className="font-bold border-2 border-b border-black">
              <tr>
                <th className='px-6'>No</th>
                <th>Date</th>
                <th>Slot</th>
              </tr>
            </thead>
            <tbody className="justify-center">
              <tr>
                <td className='px-6'>1</td>
                <td>10/12/2024</td>
                <td>1pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BookHorse;
