import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Link2, X } from "lucide-react";
import { Flame, Award, Quote, Play, ExternalLink } from "lucide-react";

// Optimize Cloudinary URLs for better performance
const optimizeCloudinaryUrl = (url, width = 400) => {
  if (!url || !url.includes('cloudinary.com')) return url;
  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
};

export default function Legends({ legends }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-primary-500/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 dark:bg-white/5 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-8 border border-white/10">
            <Flame className="w-4 h-4" />
            <span>Hall of Legends</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            Inspired by the
            <br />
            <span className="gradient-text">Greatest Athletes</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
            Learn from pioneers who transformed fitness and pushed human limits.
            Let their dedication and philosophy inspire your journey.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {legends.map((legend, index) => (
            <motion.div
              key={legend.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelected(legend)}
              className="group cursor-pointer bg-gray-50 dark:bg-white/5 rounded-3xl overflow-hidden border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={optimizeCloudinaryUrl(legend.image)}
                  alt={legend.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {legend.name}
                  </h2>
                  <p className="text-primary-300 text-sm font-medium uppercase tracking-wider">
                    {legend.nickname}
                  </p>
                </div>
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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <div
                className="bg-white dark:bg-[#0a0a0a] rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero Image Side */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto bg-gray-100 dark:bg-white/5">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden"></div>
                  <div className="absolute bottom-0 left-0 p-6 md:hidden">
                    <h2 className="text-3xl font-black text-white mb-1">{selected.name}</h2>
                    <p className="text-primary-300 font-medium">{selected.nickname}</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-3/5 overflow-y-auto bg-white dark:bg-[#0a0a0a]">
                  <div className="p-8 md:p-12">
                    <div className="hidden md:block mb-8">
                      <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                        {selected.name}
                      </h2>
                      <p className="text-xl text-primary-600 dark:text-primary-400 font-medium">
                        {selected.nickname}
                      </p>
                    </div>

                    <div className="space-y-10">
                      {/* Quote */}
                      {selected.quote && (
                        <div className="relative pl-6 border-l-4 border-primary-500">
                          <Quote className="w-8 h-8 text-primary-200 dark:text-primary-800 absolute -top-4 -left-2 opacity-50" />
                          <p className="text-xl font-medium text-gray-900 dark:text-white italic leading-relaxed">
                            "{selected.quote}"
                          </p>
                        </div>
                      )}

                      {/* Achievements */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="w-5 h-5 text-primary-500" />
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                            Achievements
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {selected.achievements}
                        </p>
                      </div>

                      {/* Philosophy */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Flame className="w-5 h-5 text-primary-500" />
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                            Philosophy
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {selected.philosophy}
                        </p>
                      </div>

                      {/* Videos */}
                      {selected.videos?.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Play className="w-5 h-5 text-primary-500" />
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                              Featured Videos
                            </h3>
                          </div>
                          <div className="grid gap-4">
                            {selected.videos.map((url, i) => (
                              <div
                                key={i}
                                className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm"
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
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100 dark:border-white/10">
                        {selected.trainingLink && (
                          <a
                            href={selected.trainingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors"
                          >
                            <Flame className="w-4 h-4" />
                            Training Routine
                          </a>
                        )}
                        {selected.socials?.instagram && (
                          <a
                            href={selected.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-full font-medium transition-colors"
                          >
                            <Instagram className="text-pink-600 w-4 h-4" />
                            Instagram
                          </a>
                        )}
                        {selected.socials?.website && (
                          <a
                            href={selected.socials.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-full font-medium transition-colors"
                          >
                            <Link2 className="text-gray-500 w-4 h-4" />
                            Website
                          </a>
                        )}
                      </div>
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
