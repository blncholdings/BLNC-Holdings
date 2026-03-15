import type { TabKey } from "@/pages/Index";

const tabs: { label: string; key: TabKey }[] = [
  { label: "Home", key: "home" },
  { label: "About", key: "about" },
  { label: "Services", key: "services" },
  { label: "Contact", key: "contact" },
  { label: "Privacy Notice", key: "privacy-notice" },
];

interface BLNCNavProps {
  activeTab: TabKey;
  onNavigate: (tab: TabKey) => void;
}

const BLNCNav = ({ activeTab, onNavigate }: BLNCNavProps) => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 h-[70px] bg-background/97 border-b border-border backdrop-blur-sm">
      <button
        onClick={() => onNavigate("home")}
        className="font-display font-bold text-lg text-foreground tracking-wider hover:opacity-80 transition-opacity"
      >
        BLNC Holdings
      </button>
      <ul className="flex gap-1.5 list-none">
        {tabs.map((tab) => (
          <li key={tab.key}>
            <button
              onClick={() => onNavigate(tab.key)}
              className={`text-sm font-medium px-4 py-[7px] rounded-[7px] border border-transparent transition-colors ${
                activeTab === tab.key
                  ? "text-foreground bg-[hsl(var(--surface-hover))]"
                  : "text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--surface-hover))]"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BLNCNav;
