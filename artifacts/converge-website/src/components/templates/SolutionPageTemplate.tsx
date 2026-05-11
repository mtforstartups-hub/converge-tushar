import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { SolutionData } from "@/data/solutions";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

interface Props {
  solution: SolutionData;
}

export default function SolutionPageTemplate({ solution }: Props) {
  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 pt-8 text-sm text-muted-foreground flex items-center gap-2">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/platform/overview" className="hover:text-foreground transition-colors">Solutions</Link>
        <span>/</span>
        <span className="text-foreground">{solution.name}</span>
      </div>

      {/* Hero */}
      <section className="pt-16 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-8 max-w-3xl">
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              <div className="w-8 h-[1px] bg-foreground/30" />
              <span>Solution</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-[-0.01em]">{solution.headline}</h1>
            <p className="text-xl leading-relaxed text-foreground/70">{solution.subheadline}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/demo?type=${solution.slug}`}>
                <Button size="lg" className="rounded-none px-8 h-14 text-base bg-secondary text-white hover:bg-secondary/90">See it on a live deal</Button>
              </Link>
              <Link href="/platform/overview">
                <Button size="lg" variant="outline" className="rounded-none px-8 h-14 text-base">Compare All Solutions</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 px-4 md:px-8 bg-warm-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-16 text-muted-foreground">
            <div className="w-8 h-[1px] bg-foreground/30" />
            <span>The Challenge</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.painPoints.map((pain, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border border-border p-8 bg-background">
                <h3 className="text-lg font-bold mb-4">{pain.title}</h3>
                <p className="text-foreground/65 leading-relaxed text-sm">{pain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Agents */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-6 text-muted-foreground">
            <div className="w-8 h-[1px] bg-foreground/30" />
            <span>Agent Relevance Map</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl leading-tight tracking-tight">
            The agents that matter most for {solution.name.toLowerCase()}.
          </h2>
          <div className="space-y-0">
            {solution.keyAgents.map((agent, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="grid grid-cols-12 gap-6 border-t border-border py-8 last:border-b group">
                <div className="col-span-12 md:col-span-3">
                  <Link href={`/platform/${agent.slug}`} className="text-base font-bold hover:text-secondary transition-colors flex items-center gap-2">
                    {agent.name} <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <p className="text-foreground/65 leading-relaxed text-sm">{agent.relevance}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 px-4 md:px-8 bg-warm-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-16 text-muted-foreground">
            <div className="w-8 h-[1px] bg-foreground/30" />
            <span>Workflow Walkthrough</span>
          </div>
          <div className="space-y-0">
            {solution.workflowSteps.map((step, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="grid grid-cols-12 gap-8 border-t border-border py-10 last:border-b">
                <div className="col-span-12 md:col-span-1">
                  <span className="text-3xl font-bold text-muted-foreground/25 font-mono">{step.step}</span>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <h3 className="text-base font-bold">{step.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <p className="text-foreground/65 leading-relaxed text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics — Deep Slate */}
      <section className="py-24 px-4 md:px-8 bg-deep-slate text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-16 text-steel">
            <div className="w-8 h-[1px] bg-steel" />
            <span>Metrics & Outcomes</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {solution.metrics.map((metric, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="py-8 md:px-8 first:pl-0 last:pr-0">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">{metric.value}</div>
                <div className="text-base font-medium text-white/90 mb-2">{metric.label}</div>
                <div className="text-sm text-steel">{metric.context}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-16 text-muted-foreground">
            <div className="w-8 h-[1px] bg-foreground/30" />
            <span>Frequently Asked Questions</span>
          </div>
          <div className="space-y-0">
            {solution.faqs.map((faq, i) => (
              <div key={i} className="border-t border-border py-8 last:border-b">
                <h3 className="text-lg font-bold mb-4">{faq.question}</h3>
                <p className="text-foreground/65 leading-relaxed max-w-3xl text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Midnight */}
      <section className="py-24 px-4 md:px-8 bg-midnight text-center">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-4 text-xs font-semibold tracking-widest uppercase mb-8 text-steel">
            <div className="w-8 h-[1px] bg-steel" />
            <span>Get Started</span>
            <div className="w-8 h-[1px] bg-steel" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            See how Converge works for {solution.name.toLowerCase()}
          </h2>
          <p className="text-[#C9CDD6] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            A 20-minute walkthrough tailored to your lending type, run on your own sample documents.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo">
              <Button size="lg" className="bg-verified hover:bg-verified/90 text-white rounded-none px-10 h-14">See it on a live deal</Button>
            </Link>
            <Link href="/platform/overview">
              <Button size="lg" variant="outline" className="rounded-none px-10 h-14 border-white/20 text-white hover:bg-white/8">Platform Overview</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
