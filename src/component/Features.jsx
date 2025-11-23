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
      className="group p-8 rounded-2xl bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700 hover:border-primary-100 dark:hover:border-primary-900 transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/5"
    >
      <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center mb-6 text-gray-900 dark:text-white shadow-sm border border-gray-100 dark:border-gray-800 group-hover:scale-110 transition-transform duration-300">
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

export default function Features() {
  return (
    <section className="section-padding bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Everything you <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-500">need</span>.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Comprehensive tools designed to help you achieve your fitness goals while maintaining complete privacy.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            index={0}
            icon={<Activity className="h-6 w-6" />}
            title="Precision Tracking"
            description="Track every rep, set, and movement with military-grade accuracy."
          />
          <FeatureCard
            index={1}
            icon={<LineChart className="h-6 w-6" />}
            title="Progress Analytics"
            description="Visualize your journey with beautiful charts and insights."
          />
          <FeatureCard
            index={2}
            icon={<Shield className="h-6 w-6" />}
            title="Privacy First"
            description="End-to-end encryption ensures your data stays yours."
          />
          <FeatureCard
            index={3}
            icon={<Trophy className="h-6 w-6" />}
            title="Goal Achievement"
            description="Set and crush your fitness goals with intelligent tracking."
          />
          <FeatureCard
            index={4}
            icon={<Users className="h-6 w-6" />}
            title="Workout History"
            description="Access your complete exercise history instantly."
          />
          <FeatureCard
            index={5}
            icon={<Zap className="h-6 w-6" />}
            title="Smart Insights"
            description="AI-powered recommendations adapt to your progress."
          />
        </div>
      </div>
    </section>
  );
}

