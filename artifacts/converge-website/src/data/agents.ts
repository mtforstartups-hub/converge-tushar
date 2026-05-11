export interface AgentCapability {
  title: string;
  description: string;
}

export interface AgentStep {
  title: string;
  description: string;
}

export interface AgentFAQ {
  question: string;
  answer: string;
}

export interface AgentData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problemStatement: string[];
  steps: AgentStep[];
  capabilities: AgentCapability[];
  exampleOutput: string;
  faqs: AgentFAQ[];
  relatedAgents: string[];
  icon: string;
}

export const agents: AgentData[] = [
  {
    slug: "triage",
    name: "Triage",
    tagline: "Document Classification & Extraction",
    description: "Automatically classifies, validates, and extracts structured data from every document in a loan file — from appraisals and title reports to rent rolls and entity agreements.",
    problemStatement: [
      "Loan processors spend 2-3 hours on every deal just identifying, naming, and organizing incoming documents. Files arrive from borrowers in inconsistent formats, mixed folders, and ambiguous filenames. Critical documents get missed. Data gets mis-keyed. Decisions get delayed.",
      "The Triage agent eliminates this bottleneck entirely. Every document that enters a loan file is automatically identified, classified by type, validated for completeness, and parsed for structured data — before a human analyst ever opens it.",
      "The result is a clean, organized, data-complete loan package ready for underwriting in minutes, not hours."
    ],
    steps: [
      { title: "Ingest", description: "Documents arrive from any source — email, SharePoint, Google Drive, LOS upload, or direct API. Triage accepts all common formats including PDF, Word, Excel, and scanned images." },
      { title: "Classify", description: "Each document is classified into one of 200+ loan document categories: appraisal, title report, rent roll, operating agreement, personal financial statement, and more." },
      { title: "Validate", description: "Documents are checked for completeness against your required document checklist. Missing pages, wrong property addresses, and expired documents are flagged immediately." },
      { title: "Extract", description: "Structured data is extracted from each document: property addresses, values, rent amounts, entity names, financial figures, dates, and policy-relevant metrics." },
      { title: "Deliver", description: "A complete document manifest with extracted data is delivered to downstream agents and your LOS — ready for policy matching, entity review, and credit analysis." }
    ],
    capabilities: [
      { title: "200+ Document Types", description: "Trained on the full spectrum of real estate lending documents including appraisals, title reports, phase I environmental reports, rent rolls, operating agreements, tax returns, bank statements, and construction budgets." },
      { title: "OCR & Scanned Document Support", description: "Handles low-quality scans, handwritten notes, and multi-page documents that would fail basic text extraction. AI-powered character recognition with accuracy validation." },
      { title: "Completeness Checking", description: "Compares the received document package against your required checklist for the loan type. Missing documents are flagged with severity levels so processors prioritize the right items." },
      { title: "Data Extraction", description: "Pulls structured data fields from every document — appraised values, income figures, entity names, policy metrics — and makes them available to every downstream agent and system." },
      { title: "Duplicate & Version Detection", description: "Identifies duplicate documents, superseded appraisals, and updated financials — ensuring analysts always work from the most current information." },
      { title: "Integration Ready", description: "Outputs to your LOS, SharePoint, Google Drive, and downstream Converge agents via API or native connector. No manual re-entry required." }
    ],
    exampleOutput: "Document manifest for 1492 Westside Boulevard: 23 documents received, 21 classified, 2 requiring attention. Appraisal (98% confidence, value: $4.2M, dated March 2026), Title Report (clean, no exceptions), Rent Roll (6 units, monthly income $18,400), Operating Agreement (3-member LLC, manager identified), Personal Financial Statement (flagged: over 90 days old).",
    faqs: [
      { question: "How can AI automate loan document classification?", answer: "AI document classification uses machine learning models trained on thousands of real estate lending documents to recognize document types by their content, structure, and formatting patterns — not just filename or metadata." },
      { question: "What document formats does Triage support?", answer: "Triage processes PDF, Word (.docx), Excel (.xlsx), and scanned image files (JPG, PNG, TIFF). Multi-page documents and mixed-format packages are fully supported." },
      { question: "How accurate is the document classification?", answer: "Triage achieves 97%+ classification accuracy across standard real estate lending document types. Confidence scores are provided for every classification, and low-confidence documents are flagged for human review." },
      { question: "Does Triage replace our existing document management system?", answer: "No. Triage integrates with your existing document management, LOS, and CRM systems. It processes documents where they already live and writes structured data back to those systems." },
      { question: "How long does processing take?", answer: "A typical 30-document loan package is classified and extracted in under 3 minutes. Processing time scales linearly with package size." }
    ],
    relatedAgents: ["credit-intelligence", "policy-match"],
    icon: "FileText"
  },
  {
    slug: "credit-intelligence",
    name: "Credit Intelligence",
    tagline: "AI-Powered Risk Analysis & Credit Memo Generation",
    description: "Cross-references data from every document in the loan file to identify risks, inconsistencies, and credit concerns — then generates a complete, structured credit memo ready for committee review.",
    problemStatement: [
      "A senior underwriter at a private lending shop spends 4 to 6 hours assembling a credit memo. That time is not spent analyzing risk — it is spent copying numbers from one document into another, checking that the appraised value matches what the borrower claimed, verifying that the DSCR calculation reflects the correct income figure, and hunting for the discrepancy between the rent roll and the operating statement.",
      "Credit Intelligence automates every step of that assembly process. More importantly, it finds the discrepancies humans miss — the rent roll that doesn't reconcile with the bank statements, the entity structure that doesn't match the operating agreement, the property value that is inconsistent across three different documents.",
      "The output is a structured, audit-ready credit memo with every data point sourced and cross-referenced — produced in minutes, not hours."
    ],
    steps: [
      { title: "Data Aggregation", description: "Pulls all extracted data from the Triage agent — financial figures, property values, entity information, and risk metrics from every document in the loan file." },
      { title: "Cross-Reference Analysis", description: "Systematically compares values across documents to identify inconsistencies. Flags when the appraised value, the purchase price, and the borrower's stated value don't align." },
      { title: "Risk Identification", description: "Applies trained risk detection models to surface potential issues: thin DSCR margins, high leverage ratios, guarantor concentration risk, property condition flags, and market exposure concerns." },
      { title: "Policy Comparison", description: "Integrates with Policy Match to overlay your credit box against extracted metrics — showing exactly where the deal sits relative to guidelines before memo assembly." },
      { title: "Memo Generation", description: "Assembles a structured credit memo with all sourced data, risk flags, policy comparison, and underwriter commentary fields ready for manual input." }
    ],
    capabilities: [
      { title: "Cross-Document Reconciliation", description: "Systematically compares figures across all documents in the loan file — identifying discrepancies between the appraisal, rent roll, bank statements, and borrower-provided schedules that human reviewers frequently miss under time pressure." },
      { title: "Risk Flag Detection", description: "Identifies 80+ risk signals across credit, property, borrower, and market dimensions — from thin DSCR margins and high LTV to environmental concerns and guarantor financial stress indicators." },
      { title: "Structured Memo Output", description: "Generates a complete credit memo in your institution's format with all data sourced to its originating document. Every number is traceable back to the original document and page." },
      { title: "Audit Trail", description: "Every data point in the credit memo is linked to its source document, page, and confidence score. Provides a complete audit trail for regulatory review and internal quality control." },
      { title: "Continuous Learning", description: "Model accuracy improves with every deal processed on your portfolio. Risk signals are calibrated to your specific credit culture and performance history." },
      { title: "Committee-Ready Output", description: "Memo format supports your specific committee template — fields, sections, and risk summary structure match your existing workflow, not a generic template." }
    ],
    exampleOutput: "Credit Intelligence Report — 1492 Westside Boulevard: DSCR 1.23x (calculated from rent roll, verified against 12-month bank statements ±4.2%), LTV 68.3% (based on $4.2M appraised value vs $2.87M loan amount), 3 Risk Flags: (1) Rent roll shows 2 units as occupied — bank statements reflect income for only 1 unit for the past 3 months, (2) Personal financial statement is 94 days old, exceeding 90-day policy requirement, (3) Environmental Phase I references underground storage tank — recommend Phase II.",
    faqs: [
      { question: "What is AI-powered credit risk analysis for CRE?", answer: "AI-powered credit risk analysis for commercial real estate lending uses machine learning to automatically extract, cross-reference, and analyze financial and property data across all loan documents — identifying risk factors that manual review may miss and generating structured credit memos in a fraction of the time." },
      { question: "How does the AI find discrepancies between documents?", answer: "The Credit Intelligence agent maintains a unified data model of every figure extracted from every document in the loan file. It then systematically checks every figure against every related figure — comparing the rent roll income to bank statement deposits, the appraised value to the purchase contract, and the operating agreement structure to the entity review findings." },
      { question: "Can the credit memo match our specific template?", answer: "Yes. Credit Intelligence supports custom memo templates configured to your institution's format, section structure, and field requirements. Implementation includes a template mapping exercise during onboarding." },
      { question: "How accurate are the risk flags?", answer: "Risk flags are generated with confidence scores and supporting evidence from source documents. In production deployments, Credit Intelligence surfaces material risk issues in 94% of deals where they exist, with a false positive rate under 8%." },
      { question: "Does this replace the underwriter's judgment?", answer: "No. Credit Intelligence automates assembly and surfaces information — it does not make credit decisions. The underwriter reviews the AI-generated analysis, adds their judgment, and issues the final recommendation." }
    ],
    relatedAgents: ["triage", "policy-match", "comps"],
    icon: "BarChart3"
  },
  {
    slug: "policy-match",
    name: "Policy Match",
    tagline: "Automated Credit Policy Compliance",
    description: "Compares extracted loan metrics against your specific credit box and underwriting guidelines — flagging exceptions before they become problems and documenting compliance for every deal.",
    problemStatement: [
      "Most lending institutions have credit policies documented in PDFs, spreadsheets, and institutional memory. Enforcement happens at the end of the underwriting process — in committee, when it is expensive to fix. Policy exceptions that should have been caught on day one get discovered on day fifteen.",
      "Policy Match brings your credit box into the deal flow from the beginning. Every metric extracted from the loan file is automatically compared against your guidelines the moment it is available — LTV limits by property type, DSCR minimums by loan size, maximum loan-to-cost thresholds, guarantor net worth requirements, seasoning requirements, and every other policy dimension you define.",
      "The result is consistent policy enforcement across every loan officer, every deal, and every day — without requiring a compliance review meeting."
    ],
    steps: [
      { title: "Policy Ingestion", description: "Your credit guidelines are loaded into Policy Match during onboarding — structured into a queryable policy engine that understands conditional rules, property type exceptions, and tiered thresholds." },
      { title: "Metric Extraction", description: "Key policy metrics are pulled from the Triage and Credit Intelligence agents: LTV, DSCR, loan amount, property type, loan-to-cost, guarantor net worth, debt yield, and any custom metrics you track." },
      { title: "Policy Comparison", description: "Each metric is compared against the applicable policy rule — accounting for property type, geography, loan size, and any other segmentation factors in your guidelines." },
      { title: "Exception Flagging", description: "Policy breaches are flagged immediately with severity levels: hard stop (loan cannot proceed without waiver), soft exception (requires documented approval), and advisory (within policy but approaching limits)." },
      { title: "Compliance Documentation", description: "A policy compliance scorecard is generated for every deal — documenting every metric, its value, the applicable guideline, and pass/fail status. Ready for audit." }
    ],
    capabilities: [
      { title: "Multi-Dimensional Policy Engine", description: "Handles complex conditional policies: LTV limits that vary by property type, geography, loan size, and borrower experience — not just a single threshold applied uniformly to every deal." },
      { title: "Exception Workflow", description: "Flags exceptions with severity classifications (hard stop, soft exception, advisory) and routes them to the appropriate approver based on your exception management hierarchy." },
      { title: "Policy Versioning", description: "Maintains a complete history of policy changes. Every deal is evaluated against the policy version in effect at the time of origination — critical for audit defense and regulatory examination." },
      { title: "Custom Policy Rules", description: "Supports any quantitative or categorical policy rule — from standard LTV and DSCR thresholds to custom risk scores, concentration limits, and market-specific overlays." },
      { title: "Audit-Ready Documentation", description: "Generates a dated, signed policy compliance attestation for every deal — documenting what policy was applied, what metrics were evaluated, and who approved any exceptions." },
      { title: "Real-Time Feedback", description: "Policy Match runs at intake, not at committee. Loan officers see policy feedback on new deals within minutes of submission — allowing time to restructure deals before significant work is invested." }
    ],
    exampleOutput: "Policy Compliance Scorecard — Deal #1492: 12 metrics evaluated. 9 pass. 3 flags. (1) LTV 68.3% — Policy maximum 65.0% for office property in this market [HARD STOP — exception required]. (2) Personal financial statement 94 days — Policy maximum 90 days [SOFT EXCEPTION — updated statement required within 5 business days]. (3) DSCR 1.23x — Policy minimum 1.20x — within policy but within 3 basis points of floor [ADVISORY — note in credit memo].",
    faqs: [
      { question: "How does automated credit policy matching work?", answer: "Automated credit policy matching extracts key loan metrics from application documents and compares them against a structured, machine-readable version of your credit guidelines — flagging exceptions in real time rather than waiting for committee review." },
      { question: "How are credit policies loaded into the system?", answer: "During onboarding, your existing credit guidelines are mapped into the Policy Match engine by a Converge implementation specialist. The process typically takes 2-3 days for standard policy sets and includes validation testing against historical deals." },
      { question: "Can Policy Match handle multiple policy overlays?", answer: "Yes. Policy Match supports layered policies — for example, an institution-wide policy baseline, a specific product overlay, and a geographic market overlay that all apply simultaneously to the same deal." },
      { question: "What happens when a policy exception is flagged?", answer: "Exceptions are flagged with severity levels. Hard stop exceptions block the deal from proceeding without documented approval. Soft exceptions trigger a notification and require disposition before closing. All exceptions are logged for audit purposes." },
      { question: "How quickly are new policy changes reflected?", answer: "Policy updates are reflected immediately once loaded into the system. All subsequent deals are evaluated against the updated policy. Historical deals retain their original policy evaluation." }
    ],
    relatedAgents: ["triage", "credit-intelligence", "entity-review"],
    icon: "CheckCircle"
  },
  {
    slug: "entity-review",
    name: "Entity Review",
    tagline: "Borrower Entity Structure & Guarantor Compliance",
    description: "Analyzes borrower entity structures, ownership chains, and guarantor requirements — identifying compliance gaps, missing guarantors, and structural issues before closing.",
    problemStatement: [
      "Commercial real estate loans are almost never made to individuals. They are made to LLCs, LPs, trusts, and complex holding structures that can span multiple layers and dozens of entities. Reviewing these structures manually — confirming that the right parties are signing, that all required guarantors are captured, and that the entity is in good standing — takes hours and is prone to error.",
      "Entity Review automatically maps every entity structure in the loan file — from the operating agreement and organizational chart to the personal financial statements and background reports. It identifies every owner, manager, and guarantor, confirms their roles against lending requirements, and flags structural issues that could create enforcement problems at closing or in a workout.",
      "The result is confidence that you are lending to the right entity, with the right guarantors, before you fund."
    ],
    steps: [
      { title: "Document Extraction", description: "Operating agreements, articles of organization, trust agreements, and entity organizational charts are extracted and parsed to map ownership structure." },
      { title: "Entity Mapping", description: "The complete ownership chain is visualized — identifying all members, managers, general partners, and trustees, with their ownership percentages and roles." },
      { title: "Guarantor Identification", description: "Required guarantors are identified based on ownership percentage thresholds and your lending policy — flagging any missing guarantee obligations." },
      { title: "Compliance Check", description: "Entity good standing, authorized signatories, and organizational compliance requirements are verified against policy and applicable law." },
      { title: "Risk Flagging", description: "Structural issues are flagged: ownership concentrations that require additional review, foreign entity structures, trust beneficiary concerns, and inter-company loan arrangements." }
    ],
    capabilities: [
      { title: "Multi-Layer Structure Analysis", description: "Maps entity structures through unlimited ownership layers — from a simple single-member LLC to a complex holding structure with multiple tiers, foreign entities, and trust beneficiaries." },
      { title: "Guarantor Coverage Verification", description: "Verifies that all parties meeting your guaranty threshold are included in the loan structure. Flags missing guarantors, incomplete personal financial statements, and expired background reports." },
      { title: "Good Standing Verification", description: "Checks entity formation documents against required good standing status and flags entities that appear to be lapsed, dissolved, or not authorized to transact in the relevant jurisdiction." },
      { title: "Signatory Authority Verification", description: "Confirms that the individuals signing loan documents have authority to bind the entity — cross-referencing the operating agreement against the signature block." },
      { title: "Foreign Entity Detection", description: "Identifies foreign (non-US) entities in the ownership structure and flags them for enhanced due diligence — relevant for FIRPTA, CFIUS, and other compliance considerations." },
      { title: "Enforcement Risk Assessment", description: "Identifies structural issues that could complicate enforcement in a default scenario — such as single-asset entities without recourse guarantees, or complex trust structures that limit recovery options." }
    ],
    exampleOutput: "Entity Review Report — 1492 Westside Boulevard LLC: 3-member LLC identified. Members: John Smith (60% — personal guarantee required, PFS received), Westside Capital Group LLC (30% — entity guarantee obtained, authorized signatory verified), Sarah Chen (10% — below 20% threshold, guarantee not required). FLAG: Westside Capital Group LLC is a Delaware entity operating in California — certificate of authority to transact in CA not found in file.",
    faqs: [
      { question: "How can AI automate entity review in commercial lending?", answer: "AI entity review reads and parses operating agreements, articles of organization, trust agreements, and organizational charts to automatically map ownership structures, identify required guarantors, and flag compliance issues — replacing a manual review process that typically takes 2-4 hours per deal." },
      { question: "How does Entity Review handle complex holding structures?", answer: "Entity Review recursively traces ownership chains through unlimited structural layers. For each entity encountered, it reads the relevant formation documents to identify the next layer of ownership, building a complete map from the borrowing entity to the ultimate beneficial owners." },
      { question: "What triggers a guaranty requirement flag?", answer: "Guaranty thresholds are configured based on your lending policy — typically any member or partner with 20% or greater ownership interest is required to provide a personal guarantee. The threshold is configurable and can vary by loan type, property type, or loan size." },
      { question: "Can Entity Review handle trust-owned properties?", answer: "Yes. Entity Review processes trust agreements and identifies trustees, trust protectors, and beneficiaries. It flags trust structures that may require special documentation or legal review — such as revocable living trusts, irrevocable trusts, and pension fund ownership." },
      { question: "Does this replace a legal review of entity documents?", answer: "No. Entity Review automates the data extraction and structural mapping portion of entity due diligence. Legal interpretation of complex structures, unusual provisions in operating agreements, and jurisdiction-specific compliance questions still require legal counsel." }
    ],
    relatedAgents: ["background-report", "policy-match", "triage"],
    icon: "Building"
  },
  {
    slug: "background-report",
    name: "Background Report",
    tagline: "Borrower Background Risk Analysis",
    description: "Analyzes background reports for litigation history, financial distress signals, regulatory violations, and reputational risk — surfacing borrower concerns that property analysis alone cannot reveal.",
    problemStatement: [
      "A lender once funded a $12 million bridge loan to a borrower who had three active judgments, two prior loan defaults, and a regulatory violation on record. All of it was in the background report. Nobody had time to read 80 pages of search results before the rate lock expired.",
      "Background Report reads every background check in a loan file — every page, every jurisdiction, every civil search, every regulatory record — and distills it into a structured risk summary with severity-scored findings. Material issues surface immediately. Clean reports are confirmed quickly.",
      "The result is confidence that you know who you are lending to before you commit capital."
    ],
    steps: [
      { title: "Report Identification", description: "Background reports are identified and classified within the loan file — credit reports, consumer background checks, entity search results, litigation searches, and regulatory violation databases." },
      { title: "Content Extraction", description: "Each report is parsed for material findings: judgments, liens, bankruptcies, foreclosures, pending litigation, regulatory violations, license suspensions, and criminal records." },
      { title: "Severity Scoring", description: "Each finding is scored by severity — distinguishing between a 15-year-old minor judgment and a recent foreclosure on a comparable property by the same borrower." },
      { title: "Pattern Analysis", description: "Findings are analyzed in context: a single judgment may be immaterial, but a pattern of disputes with lenders is a significant risk signal regardless of individual severity." },
      { title: "Risk Summary Delivery", description: "A structured risk summary is delivered with all material findings sourced to their specific report, page, and jurisdiction — ready for underwriter review and policy disposition." }
    ],
    capabilities: [
      { title: "Multi-Jurisdiction Search Coverage", description: "Processes background reports covering federal, state, and county civil and criminal searches — identifying findings across all jurisdictions regardless of where the search was conducted." },
      { title: "Financial Distress Detection", description: "Identifies signals of borrower financial stress: recent judgments, active garnishments, prior loan defaults, bankruptcy filings and discharge status, and patterns of delinquency." },
      { title: "Regulatory Violation Identification", description: "Surfaces regulatory violations relevant to real estate and lending: contractor license suspensions, RESPA violations, state lending law violations, and SEC enforcement actions." },
      { title: "Pattern Recognition", description: "Analyzes findings in historical context — distinguishing a single isolated issue from a pattern of behavior that represents a material credit concern." },
      { title: "Entity & Individual Coverage", description: "Processes background reports for both individual borrowers and entities — including cross-entity searches that surface issues with related parties and affiliates." },
      { title: "Severity Classification", description: "Every finding is classified by severity (material, moderate, minor) with a recommended disposition (hard stop, require explanation, note in file) mapped to your lending policy." }
    ],
    exampleOutput: "Background Report Summary — John Smith (Managing Member): 3 findings across 4 reports reviewed. (1) MATERIAL: Active civil judgment, Superior Court Los Angeles, $340,000 outstanding, creditor: First National Bank, filed January 2025 — prior loan default. (2) MODERATE: Mechanics lien, $28,000, released March 2024 — contractor dispute, resolved. (3) MINOR: Name match on 2017 unlicensed contractor citation — different individual, confirmed by DOB and SSN.",
    faqs: [
      { question: "How can AI analyze background reports for lending?", answer: "AI background report analysis reads and parses background check documents to automatically extract material findings — judgments, liens, bankruptcies, regulatory violations — scores them by severity, and produces a structured risk summary that replaces hours of manual document review." },
      { question: "What types of background reports does the agent process?", answer: "Background Report processes consumer credit reports, civil background searches, criminal background checks, entity search results, UCC lien searches, OFAC/sanctions lists, and regulatory violation databases including state contractor license records." },
      { question: "How does the agent handle false positives in background reports?", answer: "Common name matches are a significant source of false positives in background reports. The Background Report agent cross-references findings against available identifying information (date of birth, SSN, address history) to distinguish true matches from false positives and flags the confidence level of each attribution." },
      { question: "What severity level requires a hard stop?", answer: "Active loan defaults with the same or related lenders, active judgments exceeding configurable thresholds, recent bankruptcy filings, and OFAC/sanctions matches are typically configured as hard stops. Severity thresholds are configurable to your institution's policy." },
      { question: "How current are the background reports that get processed?", answer: "Background Report analyzes reports provided by your existing background check vendors — it does not conduct new searches. Report currency (how recently the underlying searches were run) is flagged if reports appear to be outside your required recency window, typically 90 days." }
    ],
    relatedAgents: ["entity-review", "credit-intelligence", "triage"],
    icon: "Shield"
  },
  {
    slug: "comps",
    name: "Comps",
    tagline: "Automated Property Comparable Analysis",
    description: "Identifies and analyzes comparable properties to validate appraisal assumptions, benchmark subject property value, and surface valuation concerns before you fund.",
    problemStatement: [
      "An appraisal is only as good as the comparables that support it. Experienced underwriters know this — and spend significant time second-guessing comp selection: Are these the right properties? Are they really comparable? Is the appraiser's adjustments methodology sound? Could this value be $500,000 lower with better comps?",
      "The Comps agent answers these questions systematically. It extracts the comparables from the appraisal, analyzes their relevance to the subject property, and independently identifies alternative comparables that may paint a different picture of value.",
      "The result is an independent validation of the appraisal's value conclusion — giving underwriters and credit officers the confidence to fund or the data to push back."
    ],
    steps: [
      { title: "Appraisal Extraction", description: "Comparable properties, adjustment grids, and value conclusion are extracted from the appraisal report — including sale prices, dates, adjustment factors, and the appraiser's final reconciled value." },
      { title: "Comp Validation", description: "Each comparable is analyzed for relevance: property type alignment, proximity, sale recency, size comparability, and quality characteristics relative to the subject property." },
      { title: "Adjustment Analysis", description: "Appraiser adjustments are reviewed for magnitude and direction — flagging adjustments that appear inconsistent with market data or that result in significant upward adjustments to the comp value." },
      { title: "Independent Comp Research", description: "Alternative comparable properties from recent sales data are identified — providing an independent benchmark against the appraiser's selected comparables." },
      { title: "Valuation Range Output", description: "A supported valuation range for the subject property is calculated based on the Comps analysis — providing the underwriter with a data-supported range to compare against the appraised value." }
    ],
    capabilities: [
      { title: "Appraisal Comp Extraction", description: "Automatically extracts comparable properties, sale prices, adjustment grids, and value conclusions from appraisal reports — building a structured dataset for analysis regardless of appraisal format or template." },
      { title: "Comp Relevance Scoring", description: "Scores each comparable on multiple relevance dimensions: property type match, geographic proximity, sale recency, size comparability, and condition/quality alignment — identifying weak comps that may not support the value conclusion." },
      { title: "Adjustment Flag Detection", description: "Identifies adjustment patterns that indicate potential appraisal bias: large net adjustments, consistently upward adjustments, or adjustment values that exceed market-supported ranges." },
      { title: "Independent Comparable Analysis", description: "Identifies alternative comparable properties from available market data — providing an independent benchmark that the underwriter can compare against the appraiser's comp selection." },
      { title: "Valuation Sensitivity Analysis", description: "Models the value conclusion across different comp sets and adjustment assumptions — showing how the appraised value changes if the weakest comps are removed or alternative comps are substituted." },
      { title: "Market Condition Assessment", description: "Analyzes the market context for the subject property — recent sales velocity, price trend direction, and time-on-market data that informs the validity of the appraiser's market condition adjustments." }
    ],
    exampleOutput: "Comps Analysis — 1492 Westside Boulevard: Appraised at $4.2M using 3 comparable sales. Analysis: Comp 1 (112 Main St, $1,850/SF) — Strong comparable, 0.3 miles, sold 4 months ago, minor adjustments. Comp 2 (840 Commerce Ave, $1,920/SF) — Moderate relevance, 1.2 miles, 18 months ago — time adjustment of +8% applied by appraiser, appears aggressive relative to market data. Comp 3 (2201 Industrial Blvd, $1,780/SF) — Weak comparable, 3.1 miles, different submarket, property type mismatch (industrial flex vs. office). Supported range without Comp 3: $3.8M-$4.0M. FLAG: Value conclusion of $4.2M at upper end of supportable range.",
    faqs: [
      { question: "How does automated property comparable analysis work?", answer: "Automated property comparable analysis extracts comparable properties and valuation data from appraisal reports, then analyzes each comparable for relevance to the subject property across multiple dimensions — providing an independent assessment of whether the selected comps support the appraised value conclusion." },
      { question: "Does Comps replace the appraisal review process?", answer: "No. Comps augments the appraisal review process by automating the time-consuming data extraction and initial analysis steps. The underwriter or appraisal reviewer still makes the final determination on value acceptability." },
      { question: "What data sources does Comps use for independent comparables?", answer: "Comps leverages integrated commercial property data providers for independent comparable identification. Available data sources vary by market and are confirmed during implementation." },
      { question: "How does Comps handle property types with limited sales data?", answer: "In markets with limited transaction volume, Comps adjusts its analysis to rely more heavily on the appraisal's own comparable set while flagging the limited data environment. Confidence scores reflect data availability." },
      { question: "Can Comps analyze residential or mixed-use properties?", answer: "Yes. Comps is configured for commercial real estate including office, retail, industrial, multifamily, and mixed-use properties. Residential 1-4 unit analysis is also supported for DSCR and hard money lending." }
    ],
    relatedAgents: ["credit-intelligence", "triage", "policy-match"],
    icon: "Search"
  }
];

export const getAgent = (slug: string): AgentData | undefined =>
  agents.find(a => a.slug === slug);
