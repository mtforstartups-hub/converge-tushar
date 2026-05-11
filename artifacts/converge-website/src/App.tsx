import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/home";
import Demo from "@/pages/demo";

// Platform
import PlatformOverview from "@/pages/platform/overview";
import TriagePage from "@/pages/platform/triage";
import CreditIntelligencePage from "@/pages/platform/credit-intelligence";
import PolicyMatchPage from "@/pages/platform/policy-match";
import EntityReviewPage from "@/pages/platform/entity-review";
import BackgroundReportPage from "@/pages/platform/background-report";
import CompsPage from "@/pages/platform/comps";

// Solutions
import BridgeLendingPage from "@/pages/solutions/bridge-lending";
import ConstructionLendingPage from "@/pages/solutions/construction-lending";
import CRETermLendingPage from "@/pages/solutions/cre-term-lending";
import DSCRLendingPage from "@/pages/solutions/dscr-lending";
import HardMoneyLendingPage from "@/pages/solutions/hard-money-lending";

// Customers
import CustomersPage from "@/pages/customers/index";
import CaseStudyPage from "@/pages/customers/case-study";

// Resources
import ResourcesPage from "@/pages/resources/index";
import BlogPage from "@/pages/blog/index";
import BlogPostPage from "@/pages/blog/post";
import GlossaryPage from "@/pages/glossary/index";
import GlossaryTermPage from "@/pages/glossary/term";

// Pricing & Security
import PricingPage from "@/pages/pricing";
import SecurityPage from "@/pages/security";

// Company
import AboutPage from "@/pages/company/about";
import CareersPage from "@/pages/company/careers";
import NewsroomPage from "@/pages/company/newsroom";
import ContactPage from "@/pages/company/contact";

// Legal
import PrivacyPolicyPage from "@/pages/legal/privacy-policy";
import TermsOfServicePage from "@/pages/legal/terms-of-service";

import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/demo" component={Demo} />

      {/* Platform */}
      <Route path="/platform/overview" component={PlatformOverview} />
      <Route path="/platform/triage" component={TriagePage} />
      <Route path="/platform/credit-intelligence" component={CreditIntelligencePage} />
      <Route path="/platform/policy-match" component={PolicyMatchPage} />
      <Route path="/platform/entity-review" component={EntityReviewPage} />
      <Route path="/platform/background-report" component={BackgroundReportPage} />
      <Route path="/platform/comps" component={CompsPage} />

      {/* Solutions */}
      <Route path="/solutions/bridge-lending" component={BridgeLendingPage} />
      <Route path="/solutions/construction-lending" component={ConstructionLendingPage} />
      <Route path="/solutions/cre-term-lending" component={CRETermLendingPage} />
      <Route path="/solutions/dscr-lending" component={DSCRLendingPage} />
      <Route path="/solutions/hard-money-lending" component={HardMoneyLendingPage} />

      {/* Customers */}
      <Route path="/customers" component={CustomersPage} />
      <Route path="/customers/:slug" component={CaseStudyPage} />

      {/* Resources */}
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/resources/guides" component={ResourcesPage} />
      <Route path="/resources/webinars" component={ResourcesPage} />
      <Route path="/resources/reports" component={ResourcesPage} />

      {/* Blog */}
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogPostPage} />

      {/* Glossary */}
      <Route path="/glossary" component={GlossaryPage} />
      <Route path="/glossary/:slug" component={GlossaryTermPage} />

      {/* Pricing & Security */}
      <Route path="/pricing" component={PricingPage} />
      <Route path="/security" component={SecurityPage} />

      {/* Company */}
      <Route path="/company/about" component={AboutPage} />
      <Route path="/company/careers" component={CareersPage} />
      <Route path="/company/newsroom" component={NewsroomPage} />
      <Route path="/company/contact" component={ContactPage} />

      {/* Legal */}
      <Route path="/legal/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/legal/terms-of-service" component={TermsOfServicePage} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
