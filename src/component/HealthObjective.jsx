import { GoGoal } from "react-icons/go";
import { LiaBrainSolid } from "react-icons/lia";
import { TbMoodCog } from "react-icons/tb";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function HealthObjective() {
  return (
    <section className="section-padding bg-white dark:bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Align With Your <span className="gradient-text">True Intentions</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Move beyond physical metrics to track what truly matters for
            sustainable wellbeing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          <ObjectiveCard
            icon={<GoGoal className="h-5 w-5" />}
            title="Purposeful Goals"
            description="Set intentions aligned with your values, not just arbitrary targets."
          />
          <ObjectiveCard
            icon={<LiaBrainSolid className="h-5 w-5" />}
            title="Body Awareness"
            description="Develop deeper understanding of your energy and recovery patterns."
          />
          <ObjectiveCard
            icon={<TbMoodCog className="h-5 w-5" />}
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
      className="group p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
    >
      <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400 border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}

