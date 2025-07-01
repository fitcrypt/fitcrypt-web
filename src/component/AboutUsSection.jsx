import React from "react";

export default function AboutUsSection() {
  return (
    <div className="min-h-screen bg-background-50">
      {/* Hero Section */}
      <div
        className={`py-40 px-4 sm:px-6 lg:px-8 bg-barbell bg-cover bg-no-repeat bg-[center_calc(100%)] bg-[url('https://res.cloudinary.com/dyqibxntm/image/upload/v1751349693/barbell_nfbpd8.jpg')]`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-onPrimary mb-6">
            Privacy-First Fitness Tracking
          </h1>
          <p className="text-xl text-onPrimary max-w-3xl mx-auto">
            Your health data belongs to you. We're just here to help you make
            the most of it.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-onBackground mb-4">
            Our Mission
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-onBackground max-w-3xl mx-auto">
            We're building a fitness platform that respects your privacy while
            helping you achieve your health goals. Unlike other services, we
            never sell or share your data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-primary-500 text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-onBackground mb-3">
              Client-Side Encryption
            </h3>
            <p className="text-onBackground">
              Your data is encrypted before it leaves your device. We can't read
              it, and neither can anyone else.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-primary-500 text-4xl mb-4">🏋️</div>
            <h3 className="text-xl font-semibold text-onBackground mb-3">
              Personalized Programs
            </h3>
            <p className="text-onBackground">
              Choose from science-backed training programs tailored to your
              fitness level and goals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-primary-500 text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-onBackground mb-3">
              No Data Selling
            </h3>
            <p className="text-onBackground">
              We don't monetize your personal information. Your privacy is our
              priority, not a product.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondaryBackground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">
            Ready to take control of your fitness journey?
          </h2>
          <p className="text-onPrimary mb-8 max-w-3xl mx-auto">
            Join thousands of others who are achieving their goals without
            compromising their privacy.
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-onPrimary font-bold py-3 px-8 rounded-full transition duration-300">
            Get Started - It's Free
          </button>
        </div>
      </div>
    </div>
  );
}