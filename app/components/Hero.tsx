"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Hero() {
    const [open, setOpen] = useState(false);
  return (
    <section className="relative bg-white overflow-hidden">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-4 md:px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo5.png" alt="Aarna Classes Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-lg md:text-xl font-bold text-primary">
            Aarna Classes
          </h1>
        </Link>

        <ul className="hidden md:flex gap-6 text-gray-700">
          <li>Home</li>
          <Link href="/about" className="text-orange-500 font-medium">About</Link>
          <li>Programs</li>
          <li>Blog</li>
          <Link href="/contact" className="text-orange-500 font-medium">Contact</Link>
        </ul>
         
         {/* mobile manu  */}
              <button className="md:hidden" onClick={() => setOpen(!open)}>
                ☰
              </button>
              {open && (
                <div className="md:hidden">
                  <ul className="flex flex-col gap-6 text-gray-700">
                    <li>Home</li>
                    <Link href="/about" className="text-orange-500 font-medium">About</Link>
                    <li>Programs</li>
                    <li>Blog</li>
                    <Link href="/contact" className="text-orange-500 font-medium">Contact</Link>
                  </ul>
                </div>
              )}

        <button className="bg-accent text-white px-4 py-2 text-sm md:text-base rounded-full">
          Registration
        </button>
      </div>

      {/* HERO */}
      <div className="relative flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 md:px-6 py-10">

        {/* LEFT SHAPE */}
        <div className="absolute left-0 top-0 w-full md:w-[60%] h-full bg-primary md:rounded-r-[200px] z-0"></div>

        {/* FLOATING CARDS (hide on mobile) */}
        <div className="hidden md:flex items-center gap-2 absolute top-10 right-40 bg-white px-4 py-2 rounded-xl shadow-md z-20 animate-float">
          ✏️ <span className="text-sm font-medium">Practice</span>
        </div>

        <div className="hidden md:flex items-center gap-2 absolute bottom-16 right-20 bg-white px-4 py-2 rounded-xl shadow-md z-20 animate-float">
          🎯 <span className="text-sm font-medium">Goal Achieved</span>
        </div>

        {/* LEFT CONTENT */}
        <div className="relative z-10 flex-1 text-white p-4 md:p-6 text-center md:text-left">

          <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight">
            Best Tuition Classes in Ahmedabad <br />
            <span className="text-yellow-400">
              for School Students
            </span>
          </h1>

          <h2 className="mt-3 text-lg md:text-2xl font-semibold text-gray-200">
            Welcome to Aarna Classes
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-200 max-w-md mx-auto md:mx-0">
            We provide expert coaching for school students with experienced teachers,
            small batch sizes, and personalized learning plans to help every student succeed in exams.
          </p>

          <button className="mt-5 bg-yellow-400 text-black px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold">
            Enroll Now
          </button>

          <p className="mt-3 text-sm">
            📞 Call: 95378 49416
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full md:w-[40%] flex justify-center mt-8 md:mt-0">

          {/* IMAGE */}
          <div className="relative z-10 md:-ml-32">
            <img
              src="/hero.png"
              alt="Teacher"
              className="w-64 sm:w-72 md:w-[450px] md:h-[350px] rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>

        {/* RIGHT YELLOW SHAPE (hide on mobile) */}
        <div className="hidden md:block absolute right-0 top-20 w-72 h-72 bg-yellow-400 rounded-full z-0"></div>
      </div>
    </section>
  );
}