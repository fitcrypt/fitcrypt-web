import { motion } from "framer-motion";

export default function GridSlides({ className, card }) {
  return (
    <div className={`grid grid-cols-12 gap-4 w-full h-full p-2 ${className}`}>
      {/* Main Large Image */}
      <div className="col-span-7 h-full rounded-3xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
          src={card.image}
          alt="Workout"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Column */}
      <div className="col-span-5 h-full flex flex-col gap-4">
        {/* Caption Box */}
        <div className="h-1/4 w-full rounded-3xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center px-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="text-xl font-bold text-gray-900 dark:text-white text-center relative z-10">
            {card.caption}
          </span>
        </div>

        {/* Vertical Image */}
        <div className="h-3/4 w-full rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
            src={card.verticalImage}
            alt="Exercise"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
