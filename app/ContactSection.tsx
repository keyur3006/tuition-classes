"use client";

import { useState } from "react";
import { Phone, MapPin, Mail, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";
export default function ContactSection() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        location: "",
        package: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading("Submitting...");

    try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbyJ17FugMKUdVHO-_6ziOiORN-a6NsGH4Xfdg4NVgf4LvgdroIX6fy92ZTrlyCTjYd7Lw/exec", {
            method: "POST",
            body: JSON.stringify({
                name: form.name,
                phone: form.phone,
                location: form.location,
                std: form.package,
                message: form.message,
            }),
        });

        const data = await res.json();

        toast.dismiss(loadingToast);

        if (data.status === "success") {
            toast.success("Form Submitted ✅");

            setForm({
                name: "",
                phone: "",
                location: "",
                package: "",
                message: "",
            });
        } else {
            toast.error("Something went wrong ❌");
        }

    } catch (error) {
        toast.dismiss(loadingToast);
        toast.error("Error submitting form ❌");
    } finally {
        setLoading(false);
    }
};

    return (
        <section className="bg-gray-50 py-20 px-6 md:px-20 relative overflow-hidden">

            {/* Decorative Background Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">

                {/* LEFT CONTENT - Contact Info */}
                <div className="flex flex-col justify-center h-full">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-[2px] w-12 bg-blue-600"></span>
                        <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Get in touch</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Ready to <span className="text-orange-500">Achieve</span> <br /> Academic Excellence?
                    </h1>

                    <p className="text-gray-600 mb-10 text-lg">
                        Start your journey with us and boost your performance with expert guidance. Book your <strong>FREE</strong> consultation today!
                    </p>

                    <div className="space-y-6">
                        {/* Phone */}
                        <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <div className="bg-blue-100 p-3 rounded-full shrink-0">
                                <Phone className="text-blue-600" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Call Us</h4>
                                <p className="text-gray-600">+91 95378 49416</p>
                                <p className="text-gray-500 text-sm">Available Mon-Sat (9 AM - 8 PM)</p>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <div className="bg-green-100 p-3 rounded-full shrink-0">
                                <MessageSquare className="text-green-600" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">WhatsApp</h4>
                                <p className="text-gray-600">+91 95378 49416</p>
                                <p className="text-gray-500 text-sm">Instant replies during office hours</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <div className="bg-orange-100 p-3 rounded-full shrink-0">
                                <MapPin className="text-orange-600" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Visit Us</h4>
                                <p className="text-gray-600">304,Jai House,
                                    Near Rambaug BRTS stand, beside Dangee Dums,
                                    Maninagar.
                                    Ahmedabad</p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT - The Form */}
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative">

                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Fill the Form Below
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
                                <input
                                    name="name"
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full p-3 border border-gray-200 bg-gray-50 focus:bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                                <input
                                    name="phone"
                                    onChange={handleChange}
                                    placeholder="+91 XXXXX XXXXX"
                                    className="w-full p-3 border border-gray-200 bg-gray-50 focus:bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                                    required
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Location (City & Area) *</label>
                            <input
                                name="location"
                                onChange={handleChange}
                                placeholder="e.g. Navrangpura, Ahmedabad"
                                className="w-full p-3 border border-gray-200 bg-gray-50 focus:bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                                required
                            />
                        </div>

                        {/* Row 3 */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Select std</label>
                            <div className="relative">
                                <select
                                    name="package"
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-200 bg-gray-50 focus:bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition appearance-none"
                                >
                                    <option value="">Select a package...</option>
                                    <option value="basic">1st std</option>
                                    <option value="premium">2nd std</option>
                                    <option value="advanced">3rd std</option>
                                    <option value="advanced">4th std</option>
                                    <option value="advanced">5th std</option>
                                    <option value="advanced">6th std</option>
                                    <option value="advanced">7th std</option>
                                    <option value="advanced">8th std</option>
                                    <option value="advanced">9th std</option>
                                    <option value="advanced">10th std</option>
                                    <option value="advanced">11th std</option>
                                    <option value="advanced">12th std</option>
                                </select>
                                {/* Custom dropdown arrow */}
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Message (Optional)</label>
                            <textarea
                                name="message"
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-200 bg-gray-50 focus:bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition resize-none"
                                rows={4}
                                placeholder="How can we help you?"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                        disabled={loading}
                            type="submit"
                            className="w-full bg-orange-500 text-white font-bold text-lg py-4 rounded-lg hover:bg-orange-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4"
                        >
                            {loading ? "Submitting..." : "Submit Details"}
                        </button>
                        <p className="text-center text-xs text-gray-500 mt-4">
                            Your information is 100% safe and secure.
                        </p>
                    </form>
                </div>

            </div>
        </section>
    );
}