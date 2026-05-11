import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Server, Eye, FileCheck, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const controls = [
  { icon: Shield, title: "SOC 2 Type II", description: "Converge undergoes annual SOC 2 Type II audits conducted by an independent third-party auditor. Audit reports are available to enterprise customers and qualified prospects under NDA." },
  { icon: Lock, title: "Encryption at Rest & In Transit", description: "All customer data is encrypted at rest using AES-256 and in transit using TLS 1.3. Encryption keys are managed by AWS KMS with customer-managed key support available at Enterprise tier." },
  { icon: Server, title: "Infrastructure Security", description: "Converge runs on AWS infrastructure in US-EAST-1 and US-WEST-2 regions. Infrastructure is managed using hardened AMIs, automated patch management, and continuous security monitoring." },
  { icon: Eye, title: "Access Control", description: "Role-based access control with configurable permissions at the organization, team, and loan level. All access events are logged and available for audit. MFA is required for all accounts." },
  { icon: FileCheck, title: "Data Isolation", description: "Each customer's data is logically isolated in dedicated database schemas. Your loan documents and extracted data are never commingled with other customers' data or used to train shared models." },
  { icon: Users, title: "Employee Security", description: "All Converge employees with access to production systems undergo background checks and annual security training. Production access requires MFA and is audited quarterly." }
];

const practices = [
  { title: "Penetration Testing", description: "Annual penetration tests conducted by qualified third-party security firms. Critical and high findings are remediated within 30 days of disclosure." },
  { title: "Vulnerability Management", description: "Automated vulnerability scanning on every code deployment. Dependency vulnerabilities are tracked and remediated based on CVSS severity scores." },
  { title: "Incident Response", description: "Documented incident response plan with defined escalation paths. Customers are notified of material security events within 72 hours in accordance with applicable notification requirements." },
  { title: "Business Continuity", description: "RPO of 1 hour and RTO of 4 hours for production systems. Full backup restoration is tested quarterly. Disaster recovery runbooks are maintained and reviewed annually." },
  { title: "Vendor Security", description: "All third-party vendors with access to customer data are assessed against Converge's vendor security standards. Critical vendors undergo annual security reviews." },
  { title: "Change Management", description: "All code changes require peer review before deployment. Automated CI/CD pipelines include security scanning gates. Production changes are logged and attributable to specific engineers." }
];

export default function SecurityPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-20 pb-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-8">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Security</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">
              Institutional-grade security for institutional-grade lending.
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl leading-relaxed">
              Loan documents contain the most sensitive financial information your customers will ever share with you. Converge is built to protect it with the same rigor we bring to every other dimension of the platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications banner */}
      <section className="py-12 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { cert: "SOC 2 Type II", detail: "Annually audited" },
              { cert: "TLS 1.3", detail: "Data in transit" },
              { cert: "AES-256", detail: "Data at rest" },
              { cert: "AWS GovCloud Ready", detail: "US data residency" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 py-4">
                <div className="text-2xl font-serif font-bold">{item.cert}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Security Controls */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Core Security Controls</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {controls.map((control, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border border-border p-8">
                <control.icon className="w-8 h-8 text-secondary mb-6" />
                <h3 className="text-xl font-serif font-bold mb-4">{control.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{control.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-16">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Security Practices</span>
          </div>
          <div className="space-y-0">
            {practices.map((item, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="grid grid-cols-12 gap-8 border-t border-border py-8 last:border-b">
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-8">
            <div className="w-8 h-[2px] bg-foreground" />
            <span>Responsible Disclosure</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Found a security issue?</h2>
          <p className="text-foreground/70 leading-relaxed text-lg mb-8 max-w-3xl">
            Converge maintains a responsible disclosure program. If you have identified a potential security vulnerability in our platform, please report it to <span className="font-medium text-foreground">security@convergefi.com</span>. We will acknowledge your report within 24 hours and provide a resolution timeline.
          </p>
          <p className="text-foreground/60 text-sm">
            Converge does not pursue legal action against security researchers who responsibly disclose vulnerabilities in accordance with this program. We ask that you provide us reasonable time to remediate before public disclosure.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-midnight text-white">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-4">Security documentation for your InfoSec team.</h2>
            <p className="text-white/60 leading-relaxed">Enterprise prospects can request our SOC 2 Type II report, penetration test summary, and security questionnaire responses under NDA.</p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/demo">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none px-10 h-14 w-full md:w-auto">
                Request Security Documentation
              </Button>
            </Link>
            <p className="text-white/40 text-sm">Available to qualified enterprise prospects and existing customers.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
