import { GoGoal } from "react-icons/go";
import { LiaBrainSolid } from "react-icons/lia";
import { TbMoodCog } from "react-icons/tb";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function HealthObjective({ className }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 py-4 px-6 ${className}`}
    >
      <h2 className="text-5xl font-semibold text-center  text-gray-800 font-serif">
        Align With Your Highest
        <br />
        Health Intentions
      </h2>

      <div className="grid grid-cols-1   md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Left column: 2 stacked cards */}
        <div className="flex flex-col gap-6 col-span-1 ">
          <FlipCard
            title="Intentional Goals"
            desc="Move beyond surface-level targets. Set conscious health intentions rooted in self-respect, balance, and vitality. Your path is unique—and meaningful."
            icon={<GoGoal className="text-pink-500 text-3xl" />}
            iconBg="bg-pink-100"
          />
          <FlipCard
            title="Deeper Self-Awareness"
            desc="Track more than just workouts. Notice your energy, mood, recovery, and rest. Understand patterns that influence your well-being at every level."
            icon={<LiaBrainSolid className="text-yellow-500 text-3xl" />}
            iconBg="bg-yellow-100"
          />
        </div>

        {/* Right column: vertically centered single card */}
        <div className="col-span-1 flex items-center justify-center">
          <FlipCard
            title="Supportive, Adaptive Plans"
            desc="Your routine evolves with you—guided by your progress, readiness, and intuition. Training that honors where you are, and helps you grow with purpose."
            icon={<TbMoodCog className="text-green-500 text-3xl" />}
            iconBg="bg-green-100"
          />
        </div>
      </div>
    </div>
  );
}

function FlipCard({ title, desc, icon, iconBg, customContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ rotateY: 90, opacity: 0 }}
      animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{ transformStyle: "preserve-3d" }}
      className="rounded-2xl p-6 shadow-md bg-white text-left"
    >
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full ${iconBg} mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif">
        {title}
      </h3>
      <p className="text-sm text-gray-600 font-sans">{desc}</p>
      {customContent && customContent}
    </motion.div>
  );
}
