import { Users, GraduationCap, BookOpen, BadgeCheck } from "lucide-react";

const stats = [
  {
    icon: <Users className="text-pink-500" />,
    value: "10k+",
    label: "Our Happy Students",
    bg: "bg-pink-100",
  },
  {
    icon: <GraduationCap className="text-yellow-500" />,
    value: "2k+",
    label: "Active Learners",
    bg: "bg-yellow-100",
  },
  {
    icon: <BookOpen className="text-blue-500" />,
    value: "3+",
    label: "Expert Tutors",
    bg: "bg-blue-100",
  },
  {
    icon: <BadgeCheck className="text-green-500" />,
    value: "98.8%",
    label: "Satisfaction Rate",
    bg: "bg-green-100",
  },
];

export default function Achievements() {
  return (
    <section className="py-16 bg-gray-50 text-center mt-20">
      
      {/* Heading */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="h-[2px] w-16 bg-orange-400"></div>
       <h2 className="text-lg md:text-xl font-semibold text-gray-900">
  Trusted by our{" "}
  <span className="text-orange-500">Tuition Centre</span> Achievements
</h2>
        <div className="h-[2px] w-16 bg-orange-400"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            {/* Icon Circle */}
            <div
              className={`absolute -top-5 left-1/2 -translate-x-1/2 p-3 rounded-full ${item.bg}`}
            >
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mt-6 text-gray-900">
  {item.value}
</h3>
            <p className="text-gray-600 text-sm mt-1">
  {item.label}
</p>
          </div>
        ))}
      </div>
    </section>
  );
}