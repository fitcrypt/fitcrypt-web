import { Activity, Trophy, Users } from "lucide-react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-200 transition">
      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
export default function Features() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Activity className="h-6 w-6 text-primary-600" />}
          title="Precision Exercise Tracking"
          description="Track every rep and movement with precision.

"
        />
        <FeatureCard
          icon={<Users className="h-6 w-6 text-primary-600" />}
          title="Exercise History Database"
          description="Track every past workout—find any session fast"
        />
        <FeatureCard
          icon={<Trophy className="h-6 w-6 text-primary-600" />}
          title="Equipment-Specific Tracking"
          description="Universal exercise tracking for any workout"
        />
      </div>
    </section>
  );
}
