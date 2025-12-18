/* eslint-disable no-unused-vars */
import CTA from "./CTA";
import { motion } from "framer-motion";
import { Shield, Lock, Activity, Check } from "lucide-react";

export default function AboutUsSection() {
  const values = [
    {
      icon: Lock,
      title: "Privacy by Design",
      description: "Your health data is encrypted on your device before it ever reaches our servers. We literally cannot see your data."
    },
    {
      icon: Activity,
      title: "Smart & Adaptive",
      description: "AI-powered training that evolves with you. Every workout is personalized to your goals and progress."
    },
    {
      icon: Shield,
      title: "Zero Compromise",
      description: "No ads. No data selling. No third-party tracking. Your trust is our foundation."
    }
  ];

  const reasons = [
    "End-to-end encryption on all health data",
    "No third-party access to your information",
    "You own and control your fitness journey",
    "Built by fitness enthusiasts who value privacy"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-44 pb-20 px-6 sm:px-8 lg:px-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-orange-500/5 via-primary-500/5 to-orange-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-500 font-medium mb-4 tracking-wide uppercase text-sm">About FitCrypt</p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              Your fitness data
              <br />
              <span className="gradient-text">belongs to you</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We're building the fitness platform we always wanted—powerful, private, and designed to help you become your best self.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We Built Section - Redesigned */}
      <section className="py-20 px-6 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                Why we built FitCrypt
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                We were tired of fitness apps that treated our personal health data as a product to be sold. 
                So we built something different—a platform where your privacy isn't just a feature, it's the foundation.
              </p>
              
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-orange-500/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white dark:bg-white/5 rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-white/10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 pb-6 border-b border-gray-100 dark:border-white/10">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary-500 to-orange-500 flex items-center justify-center">
                        <Lock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Client-Side Encryption</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Data encrypted before upload</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pb-6 border-b border-gray-100 dark:border-white/10">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary-500 to-orange-500 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Zero Knowledge</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">We can't access your data</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary-500 to-orange-500 flex items-center justify-center">
                        <Activity className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Full Control</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Export or delete anytime</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 bg-gray-50 dark:bg-white/[0.02] border-y border-gray-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              What we stand for
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              These aren't just features—they're our promises to you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-primary-500/10 to-orange-500/10 dark:from-primary-500/20 dark:to-orange-500/20 text-primary-500 mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: "0", label: "Data breaches", sublabel: "Ever" },
              { value: "100%", label: "Client-side", sublabel: "Encryption" },
              { value: "∞", label: "Your data", sublabel: "Yours forever" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-gray-900 dark:text-white font-medium text-sm">{stat.label}</p>
                <p className="text-gray-400 text-xs">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
