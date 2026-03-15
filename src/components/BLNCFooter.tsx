import type { TabKey } from "@/pages/Index";

const tabs: { label: string; key: TabKey }[] = [
  { label: "Home", key: "home" },
  { label: "About", key: "about" },
  { label: "Services", key: "services" },
  { label: "Contact", key: "contact" },
  { label: "Privacy Notice", key: "privacy-notice" },
];

interface BLNCFooterProps {
  activeTab: TabKey;
  onNavigate: (tab: TabKey) => void;
}

const BLNCFooter = ({ activeTab, onNavigate }: BLNCFooterProps) => {
  return (
    <footer className="border-t border-border py-4">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-3">
        <div>
          <p className="font-display font-bold text-lg text-foreground tracking-wider">
            BLNC Holdings
          </p>
          <p className="text-muted-foreground text-xs">
            Where Law, Technology & Strategy Align
          </p>
        </div>


        <p className="text-muted-foreground text-xs">
          © 2025 BLNC Holdings. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default BLNCFooter;
