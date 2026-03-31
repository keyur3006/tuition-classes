import { BookOpen, Users, HelpCircle, TrendingUp, FileText, Clock } from "lucide-react";

const services = [
  {
    icon: <BookOpen className="text-white" />,
    title: "Personalized Learning Plans",
    desc: "A learning experience built around you! We analyze each student's strengths to craft a better learning path.",
    bg: "bg-purple-500",
  },
  {
    icon: <Users className="text-white" />,
    title: "Expert-Led Interactive Live Classes!",
    desc: "Learn from the best! Highly experienced tutors explain concepts in a simple, easy-to-understand way.",
    bg: "bg-orange-500",
  },
  {
    icon: <HelpCircle className="text-white" />,
    title: "Exam Preparation and Doubt Clearing",
    desc: "Ace your exams with confidence through structured revision and dedicated one-on-one doubt solving.",
    bg: "bg-pink-500",
  },
  {
    icon: <TrendingUp className="text-white" />,
    title: "Regular Progress Tracking",
    desc: "We monitor performance through routine tests and provide constructive feedback to ensure continuous improvement.",
    bg: "bg-blue-500",
  },
  {
    icon: <FileText className="text-white" />,
    title: "Comprehensive Study Material",
    desc: "Get access to well-structured notes, practice papers, and exclusive resources designed for top scorers.",
    bg: "bg-green-500",
  },
  {
    icon: <Clock className="text-white" />,
    title: "Flexible Batch Timings",
    desc: "We offer multiple batch options so you can choose a convenient time that fits perfectly into your daily schedule.",
    bg: "bg-red-500",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 text-center relative overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold">
        What Are <span className="text-orange-500">We Doing ?</span>
      </h2>
      <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
        From mastering tough subjects to excelling in exams, our tailored approach ensures success for every student.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6 md:px-20">
        {services.map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-left"
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg ${item.bg} mb-4`}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Floating Dots (Decoration) */}
      <div className="absolute top-10 right-10 w-4 h-4 bg-pink-400 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-purple-400 rounded-full"></div>
      <div className="absolute top-1/2 left-5 w-4 h-4 bg-yellow-400 rounded-full"></div>
    </section>
  );
}