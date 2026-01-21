'use client';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";


const Banner = () => {
 const heroSlides = [
  {
    title: "Fun Toys for Happy Kids",
    description:
      "Explore colorful toys that spark imagination, creativity, and endless smiles.",
    image: "https://i.ibb.co.com/S4tZTj21/pexels-mohit-suthar-1271363-7634510.jpg",
    button: "Shop Toys",
    gradient: "from-pink-500/40 to-purple-700/70",
  },
  {
    title: "Cute & Creative Stationery",
    description:
      "From pencils to notebooks, make learning fun with adorable stationery items.",
    image: "https://i.ibb.co.com/p8WRWcY/pexels-yun-zhu-2157767250-34977218.jpg",
    button: "Explore Stationery",
    gradient: "from-sky-500/40 to-indigo-700/70",
  },
  {
    title: "Play, Learn & Smile",
    description:
      "Safe, educational, and playful products your kids will absolutely love.",
    image: "https://i.ibb.co.com/d8rXh6h/pexels-storiesofdesign-15130364.jpg",
    button: "View Collection",
    gradient: "from-yellow-400/40 to-orange-600/70",
  },
]
;

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-[70vh] relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) => {
            return `<span class="${className} bg-white w-3 h-3 border-2 border-white mx-1 opacity-70 hover:opacity-100 transition-opacity"></span>`;
          }
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${slide.gradient} to-black/60`} />
              
              {/* Content Container */}
              <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Animated Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                  >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto group"
                    >
                      {slide.button}
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-8 cursor-pointer"
                  onClick={scrollToNextSection}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-white/80 text-sm mb-2">Explore More</span>
                    <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center p-1">
                      <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-1 h-2 bg-white rounded-full"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev !text-white !w-12 !h-12 !bg-black/30 !backdrop-blur-sm !rounded-full !left-4 hover:!bg-black/50 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next !text-white !w-12 !h-12 !bg-black/30 !backdrop-blur-sm !rounded-full !right-4 hover:!bg-black/50 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>

      {/* Visual Flow Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Banner;