import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const tiers = [
  {
    name: "Foundation",
    price: "Contact Us",
    description: "For growing private lending operations running 10-50 loans per month.",
    highlight: false,
    features: [
      "Triage Agent — up to 500 documents/month",
      "Credit Intelligence — up to 50 credit memos/month",
      "Policy Match — 1 credit policy configured",
      "Background Report Agent",
      "Standard integrations (email, Google Drive)",
      "5 user seats",
      "Email support",
      "Onboarding included"
    ],
    cta: "Book a Demo",
    ctaLink: "/demo"
  },
  {
    name: "Growth",
    price: "Contact Us",
    description: "For mid-size lenders and mortgage companies with structured underwriting teams.",
    highlight: true,
    features: [
      "All Foundation features",
      "Entity Review Agent",
      "Comps Agent",
      "Up to 200 credit memos/month",
      "Up to 3 credit policy sets",
      "LOS integration (Encompass, MeridianLink, custom API)",
      "20 user seats",
      "Dedicated customer success manager",
      "Priority support with SLA",
      "Custom memo template configuration"
    ],
    cta: "Book a Demo",
    ctaLink: "/demo"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For institutional lenders, banks, and credit funds with high volume and complex requirements.",
    highlight: false,
    features: [
      "All Growth features",
      "Unlimited credit memos",
      "Unlimited policy sets with conditional rules",
      "Unlimited user seats",
      "Custom AI model fine-tuning on your portfolio",
      "Portfolio risk monitoring dashboard",
      "SAML SSO / enterprise auth",
      "SOC 2 Type II audit reports",
      "Dedicated implementation team",
      "Custom SLA and uptime guarantees",
      "White-glove onboarding"
    ],
    cta: "Talk to Enterprise Sales",
    ctaLink: "/demo"
  }
];

const faqs = [
  { q: "How is Converge priced?", a: "Converge is priced based on loan volume (credit memos generated per month), the number of agents included, and the level of implementation and support. All pricing is provided as a custom quote following an initial discovery call." },
  { q: "Is there a setup or onboarding fee?", a: "Foundation and Growth tiers include onboarding as part of the subscription. Enterprise implementations include a dedicated onboarding engagement. There are no hidden setup fees." },
  { q: "How long does implementation take?", a: "Foundation and Growth implementations typically take 2-3 weeks from contract signing to live processing. Enterprise implementations vary based on integration complexity but typically run 4-8 weeks." },
  { q: "What integrations are included?", a: "Foundation includes email and Google Drive/SharePoint integrations. Growth adds native LOS integrations including Encompass and MeridianLink, plus REST API access. Enterprise adds custom integration development." },
  { q: "Is there a contract commitment?", a: "Converge is offered on annual contracts. Monthly billing is available with a premium. Multi-year agreements are available with volume discounts." },
  { q: "Can we start with a pilot before committing?", a: "Yes. Converge offers a structured paid pilot program for qualified institutions — typically 90 days on the Foundation tier processed alongside your existing workflow. Pilots include full implementation and success measurement." }
];

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-20 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Pricing</span>
              <div className="w-8 h-[2px] bg-foreground" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">
              Pricing built for how lenders actually work.
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
              Volume-based pricing that scales with your deal flow. No per-seat surprises. No document processing fees on top.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className={`flex flex-col p-8 md:p-10 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 ${tier.highlight ? 'bg-midnight text-white' : 'bg-background'}`}
              >
                <div className="mb-8">
                  {tier.highlight && (
                    <div className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-widest mb-4">
                      Most Popular
                    </div>
                  )}
                  <h2 className={`text-2xl font-serif font-bold mb-2 ${tier.highlight ? 'text-white' : ''}`}>{tier.name}</h2>
                  <p className={`text-sm leading-relaxed ${tier.highlight ? 'text-white/60' : 'text-foreground/60'}`}>{tier.description}</p>
                </div>

                <div className="mb-8">
                  <div className={`text-3xl font-serif font-bold ${tier.highlight ? 'text-white' : ''}`}>{tier.price}</div>
                  <div className={`text-sm mt-1 ${tier.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>Quoted per deal volume</div>
                </div>

                <div className="flex-1 mb-8 space-y-3">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-secondary' : 'text-secondary'}`} />
                      <span className={`text-sm leading-snug ${tier.highlight ? 'text-white/80' : 'text-foreground/80'}`}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link href={tier.ctaLink}>
                  <Button
                    size="lg"
                    className={`w-full rounded-none h-12 font-medium ${tier.highlight ? 'bg-white text-black hover:bg-white/90' : 'bg-foreground text-background hover:bg-foreground/90'}`}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance note */}
      <section className="py-16 px-4 md:px-8 bg-white border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif font-bold text-xl mb-3">SOC 2 Type II</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">Converge is SOC 2 Type II certified. Audit reports are available to enterprise customers and qualified prospects under NDA.</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl mb-3">Data Residency</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">All customer data is processed and stored in the United States. Data residency requirements for specific jurisdictions available at Enterprise tier.</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl mb-3">Data Isolation</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">Each customer's data is logically isolated. Your loan documents are never used to train models for other customers' policies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Pricing FAQs</span>
          </div>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-border py-8 last:border-b">
                <h3 className="text-xl font-serif font-bold mb-4">{faq.q}</h3>
                <p className="text-foreground/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-midnight text-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Start with a conversation.</h2>
          <p className="text-white/60 text-lg mb-10">
            Tell us about your lending operation and we will put together a tailored quote in 24 hours.
          </p>
          <Link href="/demo">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none px-12 h-14 text-lg">
              Book a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
