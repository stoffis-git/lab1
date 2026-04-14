import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ArrowUpRight, Activity, Shield, Database, Pill, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ── Sphere Particle Network (inspired by reference image) ─────────────────────
function SphereNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;

    // Fibonacci sphere distribution for uniform coverage
    const N_SPHERE = 420;
    const goldenAngle = Math.PI * (1 + Math.sqrt(5));
    type SPart = { phi: number; theta: number; r: number };
    const sphereParticles: SPart[] = [];
    for (let i = 0; i < N_SPHERE; i++) {
      sphereParticles.push({
        phi: Math.acos(1 - 2 * (i + 0.5) / N_SPHERE),
        theta: goldenAngle * i,
        r: 1 + (Math.random() - 0.5) * 0.09,
      });
    }

    // Distant scatter field
    const N_SCATTER = 220;
    type Scatter = { nx: number; ny: number };
    const scatter: Scatter[] = [];
    for (let i = 0; i < N_SCATTER; i++) {
      scatter.push({
        nx: (Math.random() - 0.5) * 1.88,
        ny: (Math.random() - 0.5) * 1.88,
      });
    }

    // Pre-select long line pairs (sphere → scatter)
    const N_LINES = 160;
    const lines: { si: number; sc: number }[] = [];
    for (let i = 0; i < N_LINES; i++) {
      lines.push({
        si: Math.floor(Math.random() * N_SPHERE),
        sc: Math.floor(Math.random() * N_SCATTER),
      });
    }

    // Pre-compute sphere particle 3D positions for neighbor lookup
    const sphereXYZ = sphereParticles.map(p => ({
      x: Math.sin(p.phi) * Math.cos(p.theta),
      y: Math.cos(p.phi),
      z: Math.sin(p.phi) * Math.sin(p.theta),
    }));

    // Pre-compute sphere→sphere mesh pairs (k nearest neighbors per particle)
    const K_NEIGHBORS = 3;
    const pairSet = new Set<string>();
    const meshPairs: { a: number; b: number }[] = [];
    for (let i = 0; i < N_SPHERE; i++) {
      const dists = sphereXYZ.map((q, j) => {
        if (j === i) return { j, d: Infinity };
        const dx = sphereXYZ[i].x - q.x;
        const dy = sphereXYZ[i].y - q.y;
        const dz = sphereXYZ[i].z - q.z;
        return { j, d: dx * dx + dy * dy + dz * dz };
      }).sort((a, b) => a.d - b.d).slice(0, K_NEIGHBORS);
      for (const { j } of dists) {
        const key = j < i ? `${j}-${i}` : `${i}-${j}`;
        if (!pairSet.has(key)) { pairSet.add(key); meshPairs.push({ a: i, b: j }); }
      }
    }

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, W, H);

      const rot = time * 0.00012;
      const cx = W / 2;
      const cy = H / 2;
      const scale = Math.min(W, H) * 0.21;
      const depth = 2.6;

      // Project sphere particles with perspective
      const proj = sphereParticles.map(p => {
        const th = p.theta + rot;
        const x = Math.sin(p.phi) * Math.cos(th) * p.r;
        const y = Math.cos(p.phi) * p.r;
        const z = Math.sin(p.phi) * Math.sin(th) * p.r;
        const pz = (z + 1) / 2; // 0=back, 1=front
        const px = cx + (x / (depth - z)) * scale * depth;
        const py = cy + (y / (depth - z)) * scale * depth;
        return { px, py, pz, z };
      });

      // Background scatter dots
      scatter.forEach(sp => {
        const sx = cx + sp.nx * W * 0.47;
        const sy = cy + sp.ny * H * 0.47;
        ctx.beginPath();
        ctx.arc(sx, sy, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.22)';
        ctx.fill();
      });

      // Long radiating lines from sphere surface to scatter
      lines.forEach(l => {
        const sp = proj[l.si];
        const sc = scatter[l.sc];
        const sx = cx + sc.nx * W * 0.47;
        const sy = cy + sc.ny * H * 0.47;
        const alpha = sp.pz * 0.13;
        ctx.beginPath();
        ctx.moveTo(sp.px, sp.py);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = 1.0;
        ctx.stroke();
      });

      // Sphere-to-sphere mesh lines
      meshPairs.forEach(pair => {
        const a = proj[pair.a];
        const b = proj[pair.b];
        const alpha = ((a.pz + b.pz) / 2) * 0.11;
        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      });

      // Sphere particles — sorted back-to-front for correct depth
      const sorted = [...proj].sort((a, b) => a.z - b.z);
      sorted.forEach(p => {
        const alpha = 0.15 + p.pz * 0.65;
        const r = 0.5 + p.pz * 1.3;
        ctx.beginPath();
        ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animId = requestAnimationFrame(animate);
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animId); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: 'transparent' }} />;
}

