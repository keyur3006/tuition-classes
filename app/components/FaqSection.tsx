"use client";
import { useState } from "react";
import { Plus, X, Mail, Phone } from "lucide-react";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "You can get started by signing up on our platform and choosing your preferred course. Everything is beginner-friendly.",
  },
  {
    question: "What is included in the free plan?",
    answer:
      "The free plan includes access to basic courses, limited resources, and community support.",
  },
  {
    question: "How can I cancel my membership?",
    answer:
      "You can cancel anytime from your account dashboard under subscription settings.",
  },
  {
    question: "How do I transfer my membership?",
    answer:
      "Currently, membership transfer is not supported. Please contact support.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Refunds are available within 7 days of purchase under certain conditions.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-20">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          FAQ’s You Ask?{" "}
          <span className="text-orange-500">We Answer</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Frequently asked questions and answers.
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition"
            onClick={() => setActive(active === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-gray-900">
                {faq.question}
              </h3>
              {active === i ? <X /> : <Plus />}
            </div>

            {active === i && (
              <p className="text-gray-600 mt-3 text-sm">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <Mail className="mx-auto mb-3 text-orange-500" />
          <h3 className="font-semibold text-gray-900">Email Us</h3>
          <p className="text-gray-600 text-sm mt-2">
            Reach us anytime via email support.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <Phone className="mx-auto mb-3 text-orange-500" />
          <h3 className="font-semibold text-gray-900">Call Us</h3>
          <p className="text-gray-600 text-sm mt-2">
            We are available 24/7 for your help.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16 bg-gradient-to-r from-orange-400 to-orange-500 p-10 rounded-2xl max-w-4xl mx-auto">
        <div className="bg-black text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-gray-300 text-sm">
              Ask anything, we are here to help!
            </p>
          </div>

          <div className="flex w-full md:w-auto gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-900 w-full"
            />
            <button className="bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 transition text-white">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
          Boost your grades & confidence 🚀
        </h3>
        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-lg text-gray-900"
          />
          <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
}