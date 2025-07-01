import React from "react";
import { ChevronRight } from "lucide-react";

export default function Banner() {
  return (
    <>
      <div className="pt-20 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-1 font-sans rounded-full text-sm font-semibold bg-primary-100 text-primary-500 mb-8">
            Coming Soon
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-500 font-serif bg-clip-text">
            Transform Your Body,
            <br/>
            Transform Your Life
          </h1>
          <p className="text-xl text-onBackground mb-8 font-sans">
            Join the ultimate fitness experience. Personalized workouts, expert
            trainers, and a supportive community to help you achieve your
            fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary-500 hover:bg-primary-600 px-8 py-3 rounded-full text-lg font-semibold text-onPrimary flex items-center justify-center gap-2 transition">
              Start Free Trial <ChevronRight className="h-5 w-5" />
            </button>
            <button className="border border-primary-500 hover:bg-primary-200 px-8 py-3 text-onBackground rounded-full text-lg font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}