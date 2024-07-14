"use client";
import React, { useEffect, useState } from "react";
import Header from "./../Componentes/Header";
import { useRouter } from "next/navigation";
import NotFound from "./../not-found";
import Footer from './../Componentes/Footer';
import { hony, karma } from "../Componentes/fonts/font";
import { useSearchParams } from 'next/navigation'

function Confirmation() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  const phno = searchParams.get('phno');
  const horse = searchParams.get('horse');
  const date = searchParams.get('date');
  const slot = searchParams.get('slot');

  console.log("name",name)

  const [notfound, setNotFound] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!name) {
      setTimeout(() => {
        setNotFound(true);
        router.push("/");
      }, 3000);
    }
  }, [name, router]);

  return notfound ? (
    <NotFound />
  ) : (
    <div className="w-full min-h-screen">
      <Header />
      <div className="w-full flex flex-col mt-20 justify-center">
        <p className={`${hony.className} ml-6 mr-6 mt-6 text-2xl text-center`}>
          Hey {name} Thank you for choosing{" "}
          <span> Book Horse Riding Today</span>{" "}
        </p>
        <div className="mt-6 ml-6 mr-6 flex flex-col justify-center items-center">
          <div className=" flex flex-col border-2 rounded-lg border-[#b98989] w-full h-[20rem]">
            <p className="mt-4 flex justify-center items-center text-xl">Your Booking Details</p>
            <div className="flex flex-col justify-center p-10 items-center gap-3">
              <div className="flex flex-col text-lg justify-center items-start">
                <p>Name : {name}</p>
                <p>Phone Number : {phno}</p>
                <p>Email id : {email}</p>
                <p>Booked Horse : {horse}</p>
                <p>Booked Date : {date}</p>
                <p>Booked Time : {slot}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col justify-center items-center text-center">
            <p className={`${karma.className} font-bold text-xl text-black`}>We are Glad to see you on Board, Best Wishes.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Confirmation;