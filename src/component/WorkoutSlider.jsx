import { useState } from "react";
import "swiper/css";
import Button from "./Button.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import GridSlider from "./GridSlider.jsx";
import SingleSlider from "./SingleSlider.jsx";
import { Link } from "react-router-dom";

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
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className={`max-w-7xl mx-auto ${className}`}>
        <div className="h-minus-header max-w-7xl grid grid-cols-6 gap-4 p-2 place-items-center">
          {/* LEFT */}
          <div className="md:col-span-2 col-span-6 w-full h-full md:h-[70vh]">
            <div className="flex flex-col justify-between h-full w-full gap-6 md:gap-8">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 md:gap-8"
              >
                <h1 className="heading-lg text-gray-900 dark:text-white md:text-left text-center leading-[1.1]">
                  Move to
                  <br />
                  <span className="gradient-text">Maintain</span> your
                  <br />
                  Health
                </h1>

                {/* Mobile Slider */}
                <div className="w-full md:hidden h-[40vh]">
                  <SingleSlider slides={slides} />
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-center md:text-left text-lg md:text-xl leading-relaxed">
                  Energize your lifestyle, embrace movement for a healthier you.
                  Get motivated, stay active, and achieve your goals.
                </p>

                <div className="mt-4 w-full flex justify-center md:justify-start">
                  <Link to="/about-us" className="inline-block">
                    <button className="btn-primary text-lg">
                      About Us
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* Slider Indicators (Desktop) */}
              <div className="hidden md:block w-full">
                <div className="grid grid-cols-4 gap-2">
                  {slides.map((_, i) => (
                    <div
                      key={i}
                      className="relative h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary-500 dark:bg-primary-400 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX: i === activeIndex ? 1 : 0,
                          transformOrigin: i === activeIndex ? "left" : "right",
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                    </div>
                  ))}
                </div>
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
    </div>
  );
}

function GridSliderBar({ className = "", activeIndex }) {
  return (
    <div className={`grid grid-cols-4 gap-2 w-full ${className}`}>
      {slides.map((_, i) => (
        <div
          key={i}
          className="relative h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700"
        >
          <motion.span
            className="absolute inset-0 bg-primary-500 dark:bg-primary-400"
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
