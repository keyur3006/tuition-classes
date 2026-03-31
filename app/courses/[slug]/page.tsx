import Link from "next/link";
import { ArrowLeft, CheckCircle, BookOpen, Clock, Users } from "lucide-react";

// ✅ MUST for static export
export function generateStaticParams() {
  return [
    { slug: "class-10" },
    { slug: "class-9" },
    { slug: "science" },
  ];
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const courseDetails: any = {
    title: slug.split("-").join(" ").toUpperCase(),
    description:
      "This comprehensive course is designed to cover the entire syllabus with expert faculty.",
    subjects: ["Mathematics", "Science", "English", "Social Studies", "Sanskrit"],
    features: [
      "Daily live sessions",
      "Mock tests",
      "Doubt solving",
      "Study materials",
    ],
    duration: "10 Months",
    batchSize: "Max 20 Students",
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-blue-600 text-white py-16 px-6 md:px-20">
        <Link href="/" className="flex items-center gap-2 mb-6">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-4">{courseDetails.title}</h1>
        <p>{courseDetails.description}</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BookOpen /> Subjects Covered
            </h2>

            {courseDetails.subjects.map((sub: string, i: number) => (
              <div key={i} className="flex gap-2 mb-2">
                <CheckCircle className="text-green-500" />
                <span>{sub}</span>
              </div>
            ))}
          </section>
        </div>

        <div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-6">Program Summary</h3>

            <div className="mb-4 flex items-center gap-2">
              <Clock /> {courseDetails.duration}
            </div>

            <div className="mb-6 flex items-center gap-2">
              <Users /> {courseDetails.batchSize}
            </div>

            <Link href="/contact">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}