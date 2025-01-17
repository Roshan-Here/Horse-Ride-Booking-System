"use client";
import Image from "next/image";
import Header from './Componentes/Header';
import Hero from './Componentes/Hero';
import ListHorses from './Componentes/ListHorses';
import Footer from './Componentes/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-100 no-scrollbar">
      <Header/>
      <Hero/>
      <ListHorses/>
      <Footer/>
    </div>
  );
}
