import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, CheckCircle, Shield, Building, BarChart3, Search, ArrowRight, Layers, Lock, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } })
};

export default function PlatformOverview() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-8 text-muted-foreground">
            <div className="w-8 h-[1px] bg-foreground/30"></div>
            <span>Platform Overview</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-[1.08] tracking-[-0.01em] mb-8 max-w-3xl">
            The architecture of modern credit intelligence.
          </h1>
          <p className="text-xl text-foreground/65 leading-relaxed mb-10 max-w-2xl">
            CreditOS — the intelligence engine that reconstructs entities, resolves conflicts, and matches deals to credit policy before the LOS opens.
          </p>
          <Link href="/demo">
            <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-none px-8 h-12">
              See it on a live deal
            </Button>
          </Link>
        </div>
      </section>

      {/* Architecture Visual */}
      <section className="py-24 px-4 md:px-8 bg-warm-white border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-bold text-2xl mb-12">Workflow architecture</h3>

            <div className="relative border border-border p-8 md:p-16 bg-background">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="w-full md:w-1/3 text-right">
                  <h4 className="font-bold text-lg mb-2">1. Ingestion</h4>
                  <p className="text-sm text-foreground/60">Unstructured documents enter the system via API or secure upload.</p>
                </div>
                <div className="w-14 h-14 shrink-0 bg-warm-white border border-border flex items-center justify-center rotate-45">
                  <Layers className="-rotate-45 text-foreground/50 w-5 h-5" />
                </div>
                <div className="w-full md:w-1/3">
                  <div className="flex flex-col gap-2">
                    <div className="bg-background border border-border px-4 py-2 text-xs font-mono text-foreground/70">Appraisal.pdf</div>
                    <div className="bg-background border border-border px-4 py-2 text-xs font-mono text-foreground/70">Operating_Statement.xlsx</div>
                    <div className="bg-background border border-border px-4 py-2 text-xs font-mono text-foreground/70">Title_Report.pdf</div>
                  </div>
                </div>
              </div>

              <div className="w-[1px] h-12 bg-border mx-auto my-[-1.5rem] relative z-10 hidden md:block"></div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-16 relative z-20">
                <div className="w-full md:w-1/3 text-right">
                  <h4 className="font-bold text-lg mb-2">2. CreditOS Engine</h4>
                  <p className="text-sm text-foreground/60">Specialized agents extract, cross-reference, and analyze data.</p>
                </div>
                <div className="w-14 h-14 shrink-0 bg-secondary text-white flex items-center justify-center rotate-45">
                  <Zap className="-rotate-45 w-5 h-5" />
                </div>
                <div className="w-full md:w-1/3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-background border border-border p-2 text-center text-xs font-bold uppercase tracking-wider">Triage</div>
                    <div className="bg-background border border-border p-2 text-center text-xs font-bold uppercase tracking-wider">Policy Match</div>
                    <div className="bg-background border border-border p-2 text-center text-xs font-bold uppercase tracking-wider">Entity Review</div>
                    <div className="bg-background border border-border p-2 text-center text-xs font-bold uppercase tracking-wider">Comps</div>
                  </div>
                </div>
              </div>

              <div className="w-[1px] h-12 bg-border mx-auto my-[-1.5rem] relative z-10 hidden md:block"></div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-20">
                <div className="w-full md:w-1/3 text-right">
                  <h4 className="font-bold text-lg mb-2">3. Intelligence Output</h4>
                  <p className="text-sm text-foreground/60">Structured credit memos, risk alerts, and compliance scorecards.</p>
                </div>
                <div className="w-14 h-14 shrink-0 bg-primary text-primary-foreground flex items-center justify-center rotate-45">
                  <CheckCircle className="-rotate-45 w-5 h-5" />
                </div>
                <div className="w-full md:w-1/3">
                  <div className="bg-background border border-border p-4">
                    <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
                      <span className="font-bold text-sm">Credit Memo</span>
                      <span className="text-[10px] uppercase tracking-wider text-secondary font-bold font-mono">Approved</span>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-muted"></div>
                      <div className="w-4/5 h-2 bg-muted"></div>
                      <div className="w-5/6 h-2 bg-muted"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-12 text-muted-foreground">
            <div className="w-8 h-[1px] bg-foreground/30"></div>
            <span>The 6 Agents</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="group bg-background border border-border p-7 hover:border-secondary transition-colors cursor-pointer h-full flex flex-col"
                >
                  <div className="w-10 h-10 bg-secondary/8 flex items-center justify-center mb-5">
                    <agent.icon className="w-5 h-5 text-secondary group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-secondary transition-colors">{agent.title}</h3>
                  <p className="text-foreground/60 leading-relaxed flex-1 text-sm">{agent.desc}</p>
                  <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-secondary">
                    Explore capabilities <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integration CTA — Deep Slate */}
      <section className="py-24 px-4 md:px-8 bg-deep-slate text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl">
          <div>
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-6 text-steel">
              <div className="w-8 h-[1px] bg-steel"></div>
              <span>Integration</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight tracking-tight">Connects seamlessly with your LOS.</h2>
            <p className="text-xl text-[#C9CDD6] mb-8 leading-relaxed">
              Converge isn't another silo. Our robust API integrates directly with your existing Loan Origination System, pulling documents and pushing structured data back into your workflow.
            </p>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-white/8 px-4 py-2 border border-white/15">
                <Lock className="w-3.5 h-3.5 text-steel" />
                <span className="text-xs font-mono text-[#C9CDD6]">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2 bg-white/8 px-4 py-2 border border-white/15">
                <Zap className="w-3.5 h-3.5 text-steel" />
                <span className="text-xs font-mono text-[#C9CDD6]">REST API</span>
              </div>
            </div>
          </div>
          <div className="border border-white/15 p-8 bg-midnight font-mono text-sm text-[#C9CDD6] overflow-hidden">
            <pre><code>{`POST /v1/loans/process
{
  "loan_id": "LN-2047",
  "documents": [
    "s3://bucket/appraisal.pdf",
    "s3://bucket/rent_roll.xlsx"
  ],
  "agents": [
    "triage",
    "credit-intelligence"
  ]
}

// Response
{
  "status": "processing",
  "job_id": "job_99x821",
  "estimated_completion": "4m"
}`}</code></pre>
          </div>
        </div>
      </section>
    </div>
  );
}
