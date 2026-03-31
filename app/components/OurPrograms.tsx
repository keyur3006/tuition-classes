import React from "react";

const programs = [
  {
    number: "01",
    title: "Enroll in a Program",
    desc: "Lorem ipsum is a dummy text. Lorem ipsum is a dummy text used for design.",
    color: "text-purple-500",
  },
  {
    number: "02",
    title: "Learn from Experts",
    desc: "Learn from industry experts with real-world experience.",
    color: "text-yellow-500",
  },
  {
    number: "03",
    title: "Hands - On practice",
    desc: "Practice with real examples and improve your skills.",
    color: "text-blue-500",
  },
  {
    number: "04",
    title: "Build Your Portfolio",
    desc: "Create strong projects that showcase your talent.",
    color: "text-pink-500",
  },
  {
    number: "05",
    title: "Achieve your Dream Score",
    desc: "Score high and achieve your career goals easily.",
    color: "text-green-500",
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-gray-50 text-center relative overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold">
        Explore <span className="text-orange-500">Our Programs</span>
      </h2>
      <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
        From mastering tough subjects to excelling in exams, our tailored
        approach ensures success for every student.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-6 md:px-20">
        
        {/* Program Cards */}
        {programs.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-left"
          >
            <h3 className={`text-2xl font-bold ${item.color}`}>
              {item.number}
            </h3>

            <h4 className="font-semibold mt-2">
              {item.title}
            </h4>

            <p className="text-gray-500 text-sm mt-2">
              {item.desc}
            </p>
          </div>
        ))}

        {/* CTA Card */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center hover:shadow-xl transition">
          <h4 className="font-semibold mb-2">
            Start your journey!
          </h4>
          <p className="text-gray-500 text-sm mb-4">
            Join us today to boost your skills and achieve your dream.
          </p>

          <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
            Join Now
          </button>
        </div>
      </div>

      {/* Floating Dots */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-purple-400 rounded-full"></div>
      <div className="absolute top-10 right-10 w-3 h-3 bg-blue-400 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-green-400 rounded-full"></div>
    </section>
  );
}