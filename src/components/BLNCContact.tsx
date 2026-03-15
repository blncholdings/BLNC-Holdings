import { Mail, Globe } from "lucide-react";

const BLNCContact = () => {
  return (
    <section className="py-24 flex-1">
      <div className="section-container">
        <p className="eyebrow">Contact Us</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-4">
          Let's Start a Conversation
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl mb-10 leading-relaxed">
          Have a question or ready to get started? Reach out directly and we'll be in touch within
          24–48 business hours.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center gap-[18px] bg-card border border-border rounded-xl py-[18px] px-[22px]">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground text-sm font-medium">Email</p>
              <p className="text-muted-foreground text-xs">contact@blncholdings.co.za</p>
            </div>
          </div>

          <div className="flex items-center gap-[18px] bg-card border border-border rounded-xl py-[18px] px-[22px]">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground text-sm font-medium">Website</p>
              <p className="text-muted-foreground text-xs">www.blncholdings.co.za</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border border-border rounded-xl p-[22px]">
            <p className="text-foreground text-sm font-medium mb-2">Response Time</p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              We typically respond to all enquiries within 24–48 business hours. For urgent
              matters, please indicate this when you reach out.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-[22px]">
            <p className="text-foreground text-sm font-medium mb-2">What to Expect</p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              We'll review your enquiry and connect you with the right advisor for your legal,
              technology, or strategic needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BLNCContact;
