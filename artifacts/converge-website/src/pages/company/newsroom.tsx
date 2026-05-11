import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const news = [
  {
    date: "May 5, 2026",
    type: "Press Release",
    headline: "Converge Finance Closes $18M Series A to Expand AI Credit Intelligence Platform",
    excerpt: "Led by Andreessen Horowitz with participation from Bain Capital Ventures, the round will fund product development and enterprise go-to-market expansion.",
    link: "#"
  },
  {
    date: "March 12, 2026",
    type: "Press Release",
    headline: "Converge Finance Achieves SOC 2 Type II Certification",
    excerpt: "Independent audit confirms that Converge Finance meets the highest standards for security, availability, and confidentiality in its AI-powered credit intelligence platform.",
    link: "#"
  },
  {
    date: "February 3, 2026",
    type: "Product Announcement",
    headline: "Converge Finance Launches Policy Match: Automated Credit Policy Enforcement for CRE Lenders",
    excerpt: "The new Policy Match agent brings credit policy from PDFs and institutional memory into an automated enforcement layer — ensuring consistent policy application on every deal.",
    link: "#"
  },
  {
    date: "November 15, 2025",
    type: "Press Release",
    headline: "Converge Finance Processes $1 Billion in Loan Volume Analyzed",
    excerpt: "The milestone reflects growing adoption of AI-powered underwriting automation among commercial real estate lenders, with clients ranging from 10-person bridge shops to institutional credit platforms.",
    link: "#"
  },
  {
    date: "September 22, 2025",
    type: "Product Announcement",
    headline: "Converge Finance Launches Comps Agent for Automated Appraisal Validation",
    excerpt: "The Comps agent provides independent comparable analysis that validates appraisal conclusions before lenders commit capital — addressing a critical gap in bridge and hard money underwriting.",
    link: "#"
  },
  {
    date: "June 8, 2025",
    type: "Press Release",
    headline: "Converge Finance Raises $4.5M Seed Round to Build AI for CRE Credit",
    excerpt: "Founded by former CRE underwriters and machine learning engineers, Converge Finance emerges from stealth with a seed round to build AI credit intelligence for commercial real estate lenders.",
    link: "#"
  }
];

const coverage = [
  { outlet: "Bloomberg", headline: "AI Is Coming for the Commercial Real Estate Credit Memo", date: "April 2026" },
  { outlet: "Wall Street Journal", headline: "Small Lenders Use AI to Compete with Big Banks on Loan Processing Speed", date: "March 2026" },
  { outlet: "Commercial Observer", headline: "How Converge Finance Is Changing the Way Bridge Lenders Underwrite", date: "February 2026" },
  { outlet: "Propmodo", headline: "The AI Tools CRE Lenders Are Actually Using in 2026", date: "January 2026" }
];

export default function NewsroomPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-20 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-6 max-w-3xl">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Newsroom</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight">
              Press & News
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Company announcements, press coverage, and product news from Converge Finance.
            </p>
            <p className="text-sm text-muted-foreground">
              Media inquiries: <a href="mailto:press@convergefi.com" className="text-secondary hover:underline">press@convergefi.com</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Items */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-12">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Company News</span>
          </div>
          <div className="space-y-0">
            {news.map((item, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border-t border-border py-8 last:border-b group">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-2">
                    <div className="text-sm text-muted-foreground">{item.date}</div>
                    <div className="text-xs uppercase tracking-widest text-secondary font-medium mt-1">{item.type}</div>
                  </div>
                  <div className="col-span-12 md:col-span-10">
                    <a href={item.link}>
                      <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-secondary transition-colors leading-snug">{item.headline}</h3>
                      <p className="text-foreground/60 leading-relaxed text-sm mb-3">{item.excerpt}</p>
                      <div className="flex items-center text-xs font-bold uppercase tracking-wider text-secondary">
                        Read More <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-12">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>In the Press</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverage.map((item, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border border-border p-8 bg-white group cursor-pointer hover:border-foreground transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif font-bold">{item.outlet}</span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <p className="text-foreground/70 font-medium leading-snug">{item.headline}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press contact */}
      <section className="py-24 px-4 md:px-8 bg-midnight text-white">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-4">Press contact.</h2>
            <p className="text-white/60 leading-relaxed mb-4">For media inquiries, interview requests, and press materials, contact our communications team.</p>
            <a href="mailto:press@convergefi.com" className="text-white hover:text-white/80 font-medium underline">press@convergefi.com</a>
          </div>
          <div className="space-y-4">
            <div className="border border-white/20 p-6">
              <div className="text-sm uppercase tracking-widest text-white/50 mb-1">Press Kit</div>
              <div className="text-white font-medium">Logos, screenshots, and brand assets available upon request.</div>
            </div>
            <div className="border border-white/20 p-6">
              <div className="text-sm uppercase tracking-widest text-white/50 mb-1">Embargo Policy</div>
              <div className="text-white font-medium">We honor standard embargo policies. Contact us at least 5 business days in advance.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
