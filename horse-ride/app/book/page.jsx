"use client";

import React, { useState } from "react";
import Header from "@/app/Componentes/Header";
import { hony, lexend } from "../Componentes/fonts/font";
import HorseData from "../Componentes/Utils/HorseData";
import { updateslot } from "../redux/slice";
import Footer from "./../Componentes/Footer";
import { useDispatch } from "react-redux";
import Link from "next/link";

const generateTimeSlots = () => {
  const timeSlots = [];
  for (let hour = 15; hour <= 23; hour++) {
    const hourString = hour < 10 ? `0${hour}` : `${hour}`;
    const timeString = hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 PM`;
    timeSlots.push(timeString);
  }
  return timeSlots;
};

const isWeekdayOrSaturday = (date) => {
  const day = new Date(date).getDay();
  return day >= 1 && day <= 6; // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
};

function Book() {
  const dispatch = useDispatch();
  const [selectedHorse, setSelectedHorse] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phno, setPhno] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // State variable to control navigation

  const timeSlots = generateTimeSlots();

  const isFormValid = selectedHorse && date && time && username && email;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("Please fill in all required fields.");
      return;
    } else {
      const formData = {
        horse_name: selectedHorse,
        date: date,
        slot: [time],
      };
      console.log(formData);
      dispatch(updateslot(formData));
      setIsSubmitted(true); // Set the state to navigate to the confirmation page
    }
  };

  return (
    <div className="w-full min-h-screen">
      <Header />
      <div className="mt-24 flex flex-col justify-center">
        <div className="ml-8 mr-8 border-2 border-[#ca7272] h-[48rem] shadow-lg shadow-[#628196] rounded-3xl">
          <p
            className={`${hony.className} mt-4 flex flex-row justify-center items-center text-center text-3xl`}
          >
            Book a Ride
          </p>
          <div className="flex flex-col justify-center">
            <form
              onSubmit={handleSubmit}
              className={`${lexend.className} mt-8 md:mt-12 ml-8 mr-8 flex flex-col justify-center border-2 border-[#8d3c3c] rounded-xl`}
            >
              <label
                htmlFor=""
                className="w-full text-lg flex flex-col justify-center items-center md:items-start h-20 border-b border-[#8d3c3c]"
              >
                Full Name
                <input
                  type="text"
                  className="border-b border-black text-base rounded-lg w-80 md:w-full"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label
                htmlFor=""
                className="w-full text-lg flex flex-col justify-center items-center md:items-start h-20 border-b border-[#8d3c3c]"
              >
                Email Address
                <input
                  type="email"
                  required
                  className="border-b border-black text-base rounded-lg w-80 md:w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label
                htmlFor=""
                className="w-full text-lg flex flex-col justify-center items-center md:items-start h-20 border-b border-[#8d3c3c]"
              >
                Phone Number
                <input
                  type="tel"
                  required
                  value={phno}
                  onChange={(e) => setPhno(e.target.value)}
                  className="border-b border-black text-base rounded-lg w-80 md:w-full"
                />
              </label>
              <label
                htmlFor=""
                className={`w-full text-lg flex flex-col justify-center items-center md:items-start h-20 border-b border-[#8d3c3c]`}
              >
                Select Horse
                <select
                  className="border-b border-black text-base rounded-lg w-80 md:w-full"
                  required
                  onChange={(e) => setSelectedHorse(e.target.value)}
                >
                  <option value="">Select a horse </option>
                  {HorseData.map((item, idx) => (
                    <option key={idx} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>
              <label
                htmlFor=""
                className="w-full text-lg flex flex-col justify-center items-center md:items-start h-20 border-b border-[#8d3c3c]"
              >
                Choose Date
                <input
                  type="date"
                  required
                  name=""
                  className="border-b border-black text-base rounded-lg w-80 md:w-full"
                  id=""
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
              <label
                htmlFor=""
                className="w-full text-lg flex flex-col justify-center items-center md:items-start h-32"
              >
                Choose Time Slot
                <select
                  value={time}
                  required
                  onChange={(e) => setTime(e.target.value)}
                  className="border-b border-black text-base rounded-lg w-80 md:w-full"
                  disabled={!isWeekdayOrSaturday(date)}
                >
                  <option value="">--Select a Time Slot--</option>
                  {isWeekdayOrSaturday(date) &&
                    timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                </select>
                {!isWeekdayOrSaturday(date) && (
                  <p className="text-red-500 text-center">
                    Please select a weekday or Saturday.
                  </p>
                )}
              </label>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className={`w-32 h-10 border-2 rounded-xl font-bold ${
                    isFormValid
                      ? "bg-[#616bc2] text-black hover:bg-[#31c462] hover:text-white"
                      : "bg-gray-400 text-white cursor-not-allowed"
                  }`}
                  disabled={!isFormValid}
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>
            {isSubmitted && (
              <Link
              className="mt-3 flex flex-row justify-center items-center bg-[#97d13a] mr-6 text-center ml-8 w-96 h-10 border-2 border-[#e99]"
                href={{
                  pathname: "/Confirmation",
                  query: {
                    name: username,
                    email: email,
                    phno: phno,
                    horse: selectedHorse,
                    date: date,
                    slot: time,
                  },
                }}
                replace
              >
                Go to Confirmation
              </Link>
            )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Book;
