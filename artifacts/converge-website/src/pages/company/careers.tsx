import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const openRoles = [
  {
    title: "Senior Machine Learning Engineer — Document Understanding",
    department: "Engineering",
    location: "San Francisco, CA or Remote",
    type: "Full-time",
    description: "Lead the development of Converge's next-generation document classification and information extraction models. You will work on challenging NLP problems with real-world impact in commercial real estate credit."
  },
  {
    title: "Credit Subject Matter Expert",
    department: "Product",
    location: "San Francisco, CA or Remote",
    type: "Full-time",
    description: "Translate deep CRE credit knowledge into product requirements and training data. You have underwritten commercial real estate loans and understand exactly what makes a credit analysis rigorous and useful."
  },
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Build the interfaces and workflows that underwriters use every day. You care about software that feels fast, looks professional, and actually makes people's jobs easier."
  },
  {
    title: "Implementation Manager",
    department: "Customer Success",
    location: "Remote (US)",
    type: "Full-time",
    description: "Lead Converge deployments from contract signing to live processing. You understand LOS integrations, credit policy workflows, and how to help a lending team change how they work."
  },
  {
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "New York, NY or Remote",
    type: "Full-time",
    description: "Sell Converge to VP of Credit and Chief Credit Officer level buyers at banks, credit funds, and institutional mortgage companies. You have sold complex SaaS to financial services enterprises."
  }
];

const perks = [
  { title: "Competitive Compensation", description: "Top-of-market salary, meaningful equity, and annual refresh grants." },
  { title: "Remote-Flexible", description: "Hybrid or fully remote for most roles. We have offices in San Francisco and New York." },
  { title: "Health & Wellness", description: "100% employer-paid health, dental, and vision. $100/month wellness stipend." },
  { title: "Learning Budget", description: "$2,500 annual budget for conferences, courses, and books." },
  { title: "Paid Time Off", description: "Unlimited PTO with a required 2-week minimum. We mean it." },
  { title: "Mission-Driven Work", description: "You will build tools that real credit teams use on every deal, every day. The impact is direct and visible." }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-20 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-8 max-w-3xl">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Careers</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">
              Build the tools that make lending smarter.
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Converge is a small team working on a hard problem: making AI genuinely useful for professional credit analysis. We are looking for people who care about getting it right.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Why Converge</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border border-border p-8">
                <h3 className="text-xl font-serif font-bold mb-3">{perk.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Open Roles</span>
          </div>
          <div className="space-y-0">
            {openRoles.map((role, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border-t border-border py-10 last:border-b group cursor-pointer hover:bg-white transition-colors -mx-4 px-4 md:-mx-8 md:px-8">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs uppercase tracking-widest text-secondary font-bold">{role.department}</span>
                      <span className="text-xs text-muted-foreground">{role.type}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-secondary transition-colors">{role.title}</h3>
                    <p className="text-foreground/60 leading-relaxed text-sm">{role.description}</p>
                  </div>
                  <div className="col-span-12 md:col-span-4 flex flex-col justify-between items-start md:items-end gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{role.location}</span>
                    </div>
                    <Button variant="outline" className="rounded-none flex items-center gap-2 group-hover:bg-foreground group-hover:text-background transition-colors">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General application */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4">Don't see your role?</h2>
            <p className="text-foreground/70 leading-relaxed">We hire for judgment, technical skill, and domain expertise across engineering, credit, sales, and operations. Send us a note.</p>
          </div>
          <div>
            <a href="mailto:careers@convergefi.com">
              <Button size="lg" className="rounded-none px-10 h-14 w-full md:w-auto">Send a General Application</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