// ── Data Silos Infographic ────────────────────────────────────────────────────
function DataSilosDiagram() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  const sources = [
    { name: 'OURA Ring', x: -260, y: -130 },
    { name: 'WHOOP', x: -50, y: -180 },
    { name: 'STRAVA', x: -300, y: 30 },
    { name: 'Apple Health', x: 260, y: -100 },
    { name: 'Lab Results', x: -220, y: 160 },
    { name: "Doctor's Letter", x: 60, y: 185 },
    { name: 'Food Tracking', x: 290, y: 80 },
    { name: 'Pharmacists', x: 220, y: -170 },
    { name: 'Self-Reporting', x: -80, y: -230 },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-[480px] flex items-center justify-center select-none">
      <div className="absolute w-64 h-64 rounded-full bg-white/3 blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute z-20 flex items-center justify-center"
      >
        <div className="w-28 h-28 rounded-full border border-white/25 bg-background flex flex-col items-center justify-center">
          <span className="font-display font-bold text-lg text-white tracking-wider">DAC</span>
          <span className="text-[9px] text-muted-foreground tracking-widest uppercase mt-0.5">Active</span>
        </div>
        {[0, 0.8, 1.6].map((delay, i) => (
          <motion.div key={i}
            className="absolute w-28 h-28 rounded-full border border-white/15"
            animate={{ scale: [1, 2.4], opacity: [0.4, 0] }}
            transition={{ duration: 2.4, delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </motion.div>

      {sources.map((src, i) => (
        <motion.div key={src.name} className="absolute"
          initial={{ x: src.x * 1.5, y: src.y * 1.5, opacity: 0 }}
          animate={isInView ? { x: src.x, y: src.y, opacity: 1 } : {}}
          transition={{ duration: 1.1, delay: i * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-white/60 -ml-0.5 -mt-0.5"
            animate={{ x: [0, -src.x], y: [0, -src.y], opacity: [0, 0.6, 0] }}
            transition={{ duration: 2.2, delay: i * 0.3 + 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative px-3.5 py-1.5 rounded-full border border-border/80 bg-card/90 backdrop-blur-sm text-xs text-muted-foreground font-medium whitespace-nowrap">
            {src.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
}


// ── Stat ──────────────────────────────────────────────────────────────────────
function Stat({ prefix = '', value, suffix = '', label }: { prefix?: string; value: string; suffix?: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="border-l border-border/60 pl-6"
    >
      <div className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
        {prefix}{value}{suffix}
      </div>
      <div className="text-sm text-muted-foreground leading-snug max-w-[200px]">{label}</div>
    </motion.div>
  );
}

// ── Verticals data ─────────────────────────────────────────────────────────────
const verticals = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    icon: Activity,
    headline: 'Post-operative protocols assigned from biomarkers — not from averages.',
    detail: 'Real-time dialysis formula adjustment. Care pathway decisions that used to take six weeks now happen at discharge.',
  },
  {
    id: 'insurance',
    label: 'Insurance',
    icon: Shield,
    headline: 'Chronic disease identified 18 months before first hospitalization.',
    detail: 'Biomarker-driven risk stratification replaces demographic assumptions. Churn reduced. Claims intercepted.',
  },
  {
    id: 'pharma',
    label: 'Pharma',
    icon: Pill,
    headline: 'Genetic responder cohorts surfaced in weeks, not enrollment cycles.',
    detail: 'Data-driven cross-sell for retail pharmacies. Clinical trial timelines compressed through pre-screening intelligence.',
  },
  {
    id: 'nutrition',
    label: 'Health & Nutrition',
    icon: Database,
    headline: 'Every supplement matched to an actual, verified deficiency.',
    detail: 'Biomarker profiles replace demographic personas. Retention follows biology. Reformulation cycles cut from 24 to 6 months.',
  },
  {
    id: 'labs',
    label: 'Diagnostic Labs',
    icon: Microscope,
    headline: 'Raw test output structured into clinical intelligence — automatically.',
    detail: 'B2B intelligence reports. B2B2C per-report DTC revenue. Commodity results become premium products.',
  },
];

// ── Compliance items ───────────────────────────────────────────────────────────
const complianceItems = [
  'FHIR-native architecture',
  'GDPR & DSGVO compliant',
  'ISO 27001 standards',
  'Medical Board–approved frameworks',
  'Enterprise-grade APIs',
  'White-label ready',
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeVertical, setActiveVertical] = useState(0);

  return (
    <div className="flex flex-col w-full">

      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
        <SphereNetwork />

        <div className="container relative z-10 px-4 flex flex-col items-center text-center pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/12 bg-white/4 text-white/60 text-[11px] font-semibold tracking-[0.12em] uppercase mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              European Intelligence Infrastructure
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-[68px] font-bold tracking-[-0.03em] text-white leading-[1.1] mb-7">
              The Agent Standard for<br />
              Healthcare Decision Making
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Lab1 is the intelligence infrastructure layer connecting fragmented health data into actionable clinical precision — across every healthcare vertical in Europe.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/platform">
                <Button size="lg" className="h-12 px-8 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 text-sm tracking-wide">
                  Explore the Platform
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="lg" className="h-12 px-8 text-white/60 hover:text-white hover:bg-white/5 text-sm">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>

        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground z-10"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </motion.div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-28 md:py-36 bg-background border-t border-border/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-5">The Problem</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                The problem is not more data.<br />
                <span className="text-muted-foreground/60">It is making sense of it.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Europeans generate 10 health data points per person per day — across wearables, labs, clinics, and self-tracking apps. None of them talk to each other. Without a connectivity layer, every signal stays noise. No decision is made. No action is taken.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="p-7 rounded-2xl border border-border bg-card/50">
                <p className="text-base text-muted-foreground leading-relaxed font-medium">
                  "The bottleneck is the missing connectivity layer, not diagnostics. Without it, every day vital decisions are delayed or missed. With it, true personalization and new business opportunities finally arise."
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'OURA / WHOOP / STRAVA', tag: 'Wearables' },
                  { label: 'Lab Results & POC Tests', tag: 'Diagnostics' },
                  { label: "Doctor's Letters & EHR", tag: 'Clinical' },
                  { label: 'Food & Self-Reporting', tag: 'Lifestyle' },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl border border-border bg-background/60">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-accent mb-1.5">{item.tag}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-card border border-border/60">
                <div className="w-2 h-2 rounded-full bg-red-500/70 animate-pulse flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Without a connectivity layer: <span className="text-foreground font-medium">fragmented signals, no action possible</span></span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-card/40 border border-border rounded-3xl p-4 overflow-hidden"
            >
              <DataSilosDiagram />
              <div className="text-center text-xs text-muted-foreground/50 pb-2 tracking-wide">
                All data sources converge through the Diagnostic Agent Core
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE SOLUTION — DAC ARCHITECTURE ── */}
      <section className="py-28 md:py-36 bg-card/20 border-t border-border/30 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-5">The Solution</div>
            <div className="flex flex-col md:flex-row md:items-end gap-6 md:justify-between">
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] max-w-2xl">
                One engine.<br />Every decision.
              </h2>
              <Link href="/platform">
                <Button variant="ghost" className="text-white/50 hover:text-white group text-sm shrink-0 mb-1">
                  Full architecture <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            </div>
            <p className="text-lg text-muted-foreground mt-5 max-w-2xl leading-relaxed">
              The Diagnostic Agent Core (DAC) is the intelligence infrastructure that turns raw diagnostics into real, actionable output. Data flows in from every source. Intelligence flows out to every vertical.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Orchestration',
                desc: 'Raw inputs validated, normalized, and assembled into a unified longitudinal patient context.',
                items: ['Data Validator', 'Context Builder', 'Routing Agent'],
              },
              {
                num: '02',
                title: 'Interpretation',
                desc: 'Specialized agentic models analyze domain-specific biomarkers and patterns — not one monolithic LLM.',
                items: ['Biomarker Agent', 'Pattern Agent', 'Consolidation Agent'],
              },
              {
                num: '03',
                title: 'Action',
                desc: 'Clinical intelligence formatted into specific, consumable outputs for the downstream application.',
                items: ['Recommendation', 'Care Guidance', 'Insights & Alert'],
              },
            ].map((card, i) => (
              <motion.div key={card.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group bg-background border border-border hover:border-white/20 rounded-2xl p-7 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-5 right-5 font-display text-6xl font-bold text-border/40 select-none leading-none">{card.num}</div>
                <div className="relative z-10">
                  <div className="w-1 h-8 bg-accent/60 rounded-full mb-5" />
                  <h3 className="font-display text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{card.desc}</p>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground/80">
                        <div className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKET CONTEXT ── */}
      <section className="py-28 border-t border-border/30 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 max-w-xl"
          >
            <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-5">Market Context</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              The conditions are set.<br />The infrastructure is missing.
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            <Stat prefix="1" value="/3" label="European adults own a health wearable — tracking, but not acting on data." />
            <Stat value="€640B" label="European healthcare market. The largest single infrastructure gap in the region." />
            <Stat value="73%" label="of Germans already track at least one health metric digitally." />
            <Stat value="$119B" label="global precision health market projected by 2030." />
          </div>
        </div>
      </section>

      {/* ── VERTICALS ── */}
      <section className="py-28 md:py-36 bg-card/20 border-t border-border/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
            <div>
              <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-5">Five Verticals. One Core.</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Same intelligence.<br />Different outputs.
              </h2>
            </div>
            <Link href="/use-cases">
              <Button variant="ghost" className="text-white/50 hover:text-white group text-sm shrink-0">
                All use cases <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-0 border border-border rounded-2xl overflow-hidden">
            <div className="flex lg:flex-col border-b lg:border-b-0 lg:border-r border-border overflow-x-auto lg:overflow-x-visible flex-shrink-0">
              {verticals.map((v, i) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVertical(i)}
                  className={`flex items-center gap-3 px-5 py-4 lg:py-5 text-sm font-medium transition-colors whitespace-nowrap lg:whitespace-normal text-left border-b border-border/50 last:border-0 ${
                    activeVertical === i
                      ? 'bg-white/5 text-white lg:border-l-2 lg:border-l-accent'
                      : 'text-muted-foreground hover:text-white hover:bg-white/3'
                  }`}
                >
                  <v.icon className="w-4 h-4 flex-shrink-0" />
                  {v.label}
                </button>
              ))}
            </div>

            <div className="flex-1 p-8 md:p-12 relative min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVertical}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    {(() => { const Icon = verticals[activeVertical].icon; return <Icon className="w-5 h-5 text-muted-foreground" />; })()}
                    <span className="text-xs font-bold tracking-widest uppercase text-accent">{verticals[activeVertical].label}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-[1.2] mb-5">
                    {verticals[activeVertical].headline}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-xl mb-8">
                    {verticals[activeVertical].detail}
                  </p>
                  <Link href="/use-cases">
                    <button className="text-white/60 text-sm font-medium group flex items-center gap-1.5 hover:text-white transition-colors">
                      Explore this vertical
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE TRUST ── */}
      <section className="py-20 border-t border-border/30 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-start gap-12"
          >
            <div className="md:w-72 flex-shrink-0">
              <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-4">Compliance</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                Built for regulated healthcare.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Operating in the DACH market requires uncompromised data security and clinical-grade compliance — built in from the start, not bolted on.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3">
              {complianceItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-border bg-card/50 hover:border-white/20 transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm text-foreground/85 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-36 relative overflow-hidden border-t border-border/30">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs font-bold tracking-[0.16em] uppercase text-accent mb-6">Next Step</div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
              Build the standard.<br />
              <span className="text-muted-foreground/50">Not just the product.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
              We work with healthcare organizations, insurers, pharma companies, and diagnostic labs across the DACH region.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-12 text-base bg-primary text-primary-foreground font-semibold hover:bg-primary/90 tracking-wide">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
