import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-20 mt-20 relative overflow-hidden">

      {/* Decorative Blur Shapes (Subtle) */}
      <div className="absolute top-0 right-10 w-64 h-64 bg-yellow-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* Brand & Description */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Aarna <span className="text-orange-500">Classes</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            Empowering students with personalized learning, expert educators, and a structured curriculum to achieve brilliant academic results. Let's grow together!
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex flex-col items-center justify-center hover:bg-orange-500 hover:text-white transition group">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex flex-col items-center justify-center hover:bg-orange-500 hover:text-white transition group">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex flex-col items-center justify-center hover:bg-orange-500 hover:text-white transition group">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex flex-col items-center justify-center hover:bg-orange-500 hover:text-white transition group">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 tracking-wide">Quick Links</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="hover:text-orange-500 transition hover:translate-x-1 inline-block">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-500 transition hover:translate-x-1 inline-block">About Us</Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-orange-500 transition hover:translate-x-1 inline-block">Our Programs</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-orange-500 transition hover:translate-x-1 inline-block">Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500 transition hover:translate-x-1 inline-block">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Explore Classes */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 tracking-wide">Courses Offered</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
              <span>Primary Section (Grades 1-5)</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
              <span>Middle Section (Grades 6-8)</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
              <span>High School (Grades 9-10)</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
              <span>Specialized Board Prep</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
              <span>Foundation Courses</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 tracking-wide">Contact Us</h3>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <MapPin className="text-orange-500 shrink-0 mt-1" size={20} />
              <span className="text-sm">304,Jai House,
Near Rambaug BRTS stand, beside Dangee Dums,
Maninagar.
Ahmedabad</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-orange-500 shrink-0" size={20} />
              <span className="text-sm">+91 95378 49416</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-orange-500 shrink-0" size={20} />
              <span className="text-sm">aarnaclasses2012@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Aarna Classes. All Rights Reserved. Designed with ❤️ by Antigravity.</p>
      </div>

    </footer>
  );
}
