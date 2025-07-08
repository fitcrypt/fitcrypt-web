import { GlobeLock } from "lucide-react";

export default function AccessAnywhereSection() {
  return (
       <section className="py-16 px-6 text-gray-800 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <img 
              src="https://res.cloudinary.com/dyqibxntm/image/upload/v1751350075/mobile_ivjisv.jpg" 
              alt="Multi-device access"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-500/10 rounded-lg">
                <GlobeLock className="h-6 w-6 text-primary-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Access Anywhere</h2>
            </div>
            <p className="text-gray-800">
              Your fitness journey stays with you across all devices. Pick up where you left off whether you're on your phone, tablet, or computer.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary-400"></div>
                <span className="text-gray-700">End-to-end encrypted sync between devices</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary-400"></div>
                <span className="text-gray-700">No installations needed - works in any browser</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary-400"></div>
                <span className="text-gray-700">Automatic updates with new features</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
  );
}