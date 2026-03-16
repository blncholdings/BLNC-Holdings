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
      <div className="flex w-full flex-col items-start justify-between gap-2 px-12 md:flex-row md:items-start">
        <div className="text-xs text-muted-foreground">
          <p>BLNC Holdings</p>
          <p>Where Law, Technology & Strategy Align</p>
        </div>

        <p className="text-xs text-muted-foreground md:text-right">
          © 2025 BLNC Holdings. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default BLNCFooter;
