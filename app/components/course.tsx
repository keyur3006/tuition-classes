"use client";

import { useState } from "react";

const tabs = [
  "State Board Classes",
  "Classroom Program",
  "CBSE Syllabus",
  "KG Program",
];

// 🔥 Auto generate 1 to 12 classes
const generateClasses = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    title: `Class ${i + 1} Std`,
    image: "/teacher.jpg",
  }));
};

const coursesData: any = {
  "State Board Classes": generateClasses(),
  "Classroom Program": generateClasses(),
  "CBSE Syllabus": generateClasses(),
  "KG Program": [
    { title: "Nursery", image: "/teacher.jpg" },
    { title: "Junior KG", image: "/teacher.jpg" },
    { title: "Senior KG", image: "/teacher.jpg" },
  ],
};

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("State Board Classes");

  return (
    <div className="py-16 px-6 bg-gray-100 min-h-screen">

      {/* 🔥 Heading */}
      <h2 className="text-center text-3xl font-bold mb-8">
        Popular <span className="text-orange-500">Courses</span>
      </h2>

      {/* 🔘 Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full border transition ${
              activeTab === tab
                ? "bg-orange-500 text-white shadow-md"
                : "bg-white text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 📚 Course Cards */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {coursesData[activeTab].map((course: any, index: number) => (
          <div
            key={index}
            className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-24 h-24 object-cover rounded-xl"
            />

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {course.title}
              </h3>

              <button className="text-orange-500 mt-2 hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}