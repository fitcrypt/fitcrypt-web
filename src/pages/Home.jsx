import AccessAnywhereSection from "../component/AccessAnywhereSection";
import EncryptedJourney from "../component/EncryptedJourney";
import Banner from "../component/Banner";
import Features from "../component/Features";
import HealthObjective from "../component/HealthObjective";
import WorkoutSlider from "../component/WorkoutSlider";
import CTA from "../component/CTA";
import SEO from "../component/SEO";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <SEO 
        title="FitCrypt - Your Fitness Journey, Truly Private"
        description="Track workouts, achieve fitness goals, and maintain complete privacy with FitCrypt's military-grade encryption. A modern, privacy-first fitness tracking app."
        keywords="fitness tracker, workout tracker, encrypted fitness app, privacy fitness, secure workout tracker"
      />

      <div className="relative z-10">
        <Banner />
        <Features />
        <WorkoutSlider />
        <EncryptedJourney />
        <HealthObjective />
        <AccessAnywhereSection />
        <CTA />
      </div>
    </div>
  );
}
 