import { useState } from "react";
import BLNCNav from "@/components/BLNCNav";
import BLNCHero from "@/components/BLNCHero";
import BLNCAbout from "@/components/BLNCAbout";
import BLNCServices from "@/components/BLNCServices";
import BLNCContact from "@/components/BLNCContact";
import BLNCPrivacyNotice from "@/components/BLNCPrivacyNotice";
import BLNCFooter from "@/components/BLNCFooter";

export type TabKey = "home" | "about" | "services" | "contact" | "privacy-notice";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <BLNCHero onNavigate={setActiveTab} />;
      case "about":
        return <BLNCAbout />;
      case "services":
        return <BLNCServices />;
      case "contact":
        return <BLNCContact />;
      case "privacy-notice":
        return <BLNCPrivacyNotice />;
      default:
        return <BLNCHero onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <BLNCNav activeTab={activeTab} onNavigate={setActiveTab} />
      <main className="flex-1 flex flex-col">
        {renderContent()}
      </main>
      <BLNCFooter activeTab={activeTab} onNavigate={setActiveTab} />
    </div>
  );
};

export default Index;
