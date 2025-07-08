import CTA from "./CTA";

export default function AboutUsSection() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background image with subtle overlay */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dyqibxntm/image/upload/v1751349693/barbell_nfbpd8.jpg"
            alt="Fitness background"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-base font-semibold text-white tracking-wide uppercase bg-primary-700/80 px-4 py-1 rounded-full shadow">
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Fitness, Reimagined for Privacy
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We empower you to own your health journey—no compromises, no data
            selling, just results. Experience fitness technology that puts your
            privacy first.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Redefining Fitness Technology
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building a fitness platform that respects your privacy while
            delivering exceptional results. Your data never leaves your control.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              End-to-End Encryption
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your data is encrypted before it leaves your device. Not even our
              team can access your private information.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Smart Training Plans
            </h3>
            <p className="text-gray-600 leading-relaxed">
              AI-powered programs adapt to your progress, preferences, and
              feedback for optimal results.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Zero Data Sharing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We don't sell, share, or monetize your information. Your privacy
              is our product promise.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-primary-400 mb-2">10K+</p>
              <p className="text-gray-300">Active Users</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary-400 mb-2">99.9%</p>
              <p className="text-gray-300">Uptime Reliability</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary-400 mb-2">0</p>
              <p className="text-gray-300">Data Breaches</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
