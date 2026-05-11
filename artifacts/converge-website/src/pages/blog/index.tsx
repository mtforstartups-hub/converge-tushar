import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const posts = [
  {
    slug: "why-cre-lenders-lose-money-on-document-review",
    date: "April 28, 2026",
    category: "Underwriting",
    title: "Why CRE Lenders Lose Money on Document Review (And What to Do About It)",
    excerpt: "An analysis of where time goes in the CRE underwriting process — and how to recapture it without sacrificing analysis quality.",
    readTime: "8 min read"
  },
  {
    slug: "hidden-cost-policy-inconsistency",
    date: "April 14, 2026",
    category: "Risk Management",
    title: "The Hidden Cost of Credit Policy Inconsistency",
    excerpt: "What happens when different underwriters apply the same credit policy differently — and how to quantify the risk it creates in your portfolio.",
    readTime: "6 min read"
  },
  {
    slug: "entity-review-cre-lending",
    date: "March 31, 2026",
    category: "Due Diligence",
    title: "Entity Review in CRE Lending: What Gets Missed and Why It Matters",
    excerpt: "A deep dive into the entity review process — why it is the most error-prone step in CRE underwriting, and what AI-powered analysis can catch that manual review misses.",
    readTime: "10 min read"
  },
  {
    slug: "evaluate-ai-credit-platform",
    date: "March 17, 2026",
    category: "Technology",
    title: "How to Evaluate AI Credit Intelligence Platforms",
    excerpt: "A framework for assessing AI underwriting tools — including what questions to ask, what red flags to watch for, and how to run a credible pilot evaluation.",
    readTime: "12 min read"
  },
  {
    slug: "building-credit-policy-engine",
    date: "March 3, 2026",
    category: "Operations",
    title: "Building a Credit Policy Engine: From PDF to Automated Enforcement",
    excerpt: "Step-by-step guide to converting your existing credit guidelines into a machine-enforceable policy set — including how to handle conditional rules and exception hierarchies.",
    readTime: "9 min read"
  },
  {
    slug: "dscr-loan-analysis-automation",
    date: "February 18, 2026",
    category: "DSCR Lending",
    title: "Automating DSCR Loan Analysis: A Technical Deep Dive",
    excerpt: "How AI systems extract, validate, and calculate DSCR from rent rolls, leases, and operating statements — and where the accuracy challenges are.",
    readTime: "7 min read"
  },
  {
    slug: "bridge-loan-underwriting-speed",
    date: "February 4, 2026",
    category: "Bridge Lending",
    title: "Bridge Loan Underwriting: How Fast Is Too Fast?",
    excerpt: "Speed is the bridge lender's competitive advantage. But speed without diligence is how capital gets lost. How to thread the needle.",
    readTime: "5 min read"
  },
  {
    slug: "ai-credit-memo-generation",
    date: "January 21, 2026",
    category: "AI & Technology",
    title: "AI Credit Memo Generation: What It Can and Can't Do",
    excerpt: "A clear-eyed look at the current state of AI-generated credit memos — what tasks are fully automated today, where human judgment is still essential, and what is coming next.",
    readTime: "11 min read"
  }
];

const categories = ["All", "Underwriting", "Risk Management", "Due Diligence", "Technology", "Operations", "Bridge Lending", "DSCR Lending", "AI & Technology"];

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-20 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-6 max-w-3xl">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight">
              The Converge Finance Blog.
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Analysis, guides, and perspective on AI credit intelligence, CRE underwriting, and lending operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-medium border transition-colors ${i === 0 ? 'bg-foreground text-background border-foreground' : 'border-border bg-white hover:border-foreground'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          {/* Featured first post */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-12">
            <Link href={`/blog/${posts[0].slug}`}>
              <div className="border border-border bg-white p-10 md:p-14 group cursor-pointer hover:border-foreground transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs uppercase tracking-widest text-secondary font-bold">{posts[0].category}</span>
                  <span className="text-xs text-muted-foreground">{posts[0].date} · {posts[0].readTime}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 group-hover:text-secondary transition-colors leading-snug">{posts[0].title}</h2>
                <p className="text-foreground/70 leading-relaxed text-lg mb-6 max-w-3xl">{posts[0].excerpt}</p>
                <div className="flex items-center text-sm font-bold uppercase tracking-wider text-secondary">
                  Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Remaining posts in grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.slice(1).map((post, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="border border-border bg-white p-8 group cursor-pointer hover:border-foreground transition-colors h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs uppercase tracking-widest text-secondary font-bold">{post.category}</span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-secondary transition-colors leading-snug flex-1">{post.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      <div className="flex items-center text-xs font-bold uppercase tracking-wider text-secondary">
                        Read <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
