import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

// Synthetic case study — Westside Capital Group
export default function CaseStudyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 pt-8 text-sm text-muted-foreground flex items-center gap-2">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/customers" className="hover:text-foreground transition-colors">Customers</Link>
        <span>/</span>
        <span className="text-foreground">Westside Capital Group</span>
      </div>

      {/* Hero */}
      <section className="pt-16 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-8">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Case Study</span>
              <span className="text-muted-foreground">Bridge Lending · $400M AUM</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight max-w-4xl">
              Westside Capital cut time-to-credit-memo from 5 days to 6 hours.
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl leading-relaxed">
              A 12-person private credit shop processing 30 bridge loans per month automated their entire underwriting workflow — without adding headcount, changing their credit culture, or sacrificing diligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Band */}
      <section className="py-16 bg-deep-slate text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { value: "82%", label: "Reduction in underwriting time" },
              { value: "3x", label: "Increase in deal volume" },
              { value: "0", label: "Additional underwriters hired" },
              { value: "6 wks", label: "Time to full deployment" }
            ].map((m, i) => (
              <div key={i} className="p-6 md:p-8 border-r border-white/10 last:border-r-0">
                <div className="text-4xl font-serif font-bold mb-2">{m.value}</div>
                <div className="text-sm text-white/50 leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-12 prose-like">
            <div>
              <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-6">
                <div className="w-8 h-[2px] bg-foreground" />
                <span>The Challenge</span>
              </div>
              <h2 className="text-3xl font-serif font-bold mb-6">Speed was the business. Documents were the bottleneck.</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Westside Capital Group had built a strong reputation in the Southern California bridge lending market by closing loans faster than their competitors. Their borrowers — experienced fix-and-flip operators, bridge-to-perm borrowers, and value-add investors — came to Westside because they could get a commitment in 48 hours.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                The problem was that the underwriting team was at capacity. Two senior underwriters were processing 30 loans per month, and each credit memo took 4-6 hours of assembly time — not counting review and committee. Deal flow was growing, but headcount wasn't. Something had to give.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                "We were winning deals because we were fast," said the Managing Director of Credit. "But we were starting to turn things away because we physically couldn't process everything. I didn't want to hire two more underwriters just to have them spend half their time copying numbers from appraisals."
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-6">
                <div className="w-8 h-[2px] bg-foreground" />
                <span>The Solution</span>
              </div>
              <h2 className="text-3xl font-serif font-bold mb-6">Five agents. One cohesive workflow.</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Westside deployed Converge's Foundation tier in six weeks — starting with the Triage and Credit Intelligence agents and adding Comps and Background Report in the second month.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                The implementation team spent the first two weeks loading Westside's credit policy into Policy Match — converting their 40-page credit guidelines document into a queryable policy engine that applied consistently to every deal.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                The result was a complete underwriting workflow: documents arrived, Triage processed them, Credit Intelligence cross-referenced and flagged risks, Comps validated the collateral value, Background Report screened the borrower, and Policy Match checked compliance — all before an underwriter opened the file.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-secondary pl-8 py-2">
              <p className="text-2xl font-serif italic leading-relaxed text-foreground/80 mb-4">
                "The first time I opened a Converge credit memo, everything was already there. Every data point, sourced back to the document it came from. I spent 15 minutes reviewing instead of 4 hours building."
              </p>
              <footer className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Managing Director of Credit, Westside Capital Group</footer>
            </blockquote>

            <div>
              <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-6">
                <div className="w-8 h-[2px] bg-foreground" />
                <span>The Results</span>
              </div>
              <h2 className="text-3xl font-serif font-bold mb-6">Same team. Three times the volume.</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Six months after deployment, Westside was processing 90 loans per month — three times their pre-Converge volume — with the same two senior underwriters. Time to credit memo dropped from 5 business days to 6 hours.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Policy consistency improved as a side effect. Every deal that passed through Converge had a documented Policy Match scorecard — which meant exception tracking became a byproduct of the workflow rather than a manual compliance exercise.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                "We caught three deals in the first quarter that had material issues we might have missed under time pressure — a borrower with an undisclosed active judgment, a comp set that didn't support the appraised value, and an entity structure with a missing guarantor. Converge caught all three before we committed."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-4">Could your operation run like Westside?</h2>
            <p className="text-foreground/70 leading-relaxed">Tell us about your lending operation and we will show you what a Converge deployment could look like.</p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/demo">
              <Button size="lg" className="rounded-none px-10 h-14 w-full">Book a Demo</Button>
            </Link>
            <Link href="/customers">
              <Button size="lg" variant="outline" className="rounded-none px-10 h-14 w-full flex items-center justify-center gap-2">
                See All Case Studies <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
