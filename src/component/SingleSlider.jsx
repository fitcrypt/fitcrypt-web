import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Scrollbar } from "swiper/modules";

export default function SingleSlider({ className, slides }) {
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar, Autoplay]}
        className={`mySwiper h-full w-full flex items-center justify-center ${className}`}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setSliderIndex(swiper.realIndex)}
      >
        {slides.map((card, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="h-full w-full flex items-center justify-center text-2xl shadow-lg"
              animate={{
                scale: sliderIndex === i ? 1 : 0.6,
                opacity: sliderIndex === i ? 1 : 0.6,
              }}
              transition={{ duration: 1 }}
            >
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                <img src={card.image} alt="image" className="rounded-2xl" />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
