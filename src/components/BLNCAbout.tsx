import { Scale } from "lucide-react";

const visionMission = [
  {
    title: "Our Vision",
    text: "To be the leading provider of integrated legal, technology, and strategic services — empowering businesses to thrive in an increasingly complex regulatory landscape, with privacy and ethics at the centre of every engagement.",
  },
  {
    title: "Our Mission",
    text: "To deliver exceptional value through innovative legal solutions, intelligent technology, and strategic guidance — helping our clients achieve sustainable growth while managing risk effectively at every stage of their journey.",
  },
];

const coreValues = [
  {
    title: "Integrity",
    text: "We uphold the highest ethical standards in every engagement, ensuring trust and transparency in all that we do.",
  },
  {
    title: "Innovation",
    text: "We embrace technology and creative solutions to deliver forward-thinking legal and strategic services.",
  },
  {
    title: "Client Centric",
    text: "Your success is our priority. We tailor our approach to meet your unique needs and goals.",
  },
];

const BLNCAbout = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        {/* Top section */}
        <div className="mb-20">
          <p className="eyebrow">About BLNC Holdings</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-6">
            Empowering Businesses Through Legal Excellence
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-10">
            BLNC Holdings stands at the intersection of law, technology, and strategy. We are a
            modern advisory firm dedicated to helping businesses navigate complexity with clarity
            and confidence. We advise founders, SMEs, and in-house legal teams — translating
            complex legal and regulatory obligations into clear, actionable strategies.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {visionMission.map((c) => (
              <div key={c.title} className="blnc-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {c.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-12">
            <p className="eyebrow">Our Core Values</p>
            <p className="text-muted-foreground text-base max-w-lg mx-auto">
              The principles that guide every interaction and decision at BLNC Holdings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((v) => (
              <div key={v.title} className="blnc-card text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BLNCAbout;
