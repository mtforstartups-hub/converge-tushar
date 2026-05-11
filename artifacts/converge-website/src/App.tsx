import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Layout } from "@/components/layout/Layout";
import { PlasmicRoute } from "@/components/PlasmicRoute";
import PlasmicHost from "@/pages/plasmic-host";

// Original Pages
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
      {/* 1. Technical routes */}
      <Route path="/plasmic-host" component={PlasmicHost} />
      
      {/* 2. Core pages (Allow Plasmic to override) */}
      <PlasmicRoute path="/" component={Home} />
      <PlasmicRoute path="/demo" component={Demo} />

      {/* Platform */}
      <PlasmicRoute path="/platform/overview" component={PlatformOverview} />
      <PlasmicRoute path="/platform/triage" component={TriagePage} />
      <PlasmicRoute path="/platform/credit-intelligence" component={CreditIntelligencePage} />
      <PlasmicRoute path="/platform/policy-match" component={PolicyMatchPage} />
      <PlasmicRoute path="/platform/entity-review" component={EntityReviewPage} />
      <PlasmicRoute path="/platform/background-report" component={BackgroundReportPage} />
      <PlasmicRoute path="/platform/comps" component={CompsPage} />

      {/* Solutions */}
      <PlasmicRoute path="/solutions/bridge-lending" component={BridgeLendingPage} />
      <PlasmicRoute path="/solutions/construction-lending" component={ConstructionLendingPage} />
      <PlasmicRoute path="/solutions/cre-term-lending" component={CRETermLendingPage} />
      <PlasmicRoute path="/solutions/dscr-lending" component={DSCRLendingPage} />
      <PlasmicRoute path="/solutions/hard-money-lending" component={HardMoneyLendingPage} />

      {/* Customers */}
      <PlasmicRoute path="/customers" component={CustomersPage} />
      <PlasmicRoute path="/customers/:slug" component={CaseStudyPage} />

      {/* Resources */}
      <PlasmicRoute path="/resources" component={ResourcesPage} />
      <PlasmicRoute path="/blog" component={BlogPage} />
      <PlasmicRoute path="/blog/:slug" component={BlogPostPage} />
      <PlasmicRoute path="/glossary" component={GlossaryPage} />
      <PlasmicRoute path="/glossary/:slug" component={GlossaryTermPage} />

      {/* Pricing & Security */}
      <PlasmicRoute path="/pricing" component={PricingPage} />
      <PlasmicRoute path="/security" component={SecurityPage} />

      {/* Company */}
      <PlasmicRoute path="/company/about" component={AboutPage} />
      <PlasmicRoute path="/company/careers" component={CareersPage} />
      <PlasmicRoute path="/company/newsroom" component={NewsroomPage} />
      <PlasmicRoute path="/company/contact" component={ContactPage} />

      {/* Legal */}
      <PlasmicRoute path="/legal/privacy-policy" component={PrivacyPolicyPage} />
      <PlasmicRoute path="/legal/terms-of-service" component={TermsOfServicePage} />

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
