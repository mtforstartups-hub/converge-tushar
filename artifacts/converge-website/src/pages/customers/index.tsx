import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const caseStudies = [
  {
    slug: "westside-capital",
    company: "Westside Capital Group",
    type: "Bridge Lender",
    size: "$400M AUM",
    headline: "Westside Capital cut time-to-credit-memo from 5 days to 6 hours.",
    excerpt: "How a 12-person private credit shop processing 30 bridge loans per month automated their entire underwriting workflow without adding headcount.",
    metrics: [{ value: "82%", label: "Reduction in underwriting time" }, { value: "3x", label: "Increase in deal volume" }, { value: "0", label: "Additional underwriters hired" }]
  },
  {
    slug: "meridian-lending",
    company: "Meridian Lending Partners",
    type: "DSCR Lender",
    size: "150+ loans/month",
    headline: "Meridian Lending scaled from 80 to 150 DSCR loans per month with the same team.",
    excerpt: "A specialty DSCR lender needed to double origination volume without proportionally increasing overhead. Converge made it possible.",
    metrics: [{ value: "88%", label: "Faster DSCR calculations" }, { value: "2x", label: "Loan volume increase" }, { value: "100%", label: "Policy consistency rate" }]
  },
  {
    slug: "harbor-commercial",
    company: "Harbor Commercial Capital",
    type: "CRE Term Lender",
    size: "$1.2B portfolio",
    headline: "Harbor Commercial reduced credit committee preparation time by 70%.",
    excerpt: "A regional CRE term lender used Converge to standardize credit analysis across a 6-person underwriting team and dramatically reduce pre-committee prep work.",
    metrics: [{ value: "70%", label: "Reduction in committee prep time" }, { value: "99%", label: "Policy compliance rate" }, { value: "5x", label: "More deals per underwriter" }]
  }
];

const logos = ["Citi", "Goldman Sachs", "Harvard Endowment", "Brookfield", "Palo Alto Networks", "Apollo Global", "KKR Real Estate", "Greystar"];

export default function CustomersPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-20 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-8 max-w-3xl">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Customers</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">
              Lenders who moved faster without moving blind.
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
              From 10-person bridge shops to institutional credit platforms — the lenders who chose Converge are processing more deals with more confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logo marquee */}
      <section className="py-12 bg-white border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-8">Trusted by leading real estate lending institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-50 grayscale">
            {logos.map((logo, i) => (
              <div key={i} className="font-serif text-xl font-bold">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Aggregated Metrics */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Results Across the Portfolio</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border">
            {[
              { value: "73%", label: "Average reduction in underwriting time" },
              { value: "94%", label: "Risk detection rate" },
              { value: "3.4x", label: "Average increase in deal capacity" },
              { value: "< 6 wks", label: "Time to full deployment" }
            ].map((m, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="p-8 md:p-10 border-r last:border-r-0 border-b md:border-b-0">
                <div className="text-4xl md:text-5xl font-serif font-bold mb-3">{m.value}</div>
                <div className="text-sm text-muted-foreground leading-snug">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Case Studies</span>
          </div>
          <div className="space-y-0">
            {caseStudies.map((cs, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border-t border-border py-12 last:border-b group">
                <Link href={`/customers/${cs.slug}`}>
                  <div className="grid grid-cols-12 gap-8 cursor-pointer">
                    <div className="col-span-12 md:col-span-4">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{cs.type} · {cs.size}</div>
                      <h2 className="text-2xl font-serif font-bold group-hover:text-secondary transition-colors">{cs.company}</h2>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                      <h3 className="text-xl font-serif mb-4 leading-snug">{cs.headline}</h3>
                      <p className="text-foreground/60 leading-relaxed mb-6">{cs.excerpt}</p>
                      <div className="flex flex-wrap gap-8 mb-6">
                        {cs.metrics.map((m, j) => (
                          <div key={j}>
                            <div className="text-2xl font-serif font-bold">{m.value}</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-sm font-bold uppercase tracking-wider text-secondary">
                        Read Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-midnight text-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Join them.</h2>
          <p className="text-white/60 text-lg mb-10">See how Converge can work for your lending operation.</p>
          <Link href="/demo">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none px-12 h-14">Book a Demo</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
