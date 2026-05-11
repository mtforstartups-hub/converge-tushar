import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

// Synthetic glossary term page — DSCR
export default function GlossaryTermPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 pt-8 text-sm text-muted-foreground flex items-center gap-2">
        <Link href="/glossary" className="hover:text-foreground transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3 h-3" /> Glossary
        </Link>
      </div>

      {/* Header */}
      <section className="pt-12 pb-16 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-sm">
              <span className="text-xs uppercase tracking-widest text-secondary font-bold">Credit Metric</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
              DSCR — Debt Service Coverage Ratio
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">
              A measure of a property's ability to cover its debt obligations, calculated as Net Operating Income divided by annual debt service. The primary income-based credit metric in commercial real estate lending.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-3xl space-y-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Definition</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Debt Service Coverage Ratio (DSCR) measures whether a property generates enough income to cover its debt payments. It is calculated by dividing the property's Net Operating Income (NOI) by the total annual debt service (principal and interest payments).
            </p>
            <div className="border border-border p-8 bg-background my-6">
              <div className="text-center">
                <div className="text-2xl font-mono font-bold mb-2">DSCR = NOI ÷ Annual Debt Service</div>
                <div className="text-sm text-muted-foreground">Where NOI = Gross Income − Operating Expenses</div>
              </div>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              A DSCR greater than 1.0 indicates that the property generates more income than required to service the debt. A DSCR below 1.0 indicates a shortfall — the property does not cover its debt payments from operating income alone.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Interpretation</h2>
            <div className="space-y-0">
              {[
                { range: "DSCR > 1.25x", meaning: "Strong coverage. Typical minimum for most commercial real estate term loans." },
                { range: "DSCR 1.15x–1.25x", meaning: "Adequate coverage. Common in bridge lending with strong borrower or property characteristics." },
                { range: "DSCR 1.0x–1.15x", meaning: "Thin coverage. Usually requires strong collateral, low LTV, or recourse to approve." },
                { range: "DSCR < 1.0x", meaning: "Negative coverage. Property income does not support the debt. Typically a hard stop without exceptional compensating factors." }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 border-t border-border py-4 last:border-b">
                  <div className="col-span-12 md:col-span-4">
                    <span className="font-mono font-bold text-sm">{row.range}</span>
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <span className="text-foreground/70 text-sm">{row.meaning}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">How Converge Calculates DSCR</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Converge's Credit Intelligence agent calculates DSCR by extracting NOI from the property's income documents — typically the rent roll, operating statements, and bank statements — and dividing by the calculated annual debt service for the proposed loan.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-4">
              The agent cross-references income figures across all three sources to identify inconsistencies — flagging cases where the rent roll income doesn't reconcile with operating statement deposits or bank statement activity.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              For DSCR lending products, Converge applies the lesser of actual rent or market rent to the income figure per the lender's policy configuration.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Related Terms</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { term: "NOI", slug: "noi" },
                { term: "Debt Yield", slug: "debt-yield" },
                { term: "LTV", slug: "ltv" },
                { term: "Cap Rate", slug: "cap-rate" },
                { term: "Credit Box", slug: "credit-box" }
              ].map((t, i) => (
                <Link key={i} href={`/glossary/${t.slug}`}>
                  <div className="border border-border px-4 py-2 hover:bg-foreground hover:text-background transition-colors text-sm font-medium">{t.term}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-background text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-serif mb-4">See how Converge calculates DSCR automatically.</h2>
          <p className="text-foreground/70 mb-8">Watch the Credit Intelligence agent process a real loan file and produce a complete DSCR calculation.</p>
          <Link href="/demo">
            <Button className="rounded-none px-10 h-12">Book a Demo</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
