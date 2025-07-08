import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLink, FaTimes } from "react-icons/fa";

export default function InspirationPage({ legends }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center mb-14 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Fitness Icons
        </h1>
        <p className="text-gray-600 text-lg">
          Pioneers whose dedication transformed fitness. Let their journeys
          inspire yours.
        </p>
      </section>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {legends.map((legend) => (
          <motion.div
            key={legend.id}
            whileHover={{ y: -4 }}
            onClick={() => setSelected(legend)}
            className="cursor-pointer bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={legend.image}
                alt={legend.name}
                className="w-full h-full object-cover object-top "
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900">
                {legend.name}
              </h2>
              <p className="text-gray-500 text-sm mb-3">{legend.nickname}</p>
              <p className="text-gray-600 text-sm line-clamp-2">
                {legend.achievements}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

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
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />

            {/* Centered Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <FaTimes className="text-gray-500" />
                </button>

                <div className="aspect-video overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selected.name}
                    </h2>
                    <p className="text-gray-500">{selected.nickname}</p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Achievements
                      </h3>
                      <p className="text-gray-700">{selected.achievements}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Philosophy
                      </h3>
                      <p className="text-gray-700">{selected.philosophy}</p>
                    </div>

                    {selected.quote && (
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary-500">
                        <p className="italic text-gray-700">
                          "{selected.quote}"
                        </p>
                      </div>
                    )}

                    {selected.videos?.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Videos
                        </h3>
                        <div className="grid gap-4">
                          {selected.videos.map((url, i) => (
                            <div
                              key={i}
                              className="aspect-video bg-gray-100 rounded-lg overflow-hidden"
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

                    <div className="flex flex-wrap gap-3 pt-2">
                      {selected.trainingLink && (
                        <a
                          href={selected.trainingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition"
                        >
                          Training Routine
                        </a>
                      )}
                      {selected.socials?.instagram && (
                        <a
                          href={selected.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 flex items-center gap-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
                        >
                          <FaInstagram className="text-pink-600" /> Instagram
                        </a>
                      )}
                      {selected.socials?.website && (
                        <a
                          href={selected.socials.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 flex items-center gap-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
                        >
                          <FaLink /> Website
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
