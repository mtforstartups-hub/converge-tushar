import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, CheckCircle, Shield, Building, BarChart3, Search, Layers, Cpu, GitBranch, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } })
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero — Midnight */}
      <section className="relative overflow-hidden bg-midnight pt-24 pb-32 px-4 md:px-8 min-h-[88vh] flex items-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase text-steel">
              <div className="w-8 h-[1px] bg-steel"></div>
              <span>Credit Intelligence Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-sans font-bold text-white leading-[1.08] tracking-[-0.01em]">
              Credit intelligence for lenders who originate at scale.
            </h1>
            <p className="text-lg text-[#C9CDD6] max-w-lg leading-relaxed">
              We turn messy loan files into structured, traceable, credit-ready decisions — before your LOS opens.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/demo">
                <Button size="lg" className="bg-white text-midnight hover:bg-white/90 rounded-none px-8 h-14 text-base font-semibold">
                  See it on a live deal
                </Button>
              </Link>
              <Link href="/platform/overview">
                <Button size="lg" variant="outline" className="rounded-none px-8 h-14 text-base border-white/20 text-white hover:bg-white/8 hover:border-white/40">
                  Explore Platform
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Platform Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full bg-deep-slate border border-white/10 overflow-hidden"
          >
            <div className="h-10 border-b border-white/10 bg-midnight flex items-center px-4 gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
              </div>
              <div className="flex-1 bg-white/5 h-5 flex items-center px-2">
                <span className="text-[10px] text-steel font-mono">convergefi.com / intelligence / LN-2047</span>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-sans font-semibold text-white text-base">1492 Westside Boulevard</h3>
                  <p className="text-xs text-steel mt-1 font-mono">LN-2047 · Bridge Loan · $4.2M</p>
                </div>
                <div className="px-2 py-1 bg-verified/20 text-verified text-[10px] font-bold uppercase tracking-wider border border-verified/30">
                  Credit-Ready
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "DSCR", value: "1.45x", ok: true },
                  { label: "LTV", value: "62.5%", ok: true },
                  { label: "Risk Flags", value: "2", ok: false }
                ].map((m, i) => (
                  <div key={i} className="bg-midnight/60 border border-white/8 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-steel mb-1.5">{m.label}</p>
                    <p className={`font-mono text-lg font-semibold ${m.ok ? 'text-white' : 'text-amber-400'}`}>{m.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2.5">
                {[
                  { label: "Entity reconstruction", status: "verified", pct: 100 },
                  { label: "Policy match", status: "verified", pct: 100 },
                  { label: "Document conflicts", status: "flagged", pct: 78 }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.status === 'verified' ? 'bg-verified' : 'bg-amber-400'}`}></div>
                    <span className="text-xs text-steel flex-1">{item.label}</span>
                    <div className="w-24 h-1 bg-white/8 overflow-hidden">
                      <div
                        className={`h-full ${item.status === 'verified' ? 'bg-verified' : 'bg-amber-400'}`}
                        style={{ width: `${item.pct}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-mono text-steel">{item.pct}%</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                <span className="text-[10px] text-steel font-mono">Seven-layer entity review: 4 min 12 sec</span>
                <span className="text-[10px] text-verified font-mono">Audit trail: 47 events</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof Metrics — Deep Slate */}
      <section className="bg-deep-slate border-y border-white/8 py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/8">
            {[
              { value: "2.3M+", label: "Loans analyzed" },
              { value: "98.7%", label: "Extraction accuracy" },
              { value: "76%", label: "Faster decisioning" },
              { value: "$12B+", label: "Capital enabled" }
            ].map((m, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="px-8 py-6 first:pl-0 last:pr-0"
              >
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">{m.value}</div>
                <div className="text-sm text-steel mt-1">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof strip — light */}
      <section className="py-10 border-b border-border bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mb-7">Trusted by lending institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40">
            {["Citi", "Goldman Sachs", "Harvard", "Brookfield", "Palo Alto Networks"].map((name) => (
              <div key={name} className="font-sans text-lg font-bold text-foreground">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement — Parchment */}
      <section className="py-28 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-10 text-muted-foreground">
              <div className="w-8 h-[1px] bg-foreground/30"></div>
              <span>The Challenge</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-14 tracking-tight max-w-4xl">
              The cognitive work behind a commercial real estate loan spans 20 to 50 distinct work streams.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "4–6 hrs", label: "Per credit memo", desc: "Analysts spend most of their time locating and keying data — not analyzing risk or structuring deals." },
              { stat: "Inconsistent", label: "Policy enforcement", desc: "Credit guidelines live in PDFs. Enforcement relies on human memory, creating compliance gaps and uneven risk." },
              { stat: "Missed", label: "Entity exposure", desc: "Complex ownership chains and guarantor obligations are buried across hundreds of pages. They get missed." }
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border border-border p-8 bg-warm-white"
              >
                <div className="text-2xl font-bold text-foreground mb-1">{item.stat}</div>
                <div className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4">{item.label}</div>
                <p className="text-foreground/60 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CreditOS — Deep Slate dark */}
      <section className="py-28 px-4 md:px-8 bg-deep-slate text-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-10 text-steel">
              <div className="w-8 h-[1px] bg-steel"></div>
              <span>The Intelligence Engine</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                  CreditOS
                </h2>
                <p className="text-[#C9CDD6] text-lg leading-relaxed mb-8">
                  Not a workflow tool. Not a document parser. Not a data warehouse.
                  The intelligence engine that performs the cognitive work of credit decisioning.
                </p>
                <Link href="/platform/overview">
                  <Button className="bg-verified text-white hover:bg-verified/90 rounded-none px-6 h-11">
                    Explore CreditOS <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="space-y-0">
                {[
                  { n: "1", label: "Integration Layer", desc: "Connects to systems and sources across the credit stack. Ingests everything. Structures nothing." },
                  { n: "2", label: "Document Intelligence", desc: "Extracts meaning, normalizes data, and flags what matters. Reads like an expert. Never just OCR." },
                  { n: "3", label: "Agentic Reasoning", desc: "Interprets context, resolves ambiguity, and connects the dots. Thinks through the file like a credit expert." },
                  { n: "4", label: "Credit Policy Engine", desc: "Applies credit policy, rules, and scenario logic. Enforces your policy. Consistently." },
                  { n: "5", label: "Real-Time Risk Signals", desc: "Surfaces risk shifts and triggers actions in real time. Keeps risk visible. As things change." }
                ].map((layer, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-12 gap-4 border-t border-white/10 py-5 last:border-b"
                  >
                    <div className="col-span-2">
                      <span className="font-mono text-xs text-steel">{layer.n}</span>
                    </div>
                    <div className="col-span-10">
                      <h4 className="font-semibold text-white text-sm mb-1">{layer.label}</h4>
                      <p className="text-[#C9CDD6] text-xs leading-relaxed">{layer.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intelligence Layers — light */}
      <section className="py-28 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-10 text-muted-foreground">
            <div className="w-8 h-[1px] bg-foreground/30"></div>
            <span>Three Intelligence Layers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-14 max-w-3xl">
            Built for every role in the credit process.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
            {[
              {
                role: "Loan Officer Intelligence",
                prev: "Front Door Intelligence",
                serves: "Loan Officers, Originators, Broker Partners",
                line: "Win more by packaging stronger, credit-ready deals.",
                icon: FileText
              },
              {
                role: "Processor Intelligence",
                prev: "Middle Office Intelligence",
                serves: "Processors, Credit Coordinators",
                line: "Move faster with fewer handoffs and cleaner files.",
                icon: Cpu
              },
              {
                role: "Underwriter Intelligence",
                prev: "Back Office Intelligence",
                serves: "Underwriters, Credit Approvers",
                line: "Decide with clarity, speed, and confidence.",
                icon: BarChart3
              }
            ].map((layer, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 border-r last:border-r-0 border-border flex flex-col gap-5"
              >
                <layer.icon className="w-6 h-6 text-secondary" />
                <div>
                  <h3 className="font-bold text-foreground text-base leading-snug">{layer.role}</h3>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">{layer.serves}</p>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed border-t border-border pt-4">{layer.line}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents — off-white/warm */}
      <section className="py-28 px-4 md:px-8 bg-warm-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14">
            <div>
              <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-6 text-muted-foreground">
                <div className="w-8 h-[1px] bg-foreground/30"></div>
                <span>Platform Agents</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-xl leading-tight tracking-tight">
                Six specialized agents working in concert.
              </h2>
            </div>
            <Link href="/platform/overview">
              <Button variant="outline" className="rounded-none border-foreground/30 text-foreground mt-8 md:mt-0 hover:bg-foreground/5">
                Platform Overview
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Triage", desc: "Classifies and extracts data from hundreds of loan document types automatically.", icon: FileText, link: "/platform/triage" },
              { title: "Credit Intelligence", desc: "Cross-references data to identify risks and generates complete credit memos.", icon: BarChart3, link: "/platform/credit-intelligence" },
              { title: "Policy Match", desc: "Compares loan metrics against your specific credit box and guidelines.", icon: CheckCircle, link: "/platform/policy-match" },
              { title: "Entity Review", desc: "Analyzes borrower entity structures and guarantor ownership chains.", icon: Building, link: "/platform/entity-review" },
              { title: "Background Report", desc: "Analyzes background checks for litigation and financial distress signals.", icon: Shield, link: "/platform/background-report" },
              { title: "Comps", desc: "Identifies comparable properties and validates appraisal assumptions.", icon: Search, link: "/platform/comps" }
            ].map((agent, i) => (
              <Link key={i} href={agent.link}>
                <motion.div
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group border border-border bg-background p-7 hover:border-secondary transition-colors cursor-pointer h-full flex flex-col"
                >
                  <div className="w-10 h-10 bg-secondary/8 flex items-center justify-center mb-5">
                    <agent.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-secondary transition-colors">{agent.title}</h3>
                  <p className="text-foreground/60 leading-relaxed flex-1 text-sm">{agent.desc}</p>
                  <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-secondary">
                    Explore <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA — Midnight */}
      <section className="py-28 px-4 md:px-8 bg-midnight text-white">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-8 text-steel">
              <div className="w-8 h-[1px] bg-steel"></div>
              <span>Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              See Converge on a live deal.
            </h2>
            <p className="text-[#C9CDD6] text-lg leading-relaxed mb-10">
              Book a 20-minute demo. We'll run your documents through CreditOS live — entity reconstruction, policy match, and full audit trail.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/demo">
                <Button size="lg" className="bg-verified hover:bg-verified/90 text-white rounded-none px-8 h-14 text-base font-semibold">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/platform/overview">
                <Button size="lg" variant="outline" className="rounded-none px-8 h-14 text-base border-white/20 text-white hover:bg-white/8">
                  Explore Platform
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-0 border border-white/10">
            {[
              { icon: CheckCircle, text: "Seven-layer entity review: 4 minutes." },
              { icon: GitBranch, text: "Your portfolio, unified." },
              { icon: BarChart3, text: "Cash flow, clearly forecast." },
              { icon: Shield, text: "Audit-ready by design." },
              { icon: AlertTriangle, text: "See the signal. Skip the noise." }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-5 border-b last:border-b-0 border-white/8">
                <item.icon className="w-4 h-4 text-verified flex-shrink-0" />
                <span className="text-[#C9CDD6] text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
