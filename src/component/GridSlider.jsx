/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import GridSlides from "./GridSlides.jsx";

export default function GridSlider({
  className,
  activeIndex,
  setActiveIndex,
  slides,
}) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      loop={true}
      speed={800}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className={`${className} rounded-3xl`}
    >
      {slides.map((card, i) => (
        <SwiperSlide key={i}>
          <div className="h-full w-full">
            <GridSlides card={card} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
