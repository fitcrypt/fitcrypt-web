import AccessAnywhereSection from "../component/AccessAnywhereSection";
import EncryptedJourney from "../component/EncryptedJourney";
import Banner from "../component/Banner";
import Features from "../component/Features";
import HealthObjective from "../component/HealthObjective";

import WorkoutSlider from "../component/WorkoutSlider";
import CTA from "../component/CTA";
export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <WorkoutSlider className="h-minus-header" />
      <EncryptedJourney />
      <HealthObjective className="md:h-minus-header" />
      <AccessAnywhereSection />
      <CTA />
    </>
  );
}
