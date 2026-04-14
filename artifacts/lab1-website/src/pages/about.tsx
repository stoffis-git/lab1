import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const timeline = [
  {
    phase: "The Data",
    text: "European adults generate 10 health data points per day. Blood markers, heart rate variability, oxygen saturation, sleep quality, activity levels, food intake. All of it measured. None of it connected.",
  },
  {
    phase: "The Technology",
    text: "AI has crossed the threshold. Clinical accuracy on par with GPs for common conditions. 15 million Ada Health users in Europe. AI is now the first opinion in healthcare — not the last resort.",
  },
  {
    phase: "The Market",
    text: "European healthcare is a €640B market accelerating toward precision. DiGA approvals doubled year-on-year. Germany's digital health infrastructure is the regulatory foundation that others will follow.",
  },
  {
    phase: "The Gap",
    text: "The missing layer is not more data, better sensors, or larger models. The missing layer is the infrastructure that connects them — validates them, interprets them in context, and turns them into decisions.",
  },
];

export default function About() {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" });

  return (
    <div className="flex flex-col w-full pt-24">

      <section className="py-20 md:py-32 relative border-b border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-6">Vision</div>
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-8">
                Closing Europe's<br />largest untapped<br />intelligence gap.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                The data exists. The technology exists. The regulatory framework is in place. What is missing is the infrastructure that connects them into actionable precision health intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-2xl"
          >
            <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-5">The Context</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.1]">
              Three conditions. One missing layer.
            </h2>
          </motion.div>

          <div ref={timelineRef} className="relative space-y-0">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-border/50 md:left-[200px]" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -16 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 pl-6 md:pl-0 pb-12 last:pb-0 relative"
              >
                <div className="md:w-[200px] md:text-right flex-shrink-0 md:pr-12">
                  <div className="text-xs font-bold tracking-widest uppercase text-accent">{item.phase}</div>
                </div>
                <div className="absolute left-0 md:left-[200px] top-0 flex items-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/60 border-2 border-background -ml-1 mt-0.5" />
                </div>
                <div className="flex-1 md:pl-12">
                  <p className="text-base text-muted-foreground leading-relaxed max-w-xl">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/40 bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-5">Our Mission</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-6">
                To build the intelligence infrastructure layer that makes European healthcare data universally actionable, precise, and secure.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Not a diagnostic app. Not a wearable aggregator. Not an AI chatbot. The infrastructure layer — the layer that did not exist, and that everything in European precision health depends on.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
              {[
                {
                  label: "DSGVO — Built In",
                  text: "European data sovereignty is not a compliance layer added at the end. It is the foundation the DAC is built on.",
                },
                {
                  label: "FHIR — Native",
                  text: "The Diagnostic Agent Core speaks the language of European clinical infrastructure from day one.",
                },
                {
                  label: "Agentic — Not Monolithic",
                  text: "Domain-specialized agents, not one large model. Clinical precision requires clinical specificity.",
                },
                {
                  label: "Infrastructure — Not Product",
                  text: "The DAC is the layer beneath the product. Designed to be invisible and indispensable to every system it touches.",
                },
              ].map((item, i) => (
                <div key={item.label} className="flex gap-5 p-5 rounded-xl border border-border bg-background/50 hover:border-white/20 transition-colors">
                  <div className="w-1 flex-shrink-0 rounded-full bg-accent/40 self-stretch" />
                  <div>
                    <div className="font-bold text-white text-sm mb-1">{item.label}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-border/40 relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Build the standard with us.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              We are looking for ambitious partners across healthcare, pharma, insurance, and diagnostics to implement and shape the DAC architecture.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-13 px-10 text-base bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
