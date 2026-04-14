import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const team = [
  {
    name: "Maximilian Koch",
    role: "Co-Founder & CEO",
    background: "Former clinical operations lead, 10 years in hospital group management across DACH. Built and exited a health data startup.",
    focus: "Clinical strategy, DACH partnerships, regulatory pathways.",
    initials: "MK",
  },
  {
    name: "Julia Berger",
    role: "Co-Founder & CTO",
    background: "Machine learning engineer with deep expertise in biomarker modeling and clinical NLP. Previously at a leading German health insurance tech firm.",
    focus: "DAC architecture, agentic model design, FHIR infrastructure.",
    initials: "JB",
  },
  {
    name: "Thomas Riedl",
    role: "Co-Founder & CPO",
    background: "Product leader at the intersection of diagnostics and digital health. Led product at a European diagnostic lab network scaling across 6 countries.",
    focus: "Product surface, vertical expansion, customer success.",
    initials: "TR",
  },
  {
    name: "Dr. Sarah Müller",
    role: "Head of Clinical Science",
    background: "Medical doctor turned health data scientist. Research in preventive medicine and precision diagnostics at Ludwig Maximilian University.",
    focus: "Biomarker validation, clinical protocols, evidence generation.",
    initials: "SM",
  },
];

const advisors = [
  {
    name: "Prof. Dr. Andreas Völker",
    role: "Clinical Advisory",
    context: "Director of Digital Medicine, Charité Berlin. Pioneer in AI-assisted diagnostics in German hospital systems.",
  },
  {
    name: "Katharina Brandt",
    role: "Industry Advisory",
    context: "Former COO of a leading European health insurer. 20 years in GKV/PKV digital transformation.",
  },
  {
    name: "Dr. Michael Steiner",
    role: "Regulatory Advisory",
    context: "Legal and regulatory expert in BfArM, DiGA, and DSGVO compliance for health tech in the DACH market.",
  },
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-card/40 border border-border rounded-2xl p-8 hover:border-white/20 transition-colors duration-300 flex flex-col"
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center font-display text-lg font-bold text-accent flex-shrink-0">
          {member.initials}
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-white leading-tight">{member.name}</h3>
          <div className="text-xs font-bold tracking-widest uppercase text-accent mt-0.5">{member.role}</div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{member.background}</p>

      <div className="pt-5 border-t border-border/50">
        <div className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50 mb-2">Focus</div>
        <p className="text-sm text-foreground/70">{member.focus}</p>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <div className="flex flex-col w-full pt-24">

      <section className="py-20 md:py-32 border-b border-border/40 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-6">The Team</div>
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-7">
                Built by people who<br />understand healthcare.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                The Lab1 founding team brings together clinical operations, machine learning, product, and regulatory expertise — specifically within the European healthcare system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-4">Scientific & Industry Advisory</div>
              <h2 className="font-display text-3xl font-bold text-white">Advisory Board</h2>
            </motion.div>

            <div className="space-y-px border border-border rounded-2xl overflow-hidden">
              {advisors.map((advisor, i) => (
                <motion.div
                  key={advisor.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10 px-8 py-6 bg-card/30 hover:bg-card/50 border-b border-border last:border-0 transition-colors"
                >
                  <div className="md:w-56 flex-shrink-0">
                    <div className="font-display font-bold text-white text-base">{advisor.name}</div>
                    <div className="text-xs font-bold tracking-widest uppercase text-accent mt-1">{advisor.role}</div>
                  </div>
                  <div className="flex-1 text-sm text-muted-foreground leading-relaxed">{advisor.context}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/40 bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "European by conviction",
                text: "DSGVO is not a compliance checkbox. It is the foundation. We build infrastructure that European health organizations can trust with the most sensitive data they hold.",
              },
              {
                label: "Infrastructure, not features",
                text: "We do not build apps. We build the layer that makes every other health application more intelligent. The DAC is infrastructure — designed to be invisible and indispensable.",
              },
              {
                label: "Outcome-first",
                text: "Every component of the DAC exists to produce a clinical decision that could not be made without it. We do not optimize for engagement. We optimize for action.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l border-accent/30 pl-6"
              >
                <h3 className="font-display text-lg font-bold text-white mb-3">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-border/40 text-center relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              We are hiring.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              If you want to build the intelligence infrastructure layer for European healthcare, we want to hear from you.
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
