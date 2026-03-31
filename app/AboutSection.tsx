"use client";

import { GraduationCap, Users, BookOpen, Target, Award, Rocket, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-20 overflow-hidden">
      
      {/* 1. MAIN ABOUT AREA (Image + Content) */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT SIDE: Images */}
        <div className="relative">
          {/* Main Large Image */}
          <div className="relative z-10 w-[85%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
              alt="Students Studying" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          {/* Overlapping Small Image */}
          <div className="absolute -bottom-10 right-0 z-20 w-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
              alt="Teacher teaching" 
              className="w-full h-[250px] object-cover"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -left-8 -top-8 w-24 h-24 bg-yellow-400 rounded-full z-0 opacity-50 blur-xl"></div>
          <div className="absolute bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full z-0 opacity-20 blur-2xl"></div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="mt-16 md:mt-0">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-12 bg-orange-500"></span>
            <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">About Aarna Classes</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Empowering Students to <span className="text-blue-600">Achieve Excellence</span>
          </h1>

          <p className="text-gray-600 mb-4 text-lg">
            At Aarna Classes, we are dedicated to transforming learning into a joyful and rewarding experience. We go beyond traditional teaching methods to ensure every student understands the core concepts thoroughly.
          </p>

          <p className="text-gray-600 mb-8">
            With years of experience, expert educators, and a student-first approach, our mission is to build immense confidence, improve academic performance, and create a solid foundation for future success.
          </p>

          {/* Core Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-orange-100 p-2 rounded-full"><GraduationCap className="text-orange-600" size={24} /></div>
              <span className="font-semibold text-gray-800">Expert Teachers</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-blue-100 p-2 rounded-full"><Users className="text-blue-600" size={24} /></div>
              <span className="font-semibold text-gray-800">Small Batch Size</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-green-100 p-2 rounded-full"><BookOpen className="text-green-600" size={24} /></div>
              <span className="font-semibold text-gray-800">Updated Material</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-yellow-100 p-2 rounded-full"><Award className="text-yellow-600" size={24} /></div>
              <span className="font-semibold text-gray-800">Proven Results</span>
            </div>
          </div>
          
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Discover Our Journey
          </button>
        </div>
      </div>

      {/* 2. MISSION & VISION & WHY US SECTION */}
      <div className="mt-32 grid md:grid-cols-3 gap-8">
        
        {/* Our Mission */}
        <div className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition">
          <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center text-white mb-6 shadow-md">
            <Target size={28} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To provide high-quality, accessible, and personalized education that brings out the true potential in every single student, making learning engaging and result-oriented.
          </p>
        </div>

        {/* Our Vision */}
        <div className="bg-yellow-50 p-8 rounded-2xl hover:shadow-lg transition">
          <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center text-white mb-6 shadow-md">
            <Rocket size={28} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be the most trusted educational institution in the region, recognized for our commitment to student success, innovative teaching methodologies, and values-driven environment.
          </p>
        </div>

        {/* Why Choose Us List */}
        <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-orange-400">Why Choose Us?</span>
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle2 className="text-green-400 shrink-0" />
              <span className="text-gray-300">Personalized attention for every child</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="text-green-400 shrink-0" />
              <span className="text-gray-300">Weekly tests and detailed performance reports</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="text-green-400 shrink-0" />
              <span className="text-gray-300">Special doubt-solving sessions</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="text-green-400 shrink-0" />
              <span className="text-gray-300">Safe, encouraging, and highly positive atmosphere</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="text-green-400 shrink-0" />
              <span className="text-gray-300">Highly affordable fee structure</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}