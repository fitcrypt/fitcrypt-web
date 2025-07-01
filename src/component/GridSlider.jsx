import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay  } from "swiper/modules";
import GridSlides from "./GridSlides.jsx";

export default function GridSlider({
  className,
  activeIndex,
  setActiveIndex,
  slides,
}) {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className={`${className} mySwiper`}
    >
      {slides.map((card, i) => (
        <SwiperSlide key={i}>
          <motion.div
            className=" h-full w-full flex items-center justify-center shadow-lg"
            animate={{
              scale: activeIndex === i ? 1 : 0.6,
              opacity: activeIndex === i ? 1 : 0.6,
            }}
            transition={{ duration: 1 }}
          >
            <GridSlides card={card} />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
