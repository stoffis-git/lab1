import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const team = [
  {
    name: "Alexander Auer",
    role: "Founder & CEO",
    background: "Serial entrepreneur with deep roots in digital health and performance medicine. Drives the strategic vision and commercial growth of Lab1.",
    focus: "Company strategy, partnerships, commercial expansion.",
    initials: "AA",
    photo: "/team/auer.png",
  },
  {
    name: "Fabian Plachel",
    role: "Founder & Managing Board",
    background: "Operator and builder across health technology and data infrastructure. Responsible for governance, operations, and product direction at board level.",
    focus: "Product direction, operations, board governance.",
    initials: "FP",
    photo: "/team/plachel.png",
  },
  {
    name: "Christoph Wackher",
    role: "Founder & COO",
    background: "Execution-focused operator with experience scaling health ventures from early stage through enterprise deployment across European markets.",
    focus: "Operations, scaling, enterprise delivery.",
    initials: "CW",
    photo: "/team/wackher.png",
  },
];

const advisors = [
  {
    name: "Prof. Dr. W. Banzer",
    role: "Sports Medicine Advisory",
    context: "Goethe University Frankfurt, SGE. Specialist in internal medicine and sports medicine.",
    photo: "/team/banzer.png",
  },
  {
    name: "Christian Haser",
    role: "Elite Sports Advisory",
    context: "Medical Director, Eintracht Frankfurt, Bundesliga.",
    photo: "/team/haser.png",
  },
  {
    name: "Dr. Markus Schauer",
    role: "Nutrition & Performance Advisory",
    context: "Nutrition & sports scientist, Co-Founder VerticalMed.",
    photo: "/team/schauer.png",
  },
  {
    name: "Prof. Dr. N. Thoennissen",
    role: "Internal Medicine Advisory",
    context: "Specialist in internal medicine, Co-Founder VerticalMed.",
    photo: "/team/thoennissen.png",
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
        <div className="w-14 h-14 rounded-2xl overflow-hidden bg-background border border-border flex items-center justify-center font-display text-lg font-bold text-accent flex-shrink-0">
          {member.photo
            ? <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
            : member.initials}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {advisors.map((advisor, i) => (
                <motion.div
                  key={advisor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card/40 border border-border rounded-2xl p-5 flex flex-col gap-4 hover:border-white/20 transition-colors duration-300"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-card border border-border">
                    {advisor.photo
                      ? <img src={advisor.photo} alt={advisor.name} className="w-full h-full object-cover object-top" />
                      : <div className="w-full h-full flex items-center justify-center text-xs font-bold text-accent">{advisor.name.split(" ").map((w: string) => w[0]).join("").slice(0, 2)}</div>}
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-sm leading-tight">{advisor.name}</div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-accent mt-1">{advisor.role}</div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{advisor.context}</p>
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
