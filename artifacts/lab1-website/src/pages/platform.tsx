import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Database, ShieldCheck, Activity, Brain, Server, Lock, CheckCircle2 } from "lucide-react";

const complianceBadges = [
  { label: "FHIR-native architecture", desc: "HL7 FHIR R4 standard for interoperability with European clinical systems." },
  { label: "GDPR & DSGVO compliant", desc: "Patient data sovereignty enforced at infrastructure level — not just policy." },
  { label: "ISO 27001 standards", desc: "Information security management aligned to enterprise healthcare requirements." },
  { label: "Medical Board–approved frameworks", desc: "Clinical protocols validated with recognized European medical bodies." },
  { label: "Enterprise-grade APIs", desc: "Rate-limited, versioned, and audited REST/FHIR endpoints with full SLA." },
  { label: "White-label ready", desc: "Deploy under your own brand and domain — full infrastructure control." },
];

export default function Platform() {
  return (
    <div className="flex flex-col w-full pt-24">

      {/* Hero */}
      <section className="py-20 md:py-32 relative border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/8 text-accent text-xs font-bold tracking-widest uppercase mb-6">
                Platform Architecture
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                The Diagnostic Agent Core
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A robust, three-layer orchestration engine designed to ingest fragmented health data, interpret it with clinical precision, and output actionable intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 3 Layers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">

            {/* Layer 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-accent font-display font-bold text-xl mb-2">Layer 01</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">Data Orchestration</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Healthcare data is notoriously messy. The Orchestration layer standardizes inputs from radically different sources into a unified clinical context.
                </p>
                <ul className="space-y-4">
                  {[
                    { title: "Data Validator", desc: "Checks for completeness, anomalies, and unit standardization across APIs." },
                    { title: "Context Builder", desc: "Constructs a longitudinal patient timeline from discrete data events." },
                    { title: "Routing Agent", desc: "Determines which specialized interpretation models need to be engaged." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0" />
                      <div>
                        <strong className="text-white block">{item.title}</strong>
                        <span className="text-muted-foreground text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-4">
                  {["Home Testing", "POC Testing", "Lab Results", "Wearables", "Doctor Letters", "Self-Reportings"].map((source) => (
                    <div key={source} className="bg-background border border-border p-4 rounded-xl flex items-center justify-center text-center text-sm font-medium text-muted-foreground">
                      {source}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-card border border-border p-8 rounded-3xl flex items-center justify-center min-h-[400px] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-8">
                  <Brain className="w-64 h-64 text-white" />
                </div>
                <div className="relative z-10 flex gap-4">
                  <div className="bg-background border border-border p-6 rounded-2xl">
                    Biomarker<br/>Analysis
                  </div>
                  <div className="bg-background border border-border p-6 rounded-2xl mt-12">
                    Pattern<br/>Recognition
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-accent font-display font-bold text-xl mb-2">Layer 02</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">Clinical Interpretation</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Instead of a single monolithic LLM, the DAC utilizes specialized agentic models trained on specific clinical domains.
                </p>
                <ul className="space-y-4">
                  {[
                    { title: "Biomarker Agent", desc: "Analyzes specific lab values against dynamic, age/sex-adjusted reference ranges." },
                    { title: "Pattern Agent", desc: "Identifies longitudinal trends (e.g., gradual HbA1c creep over 3 years)." },
                    { title: "Consolidation Agent", desc: "Resolves conflicting signals between different data sources." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0" />
                      <div>
                        <strong className="text-white block">{item.title}</strong>
                        <span className="text-muted-foreground text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-accent font-display font-bold text-xl mb-2">Layer 03</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">Action Outputs</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Intelligence without action is just trivia. The final layer formats the clinical interpretation into specific outputs for the consuming application.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Recommendations", icon: Activity },
                    { title: "Care Guidance", icon: ShieldCheck },
                    { title: "Insights", icon: Brain },
                    { title: "Alerts", icon: Server }
                  ].map((item, i) => (
                    <div key={i} className="p-4 border border-border rounded-xl bg-card hover:border-white/20 transition-colors">
                      <item.icon className="w-5 h-5 text-muted-foreground mb-3" />
                      <div className="font-medium text-white">{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card border border-border p-8 rounded-3xl">
                <div className="space-y-4 font-mono text-xs text-muted-foreground">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <span className="text-accent">POST</span> /v1/action/generate<br/>
                    {`{
  "patient_id": "eu-8492-b",
  "context_vector": "...",
  "requested_output": "insurance_premium_adjustment"
}`}
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <span className="text-green-400/80">200 OK</span><br/>
                    {`{
  "risk_score_delta": -0.15,
  "justification": "Sustained reduction in fasting glucose",
  "recommended_action": "apply_discount_tier_2"
}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 border-t border-border/40 bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="flex flex-col md:flex-row md:items-end gap-6 md:justify-between mb-12">
              <div>
                <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-4">Compliance</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                  Built for regulated healthcare.
                </h2>
                <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
                  The DACH healthcare market demands the highest standards of data governance, clinical validity, and technical security. The DAC is designed from the ground up to meet every one.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {complianceBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-5 rounded-xl border border-border bg-background/60 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white text-sm mb-1">{badge.label}</div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{badge.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl font-bold text-white mb-4">Integrate the Standard</h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
              Get access to the DAC API and start building precision health intelligence into your product.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-base bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
                Request API Access
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
