import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Mail, MapPin, MessageSquare } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-20 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-8 max-w-3xl">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Contact</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight">
              Let's talk.
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Whether you are evaluating Converge for your lending operation, have a technical question, or want to report a security issue — we are here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact options */}
      <section className="pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
            {[
              {
                icon: MessageSquare,
                title: "Sales & Demos",
                description: "Book a 30-minute product walkthrough tailored to your lending type. We will process one of your sample loan files live.",
                cta: "Book a Demo",
                link: "/demo",
                email: null
              },
              {
                icon: Mail,
                title: "Customer Support",
                description: "For existing Converge customers with technical questions, integration issues, or account management needs.",
                cta: "Email Support",
                link: null,
                email: "support@convergefi.com"
              },
              {
                icon: MapPin,
                title: "Press & Partnerships",
                description: "For media inquiries, partnership discussions, and integration partnership requests.",
                cta: "Email Press",
                link: null,
                email: "press@convergefi.com"
              }
            ].map((option, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" animate="visible"
                className="p-10 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 bg-white flex flex-col">
                <option.icon className="w-8 h-8 text-secondary mb-6" />
                <h2 className="text-2xl font-serif font-bold mb-4">{option.title}</h2>
                <p className="text-foreground/70 leading-relaxed text-sm flex-1 mb-8">{option.description}</p>
                {option.link ? (
                  <Link href={option.link}>
                    <Button className="rounded-none w-full">{option.cta}</Button>
                  </Link>
                ) : (
                  <a href={`mailto:${option.email}`}>
                    <Button variant="outline" className="rounded-none w-full">{option.cta}</Button>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General inquiry form */}
      <section className="pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-8">
                <div className="w-8 h-[2px] bg-foreground" />
                <span>General Inquiry</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-snug">
                Not sure where to start?
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Send us a message and we will route you to the right person. Most inquiries receive a response within one business day.
              </p>
              <div className="space-y-3 text-sm text-foreground/60">
                <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-secondary" /> hello@convergefi.com</div>
                <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-secondary" /> 548 Market St, San Francisco, CA 94104</div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest">First Name</label>
                    <input type="text" className="border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground transition-colors" placeholder="Jane" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest">Last Name</label>
                    <input type="text" className="border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Work Email</label>
                  <input type="email" className="border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground transition-colors" placeholder="jane@company.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Company</label>
                  <input type="text" className="border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground transition-colors" placeholder="Acme Capital" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Message</label>
                  <textarea rows={4} className="border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground transition-colors resize-none" placeholder="Tell us what you are looking to accomplish..." />
                </div>
                <Button className="rounded-none w-full h-12">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
