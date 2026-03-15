import { ShieldCheck } from "lucide-react";

const BLNCPrivacyNotice = () => {
  return (
    <section className="py-24 flex-1">
      <div className="section-container">
        <p className="eyebrow">Privacy Notice</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-4">
          Your Privacy Matters
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl mb-10 leading-relaxed">
          At BLNC Holdings, privacy is not a service we sell — it is the standard by which we
          operate. We are committed to protecting your personal information in accordance with
          applicable data protection legislation.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="blnc-card p-[22px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground text-sm font-medium">Data Protection</p>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Any information you share is handled in accordance with our privacy-first principles
              and applicable data protection legislation, including POPIA and GDPR.
            </p>
          </div>

          <div className="blnc-card p-[22px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground text-sm font-medium">Data Minimisation</p>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">
              We do not collect or process information beyond what is strictly necessary for each
              engagement. Purpose limitation and security by default govern our operations.
            </p>
          </div>
        </div>

        <div className="blnc-privacy-notice">
          <p className="text-foreground text-sm font-medium mb-1">Our Commitment</p>
          <p className="text-muted-foreground text-xs leading-relaxed">
            When you engage BLNC Holdings, you are working with a firm that practises what it
            preaches. Our privacy-first foundation is not a marketing position — it is a measurable
            operational reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BLNCPrivacyNotice;
