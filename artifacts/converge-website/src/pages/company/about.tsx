import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const team = [
  { name: "Alex Chen", title: "Co-Founder & CEO", bio: "Former VP of Credit at a $2B bridge lending platform. Built and ran underwriting teams for 8 years before founding Converge. Saw the document problem from the inside." },
  { name: "Jordan Matthews", title: "Co-Founder & CTO", bio: "Machine learning engineer with prior roles at Google Brain and a fintech unicorn. Specializes in document understanding and information extraction at scale." },
  { name: "Sam Rivera", title: "Head of Credit", bio: "15 years in CRE credit across CMBS origination, balance sheet lending, and private credit. Ensures Converge's AI aligns with how professional credit teams actually work." },
  { name: "Taylor Brooks", title: "Head of Customer Success", bio: "Previously ran implementation and customer success at a leading LOS provider. Expert in CRE lending workflows and technology adoption." }
];

const values = [
  { title: "Credit-First", description: "Every product decision starts with the question: does this make credit analysis better? We build for the underwriter's judgment, not around it." },
  { title: "Transparency by Default", description: "Every piece of analysis Converge produces is sourced, traceable, and explainable. No black boxes. No magic numbers. Every data point links back to the document it came from." },
  { title: "Institutional Grade", description: "Converge is built for institutions that lend other people's money. That means SOC 2 compliance, audit trails, data isolation, and the kind of reliability a portfolio manager can depend on." },
  { title: "Partnership Over Sales", description: "We measure success by whether our customers' credit teams are more productive and make better decisions — not by renewal rates on annual contracts." }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-20 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-8 max-w-3xl">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>About</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">
              We built what we needed.
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Converge was founded by people who spent years in commercial real estate credit — watching senior underwriters spend the majority of their time on tasks that machines could do better. We built Converge to fix that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-8">
                <div className="w-8 h-[2px] bg-foreground" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6 leading-snug">
                Give every lending institution the analytical infrastructure of a top-tier credit shop.
              </h2>
            </div>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                The best credit shops in commercial real estate have always had an edge: better information, processed faster, with more consistency than their competitors. That edge used to require scale — large teams, expensive systems, institutional backing.
              </p>
              <p>
                Converge changes that equation. A 10-person bridge lender using Converge has the same analytical infrastructure as a $5B credit fund. The same document intelligence, the same policy enforcement consistency, the same risk detection capability — at the volume and cost structure that works for their operation.
              </p>
              <p>
                Our mission is to make that parity permanent. The lenders who win in the next decade will be the ones who made better credit decisions faster — not the ones who had the biggest teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>How We Build</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border border-border p-8">
                <h3 className="text-xl font-serif font-bold mb-4">{v.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Team</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {team.map((person, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border-t border-r border-border py-10 px-8 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
                <div className="w-16 h-16 bg-foreground/10 border border-border mb-6 flex items-center justify-center text-xl font-serif font-bold">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-1">{person.name}</h3>
                <p className="text-secondary text-sm font-medium uppercase tracking-wider mb-4">{person.title}</p>
                <p className="text-foreground/70 leading-relaxed">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 md:px-8 bg-deep-slate text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { value: "2022", label: "Founded" },
              { value: "50+", label: "Lending institutions served" },
              { value: "$12B+", label: "Loan volume analyzed" },
              { value: "SF", label: "Headquartered in San Francisco" }
            ].map((s, i) => (
              <div key={i} className="p-8 border-r border-white/10 last:border-r-0">
                <div className="text-4xl font-serif font-bold text-white mb-2">{s.value}</div>
                <div className="text-sm text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-background text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-serif mb-6">Work with us.</h2>
          <p className="text-foreground/70 text-lg mb-10">We are always looking for credit professionals, engineers, and operators who want to change how lending works.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/company/careers">
              <Button size="lg" className="rounded-none px-10 h-14">View Open Roles</Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="rounded-none px-10 h-14">Book a Demo</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
