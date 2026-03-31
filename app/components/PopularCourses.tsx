"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";

const tabs = [
  "State Board Classes",
  "Classroom Program",
  "CBSE Syllabus",
  "KG Program",
];

const coursesData: any = {
"State Board Classes": [
  {
    title: "Class 1st Std",
    slug: "state-board-1st",
    img: "/hero.png",
    popular: false
  },
  {
    title: "Class 2nd Std",
    slug: "state-board-2nd",
    img: "/hero.png",
    popular: false
  },
  {
    title: "Class 3rd Std",
    slug: "state-board-3rd",
    img: "/hero.png",
    popular: false
  },
  {
    title: "Class 4th Std",
    slug: "state-board-4th",
    img: "/hero.png",
    popular: false
  },
  {
    title: "Class 5th Std",
    slug: "state-board-5th",
    img: "/hero.png",
    popular: false
  },
  {
    title: "Class 6th Std",
    slug: "state-board-6th",
    img: "/hero.png",
    popular: false
  },
  {
    title: "Class 7th Std",
    slug: "state-board-7th",
    img: "/hero.png",
    popular: false
  },
  {
    title: "Class 8th Std",
    slug: "state-board-8th",
    img: "/hero.png",
    popular: false
  },
  {
    title: "Class 9th Std",
    slug: "state-board-9th",
    img: "/hero.png",
    popular: false
  },
  {
    title: "Class 10th Std",
    slug: "state-board-10th",
    img: "/hero.png",
    popular: true
  },
  {
    title: "Class 11th Science",
    slug: "state-board-11th-science",
    img: "/hero.png",
    popular: true
  },
  {
    title: "Class 12th Science",
    slug: "state-board-12th-science",
    img: "/hero.png",
    popular: true
  },
  {
    title: "Class 11th Commerce",
    slug: "state-board-11th-commerce",
    img: "/hero.png",
    popular: false
  },
  {
    title: "Class 12th Commerce",
    slug: "state-board-12th-commerce",
    img: "/hero.png",
    popular: false
  },
],
  "Classroom Program": [
    {
      title: "Class 10th Intensive Board Exam Prep",
      slug: "intensive-10th-board-prep",
      img: "/hero.png",
      popular: true
    },
    {
      title: "Foundation Course (Class 8th to 10th)",
      slug: "foundation-8th-10th",
      img: "/hero.png",
      popular: false
    }
  ],
  "CBSE Syllabus": [
    {
      title: "Class 1st to 5th All Subjects CBSE",
      slug: "cbse-1st-5th",
      img: "/hero.png",
      popular: false
    },
    {
      title: "Class 6th to 10th All Subjects CBSE",
      slug: "cbse-6th-10th",
      img: "/hero.png",
      popular: true
    }
  ],
  "KG Program": [
    {
      title: "Early Foundations (LKG & UKG)",
      slug: "kg-early-foundations",
      img: "/hero.png",
      popular: false
    }
  ],
};

export default function PopularCourses() {
  const [activeTab, setActiveTab] = useState("State Board Classes");

  return (
    <section className="py-20 bg-gray-50 text-center relative">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
  Popular <span className="text-orange-500">Courses</span>
</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
              activeTab === tab
                ? "bg-orange-500 text-white shadow-lg transform -translate-y-0.5"
                : "bg-white text-gray-600 shadow-sm hover:bg-orange-50 hover:text-orange-600 border border-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
     <div className="mt-12 px-6 md:px-20 max-w-5xl mx-auto">
  <Swiper
    direction="vertical"
    slidesPerView={3}
    spaceBetween={20}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    mousewheel={true}
    modules={[Autoplay, Mousewheel]}
    className="h-150"
  >
    {coursesData[activeTab]?.map((course: any, index: number) => (
      <SwiperSlide key={index}>
        <Link href={`/courses/${course.slug}`} className="block group">

          {/* 🔥 Animated Card */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex items-center gap-4 p-10 hover:scale-[1.03]">

            {/* Image */}
            <div className="w-32 h-24 overflow-hidden rounded-lg">
              <img
                src={course.img}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt={course.title}
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-left">
              <h3 className="font-bold text-gray-900">
                {course.title}
              </h3>

              <span className="text-orange-600 text-sm mt-2 inline-block group-hover:translate-x-1 transition">
                Read More →
              </span>
            </div>

            {/* HOT */}
            {course.popular && (
              <div className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                HOT 🔥
              </div>
            )}
          </div>

        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
      <div className="absolute top-10 right-10 w-4 h-4 bg-pink-400 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-purple-400 rounded-full"></div>
      <div className="absolute top-1/2 left-5 w-4 h-4 bg-yellow-400 rounded-full"></div>
      <div className="absolute top-10 right-10 w-4 h-4 bg-pink-400 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-purple-400 rounded-full"></div>
      <div className="absolute top-1/2 left-5 w-4 h-4 bg-yellow-400 rounded-full"></div>
      <div className="absolute top-10 right-10 w-4 h-4 bg-pink-400 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-purple-400 rounded-full"></div>
      <div className="absolute top-1/2 left-5 w-4 h-4 bg-yellow-400 rounded-full"></div>
    </section>
  );
}