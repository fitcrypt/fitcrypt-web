import { GoGoal } from "react-icons/go";
import { LiaBrainSolid } from "react-icons/lia";
import { TbMoodCog } from "react-icons/tb";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function HealthObjective() {
  return (
    <section className="section-padding bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Align With Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-500">True Intentions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
            Move beyond physical metrics to track what truly matters for
            sustainable wellbeing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <ObjectiveCard
            icon={<GoGoal className="h-6 w-6" />}
            title="Purposeful Goals"
            description="Set intentions aligned with your values, not just arbitrary targets."
          />
          <ObjectiveCard
            icon={<LiaBrainSolid className="h-6 w-6" />}
            title="Body Awareness"
            description="Develop deeper understanding of your energy and recovery patterns."
          />
          <ObjectiveCard
            icon={<TbMoodCog className="h-6 w-6" />}
            title="Adaptive Training"
            description="Programs that evolve with your changing needs and intuition."
          />
        </div>
      </div>
    </section>
  );
}

function ObjectiveCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-100 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm"
    >
      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-gray-900 dark:text-white shadow-sm border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

