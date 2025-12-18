/* eslint-disable no-unused-vars */
import { Activity, Trophy, Users, Zap, Shield, LineChart } from "lucide-react";
import { motion } from "framer-motion";

function FeatureCard({ icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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

export default function Features() {
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
            Everything you <span className="gradient-text">need</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive tools designed for your fitness journey with complete privacy.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard
            index={0}
            icon={<Activity className="h-5 w-5" />}
            title="Precision Tracking"
            description="Track every rep, set, and movement with accuracy."
          />
          <FeatureCard
            index={1}
            icon={<LineChart className="h-5 w-5" />}
            title="Progress Analytics"
            description="Visualize your journey with beautiful insights."
          />
          <FeatureCard
            index={2}
            icon={<Shield className="h-5 w-5" />}
            title="Privacy First"
            description="End-to-end encryption ensures your data stays yours."
          />
          <FeatureCard
            index={3}
            icon={<Trophy className="h-5 w-5" />}
            title="Goal Achievement"
            description="Set and crush your fitness goals with smart tracking."
          />
          <FeatureCard
            index={4}
            icon={<Users className="h-5 w-5" />}
            title="Workout History"
            description="Access your complete exercise history instantly."
          />
          <FeatureCard
            index={5}
            icon={<Zap className="h-5 w-5" />}
            title="Smart Insights"
            description="AI-powered recommendations adapt to your progress."
          />
        </div>
      </div>
    </section>
  );
}

