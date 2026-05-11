import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

// Synthetic blog post — rendered for any /blog/:slug
export default function BlogPostPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 pt-8 text-sm text-muted-foreground flex items-center gap-2">
        <Link href="/blog" className="hover:text-foreground transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3 h-3" /> Blog
        </Link>
        <span>/</span>
        <span className="text-foreground">Article</span>
      </div>

      {/* Header */}
      <section className="pt-12 pb-16 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-sm">
              <span className="text-xs uppercase tracking-widest text-secondary font-bold">AI & Technology</span>
              <span className="text-muted-foreground">April 28, 2026 · 8 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
              Why CRE Lenders Lose Money on Document Review (And What to Do About It)
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              An analysis of where time goes in the CRE underwriting process — and how to recapture it without sacrificing analysis quality.
            </p>
            <div className="flex items-center gap-4 pt-2 pb-6 border-b border-border">
              <div className="w-10 h-10 bg-foreground/10 border border-border flex items-center justify-center text-sm font-bold">CF</div>
              <div>
                <div className="text-sm font-semibold">Converge Finance Team</div>
                <div className="text-xs text-muted-foreground">Credit Intelligence Research</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="pb-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="prose max-w-none space-y-8">
            <p className="text-lg leading-relaxed text-foreground/80">
              Ask any CRE credit analyst what they spend most of their time on, and the answer is consistent: finding information, not analyzing it. The average commercial real estate credit memo requires pulling data from 15 to 30 separate documents — appraisals, rent rolls, operating statements, title reports, entity documents, background reports — and assembling that data into a coherent credit narrative.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-12">The Numbers Behind the Problem</h2>
            <p className="text-foreground/70 leading-relaxed">
              The economics of manual document review are quietly devastating. In a typical mid-size CRE lending operation, a senior underwriter earning $120,000 per year — or roughly $60 per hour — spends approximately 65% of their time on document assembly and data extraction tasks that require no analytical judgment whatsoever.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              On a 30-deal monthly volume, that translates to approximately $28,000 per month in underwriter compensation going toward work that a well-designed system could do in seconds. Annually, that is $336,000 of senior underwriter time spent on clerical work — at a single institution.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              This is not a small-shop problem. In fact, larger institutions often have it worse: more process, more required signatures, more parallel checklists that each need to be populated from the same source documents.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-12">Where the Time Actually Goes</h2>
            <p className="text-foreground/70 leading-relaxed">
              To understand the opportunity, it helps to break down where document review time is actually spent. Based on time-motion studies with lending clients, the distribution looks approximately like this:
            </p>

            <div className="border border-border p-8 bg-background my-8">
              <div className="space-y-4">
                {[
                  { task: "Document identification and organization", pct: 18 },
                  { task: "Data extraction and keying", pct: 32 },
                  { task: "Cross-referencing figures across documents", pct: 14 },
                  { task: "Policy compliance checking", pct: 12 },
                  { task: "Credit memo assembly", pct: 19 },
                  { task: "Actual risk analysis and judgment", pct: 35 }
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-48 text-sm text-foreground/70 flex-shrink-0">{row.task}</div>
                    <div className="flex-1 bg-border h-3">
                      <div className="h-3 bg-secondary" style={{ width: `${row.pct}%` }} />
                    </div>
                    <div className="w-12 text-sm font-mono text-right flex-shrink-0">{row.pct}%</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">Note: percentages sum to more than 100% because activities overlap. Time-motion data from client engagements.</p>
            </div>

            <h2 className="text-3xl font-serif font-bold mt-12">The Cost Beyond Compensation</h2>
            <p className="text-foreground/70 leading-relaxed">
              The compensation cost is the visible number — but the full cost of manual document review is larger and harder to see.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              <strong>Opportunity cost:</strong> Senior underwriters are the most qualified people in your organization to evaluate credit risk. Every hour they spend on document assembly is an hour they are not evaluating the risks that matter — and not closing the deals that drive revenue.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              <strong>Error cost:</strong> Manual data entry is error-prone. Transposed digits in financial figures, missed risk flags in 80-page background reports, rent roll income reconciled against the wrong column — these errors have real consequences in credit decisions.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              <strong>Speed cost:</strong> Manual review takes time. In competitive lending markets — especially bridge and construction lending — the lender that can issue a credible commitment fastest wins the deal. Document review time translates directly into competitive disadvantage.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-12">What Automation Actually Solves</h2>
            <p className="text-foreground/70 leading-relaxed">
              AI credit intelligence addresses the non-judgment portion of document review — the classification, extraction, cross-referencing, and assembly tasks that require no analytical skill. The judgment tasks — what does this risk mean, how does it affect the credit decision, what structure addresses it — remain firmly in the domain of human credit professionals.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              The operational impact is significant: lenders who have deployed AI document processing typically report a 65-85% reduction in time-to-credit-memo, with the underwriter's role shifting from assembly to review. The credit memo that took 5 hours to build now takes 20 minutes to review.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              The quality impact is less obvious but equally important: because AI systems review every document systematically, they don't miss the flag on page 47 of the background report because the rate lock was expiring. Systematic review catches what time-pressured human review misses.
            </p>

            <div className="border-l-4 border-secondary pl-8 py-2 my-8">
              <p className="text-xl font-serif italic text-foreground/80">
                "The credit memo that took 5 hours to build now takes 20 minutes to review. And we caught three material issues in the first quarter that I'm not sure we would have found under time pressure."
              </p>
              <p className="text-sm text-muted-foreground mt-3 uppercase tracking-wider">Managing Director, Westside Capital Group</p>
            </div>

            <h2 className="text-3xl font-serif font-bold mt-12">Getting Started</h2>
            <p className="text-foreground/70 leading-relaxed">
              The appropriate starting point for AI credit intelligence depends on where your biggest bottleneck is. For most lending operations, the answer is document extraction and credit memo assembly — the Triage and Credit Intelligence agents. For operations already doing those well but struggling with policy consistency, Policy Match often delivers the fastest ROI.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              The most effective pilots start with a 30-deal sample processed in parallel with existing workflows — giving credit leaders a side-by-side comparison of AI-generated versus manually-assembled memos before committing to a full deployment.
            </p>
          </div>

          {/* Related */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-8">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Related Articles</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "The Hidden Cost of Credit Policy Inconsistency", slug: "hidden-cost-policy-inconsistency", cat: "Risk Management" },
                { title: "How to Evaluate AI Credit Intelligence Platforms", slug: "evaluate-ai-credit-platform", cat: "Technology" }
              ].map((post, i) => (
                <Link key={i} href={`/blog/${post.slug}`}>
                  <div className="border border-border p-6 group cursor-pointer hover:border-foreground transition-colors">
                    <div className="text-xs uppercase tracking-widest text-secondary font-bold mb-3">{post.cat}</div>
                    <h3 className="font-serif font-bold group-hover:text-secondary transition-colors leading-snug flex items-center gap-2">
                      {post.title} <ArrowRight className="w-4 h-4 flex-shrink-0" />
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-background text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-serif mb-6">See it in your workflow.</h2>
          <p className="text-foreground/70 text-lg mb-10">Book a 30-minute demo and we will process one of your loan files live.</p>
          <Link href="/demo">
            <Button size="lg" className="rounded-none px-12 h-14">Book a Demo</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
