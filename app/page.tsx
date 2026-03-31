// app/page.tsx
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";
import WeDoing from "./components/WeDoing";
import Programs from "./components/OurPrograms";
import PopularCourses from "./components/PopularCourses";
import Gallery from "./components/Gallery";
import FaqSection from "./components/FaqSection";
import { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Toaster position="top-right" />
      <Hero/>
      <Achievements/>
      <WeDoing/>
      <Programs/>
      <PopularCourses/>
      <Gallery/>
      <FaqSection/>
    </>
  );
}