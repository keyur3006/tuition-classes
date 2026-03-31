"use client";
import Image from "next/image";

    import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold">
        View <span className="text-orange-500">Our Gallery</span>
      </h2>

      <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
        See our learning space and get a glimpse into our facilities & excellence.
      </p>

      {/* Main Video */}
      <div className="mt-10 px-6 md:px-20">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          
          <img
            src="/images/gallery-main.jpg"
            alt="gallery"
            className="w-full h-[250px] md:h-[400px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            
            {/* Play Button */}
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
              ▶
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Images */}
    <div className="mt-10 px-6 md:px-20">
 <Swiper
  slidesPerView={3}
  spaceBetween={20}
  loop={true}
  speed={800}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
  modules={[Autoplay]}   // ✅ MUST
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
    {["/g1.png", "/g2.png", "/g3.png", "/g4.png", "/g5.png", "/g6.png","/g7.png","/g8.png"].map((img, i) => (
      <SwiperSlide key={i}>
        <div className="rounded-xl overflow-hidden shadow-md group">
          <img
            src={img}
            className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-500"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
    </section>
  );
}