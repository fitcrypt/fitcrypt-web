const CTA = () => {
  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent w-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dyqibxntm/image/upload/v1751349693/barbell_nfbpd8.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to train with privacy?
        </h2>
        <p className="text-xl text-primary-100 mb-8">
          Join our community of health-conscious athletes today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
            <a href="mailto:fitcrypt.app@gmail.com">Contact Us</a>
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
