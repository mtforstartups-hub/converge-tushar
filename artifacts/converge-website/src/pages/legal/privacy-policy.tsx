import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-20 pb-16 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Legal</span>
            </div>
            <h1 className="text-5xl font-serif leading-tight">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: May 1, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-12 text-foreground/80 leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. Overview</h2>
              <p>Converge Finance, Inc. ("Converge," "we," "us," or "our") is committed to protecting the privacy of our customers and the individuals whose information may be processed through our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard information in connection with our AI Credit Intelligence Platform and related services (collectively, the "Services").</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="mb-4"><strong>Account Information:</strong> When you create an account, we collect your name, email address, company name, job title, and payment information necessary to provide the Services.</p>
              <p className="mb-4"><strong>Customer Content:</strong> Our platform processes loan documents and related materials that you upload or transmit through the Services ("Customer Content"). Customer Content may include sensitive financial information, personal information about loan applicants and guarantors, and other materials relevant to commercial real estate transactions.</p>
              <p className="mb-4"><strong>Usage Data:</strong> We collect information about how you access and use the Services, including log data, device information, and interaction data.</p>
              <p><strong>Communications:</strong> If you contact us for support or other purposes, we may retain the content of those communications.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. How We Use Information</h2>
              <p className="mb-4">We use information we collect to provide, maintain, and improve the Services; to process Customer Content as instructed by you; to communicate with you about the Services; and to comply with our legal obligations.</p>
              <p><strong>Important:</strong> We do not use Customer Content to train AI models that are shared across customers or made available to third parties. Your loan documents and extracted data are used solely to provide the Services to your organization.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. How We Share Information</h2>
              <p className="mb-4">We do not sell personal information. We may share information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Service providers who assist us in operating the Services, subject to contractual confidentiality and security obligations</li>
                <li>Professional advisors, such as lawyers and auditors, where necessary</li>
                <li>Law enforcement or government authorities when required by law or to protect rights and safety</li>
                <li>Successor entities in connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Data Security</h2>
              <p>We implement and maintain technical and organizational measures designed to protect your information against unauthorized access, alteration, disclosure, or destruction. Our security program includes encryption at rest and in transit, access controls, and regular security assessments. For detailed information about our security practices, see our <a href="/security" className="text-secondary hover:underline">Security page</a>.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">6. Data Retention</h2>
              <p>We retain Customer Content for the duration of the customer relationship and for a reasonable period thereafter as required to fulfill our legal and contractual obligations. Upon termination of Services, we will delete or return Customer Content in accordance with the terms of your service agreement.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">7. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or port your information. To exercise these rights, contact us at privacy@convergefi.com.</p>
              <p>For California residents: please see our California Privacy Notice at the end of this policy.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">8. International Transfers</h2>
              <p>Converge operates in the United States. If you access the Services from outside the United States, your information may be transferred to and processed in the United States, where data protection laws may differ from those in your jurisdiction.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify customers of material changes by email or through a notice within the Services at least 30 days before the changes take effect.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">10. Contact Us</h2>
              <p>For privacy-related questions or to exercise your rights, contact us at:<br />
              Converge Finance, Inc.<br />
              548 Market St, San Francisco, CA 94104<br />
              privacy@convergefi.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
