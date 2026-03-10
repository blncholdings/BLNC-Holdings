const BLNCFooter = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-lg text-foreground tracking-wider">
            BLNC Holdings
          </p>
          <p className="text-muted-foreground text-xs">
            Where Law, Technology & Strategy Align
          </p>
        </div>

        <div className="flex gap-6">
          {["Home", "About", "Services", "Contact", "Privacy Notice"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-muted-foreground text-xs hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <p className="text-muted-foreground text-xs">
          © 2026 BLNC Holdings. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default BLNCFooter;
