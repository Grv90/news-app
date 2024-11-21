import MainContent from "./components/MainContent";
import { MobileNav } from "./components/MobileNav";
import SectionHeader from "./components/SectionHeader";
import Spotlight from "./components/Spotlight";

export default function Home() {
  return (
    <div className="bg-[#f7fcff] w-full h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6 pb-20 lg:pb-6">
        <SectionHeader
          heading="For You"
          subtitle="Subtitle goes here, describing the content below."
        />

        <div className="flex flex-col lg:flex-row lg:gap-6">
          <MainContent />
          <Spotlight />
        </div>
        <MobileNav />
      </div>
    </div>
  );
}
