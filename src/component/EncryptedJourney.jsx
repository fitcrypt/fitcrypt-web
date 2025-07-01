import { LockKeyhole } from "lucide-react";
import React from "react";
import Button from "./Button";

function EncryptedJourney() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 bg-primary-200 rounded-3xl shadow-xl max-w-7xl mx-auto text-center md:text-start">
      {/* Text Section */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
            Encrypted Journey
          </h2>
          <LockKeyhole className="text-primary-700" />
        </div>
        <div className="flex-1 select-none md:hidden block">
          <VisualMockup />
        </div>
        <p className="text-gray-800  text-lg">
          Your fitness journey isn’t just physical — it’s about mindset, growth,
          and self-awareness. <br />
        </p>
        <p className="text-gray-800 text-lg ">
          Our encrypted journal lets you track your workouts, goals, progress,
          and more — privately and securely. Everything is encrypted before it
          leaves your device. We can’t read it, and no one else can either.
        </p>
        <p className="text-gray-800 text-lg ">
          <strong>Your journey is yours — and only yours — to see.</strong>
        </p>

        <Button
          text="Start private tracking"
          className="mt-4 px-6 py-3"
          hoverClass="hover:bg-primary-600"
        />
      </div>

      {/* Visual Mockup */}
      <div className="flex-1 select-none md:block hidden">
        <VisualMockup />
      </div>
    </div>
  );
}

function VisualMockup() {
  return (
    <>
      <div className="relative w-full max-w-md mx-auto bg-gradient-to-br from-primary-300 to-primary-700 p-6 rounded-3xl shadow-lg">
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background-800 flex items-center justify-center text-white text-xl shadow-inner">
          🔒
        </div>
        <div className="text-white space-y-3">
          <div className="bg-white text-gray-900 rounded-lg p-4 shadow-md">
            <div className="font-bold">Workout: Push Day</div>
            <div className="text-sm mt-2">
              Sets: 4 • Reps: 12 • Weight: 50kg
            </div>
          </div>
          <div className="text-xs text-onPrimary">
            <code>Encrypted: 9j32f8sdf2348ffet4k5lp8lc</code>
          </div>
          <div className="text-xs text-onPrimary">
            <code>Only you can read this data.</code>
          </div>
        </div>
      </div>
    </>
  );
}

export default EncryptedJourney;
