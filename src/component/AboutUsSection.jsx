/* eslint-disable no-unused-vars */
import CTA from "./CTA";
import { motion } from "framer-motion";
import { Shield, Users, Zap, Lock, Activity, Globe } from "lucide-react";

export default function AboutUsSection() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
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
          className="absolute -top-[10%] left-[10%] w-[600px] h-[600px] bg-primary-100/20 dark:bg-primary-900/10 rounded-full blur-3xl"
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
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-orange-100/20 dark:bg-orange-900/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section - Redesigned with more spacing */}
      <div className="relative pt-32 md:pt-48 pb-32 px-6 sm:px-8 lg:px-12 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium text-sm mb-8 border border-gray-200 dark:border-gray-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Our Mission
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Fitness, Reimagined <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-orange-500 to-primary-600">
                  For Privacy First
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                We empower you to own your health journey—no compromises, no data
                selling, just results. Experience fitness technology that puts your
                privacy first.
              </p>
            </motion.div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Redefining Fitness Technology
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            We're building a fitness platform that respects your privacy while
            delivering exceptional results. Your data never leaves your control.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lock,
              title: "End-to-End Encryption",
              description: "Your data is encrypted before it leaves your device. Not even our team can access your private information.",
              color: "text-blue-600 dark:text-blue-400",
              bg: "bg-blue-50 dark:bg-blue-900/20"
            },
            {
              icon: Activity,
              title: "Smart Training Plans",
              description: "AI-powered programs adapt to your progress, preferences, and feedback for optimal results.",
              color: "text-purple-600 dark:text-purple-400",
              bg: "bg-purple-50 dark:bg-purple-900/20"
            },
            {
              icon: Shield,
              title: "Zero Data Sharing",
              description: "We don't sell, share, or monetize your information. Your privacy is our product promise.",
              color: "text-green-600 dark:text-green-400",
              bg: "bg-green-50 dark:bg-green-900/20"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 dark:bg-black py-24 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
            {[
              { value: "10K+", label: "Active Users" },
              { value: "99.9%", label: "Uptime Reliability" },
              { value: "0", label: "Data Breaches" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <p className="text-6xl font-black text-white mb-2 tracking-tight">{stat.value}</p>
                <p className="text-primary-400 font-medium text-lg uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
