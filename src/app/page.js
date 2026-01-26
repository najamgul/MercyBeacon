import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import DonationSection from "../components/DonationSection";
import HomeSections from "../components/HomeSections";
import FoundationPreview from "../components/FoundationPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <FoundationPreview />
      <HomeSections />
      <DonationSection />
    </>
  );
}
