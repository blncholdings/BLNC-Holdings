const BLNCNav = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 h-[70px] bg-background/97 border-b border-border backdrop-blur-sm">
      <div className="font-display font-bold text-lg text-foreground tracking-wider">BLNC Holdings</div>
      <ul className="flex gap-1.5 list-none">
        {["Home", "About", "Services", "Contact"].map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground px-4 py-[7px] rounded-[7px] border border-transparent hover:text-foreground hover:bg-[hsl(var(--surface-hover))] transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BLNCNav;
