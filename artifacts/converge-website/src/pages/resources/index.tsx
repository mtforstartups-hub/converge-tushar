import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const featured = {
  type: "Report",
  title: "The State of Commercial Real Estate Lending Technology 2026",
  excerpt: "An analysis of where AI adoption stands in CRE credit, which workflows are being automated first, and where the biggest productivity gaps remain. Based on surveys of 200+ CRE lending professionals.",
  link: "/resources/reports/cre-lending-technology-2026"
};

const categories = [
  {
    label: "Guides",
    link: "/resources/guides",
    items: [
      { title: "How to Evaluate AI Credit Intelligence Platforms", excerpt: "A framework for assessing AI underwriting tools — including what questions to ask, what red flags to watch for, and how to run a credible pilot evaluation.", link: "/blog/evaluate-ai-credit-platform" },
      { title: "Building a Credit Policy Engine: From PDF to Automated Enforcement", excerpt: "Step-by-step guide to converting your existing credit guidelines into a machine-enforceable policy set — including how to handle conditional rules and exception hierarchies.", link: "/blog/building-credit-policy-engine" }
    ]
  },
  {
    label: "Blog Posts",
    link: "/blog",
    items: [
      { title: "Why CRE Lenders Lose Money on Document Review (And What to Do About It)", excerpt: "An analysis of where time goes in the CRE underwriting process — and how to recapture it without sacrificing analysis quality.", link: "/blog/cre-lenders-document-review" },
      { title: "The Hidden Cost of Credit Policy Inconsistency", excerpt: "What happens when different underwriters apply the same credit policy differently — and how to quantify the risk it creates in your portfolio.", link: "/blog/hidden-cost-policy-inconsistency" },
      { title: "Entity Review in CRE Lending: What Gets Missed and Why It Matters", excerpt: "A deep dive into the entity review process — why it is the most error-prone step in CRE underwriting, and what AI-powered analysis can catch that manual review misses.", link: "/blog/entity-review-cre-lending" }
    ]
  },
  {
    label: "Webinars",
    link: "/resources/webinars",
    items: [
      { title: "Live Demo: Processing a Bridge Loan Package with Converge", excerpt: "Watch a real bridge loan package processed live — from document upload to complete credit memo — in under 15 minutes.", link: "/demo" },
      { title: "Panel: The Future of AI in Commercial Lending", excerpt: "Four CRE credit executives discuss how AI is changing the underwriting function — what works today, what is still experimental, and what is coming next.", link: "/resources/webinars/future-ai-commercial-lending" }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-20 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-8 max-w-3xl">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Resources</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight">
              Knowledge for lenders who want to move faster.
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Guides, reports, case studies, and webinars covering AI credit intelligence, CRE underwriting workflows, and lending technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-24 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-10">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Featured</span>
          </div>
          <Link href={featured.link}>
            <motion.div variants={fadeUp} initial="hidden" animate="visible"
              className="border border-border p-10 md:p-16 bg-white group cursor-pointer hover:border-foreground transition-colors">
              <div className="text-xs uppercase tracking-widest text-secondary font-bold mb-4">{featured.type}</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 group-hover:text-secondary transition-colors leading-snug">{featured.title}</h2>
              <p className="text-foreground/70 leading-relaxed text-lg mb-8 max-w-3xl">{featured.excerpt}</p>
              <div className="flex items-center text-sm font-bold uppercase tracking-wider text-secondary">
                Download Report <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, ci) => (
        <section key={ci} className={`py-16 px-4 md:px-8 ${ci % 2 === 0 ? 'bg-background' : 'bg-white'}`}>
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
                <div className="w-8 h-[2px] bg-foreground" />
                <span>{cat.label}</span>
              </div>
              <Link href={cat.link} className="text-sm font-medium text-secondary hover:underline flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item, ii) => (
                <motion.div key={ii} custom={ii} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Link href={item.link}>
                    <div className="border border-border p-6 bg-white group cursor-pointer hover:border-foreground transition-colors h-full flex flex-col">
                      <div className="text-xs uppercase tracking-widest text-secondary font-bold mb-3">{cat.label.replace(/s$/, '')}</div>
                      <h3 className="text-lg font-serif font-bold mb-3 group-hover:text-secondary transition-colors leading-snug flex-1">{item.title}</h3>
                      <p className="text-foreground/60 text-sm leading-relaxed mb-4">{item.excerpt}</p>
                      <div className="flex items-center text-xs font-bold uppercase tracking-wider text-secondary mt-auto">
                        Read More <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-midnight text-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-serif mb-6">Get the latest from Converge.</h2>
          <p className="text-white/60 mb-10">New guides, reports, and case studies delivered to your inbox monthly.</p>
          <div className="flex gap-0 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 text-foreground bg-white border-none outline-none text-sm" />
            <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-none px-6 h-12">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
