import { GlobeLock } from "lucide-react";
import React from "react";

export default function AccessAnywhereSection() {
  return (
    <div className="flex items-center text-gray-900  flex-col md:flex-row justify-between px-6 md:px-16 py-12  rounded-3xl shadow-xl max-w-7xl mx-auto  bg-primary-200">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Access from Anywhere
          </h2>
          <GlobeLock className="text-primary-700 w-8 h-8" />
        </div>

        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center md:hidden ">
          <img
            src="https://res.cloudinary.com/dyqibxntm/image/upload/v1751350075/mobile_ivjisv.jpg"
            className="rounded-xl  shadow-lg "
          />
        </div>
        <p className="text-lg text-gray-800 mb-4">
          Empower your journey from any device — phone, tablet, or laptop —
          directly through your browser.
          <br />
          No downloads, no installs. You just need a web browser.
        </p>
        <p className="text-md text-gray-900">
          <strong> Your data, your sanctuary.</strong>
        </p>
        <p className="text-md text-gray-800">
          Protected by end-to-end encryption, your progress stays private and
          secure — even as you move across devices.
          <br />
          Freedom, presence, and peace of mind — wherever you are.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:flex justify-center hidden">
        <img
          src="https://res.cloudinary.com/dyqibxntm/image/upload/v1751350075/mobile_ivjisv.jpg"
          className="rounded-xl  shadow-lg "
        />
      </div>
    </div>
  );
}
