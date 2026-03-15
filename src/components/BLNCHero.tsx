import type { TabKey } from "@/pages/Index";

interface BLNCHeroProps {
  onNavigate: (tab: TabKey) => void;
}

const BLNCHero = ({ onNavigate }: BLNCHeroProps) => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center flex-1 px-6 overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[460px] h-[460px] rounded-full border border-border" />
        <div className="absolute w-[660px] h-[660px] rounded-full border border-border" />
        <div className="absolute w-[880px] h-[880px] rounded-full border border-border" />
      </div>

      <p className="eyebrow relative z-10">Legal • Technology • Strategy</p>
      <div className="relative z-10">
        <div className="absolute inset-0 blur-[120px] bg-primary/20 rounded-full scale-150 pointer-events-none" />
        <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight text-foreground relative mb-2">
          Where Law, Technology
        </h1>
        <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight text-primary relative mb-6">
          & Strategy Align
        </h1>
      </div>
      <p className="text-muted-foreground text-lg max-w-2xl relative z-10 mb-10 leading-relaxed">
        BLNC Holdings provides legal advisory, legal intelligence, and strategic business services
        to help organisations navigate complexity with clarity and confidence.
      </p>
      <div className="flex gap-4 relative z-10">
        <button
          onClick={() => onNavigate("about")}
          className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-[15px] font-semibold hover:opacity-90 transition-opacity"
        >
          Discover Our Story →
        </button>
        <button
          onClick={() => onNavigate("services")}
          className="inline-flex items-center gap-2.5 border border-border text-foreground px-8 py-3.5 rounded-lg text-[15px] font-semibold bg-[hsl(var(--surface-overlay))] hover:bg-[hsl(var(--surface-hover))] transition-colors"
        >
          Explore Services
        </button>
      </div>
    </section>
  );
};

export default BLNCHero;
