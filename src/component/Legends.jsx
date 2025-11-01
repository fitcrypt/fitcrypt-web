import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLink, FaTimes } from "react-icons/fa";
import { Flame, Award, Quote } from "lucide-react";

export default function InspirationPage({ legends }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-6">
            <Flame className="w-4 h-4" />
            HALL OF LEGENDS
          </div>
          <h1 className="heading-xl text-gray-900 dark:text-white mb-6 leading-[1.1]">
            Get Inspired by the
            <br />
            <span className="gradient-text">Greatest Athletes</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Learn from pioneers who transformed fitness and pushed human limits. 
            Let their dedication and philosophy inspire your journey.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="pb-32 px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {legends.map((legend, index) => (
            <motion.div
              key={legend.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelected(legend)}
              className="group cursor-pointer bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:border-primary-300 dark:hover:border-primary-700"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={legend.image}
                  alt={legend.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {legend.name}
                </h2>
                <p className="text-primary-600 dark:text-primary-400 text-sm font-semibold mb-3">
                  {legend.nickname}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                  {legend.achievements}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative my-8">
                {/* Close Button */}
                <button
                  onClick={() => setSelected(null)}
                  className="sticky top-4 float-right mr-4 z-10 p-3 rounded-2xl bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all shadow-lg"
                >
                  <FaTimes className="text-gray-600 dark:text-gray-400" />
                </button>

                {/* Hero Image */}
                <div className="aspect-[21/9] overflow-hidden rounded-t-3xl">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                          {selected.name}
                        </h2>
                        <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold">
                          {selected.nickname}
                        </p>
                      </div>
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-2xl">
                        <Award className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Achievements */}
                    <div className="card-modern">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                          Achievements
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {selected.achievements}
                      </p>
                    </div>

                    {/* Philosophy */}
                    <div className="card-modern">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                          <Flame className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                          Philosophy
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {selected.philosophy}
                      </p>
                    </div>

                    {/* Quote */}
                    {selected.quote && (
                      <div className="relative bg-gradient-to-br from-primary-50 to-orange-50 dark:from-primary-900/20 dark:to-orange-900/20 p-8 rounded-3xl border-l-4 border-primary-500 dark:border-primary-400 shadow-lg">
                        <Quote className="absolute top-6 right-6 w-12 h-12 text-primary-300 dark:text-primary-700" />
                        <p className="text-xl font-semibold text-gray-900 dark:text-white italic leading-relaxed">
                          "{selected.quote}"
                        </p>
                      </div>
                    )}

                    {/* Videos */}
                    {selected.videos?.length > 0 && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Featured Videos
                        </h3>
                        <div className="grid gap-6">
                          {selected.videos.map((url, i) => (
                            <div
                              key={i}
                              className="aspect-video bg-gray-100 dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg"
                            >
                              <iframe
                                src={url}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {selected.trainingLink && (
                        <a
                          href={selected.trainingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex items-center gap-2"
                        >
                          <Flame className="w-5 h-5" />
                          Training Routine
                        </a>
                      )}
                      {selected.socials?.instagram && (
                        <a
                          href={selected.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex items-center gap-2"
                        >
                          <FaInstagram className="text-pink-600 dark:text-pink-400" /> 
                          Instagram
                        </a>
                      )}
                      {selected.socials?.website && (
                        <a
                          href={selected.socials.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex items-center gap-2"
                        >
                          <FaLink /> 
                          Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
