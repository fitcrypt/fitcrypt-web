import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";


export default function InspirationPage({ legends }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-background-200 py-10 px-4 md:px-12 relative overflow-hidden">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Legends Who Inspire
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          The legends whose dedication redefined fitness. Let their stories fuel your own.
        </p>
      </section>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {legends.map((legend) => (
          <motion.div
            key={legend.id}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(legend)}
            className="cursor-pointer bg-primary-500 text-onPrimary rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all "
          >
            <img
              src={legend.image}
              alt={legend.name}
              className="w-full h-80 object-cover object-top"
            />
            <div className="p-5  flex-1 flex flex-col">
              <h2 className="text-2xl font-bold mb-1">{legend.name}</h2>
              <p className="text-md italic mb-2">{legend.nickname}</p>
              <p className="text-sm">{legend.achievements}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Center Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Centered Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-background-200 rounded-xl shadow-xl max-w-xl w-full max-h-[90vh] overflow-y-auto relative">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
                >
                  ×
                </button>

                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-60 object-cover object-top rounded-t-xl"
                />

                <div className="p-6 text-gray-700">
                  <h2 className="text-3xl font-bold text-gray-800">{selected.name}</h2>
                  <p className="text-md italic">{selected.nickname}</p>

                  <p className="mt-4 text-sm font-semibold text-gray-800">Achievements:</p>
                  <p className="text-sm">{selected.achievements}</p>

                  <p className="mt-4 text-sm font-semibold text-gray-800">Training Philosophy:</p>
                  <p className="text-sm">{selected.philosophy}</p>

                  {selected.quote && (
                    <>
                      <p className="mt-4 text-sm font-semibold text-gray-800">Famous Quote:</p>
                      <p className="italic text-sm">“{selected.quote}”</p>
                    </>
                  )}

                  {/* Carousel / Videos */}
                  {selected.videos?.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <p className="text-sm font-semibold text-gray-800">Featured Videos:</p>
                      {selected.videos.map((url, i) => (
                        <iframe
                          key={i}
                          src={url}
                          className="w-full h-52 rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ))}
                    </div>
                  )}

                  {/* CTA Link */}
                  {selected.trainingLink && (
                    <a
                      href={selected.trainingLink}
                      target="_blank"
                      className="mt-6 inline-block bg-primary-500 text-onPrimary px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                    >
                      See Training Routine →
                    </a>
                  )}

                  {/* Website */}
                  {selected.socials?.website && (
                    <a
                      href={selected.socials.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-2 text-primary-500 hover:underline"
                    >
                      <FaEarthAsia /> Check Website
                    </a>
                  )}
                  {/* Social */}
                  {selected.socials?.instagram && (
                    <a
                      href={selected.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-2 text-primary-500 hover:underline"
                    >
                      <FaInstagram /> Follow on Instagram
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
