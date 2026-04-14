import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Activity, Shield, Pill, Database, Microscope } from "lucide-react";

const verticals = [
  {
    id: "healthcare",
    icon: Activity,
    title: "Healthcare",
    tagline: "From average protocols to biomarker-driven precision care.",
    description:
      "Clinical decisions in healthcare are still driven by population averages. The DAC replaces that with real-time, individual biomarker intelligence — delivered directly into clinical workflows.",
    applications: [
      {
        context: "Clinics / Post-operative Care",
        impact: "Recovery protocols assigned from discharge-day biomarker data. Average patient stay reduced by more than one day.",
      },
      {
        context: "Medical Product Companies",
        impact: "Real-time dialysis formula adjustment based on continuous lab feedback — eliminating weeks of manual patient calibration.",
      },
    ],
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance",
    tagline: "Chronic disease intercepted before it becomes a claim.",
    description:
      "GKV and PKV insurers are sitting on biomarker data they cannot act on. The DAC turns passive monitoring into proactive risk management — reducing claims, improving retention, and pricing risk accurately.",
    applications: [
      {
        context: "GKV — Statutory Health Insurance",
        impact: "Biomarker-driven chronic disease interception. Risk identified and managed before hospitalization — not after.",
      },
      {
        context: "PKV — Private Health Insurance",
        impact: "Dynamic premium adjustment through continuous biomarker profiling. Churn reduced through demonstrated value.",
      },
    ],
  },
  {
    id: "pharma",
    icon: Pill,
    title: "Pharma",
    tagline: "Clinical trial enrollment compressed. Pharmacy revenue activated.",
    description:
      "The pharmaceutical value chain is data-rich but intelligence-poor. From drug manufacturing to retail pharmacy, the DAC creates intelligence infrastructure that accelerates decision-making at every stage.",
    applications: [
      {
        context: "Drug Manufacturing",
        impact: "Genetic responder cohorts identified before enrollment. Clinical trial timelines compressed by up to 14 months.",
      },
      {
        context: "Retail Pharmacies",
        impact: "Data-driven supplement cross-selling into 8 million untouched statin patients — based on verified biomarker profiles.",
      },
    ],
  },
  {
    id: "nutrition",
    icon: Database,
    title: "Health & Nutrition",
    tagline: "From selling to everyone — to matching to each individual.",
    description:
      "The nutrition industry sells products based on demographics. The DAC replaces that with actual deficiency intelligence — individual biomarker matching that creates measurable, validated outcomes.",
    applications: [
      {
        context: "Supplement Manufacturers",
        impact: "Real-world deficiency patterns replace formulation assumptions. R&D reformulation cycles cut from 24 months to 6.",
      },
      {
        context: "Consumer Brands",
        impact: "Individual biomarker-to-SKU matching. 90-day subscriber retention tripled through validated improvement cycles.",
      },
    ],
  },
  {
    id: "labs",
    icon: Microscope,
    title: "Diagnostic Laboratories",
    tagline: "Commodity test results transformed into premium intelligence products.",
    description:
      "Diagnostic labs generate raw data at scale — and stop there. The DAC adds the interpretation layer that makes results actionable, creating new revenue streams on existing test volume.",
    applications: [
      {
        context: "B2B",
        impact: "Raw test output structured into clinical intelligence reports for referring physicians. 150M EUR opportunity on existing volume.",
      },
      {
        context: "B2B2C",
        impact: "Consumer result interpretation as a premium DTC product — per-report revenue at zero additional lab cost.",
      },
    ],
  },
];

function VerticalCard({ vertical, index }: { vertical: typeof verticals[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = vertical.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="group"
    >
      <div className="border border-border bg-card/40 rounded-3xl overflow-hidden hover:border-white/20 transition-colors duration-300">
        <div className="px-8 md:px-12 pt-10 pb-8 border-b border-border/50">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl border border-border bg-background flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-accent/70 mb-1">Vertical</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                {vertical.title}
              </h2>
            </div>
          </div>
          <p className="text-base font-medium text-white/75 mt-5 leading-snug">{vertical.tagline}</p>
        </div>

        <div className="px-8 md:px-12 py-8 md:py-10 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <p className="text-muted-foreground leading-relaxed text-sm">{vertical.description}</p>
          </div>
          <div className="md:col-span-3 space-y-6">
            {vertical.applications.map((app, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-1 flex-shrink-0 rounded-full bg-accent/40 mt-1" />
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-accent mb-2">{app.context}</div>
                  <p className="text-foreground/80 text-sm leading-relaxed">{app.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function UseCases() {
  return (
    <div className="flex flex-col w-full pt-24">

      <section className="py-20 md:py-32 relative border-b border-border/40 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-6">Use Cases</div>
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-7 leading-[1.05]">
                Five Verticals.<br />One Core.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                The Diagnostic Agent Core delivers the same precision intelligence infrastructure to every healthcare vertical — with industry-specific outputs, compliance, and integration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            {verticals.map((v, i) => (
              <VerticalCard key={v.id} vertical={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-border/40 relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Discuss your use case.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              We work with healthcare organizations, insurers, pharma companies, and diagnostic labs across the DACH region.
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
