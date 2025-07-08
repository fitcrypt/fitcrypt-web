import { GoGoal } from "react-icons/go";
import { LiaBrainSolid } from "react-icons/lia";
import { TbMoodCog } from "react-icons/tb";
import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

function IntentionsCard({ icon, title, description, color }) {
  const colorClasses = {
    pink: "from-pink-100 to-pink-50 text-pink-600",
    indigo: "from-indigo-100 to-indigo-50 text-indigo-600",
    green: "from-green-100 to-green-50 text-green-600",
    blue: "from-blue-100 to-blue-50 text-blue-600",
    purple: "from-purple-100 to-purple-50 text-purple-600",
  };

  return (
    <div className="group relative bg-white p-6 rounded-xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-lg overflow-hidden">
      {/* Gradient background effect on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
      ></div>

      <div
        className={`w-14 h-14 bg-gradient-to-br ${colorClasses[color]} rounded-xl flex items-center justify-center mb-5 shadow-inner`}
      >
        {React.cloneElement(icon, { className: "h-6 w-6" })}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 mb-3 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
        {description}
      </p>
    </div>
  );
}

export default function HealthObjective() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 text-sm font-medium bg-primary-50 text-primary-600 rounded-full mb-4">
          HOLISTIC APPROACH
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Align With Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-300">
            True Intentions
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-200 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Move beyond physical metrics to track what truly matters for
          sustainable wellbeing.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FlipCard
          icon={<GoGoal className="h-6 w-6" />}
          title="Purposeful Goals"
          description="Set intentions aligned with your values, not just arbitrary targets."
          color="pink"
        />
        <FlipCard
          icon={<LiaBrainSolid className="h-6 w-6" />}
          title="Body Awareness"
          description="Develop deeper understanding of your energy and recovery patterns."
          color="indigo"
        />
        <FlipCard
          icon={<TbMoodCog className="h-6 w-6" />}
          title="Adaptive Training"
          description="Programs that evolve with your changing needs and intuition."
          color="green"
        />
      </div>
    </section>
  );
}

function FlipCard({ icon, title, description, color }) {
  const colorClasses = {
    pink: "from-pink-100 to-pink-50 text-pink-600",
    indigo: "from-indigo-100 to-indigo-50 text-indigo-600",
    green: "from-green-100 to-green-50 text-green-600",
    blue: "from-blue-100 to-blue-50 text-blue-600",
    purple: "from-purple-100 to-purple-50 text-purple-600",
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ rotateY: 90, opacity: 0 }}
      animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{ transformStyle: "preserve-3d" }}
      className="rounded-2xl p-6 shadow-md bg-white text-left hover:shadow-xl "
    >
      <div className="group relative bg-white p-6 rounded-xl overflow-hidden">
        {/* Gradient background effect on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
        ></div>

        <div
          className={`w-14 h-14 bg-gradient-to-br ${colorClasses[color]} rounded-xl flex items-center justify-center mb-5 shadow-inner`}
        >
          {React.cloneElement(icon, { className: "h-6 w-6" })}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 mb-3 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
