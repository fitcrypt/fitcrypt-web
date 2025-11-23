import { useState } from "react";
import "swiper/css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import GridSlider from "./GridSlider.jsx";
import SingleSlider from "./SingleSlider.jsx";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    description:
      "Embrace movement for a healthier you. Get motivated, stay active, and reap the benefits of a vibrant, well-nurtured body.",
    image:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349721/running_q7gtsl.jpg",
    verticalImage:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349720/explosiveJump_lbqulc.jpg",
    caption: "Fuel the Fire",
  },
  {
    description:
      "Energize your lifestyle. Find balance between strength and flexibility for a complete fitness journey.",
    image:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349721/yoga_ne7z6f.jpg",
    verticalImage:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349720/JumpingJacks_dwtsau.jpg",
    caption: "Balance & Grace",
  },
  {
    description:
      "Push your limits. Challenge yourself with high-intensity workouts designed to build endurance and power.",
    image:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349721/ropeClimbing_sj7r2u.jpg",
    verticalImage:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349720/flatBench_vivxrf.jpg",
    caption: "Rise Higher",
  },
  {
    description:
      "Build strength that lasts. Focus on form and consistency to develop a powerful physique.",
    image:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349720/lunges_pkyyyj.jpg",
    verticalImage:
      "https://res.cloudinary.com/dyqibxntm/image/upload/v1751349720/bicepsCurl_pvjcyf.jpg",
    caption: "Lift with Power",
  },
];

export default function WorkoutSlider({ className }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-transparent transition-colors duration-300 py-24">
      <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-4 flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
                Move to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-500">Maintain</span>
              </h2>

              {/* Mobile Slider */}
              <div className="block lg:hidden w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <SingleSlider slides={slides} />
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Energize your lifestyle, embrace movement for a healthier you.
                Get motivated, stay active, and achieve your goals.
              </p>

              <Link to="/about-us" className="inline-flex">
                <button className="btn-primary flex items-center gap-2 group">
                  About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              {/* Slider Indicators (Desktop) */}
              <div className="hidden lg:flex gap-3 pt-8">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIndex 
                        ? "w-12 bg-gray-900 dark:bg-white" 
                        : "w-4 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SLIDER (Desktop) */}
          <div className="hidden lg:block lg:col-span-8 h-[600px] rounded-3xl overflow-hidden">
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

