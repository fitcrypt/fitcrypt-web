import { Activity, Trophy, Users, Zap, Shield, LineChart } from "lucide-react";
import { motion } from "framer-motion";

function FeatureCard({ icon, title, description, index, color }) {
  const colors = {
    orange: "from-orange-500 to-pink-500",
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    green: "from-green-500 to-emerald-500",
    red: "from-red-500 to-orange-500",
    indigo: "from-indigo-500 to-purple-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group card-modern relative overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors[color]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      <div className={`w-16 h-16 bg-gradient-to-br ${colors[color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
        {description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-6">
            POWERFUL FEATURES
          </span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text">Transform Your Fitness</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools designed to help you achieve your fitness goals while maintaining complete privacy
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            index={0}
            icon={<Activity className="h-8 w-8" />}
            title="Precision Tracking"
            description="Track every rep, set, and movement with military-grade accuracy."
            color="orange"
          />
          <FeatureCard
            index={1}
            icon={<LineChart className="h-8 w-8" />}
            title="Progress Analytics"
            description="Visualize your journey with beautiful charts and insights."
            color="blue"
          />
          <FeatureCard
            index={2}
            icon={<Shield className="h-8 w-8" />}
            title="Privacy First"
            description="End-to-end encryption ensures your data stays yours."
            color="purple"
          />
          <FeatureCard
            index={3}
            icon={<Trophy className="h-8 w-8" />}
            title="Goal Achievement"
            description="Set and crush your fitness goals with intelligent tracking."
            color="green"
          />
          <FeatureCard
            index={4}
            icon={<Users className="h-8 w-8" />}
            title="Workout History"
            description="Access your complete exercise history instantly."
            color="red"
          />
          <FeatureCard
            index={5}
            icon={<Zap className="h-8 w-8" />}
            title="Smart Insights"
            description="AI-powered recommendations adapt to your progress."
            color="indigo"
          />
        </div>
      </div>
    </section>
  );
}
