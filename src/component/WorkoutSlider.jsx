import { useState } from "react";
import "swiper/css";
import Button from "./Button.jsx";
import { motion } from "framer-motion";
import GridSlider from "./GridSlider.jsx";
import SingleSlider from "./SingleSlider.jsx";

const slides = [
  {
    description:
      "01 Embrace movement for a healthier you. get motivated, stay active, and reap the benefits of a vibrant, well-nurtured body",
    image:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349721/running_q7gtsl.jpg",
    verticalImage:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349720/explosiveJump_lbqulc.jpg",
    caption: "Fuel the Fire, Keep Moving",
  },
  {
    description:
      "02 Energize your lifestyle, get motivated, stay active, and reap the benefits of a vibrant, well-nurtured body",
    image:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349721/yoga_ne7z6f.jpg",
    verticalImage:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349720/JumpingJacks_dwtsau.jpg",
    caption: "Balance Grace with Grit",
  },
  {
    description:
      "01 Embrace movement for a healthier you. get motivated, stay active, and reap the benefits of a vibrant, well-nurtured body",
    image:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349721/ropeClimbing_sj7r2u.jpg",
    verticalImage:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349720/flatBench_vivxrf.jpg",
    caption: "Rise Higher, Press Stronger",
  },
  {
    description:
      "02 Energize your lifestyle, get motivated, stay active, and reap the benefits of a vibrant, well-nurtured body",
    image:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349720/lunges_pkyyyj.jpg",
    verticalImage:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349720/bicepsCurl_pvjcyf.jpg",
    caption: "Move with Purpose, Lift with Power",
  },
];

export default function WorkoutSlider({ className }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`max-w-7xl mx-auto ${className}`}>
      <div className="h-minus-header max-w-7xl grid grid-cols-6 gap-4 p-2 place-items-center">
        {/* LEFT */}
        <div className="md:col-span-2 col-span-6 w-full h-full md:h-[calc(70vh)]">
          {/* FLEX */}
          <div className="flex flex-col md:justify-between justify-center h-full w-full">
            {/* LEFT-ABOVE */}
            <div className="flex flex-col gap-2 md:gap-6 ">
              <div className="font-bold text-4xl md:text-start text-center">
                Move to
                <br />
                Maintain your
                <br /> Health
              </div>
              {/* LEFT-SLIDER */}
              <div className="w-full md:hidden h-[calc(40vh)]">
                <SingleSlider slides={slides} />
              </div>
              <div className="text-center text-onBackground md:text-start">
                Energize your lifestyle, embrace movement for a healthier you.
                get motivated, stay ative, and reap the benefits of a vibrant,
                well-nurtured body
              </div>
              <div className="mt-2 w-full  flex justify-center md:block">
                <Button text="About Us" className="py-4  px-6 text-onPrimary" />
              </div>
            </div>
            {/* LEFT-BOTTOM */}
            <div className="w-full hidden md:block">
              <GridSliderBar activeIndex={activeIndex} />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block col-span-4 w-full h-[calc(70vh)]  ">
          <GridSlider
            className="h-full w-full"
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            slides={slides}
          />
        </div>
      </div>
    </div>
  );
}


function GridSliderBar({ className = "", activeIndex }) {
  return (
    <div className={`grid grid-cols-4 gap-2 w-full ${className}`}>
      {slides.map((_, i) => (
        <div
          key={i}
          className="relative h-2 rounded-full overflow-hidden bg-background-400"
        >
          <motion.span
            className="absolute inset-0 bg-black"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{
              scaleX: i === activeIndex ? 1 : 0,
              transformOrigin: i === activeIndex ? "left" : "right",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      ))}
    </div>
  );
}
