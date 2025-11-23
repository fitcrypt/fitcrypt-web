/* eslint-disable no-unused-vars */
import AccessAnywhereSection from "../component/AccessAnywhereSection";
import EncryptedJourney from "../component/EncryptedJourney";
import Banner from "../component/Banner";
import Features from "../component/Features";
import HealthObjective from "../component/HealthObjective";
import WorkoutSlider from "../component/WorkoutSlider";
import CTA from "../component/CTA";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Fixed Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-orange-100/30 dark:bg-orange-900/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        <Banner />
        <Features />
        <WorkoutSlider />
        <EncryptedJourney />
        <HealthObjective />
        <AccessAnywhereSection />
        <CTA />
      </div>
    </div>
  );
}
 