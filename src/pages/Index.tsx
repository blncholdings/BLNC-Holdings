import BLNCNav from "@/components/BLNCNav";
import BLNCHero from "@/components/BLNCHero";
import BLNCAbout from "@/components/BLNCAbout";
import BLNCServices from "@/components/BLNCServices";
import BLNCContact from "@/components/BLNCContact";
import BLNCPrivacyNotice from "@/components/BLNCPrivacyNotice";
import BLNCFooter from "@/components/BLNCFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BLNCNav />
      <BLNCHero />
      <BLNCAbout />
      <BLNCServices />
      <BLNCContact />
      <BLNCPrivacyNotice />
      <BLNCFooter />
    </div>
  );
};

export default Index;
