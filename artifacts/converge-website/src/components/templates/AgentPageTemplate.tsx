import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BarChart3, CheckCircle, Building, Shield, Search } from "lucide-react";
import type { AgentData } from "@/data/agents";

const iconMap: Record<string, React.ElementType> = {
  FileText, BarChart3, CheckCircle, Building, Shield, Search
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

interface Props {
  agent: AgentData;
}

export default function AgentPageTemplate({ agent }: Props) {
  const Icon = iconMap[agent.icon] || FileText;

  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 pt-8 text-sm text-muted-foreground flex items-center gap-2">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/platform/overview" className="hover:text-foreground transition-colors">Platform</Link>
        <span>/</span>
        <span className="text-foreground">{agent.name}</span>
      </div>

      {/* Hero */}
      <section className="pt-16 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-8">
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              <div className="w-8 h-[1px] bg-foreground/30" />
              <span>Platform Agent</span>
              <span className="px-2 py-0.5 border border-secondary text-secondary text-[10px] uppercase tracking-widest font-mono">Available Now</span>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-secondary/8 border border-border flex items-center justify-center flex-shrink-0">
                <Icon className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-[-0.01em]">{agent.name}</h1>
                <p className="text-lg text-muted-foreground mt-3">{agent.tagline}</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed max-w-3xl text-foreground/75">{agent.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/demo">
                <Button size="lg" className="rounded-none px-8 h-14 text-base bg-secondary text-white hover:bg-secondary/90">See it on a live deal</Button>
              </Link>
              <Link href="/platform/overview">
                <Button size="lg" variant="outline" className="rounded-none px-8 h-14 text-base">Platform Overview</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 px-4 md:px-8 bg-warm-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-12 text-muted-foreground">
            <div className="w-8 h-[1px] bg-foreground/30" />
            <span>The Problem</span>
          </div>
          <div className="space-y-6">
            {agent.problemStatement.map((p, i) => (
              <motion.p key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-lg leading-relaxed text-foreground/75 max-w-4xl">
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-16 text-muted-foreground">
            <div className="w-8 h-[1px] bg-foreground/30" />
            <span>How It Works</span>
          </div>
          <div className="space-y-0">
            {agent.steps.map((step, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="grid grid-cols-12 gap-8 border-t border-border py-10 last:border-b">
                <div className="col-span-1">
                  <span className="text-3xl font-bold text-muted-foreground/25 font-mono">0{i + 1}</span>
                </div>
                <div className="col-span-11 md:col-span-4">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>
                <div className="col-span-11 md:col-span-7 md:col-start-6">
                  <p className="text-foreground/65 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 px-4 md:px-8 bg-warm-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-16 text-muted-foreground">
            <div className="w-8 h-[1px] bg-foreground/30" />
            <span>Key Capabilities</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agent.capabilities.map((cap, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border border-border p-8 bg-background">
                <h3 className="text-base font-bold mb-4">{cap.title}</h3>
                <p className="text-foreground/65 leading-relaxed text-sm">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Output */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-12 text-muted-foreground">
            <div className="w-8 h-[1px] bg-foreground/30" />
            <span>Example Output</span>
          </div>
          <div className="border border-border bg-warm-white p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
              <Icon className="w-4 h-4 text-secondary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">{agent.name} Output — Synthetic Example</span>
            </div>
            <p className="font-mono text-sm leading-relaxed text-foreground/75">{agent.exampleOutput}</p>
            <p className="mt-6 text-xs text-muted-foreground">All data shown is synthetic. Generated for illustration purposes only.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-8 bg-warm-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-16 text-muted-foreground">
            <div className="w-8 h-[1px] bg-foreground/30" />
            <span>Frequently Asked Questions</span>
          </div>
          <div className="space-y-0">
            {agent.faqs.map((faq, i) => (
              <div key={i} className="border-t border-border py-8 last:border-b">
                <h3 className="text-lg font-bold mb-4">{faq.question}</h3>
                <p className="text-foreground/65 leading-relaxed max-w-3xl text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Agents */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-12 text-muted-foreground">
            <div className="w-8 h-[1px] bg-foreground/30" />
            <span>Works Alongside</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {agent.relatedAgents.map((slug) => (
              <Link key={slug} href={`/platform/${slug}`}>
                <div className="border border-border px-6 py-3 hover:bg-foreground hover:text-background transition-colors group flex items-center gap-3 text-sm">
                  <span className="font-medium capitalize">{slug.replace(/-/g, ' ')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Midnight */}
      <section className="py-24 px-4 md:px-8 bg-midnight text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">See {agent.name} in action</h2>
          <p className="text-[#C9CDD6] text-lg mb-10">Watch {agent.name} process a real loan file — live, with your documents.</p>
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
