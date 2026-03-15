import { motion } from "framer-motion";

const frameworkSteps = [
  { title: "Assess", desc: "Evaluate your current legal landscape and identify risks" },
  { title: "Analyze", desc: "Deep dive into contracts, compliance, and obligations" },
  { title: "Align", desc: "Develop strategies aligned with your business goals" },
  { title: "Deliver", desc: "Implement solutions with ongoing support" },
];

const legalServices = [
  "Contract Review & Drafting",
  "Compliance Assessment & Gap Analysis",
  "Corporate Governance Advisory",
  "Policy Drafting & Implementation",
  "Regulatory Risk Management",
  "Legal Strategy Development",
];

const consultingServices = [
  "Data & AI Readiness Assessment",
  "AI Implementation Strategy & Compliance",
  "Digital Transformation Advisory",
  "Technology Recommendations",
  "Process Optimisation & Workflow Design",
];

const privacyPrinciples = [
  ["How We Operate", "Our internal systems are built on data minimisation, purpose limitation and security by default"],
  ["What We Collect", "We do not collect or process information beyond what is strictly necessary for each engagement"],
  ["Our Infrastructure", "Privacy-first tooling and workflows govern how we store, process and share information internally"],
  ["Our Standard", "We apply the same POPIA and international data protection obligations to ourselves that we advise clients to meet"],
];

const aiSovereignty = {
  title: "Local AI Infrastructure",
  subtitle: "Client Data Sovereignty — Guaranteed",
  desc: "Our AI systems run on local infrastructure with human-in-the-loop oversight built into every workflow. Your documents never leave our controlled environment and never reach an external server — ensuring complete data sovereignty at every stage of engagement.",
};

const fadeItem = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const BLNCServices = () => {
  return (
    <section className="py-24 flex-1">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow">Our Services</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-4">
            Three Pillars of Business Excellence
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl">
            Integrated services designed to address your legal, technological, and strategic needs
            under one roof.
          </p>
        </div>

        {/* Pillar 1 — Legal Advisory */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div>
            <p className="text-primary text-sm font-semibold mb-2">01</p>
            <div className="w-full h-px bg-primary mb-6" />
            <h3 className="font-display font-semibold text-2xl text-foreground mb-1">
              Legal Advisory
            </h3>
            <p className="text-primary text-sm font-medium mb-4">The BLNC Framework™</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Our structured approach to legal guidance ensures comprehensive coverage and
              actionable outcomes — from compliance and contracts to corporate governance and
              policy drafting.
            </p>

            {/* Framework animation */}
            <div className="mb-8">
              {frameworkSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  className="flex items-start gap-4 py-3 border-b border-border last:border-b-0"
                  variants={fadeItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={i}
                >
                  <span className="text-primary font-bold text-sm mt-0.5">✓</span>
                  <div>
                    <p className="text-foreground font-medium text-sm">{step.title}</p>
                    <p className="text-muted-foreground text-xs">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <ul className="checklist">
              {legalServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="blnc-card mb-6">
              <h4 className="font-display font-semibold text-lg text-foreground mb-4">
                Structured Legal Excellence
              </h4>
              <div className="space-y-4">
                <div className="blnc-card-sm">
                  <p className="text-primary text-xs font-semibold mb-1">Governance</p>
                  <p className="text-muted-foreground text-xs">
                    Board structures, director duties, and policy standards for modern organisations
                  </p>
                </div>
                <div className="blnc-card-sm">
                  <p className="text-primary text-xs font-semibold mb-1">Compliance</p>
                  <p className="text-muted-foreground text-xs">
                    POPIA, GDPR, and sector-specific regulatory compliance and reporting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 2 — Business Consulting */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div>
            <div className="blnc-card mb-6">
              <h4 className="font-display font-semibold text-lg text-foreground mb-4">
                Data & AI Readiness
              </h4>
              <div className="space-y-4">
                <div className="blnc-card-sm">
                  <p className="text-primary text-xs font-semibold mb-1">AI Readiness</p>
                  <p className="text-muted-foreground text-xs">
                    Diagnostic assessment of your firm's data maturity and AI adoption readiness
                  </p>
                </div>
                <div className="blnc-card-sm">
                  <p className="text-primary text-xs font-semibold mb-1">Regulation</p>
                  <p className="text-muted-foreground text-xs">
                    AI implementation aligned with applicable regulation and data protection law
                  </p>
                </div>
              </div>
              <div className="blnc-callout mt-6">
                <p className="text-primary text-xs font-semibold mb-1">🔗 Linked to Legal Advisory</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Our consulting offering is directly connected to the BLNC Legal Advisory
                  Framework — ensuring your technology decisions are always legally sound and
                  strategically grounded.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-primary text-sm font-semibold mb-2">02</p>
            <div className="w-full h-px bg-primary mb-6" />
            <h3 className="font-display font-semibold text-2xl text-foreground mb-1">
              Business Consulting
            </h3>
            <p className="text-primary text-sm font-medium mb-4">The BLNC Advantage™</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              We provide business consulting to deliver a diagnostic assessment on your firm's
              data and AI readiness — helping you transform intelligently and in full compliance
              with applicable regulation.
            </p>
            <ul className="checklist">
              {consultingServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pillar 3 — Business Excellence / Privacy */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-primary text-sm font-semibold mb-2">03</p>
            <div className="w-full h-px bg-primary mb-6" />
            <h3 className="font-display font-semibold text-2xl text-foreground mb-1">
              Business Excellence
            </h3>
            <p className="text-primary text-sm font-medium mb-4">Privacy by Design</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              At BLNC Holdings, privacy is not a service we sell — it is the standard by which we
              operate. Privacy by design is embedded into our own infrastructure, our internal
              processes, and every client engagement we undertake.
            </p>

            <div className="space-y-4 mb-8">
              {privacyPrinciples.map(([title, desc]) => (
                <div key={title} className="blnc-card-sm">
                  <p className="text-foreground text-sm font-medium mb-1">{title}</p>
                  <p className="text-muted-foreground text-xs">{desc}</p>
                </div>
              ))}
            </div>


            {/* AI Sovereignty highlight */}
            <div className="blnc-callout relative overflow-hidden mb-6">
              <div className="absolute inset-0 bg-primary/5 rounded-[10px]" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary text-xs font-semibold tracking-wide uppercase">{aiSovereignty.subtitle}</span>
                </div>
                <p className="text-foreground text-sm font-medium mb-1">{aiSovereignty.title}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{aiSovereignty.desc}</p>
              </div>
            </div>

            <div className="blnc-callout">
              <p className="text-primary text-xs font-semibold mb-1">🛡 Our Commitment to You</p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                When you engage BLNC Holdings, you are working with a firm that practises what it
                preaches. Our privacy-first foundation is not a marketing position — it is a
                measurable operational reality.
              </p>
            </div>
          </div>

          <div>
            <div className="blnc-card mb-6">
              <blockquote className="border-l-2 border-primary pl-4 mb-6">
                <p className="text-foreground text-lg font-display font-semibold mb-2">
                  Privacy is Not Optional.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  It is built into how we think, how we work, and how we protect the information
                  entrusted to us by every client we serve.
                </p>
              </blockquote>

              <div className="blnc-card-sm">
                <p className="text-foreground text-sm font-medium mb-2">Why This Matters</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Clients who engage a legal and advisory firm are sharing sensitive, often
                  confidential information. Our privacy-by-design infrastructure ensures that
                  information is safeguarded at every point — not because regulation requires it,
                  but because it is the right way to operate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BLNCServices;
