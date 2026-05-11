import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-20 pb-16 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Legal</span>
            </div>
            <h1 className="text-5xl font-serif leading-tight">Terms of Service</h1>
            <p className="text-sm text-muted-foreground">Last updated: May 1, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-12 text-foreground/80 leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>These Terms of Service ("Terms") constitute a legally binding agreement between you and Converge Finance, Inc. ("Converge") governing your access to and use of the Converge AI Credit Intelligence Platform and related services (the "Services"). By accessing or using the Services, you agree to be bound by these Terms. If you are accessing the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. Services Description</h2>
              <p>Converge provides an AI-powered credit intelligence platform that assists commercial real estate lending professionals with document processing, data extraction, policy compliance checking, and credit analysis. <strong>The Services are analytical tools that assist human credit professionals — they are not substitutes for professional credit judgment, legal advice, or regulatory compliance programs.</strong> All credit decisions remain the sole responsibility of the customer.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. Customer Responsibilities</h2>
              <p className="mb-4">You are responsible for: (a) ensuring that your use of the Services complies with all applicable laws and regulations, including applicable lending laws and data protection requirements; (b) the accuracy and appropriateness of any Customer Content you submit through the Services; (c) maintaining the confidentiality of your account credentials; and (d) all activities that occur under your account.</p>
              <p>You represent that you have obtained all necessary consents and have all required rights to submit Customer Content to the Services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. Intellectual Property</h2>
              <p className="mb-4">Converge retains all rights in the Services, including underlying technology, AI models, and platform software. Customer retains all rights in Customer Content. Converge is granted a limited license to process Customer Content solely as necessary to provide the Services.</p>
              <p>You may not reverse engineer, decompile, or attempt to derive the source code or underlying algorithms of the Services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Data Processing</h2>
              <p>Converge processes Customer Content as a data processor acting on your instructions, subject to our Data Processing Addendum (available upon request). We implement appropriate technical and organizational measures to protect Customer Content in accordance with our Security practices.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">6. Fees and Payment</h2>
              <p>Fees for the Services are specified in your Order Form or Service Agreement. Unless otherwise agreed, fees are due annually in advance. Converge reserves the right to suspend Services for accounts with overdue balances after reasonable notice.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">7. Confidentiality</h2>
              <p>Each party agrees to maintain the confidentiality of the other party's Confidential Information and to use it only as necessary to fulfill obligations under these Terms. Customer Content is deemed Customer Confidential Information. Platform pricing, architecture, and roadmap information is deemed Converge Confidential Information.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">8. Warranties and Disclaimers</h2>
              <p className="mb-4">Converge warrants that the Services will perform materially in accordance with applicable documentation. <strong>THE SERVICES ARE PROVIDED "AS IS" WITH RESPECT TO AI-GENERATED ANALYSIS. CONVERGE DOES NOT WARRANT THE ACCURACY, COMPLETENESS, OR FITNESS FOR A PARTICULAR PURPOSE OF AI-GENERATED CREDIT ANALYSIS, RISK FLAGS, OR POLICY COMPLIANCE ASSESSMENTS.</strong></p>
              <p>AI outputs should be reviewed by qualified human professionals before being relied upon for credit decisions.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">9. Limitation of Liability</h2>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CONVERGE'S AGGREGATE LIABILITY FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE FEES PAID BY CUSTOMER IN THE TWELVE MONTHS PRECEDING THE CLAIM. IN NO EVENT SHALL CONVERGE BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">10. Term and Termination</h2>
              <p>These Terms remain in effect for the duration of your subscription. Either party may terminate for material breach upon 30 days written notice (with opportunity to cure). Upon termination, your access to the Services will cease and Customer Content will be handled in accordance with our data retention policies.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">11. Governing Law</h2>
              <p>These Terms are governed by the laws of the State of California, without regard to conflict of law principles. Disputes arising under these Terms shall be resolved through binding arbitration in San Francisco, California, in accordance with the rules of the American Arbitration Association.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">12. Contact</h2>
              <p>For questions about these Terms, contact:<br />
              Converge Finance, Inc.<br />
              548 Market St, San Francisco, CA 94104<br />
              legal@convergefi.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
