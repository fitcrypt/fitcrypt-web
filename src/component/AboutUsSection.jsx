/* eslint-disable no-unused-vars */
import CTA from "./CTA";
import { motion } from "framer-motion";
import { Shield, Lock, Activity, Heart, Target, Sparkles, Check, Users, Zap } from "lucide-react";

export default function AboutUsSection() {
  const values = [
    {
      icon: Lock,
      title: "Privacy by Design",
      description: "Your data is encrypted with AES-256 encryption. We take your privacy seriously—always."
    },
    {
      icon: Zap,
      title: "Smart & Adaptive",
      description: "AI-powered training that evolves with you. Every workout personalized to your goals."
    },
    {
      icon: Shield,
      title: "Zero Compromise",
      description: "No ads. No data selling. No third-party tracking. Your trust is our foundation."
    }
  ];

  const features = [
    { icon: Lock, label: "AES-256 Encryption" },
    { icon: Shield, label: "Zero Data Selling" },
    { icon: Activity, label: "Full Control" }
  ];

  const stats = [
    { value: "0", label: "Data Breaches", sublabel: "Ever" },
    { value: "100%", label: "Encrypted", sublabel: "Always" },
    { value: "∞", label: "Your Data", sublabel: "Yours Forever" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-40 pb-12 md:pb-16 px-6 sm:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-gradient-to-r from-primary-500/10 via-orange-500/5 to-primary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-500/10 dark:bg-primary-500/20 border border-primary-500/20">
              <Heart className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400">About FitCrypt</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              Your fitness data
              <br />
              <span className="gradient-text">belongs to you</span>
            </h1>

            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
              We're building the fitness platform we always wanted—powerful, private, and designed to help you become your best self.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-6 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <item.icon className="w-4 h-4 text-primary-500" />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 px-6 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
                Why we built <span className="gradient-text">FitCrypt</span>
              </h2>
              <div className="space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed">
                <p>
                  We were tired of fitness apps that treated our personal health data as a product to be sold. Every time we logged a workout, we wondered: who else is seeing this?
                </p>
                <p>
                  So we built something different—a platform where your privacy isn't just a feature, it's the foundation. No compromises. No exceptions.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Military-grade encryption on all health data",
                  "No third-party access to your information",
                  "You own and control your fitness journey",
                  "Built by fitness enthusiasts who value privacy"
                ].map((item, index) => (
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
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Security Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-orange-500/20 rounded-2xl blur-2xl" />
                <div className="relative bg-gray-50 dark:bg-white/[0.02] rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
                  <div className="space-y-5">
                    {[
                      { icon: Lock, title: "Secure Server Encryption", desc: "AES-256 encrypted on our servers" },
                      { icon: Shield, title: "Zero Selling", desc: "Your data is never sold" },
                      { icon: Activity, title: "Full Control", desc: "Export or delete anytime" }
                    ].map((item, index) => (
                      <div key={index} className={`flex items-center gap-4 ${index < 2 ? 'pb-5 border-b border-gray-100 dark:border-white/5' : ''}`}>
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-primary-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Cards matching home page style */}
      <section className="py-12 md:py-16 px-6 sm:px-8 lg:px-16 bg-gray-50 dark:bg-white/[0.02] border-y border-gray-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              What we <span className="gradient-text">stand for</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              These aren't just features—they're our promises to you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-7 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-xl flex items-center justify-center mb-5 text-primary-600 dark:text-primary-400 border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-6 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 md:gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-5xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-gray-900 dark:text-white font-medium text-xs md:text-sm">{stat.label}</p>
                <p className="text-gray-400 text-xs">{stat.sublabel}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
