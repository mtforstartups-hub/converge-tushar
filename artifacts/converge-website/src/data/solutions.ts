export interface SolutionPainPoint {
  title: string;
  description: string;
}

export interface SolutionMetric {
  value: string;
  label: string;
  context: string;
}

export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface SolutionData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  description: string;
  painPoints: SolutionPainPoint[];
  keyAgents: Array<{ name: string; slug: string; relevance: string }>;
  workflowSteps: Array<{ step: string; title: string; description: string }>;
  metrics: SolutionMetric[];
  faqs: SolutionFAQ[];
}

export const solutions: SolutionData[] = [
  {
    slug: "bridge-lending",
    name: "Bridge Lending",
    headline: "AI-Powered Credit Intelligence for Bridge Lenders",
    subheadline: "Move faster without moving blind. Close bridge loans in days, not weeks — with complete credit intelligence on every deal.",
    description: "Bridge lending runs on speed. Your borrowers chose you because you can move faster than a bank — and your competitive edge depends on maintaining that speed without sacrificing the risk discipline that protects your capital.",
    painPoints: [
      { title: "Time Pressure vs. Diligence", description: "Bridge borrowers need commitments in 48-72 hours. That timeline compresses the diligence window to the point where critical documents go unreviewed and material risks go undetected. Speed and thoroughness are treated as mutually exclusive — but they don't have to be." },
      { title: "As-Is vs. Stabilized Value Disputes", description: "Bridge loans are often underwritten to an exit value that requires assumptions about lease-up, renovation completion, or market improvement. When those assumptions are buried in an appraisal, validating them manually takes hours you don't have." },
      { title: "Short-Term Borrower Quality", description: "Bridge borrowers frequently have more complex credit profiles than long-term borrowers — recent business setbacks, construction project disputes, or temporary liquidity events. Background reports on these borrowers require more careful analysis, not less." },
      { title: "Collateral Concentration Risk", description: "Fast-moving bridge portfolios can accumulate concentration risk in specific markets, property types, or borrower relationships before the pattern is visible. Each individual deal looks fine — the portfolio risk emerges over time." }
    ],
    keyAgents: [
      { name: "Triage", slug: "triage", relevance: "Processes the condensed document package common in bridge deals — often arriving in hours rather than days — classifying and extracting data before your team starts underwriting." },
      { name: "Credit Intelligence", slug: "credit-intelligence", relevance: "Generates a complete credit memo from bridge deal documents in minutes — supporting your fast-close timeline without sacrificing analysis quality." },
      { name: "Comps", slug: "comps", relevance: "Validates stabilized value assumptions in bridge appraisals — flagging cases where the exit value requires aggressive assumptions that may not be supportable in current market conditions." },
      { name: "Background Report", slug: "background-report", relevance: "Screens borrowers quickly for material credit concerns — ensuring speed doesn't come at the expense of knowing who you're lending to." }
    ],
    workflowSteps: [
      { step: "01", title: "Application Intake", description: "Borrower submits bridge loan application with condensed document package. Triage agent classifies all documents, flags missing items, and extracts key data within minutes of receipt." },
      { step: "02", title: "Value Validation", description: "Comps agent analyzes the appraisal's as-is and stabilized value conclusions — validating comparable selection and flagging aggressive assumptions that could affect your LTV calculation." },
      { step: "03", title: "Borrower Screening", description: "Background Report reviews all borrower background checks in parallel — surfacing material concerns while your processor reviews the property package." },
      { step: "04", title: "Credit Memo Generation", description: "Credit Intelligence assembles a complete bridge credit memo with DSCR, LTV, debt yield, and all policy metrics — ready for term sheet and committee review." },
      { step: "05", title: "Policy Compliance", description: "Policy Match confirms the deal sits within your bridge lending guidelines — flagging any exceptions that require approval before issuing a commitment." }
    ],
    metrics: [
      { value: "73%", label: "Reduction in underwriting time", context: "Average across deployed bridge lending clients" },
      { value: "48hrs", label: "Average time to credit memo", context: "Down from 5-7 business days" },
      { value: "94%", label: "Risk detection rate", context: "Material issues surfaced before commitment" }
    ],
    faqs: [
      { question: "How can AI speed up bridge loan underwriting?", answer: "AI bridge loan underwriting automates the most time-consuming manual tasks — document classification, data extraction, comp validation, and credit memo assembly — compressing a process that typically takes 4-6 days into hours without reducing the quality of analysis." },
      { question: "How does Converge handle the condensed timelines typical in bridge lending?", answer: "Converge processes bridge deal documents in real time as they arrive. There is no batch processing or overnight delay — analysis begins the moment documents are received and results are available within minutes of package completion." },
      { question: "Can Converge validate as-is vs. stabilized values in bridge appraisals?", answer: "Yes. The Comps agent specifically analyzes both the as-is and stabilized value conclusions in bridge appraisals — checking comparable selection, adjustment methodology, and the assumptions underlying stabilized value projections." },
      { question: "How does Converge help manage concentration risk across a bridge portfolio?", answer: "Portfolio-level analytics aggregate deal data across all active bridge loans — providing real-time visibility into market, property type, borrower, and LTV concentration before it becomes a problem." },
      { question: "Is Converge suitable for private money bridge lenders with volume under 50 loans per month?", answer: "Yes. Converge is deployed across a range of origination volumes from 10 to 500+ loans per month. The Foundation tier is designed specifically for smaller lending operations." }
    ]
  },
  {
    slug: "construction-lending",
    name: "Construction Lending",
    headline: "AI-Powered Credit Intelligence for Construction Lenders",
    subheadline: "From ground-up analysis to draw schedule management. Complete AI coverage for the most complex lending type in commercial real estate.",
    description: "Construction lending is the most document-intensive, risk-layered, and operationally demanding type of commercial real estate lending. Every draw request is a credit event. Every change order is a risk event. Converge is built for it.",
    painPoints: [
      { title: "Draw Schedule Complexity", description: "Each construction draw request arrives as a package of contractor invoices, lien waivers, inspection reports, and budget variance analysis. Reviewing them for completeness and accuracy is a full-time job — and errors are costly." },
      { title: "Completion Risk Visibility", description: "Construction projects diverge from pro forma budgets early and often. By the time problems are visible to the lender, the project is 60% complete and the budget overrun is already material. Earlier visibility changes the outcome." },
      { title: "Contractor & Subcontractor Risk", description: "Construction lenders are exposed to the financial health of general contractors and major subcontractors — entities that may not be on your credit approval. Monitoring their financial condition during the construction period requires active attention." },
      { title: "Budget-to-Actual Tracking", description: "Tracking cumulative disbursements against the approved budget across 18-24 months of construction draws is an operational challenge. Manual tracking is error-prone and creates gaps in budget monitoring." }
    ],
    keyAgents: [
      { name: "Triage", slug: "triage", relevance: "Processes construction draw packages including contractor invoices, lien waivers, inspection reports, and change orders — extracting structured data from every document in the package." },
      { name: "Credit Intelligence", slug: "credit-intelligence", relevance: "Monitors the evolving credit picture throughout the construction period — tracking budget-to-actual variance, schedule adherence, and cost trends that signal completion risk." },
      { name: "Entity Review", slug: "entity-review", relevance: "Reviews the borrower entity structure and general contractor organization — identifying compliance issues and monitoring for changes in the development team during construction." },
      { name: "Policy Match", slug: "policy-match", relevance: "Confirms each draw request complies with loan agreement requirements and your construction lending policy — including retainage requirements, lien waiver coverage, and inspection completion." }
    ],
    workflowSteps: [
      { step: "01", title: "Initial Underwriting", description: "Full loan underwriting package is processed at origination — including construction budget, project schedule, contractor qualifications, and market analysis — producing the initial credit memo." },
      { step: "02", title: "Draw Request Processing", description: "Each draw request package is processed automatically — documents classified, lien waivers verified for coverage, invoices compared against budget, and inspection reports reviewed for completion milestones." },
      { step: "03", title: "Budget Monitoring", description: "Cumulative disbursements are tracked against the approved budget by cost category — flagging budget lines approaching limits and identifying variance trends before they become problems." },
      { step: "04", title: "Change Order Analysis", description: "Change orders are evaluated for budget impact, schedule impact, and scope creep — with cumulative change order tracking that reveals patterns not visible in individual requests." },
      { step: "05", title: "Completion Risk Assessment", description: "Ongoing completion risk assessment integrates budget variance, schedule adherence, and contractor financial condition into a current project risk score updated with each draw." }
    ],
    metrics: [
      { value: "65%", label: "Reduction in draw review time", context: "Per draw request processed" },
      { value: "3x", label: "More deals managed per processor", context: "Without increasing review staffing" },
      { value: "89%", label: "Budget overrun detection rate", context: "Identified within first two draws" }
    ],
    faqs: [
      { question: "How does AI help manage construction lending risk?", answer: "AI construction lending analysis automates draw request review, tracks budget-to-actual variance in real time, monitors contractor financial health, and flags completion risk signals early — giving lenders active visibility into construction risk throughout the loan term rather than passive exposure." },
      { question: "Can Converge process individual draw request packages?", answer: "Yes. Draw request processing is a core Converge workflow. Each draw package is processed automatically upon receipt — invoices, lien waivers, inspection reports, and change orders are all classified, extracted, and validated against loan agreement requirements." },
      { question: "How does Converge track cumulative budget variance?", answer: "Budget tracking is maintained throughout the construction period. Each draw updates the cumulative disbursement record by cost category, enabling real-time budget-to-actual comparison against the approved construction budget." },
      { question: "Does Converge integrate with construction inspection services?", answer: "Converge accepts inspection reports from any source in any common format. For clients using integrated inspection services, direct data feeds are available. Reports are automatically parsed and inspection findings are integrated into the draw approval workflow." },
      { question: "How far in advance does Converge detect completion risk?", answer: "Budget variance patterns that predict cost overruns typically emerge within the first 2-3 draws — well before individual overruns become material. Early detection allows lenders to work with borrowers to course correct before the problem becomes a default trigger." }
    ]
  },
  {
    slug: "cre-term-lending",
    name: "CRE Term Lending",
    headline: "AI-Powered Credit Intelligence for CRE Term Lenders",
    subheadline: "Rigorous, consistent analysis for long-term commercial real estate debt — from initial underwriting through the full loan term.",
    description: "Commercial real estate term lending demands deep analysis. Income stability, tenant credit quality, lease structure, and market dynamics all factor into long-term credit performance. Converge provides the analytical depth the asset class requires.",
    painPoints: [
      { title: "Income Analysis Complexity", description: "CRE income analysis requires reconciling rent rolls, operating statements, management accounts, and market data into a single supportable NOI figure. Manual reconciliation across these sources takes hours and introduces inconsistency." },
      { title: "Tenant Credit Review", description: "For institutional-quality assets, tenant credit quality is a primary risk factor. Reviewing tenant financials, lease terms, and renewal probability for a 20-tenant retail center or mixed-use property is a significant analytical burden." },
      { title: "Long-Term Policy Consistency", description: "In CRE term lending, policy consistency matters more than in short-term lending — because exceptions made at origination have 5-10 year consequences. Documenting and enforcing consistent standards across a large origination team is operationally challenging." },
      { title: "Portfolio Risk Monitoring", description: "A CRE term loan that performed well at origination may develop credit concerns over its 5-10 year term. Systematic monitoring of financial covenants, property performance, and market conditions requires operational infrastructure most lending shops don't have." }
    ],
    keyAgents: [
      { name: "Credit Intelligence", slug: "credit-intelligence", relevance: "Provides deep income analysis — reconciling rent rolls, operating statements, and market data into a supportable NOI figure with every data point sourced and verified." },
      { name: "Policy Match", slug: "policy-match", relevance: "Enforces consistent CRE credit policy across all loan officers — ensuring that long-term commitments are made within guidelines regardless of deal pressure." },
      { name: "Entity Review", slug: "entity-review", relevance: "Reviews sponsor and borrower entity structures for the more complex ownership arrangements typical in institutional CRE ownership." },
      { name: "Comps", slug: "comps", relevance: "Validates CRE appraisal value conclusions with particular attention to cap rate support, NOI assumptions, and comparable selection methodology." }
    ],
    workflowSteps: [
      { step: "01", title: "Application Intake", description: "Complete CRE loan application package is received and classified — operating statements, rent rolls, leases, appraisal, environmental report, title, and entity documents all organized and extracted." },
      { step: "02", title: "Income Analysis", description: "NOI is calculated from rent roll and operating statement data, reconciled against bank statement deposits, and adjusted for vacancy, management fees, and non-recurring items." },
      { step: "03", title: "Value Validation", description: "Appraisal value is validated by Comps — with independent comparable analysis and cap rate benchmarking against current market data." },
      { step: "04", title: "Sponsor Review", description: "Entity Review and Background Report agents review sponsor track record, entity structure, and credit history — providing the full sponsor quality picture." },
      { step: "05", title: "Credit Memo & Policy Check", description: "Credit Intelligence produces a complete credit memo; Policy Match confirms compliance with CRE lending guidelines before committee submission." }
    ],
    metrics: [
      { value: "70%", label: "Reduction in underwriting time", context: "From application to credit committee" },
      { value: "99%", label: "Policy consistency rate", context: "Exceptions properly documented" },
      { value: "5x", label: "More deals per underwriter", context: "Without additional headcount" }
    ],
    faqs: [
      { question: "How is AI transforming commercial real estate lending?", answer: "AI is transforming CRE lending by automating the document-intensive analytical work — income analysis, comparable validation, entity review, policy compliance — that currently consumes the majority of underwriter time. The result is faster decisions, more consistent analysis, and underwriters focused on judgment rather than data assembly." },
      { question: "How does Converge handle rent roll analysis for CRE term loans?", answer: "Converge extracts rent roll data from the current rent roll document, reconciles it against operating statement income and bank statement deposits, identifies vacancy and non-cash items, and produces a stabilized NOI calculation with every adjustment documented and sourced." },
      { question: "Can Converge analyze individual tenant lease terms for retail or mixed-use properties?", answer: "Yes. For multi-tenant properties, Converge processes individual tenant leases — extracting lease terms, expiration dates, renewal options, and rent escalation schedules — and produces a lease summary matrix for the underwriting file." },
      { question: "How does Converge support ongoing monitoring of CRE term loan performance?", answer: "Converge can process annual financial statement submissions from borrowers, automatically updating key performance metrics, flagging covenant breaches, and producing updated credit analyses without manual underwriter involvement." },
      { question: "Does Converge support agency and conduit CRE lending in addition to portfolio lending?", answer: "Yes. Policy Match supports multiple policy overlays — allowing institutions that originate both portfolio and agency/conduit loans to apply the correct policy set to each deal automatically." }
    ]
  },
  {
    slug: "dscr-lending",
    name: "DSCR Lending",
    headline: "AI-Powered Credit Intelligence for DSCR Lenders",
    subheadline: "Accurate rental income validation and property analysis at the speed your DSCR pipeline demands.",
    description: "DSCR lending is asset-first by design — the property's rental income is the underwriting story. Getting that income figure right, validated against market data, is the entire analytical exercise. Converge does it accurately and fast.",
    painPoints: [
      { title: "Rental Income Validation", description: "DSCR calculations are only as good as the rental income figure they are based on. Lease agreements, current rent rolls, and market rent data need to be reconciled — and the lower of actual or market rent needs to be applied correctly and consistently." },
      { title: "Property Management Quality", description: "For DSCR loans on investor properties, property management quality is a material credit factor. Poorly managed properties underperform their market rent potential — and that underperformance shows up in the DSCR before it shows up in a default." },
      { title: "Market Rent Validation", description: "Lenders using market rent for DSCR qualification need current, defensible market rent data for every subject property market. Obtaining and validating market rent data manually for high-volume DSCR operations is operationally impossible." },
      { title: "Property Condition Risk", description: "DSCR borrowers are often investor-operators buying properties in need of improvement. Assessing property condition risk from inspection reports and appraisal condition ratings — and ensuring it is reflected in the DSCR analysis — requires attention to detail at scale." }
    ],
    keyAgents: [
      { name: "Triage", slug: "triage", relevance: "Processes the standardized DSCR loan package quickly — classifying lease agreements, operating history, inspection reports, and appraisals for immediate analysis." },
      { name: "Credit Intelligence", slug: "credit-intelligence", relevance: "Calculates DSCR from lease agreement and market rent data — applying the lesser of actual or market rent consistently and documenting the income basis." },
      { name: "Comps", slug: "comps", relevance: "Validates the appraisal's market rent conclusion with independent market data — confirming that the rent used in the DSCR calculation is supportable." },
      { name: "Policy Match", slug: "policy-match", relevance: "Confirms DSCR calculations and loan terms comply with your DSCR product guidelines — including minimum DSCR by property type, maximum LTV, and property condition requirements." }
    ],
    workflowSteps: [
      { step: "01", title: "Document Processing", description: "DSCR loan package is processed — appraisal, lease agreement or rent roll, property condition report, and title are classified and extracted." },
      { step: "02", title: "Income Analysis", description: "Gross rental income is extracted from the lease or current rent roll. Market rent from the appraisal is identified. Lesser of the two is applied per your DSCR policy." },
      { step: "03", title: "Expense Analysis", description: "Operating expenses are extracted from the property history or estimated based on standard DSCR expense ratios per your policy — with the DSCR calculation fully documented." },
      { step: "04", title: "Comps Validation", description: "Comps agent validates the appraisal's market rent conclusion and comparable sales selection — confirming both the value and the income basis are defensible." },
      { step: "05", title: "Policy Confirmation", description: "Policy Match confirms the final DSCR ratio, LTV, and property type meet your DSCR product parameters. Complete compliance documentation is generated." }
    ],
    metrics: [
      { value: "80%", label: "Faster DSCR calculations", context: "From document receipt to confirmed DSCR" },
      { value: "100%", label: "Consistent income basis application", context: "Lesser of actual or market, always documented" },
      { value: "4x", label: "Increase in DSCR pipeline capacity", context: "Without adding underwriting staff" }
    ],
    faqs: [
      { question: "How can AI automate DSCR loan analysis?", answer: "AI DSCR loan analysis automates the rental income extraction, market rent validation, expense calculation, and DSCR ratio computation — producing a documented, defensible DSCR calculation from loan documents in minutes rather than hours." },
      { question: "How does Converge determine whether to use actual or market rent for DSCR?", answer: "The income basis logic (lesser of actual vs. market, actual rent with seasoning requirements, market rent only) is configured per your DSCR product guidelines. Policy Match applies the correct logic consistently to every deal and documents the income basis used in the calculation." },
      { question: "Can Converge validate market rent figures from appraisals?", answer: "Yes. The Comps agent validates the appraisal's market rent conclusion by analyzing rental comparable selection and recent market transactions — confirming that the market rent used in the DSCR calculation is supported by current market data." },
      { question: "How does Converge handle DSCR calculations for multi-unit properties?", answer: "For multi-unit properties, Converge extracts individual unit rents from the rent roll or lease schedule, applies income and expense analysis at the property level, and produces a fully itemized DSCR calculation." },
      { question: "Does Converge support DSCR lending on short-term rental properties?", answer: "Short-term rental income analysis requires configurable parameters — including whether to use actual STR income, long-term market rent, or a blended approach. Converge supports each methodology depending on your DSCR product guidelines." }
    ]
  },
  {
    slug: "hard-money-lending",
    name: "Hard Money Lending",
    headline: "AI-Powered Credit Intelligence for Hard Money Lenders",
    subheadline: "Fast, asset-based underwriting with the risk visibility to protect your capital at any pace.",
    description: "Hard money lending is speed and collateral. Every decision comes down to: is the collateral worth enough, is the borrower trustworthy enough, and can we close before the next lender gets there. Converge accelerates all three.",
    painPoints: [
      { title: "LTV Accuracy Under Time Pressure", description: "The entire hard money thesis rests on LTV. When you are moving in 24-48 hours, the pressure to accept an appraisal at face value is high. That pressure is exactly when LTV errors happen — and when they are most expensive." },
      { title: "Exit Strategy Validation", description: "Hard money borrowers always have an exit — sale, refinance, or stabilization. Whether that exit is credible given current market conditions is the question that separates acceptable risk from unacceptable risk. Validating it manually is time-consuming." },
      { title: "Borrower Track Record Verification", description: "Hard money borrowers often bring a track record — prior deals completed, prior loans repaid. Verifying that track record from background reports and credit history quickly and accurately is critical to the credit decision." },
      { title: "Repetitive Small-Balance Volume", description: "Many hard money operations run high volumes of smaller-balance loans. The underwriting is simpler, but the volume creates its own operational challenge: doing 10 deals per week with a small team means something always gets rushed." }
    ],
    keyAgents: [
      { name: "Comps", slug: "comps", relevance: "Validates the collateral value with independent comparable analysis — confirming the LTV calculation before you fund." },
      { name: "Background Report", slug: "background-report", relevance: "Quickly screens borrowers for material credit concerns — prior defaults, active judgments, and litigation history that could affect your ability to recover in a workout." },
      { name: "Triage", slug: "triage", relevance: "Processes the condensed hard money package — often just an appraisal, title report, and borrower information — in minutes." },
      { name: "Credit Intelligence", slug: "credit-intelligence", relevance: "Generates a complete credit memo for hard money deals including collateral analysis, borrower profile, and exit strategy assessment." }
    ],
    workflowSteps: [
      { step: "01", title: "Package Receipt", description: "Incoming hard money package is received and processed immediately — even if incomplete. Triage identifies what was received and what is missing, enabling a simultaneous request for missing items." },
      { step: "02", title: "Collateral Analysis", description: "Comps agent validates the appraisal or BPO value with independent comparable analysis — confirming the LTV basis within minutes of appraisal receipt." },
      { step: "03", title: "Borrower Screening", description: "Background Report scans available borrower information for material red flags — prior defaults, active judgments, and litigation — and delivers a structured risk summary." },
      { step: "04", title: "Credit Summary", description: "Credit Intelligence assembles a complete hard money credit summary — collateral value, LTV, borrower profile, exit strategy assessment, and risk flags." },
      { step: "05", title: "Commitment Issuance", description: "If the deal passes, a term sheet is issued with confidence. If there are issues, they are documented with the supporting evidence needed to address them or decline cleanly." }
    ],
    metrics: [
      { value: "< 2hrs", label: "Time to credit summary", context: "From complete package receipt" },
      { value: "96%", label: "LTV accuracy rate", context: "Independent comp validation" },
      { value: "3x", label: "Deal volume per underwriter", context: "Without additional headcount" }
    ],
    faqs: [
      { question: "What AI tools exist for hard money lenders?", answer: "Converge Finance provides AI credit intelligence tools specifically designed for hard money lenders — including automated collateral valuation validation, borrower background screening, and credit memo generation — that compress the underwriting process from hours to minutes." },
      { question: "How does Converge validate LTV on hard money deals?", answer: "The Comps agent analyzes the appraisal or BPO provided by the borrower — extracting comparable sales, validating adjustment methodology, and providing an independent comparable analysis. The result is a supported valuation range that confirms or challenges the stated value before you fund." },
      { question: "Can Converge handle the condensed document packages typical in hard money lending?", answer: "Yes. Hard money loans typically arrive with 3-5 documents rather than a full 30-document commercial package. Triage is designed to process these condensed packages efficiently and flag any missing items that should be obtained before funding." },
      { question: "How quickly can Converge process a hard money loan package?", answer: "A complete hard money package — appraisal, title, borrower information, and background check — is processed in under 30 minutes from receipt. Partial packages begin processing immediately, with updates delivered as additional documents arrive." },
      { question: "Does Converge support fix-and-flip loan analysis specifically?", answer: "Yes. Fix-and-flip analysis includes after-repair value validation, renovation budget review (when provided), and ARV-based LTV calculation. The Credit Intelligence agent can analyze both as-is and after-repair value scenarios." }
    ]
  }
];

export const getSolution = (slug: string): SolutionData | undefined =>
  solutions.find(s => s.slug === slug);
