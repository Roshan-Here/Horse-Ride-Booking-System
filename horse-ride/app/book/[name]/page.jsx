"use client";

import React, { useEffect, useState } from "react";
import Header from "@/app/Componentes/Header";
import { hony } from "@/app/Componentes/fonts/font";
import HorseData from "@/app/Componentes/Utils/HorseData";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Footer from './../../Componentes/Footer';

function BookHorse({ params }) {
  //   console.log(params);
  const HorseReduxData = useSelector((state) => state.bookhorse.bookhorse);

  let isArrayValid = Array.isArray(HorseReduxData);
  let retrievedData = [];
  let isDataEmpty = true;

  if (isArrayValid) {
    retrievedData = HorseReduxData.filter(
      (item) => item.horse_name === params.name
    );
    isDataEmpty = retrievedData.length === 0;

    console.log("HorseReduxData:", HorseReduxData);
    console.log("retrievedData:", retrievedData);
    console.log("isDataEmpty:", isDataEmpty);
  }
  // console.log(HorseReduxData);
  const [booked, setbooked] = useState(false);
  const [CurrentHorseData, setCurrentHorseData] = useState({});

  const DateCorrecter = (val) => {
    return val.replace("-", "/");
  };

  useEffect(() => {
    const horse = HorseData.find((value) => value.name === params.name);
    if (horse) {
      setCurrentHorseData(horse);
    }
  }, []);

  return (
    <div className="flex flex-col h-auto w-full bg-slate-100 no-scrollbar">
      <Header />
      <div className="mt-20 w-full flex flex-col justify-center">
        <p
          className={`${hony.className} mt-8 flex flex-row justify-center text-2xl text-center`}
        >
          Ride with {CurrentHorseData.name}
        </p>
        <div className="mt-3 flex flex-col justify-center items-center">
          {CurrentHorseData.image_link ? (
            <Image
              height={500}
              width={500}
              priority={true}
              src={CurrentHorseData.image_link}
              alt={`${CurrentHorseData.name} image`}
              className="w-48 h-48 border-2 border-[#9F7F7F] shadow-sm shadow-black"
            />
          ) : (
            <p>{params.name} Image Loading....</p>
          )}
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
        <div
          className={`${
            !isDataEmpty ? "hidden" : ""
          } mt-4 flex flex-row justify-center items-center gap-6`}
        >
          <p className="text-center">
            No one has booked {params.name} yet! be the first to Ride
          </p>
          <a href="/book">
            <motion.button
              initial={{
                rotate: "0deg",
              }}
              whileTap={{
                rotate: "3deg",
              }}
              className="mt-3 border-2 shadow-md shadow-black border-[#cf5656] justify-center items-center w-32 h-10"
            >
              Book Now
            </motion.button>
          </a>
        </div>
        <div className="mt-3 ml-4 mr-4">
          {isArrayValid && !isDataEmpty && (
            <table
              className={`table-auto w-full text-left border-2 border-black text-red-950`}
            >
              <thead className="font-bold border-2 border-b border-black">
                <tr>
                  <th className="px-6">No</th>
                  <th>Date</th>
                  <th>Slot</th>
                </tr>
              </thead>
              <tbody className="justify-center">
                {retrievedData.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6">{idx + 1}</td>
                    <td>{DateCorrecter(item.date)}</td>
                    <td>{item.slot.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BookHorse;
