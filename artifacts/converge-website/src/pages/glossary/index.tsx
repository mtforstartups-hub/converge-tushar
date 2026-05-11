import { Link } from "wouter";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const terms = [
  { slug: "dscr", term: "DSCR (Debt Service Coverage Ratio)", letter: "D", category: "Credit Metric", definition: "A measure of a property's ability to cover its debt obligations, calculated as Net Operating Income divided by annual debt service. A DSCR below 1.0 indicates the property does not generate enough income to cover its debt payments." },
  { slug: "ltv", term: "LTV (Loan-to-Value Ratio)", letter: "L", category: "Credit Metric", definition: "The ratio of the loan amount to the appraised value or purchase price of the property, expressed as a percentage. Higher LTV ratios represent greater lender risk." },
  { slug: "noi", term: "NOI (Net Operating Income)", letter: "N", category: "Financial Metric", definition: "A property's gross income minus operating expenses, before debt service, depreciation, and income taxes. The primary income metric used in commercial real estate valuation and underwriting." },
  { slug: "cap-rate", term: "Cap Rate (Capitalization Rate)", letter: "C", category: "Valuation", definition: "The ratio of a property's NOI to its current market value or purchase price. Used to estimate an investor's potential return on a real estate investment on a debt-free basis." },
  { slug: "credit-box", term: "Credit Box", letter: "C", category: "Policy", definition: "The set of underwriting criteria and parameters that define the types of loans a lender will and will not originate. Includes LTV limits, DSCR minimums, property type restrictions, geography limitations, and borrower quality requirements." },
  { slug: "credit-memo", term: "Credit Memo (Credit Memorandum)", letter: "C", category: "Documentation", definition: "The primary underwriting document that summarizes the analysis and recommendation for a loan request. Typically includes property information, financial analysis, borrower background, risk factors, and the underwriter's recommendation." },
  { slug: "debt-yield", term: "Debt Yield", letter: "D", category: "Credit Metric", definition: "The ratio of a property's NOI to the loan amount, expressed as a percentage. Used as an alternative to LTV in underwriting because it is independent of interest rates and amortization schedules." },
  { slug: "entity-review", term: "Entity Review", letter: "E", category: "Due Diligence", definition: "The process of analyzing the legal structure of the borrowing entity and related parties — including ownership percentages, management authority, guarantor obligations, and entity compliance requirements." },
  { slug: "guarantor", term: "Guarantor", letter: "G", category: "Credit Structure", definition: "An individual or entity that agrees to be personally responsible for a loan obligation in the event the primary borrower defaults. In CRE lending, guarantors are typically required from owners meeting a minimum ownership threshold." },
  { slug: "ltc", term: "LTC (Loan-to-Cost Ratio)", letter: "L", category: "Credit Metric", definition: "The ratio of the loan amount to the total project cost, commonly used in construction and development lending. Measures the percentage of project costs being financed by the lender." },
  { slug: "phase-i-esa", term: "Phase I ESA", letter: "P", category: "Due Diligence", definition: "Phase I Environmental Site Assessment — a report that identifies potential environmental contamination liabilities at a property through a review of records, site inspection, and interviews. Required by most commercial lenders before funding." },
  { slug: "recourse-loan", term: "Recourse Loan", letter: "R", category: "Loan Structure", definition: "A loan for which the lender has recourse to the personal assets of the guarantors in addition to the collateral property. Provides greater protection to lenders in default scenarios compared to non-recourse loans." },
  { slug: "rent-roll", term: "Rent Roll", letter: "R", category: "Documentation", definition: "A schedule of all tenants in an income-producing property, including unit or space identifier, tenant name, lease start and end dates, monthly rent, and any other lease terms relevant to income analysis." },
  { slug: "triage", term: "Triage (Loan Document Triage)", letter: "T", category: "Process", definition: "The process of receiving, classifying, and organizing loan documents received from a borrower or their representatives. In AI-powered underwriting, triage refers to automated document classification and data extraction." },
  { slug: "underwriting", term: "Underwriting", letter: "U", category: "Process", definition: "The process of evaluating a loan request — analyzing the borrower's creditworthiness, the property's value and income potential, and the proposed loan structure — to make a credit decision." }
];

const letters = [...new Set(terms.map(t => t.letter))].sort();

export default function GlossaryPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-20 pb-16 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-6 max-w-3xl">
            <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <div className="w-8 h-[2px] bg-foreground" />
              <span>Glossary</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight">
              CRE Lending Glossary
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Definitions for key terms in commercial real estate lending, underwriting, and AI credit intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alpha nav */}
      <section className="pb-12 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-2">
            {letters.map(l => (
              <a key={l} href={`#letter-${l}`} className="w-10 h-10 border border-border bg-white flex items-center justify-center text-sm font-bold hover:bg-foreground hover:text-background transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="pb-24 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          {letters.map(letter => (
            <div key={letter} id={`letter-${letter}`} className="mb-12">
              <div className="text-5xl font-serif font-bold text-border mb-6">{letter}</div>
              <div className="space-y-0">
                {terms.filter(t => t.letter === letter).map((term, i) => (
                  <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="border-t border-border py-8 last:border-b">
                    <Link href={`/glossary/${term.slug}`}>
                      <div className="group cursor-pointer">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h2 className="text-xl font-serif font-bold group-hover:text-secondary transition-colors">{term.term}</h2>
                          <span className="text-xs uppercase tracking-widest text-secondary font-medium flex-shrink-0 mt-1">{term.category}</span>
                        </div>
                        <p className="text-foreground/70 leading-relaxed">{term.definition}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
