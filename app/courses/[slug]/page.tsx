import Link from "next/link";
import { ArrowLeft, CheckCircle, BookOpen, Clock, Users } from "lucide-react";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // For demonstration, a mock database based on slug
  const courseDetails: any = {
    title: slug.split("-").join(" ").toUpperCase(),
    description:
      "This comprehensive course is designed to cover the entire syllabus with an expert faculty and advanced study materials, ensuring maximum score in the board examinations.",
    subjects: ["Mathematics", "Science", "English", "Social Studies", "Sanskrit"],
    features: [
      "Daily interactive live sessions",
      "Chapter-wise mock tests and analysis",
      "1-on-1 doubt solving",
      "Printed comprehensive study materials",
    ],
    duration: "10 Months",
    batchSize: "Max 20 Students",
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Header */}
      <div className="bg-blue-600 text-white py-16 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-64 h-64 bg-yellow-400 rounded-full blur-[100px] opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start">
          <Link href="/" className="flex items-center gap-2 text-blue-200 hover:text-white transition mb-8">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
            Premium Program
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{courseDetails.title}</h1>
          <p className="text-blue-100 max-w-2xl text-lg">{courseDetails.description}</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-10">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BookOpen className="text-blue-600" /> Subjects Covered
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courseDetails.subjects.map((sub: string, i: number) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="font-semibold text-gray-800">{sub}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Features</h2>
            <ul className="space-y-4">
              {courseDetails.features.map((feat: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feat}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Program Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-gray-700">
                <Clock className="text-orange-500" />
                <span><strong className="block text-gray-900">Duration:</strong> {courseDetails.duration}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <Users className="text-blue-500" />
                <span><strong className="block text-gray-900">Batch Size:</strong> {courseDetails.batchSize}</span>
              </div>
            </div>
            <Link href="/contact" className="block w-full text-center bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Enroll Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
