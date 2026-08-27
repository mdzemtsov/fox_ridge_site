import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import RouteMetadata from "./components/RouteMetadata";
import Home from "./pages/Home";
import About from "./pages/About";
import Strategy from "./pages/Strategy";
import OurInvestors from "./pages/OurInvestors";
import TrackRecord from "./pages/TrackRecord";
import Contact from "./pages/Contact";
import InternationalInvestors from "./pages/InternationalInvestors";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import MarketInsights from "./pages/MarketInsights";
import InvestorPortal from "./pages/InvestorPortal";
import ResearchCurrentProgram from "./pages/ResearchCurrentProgram";
import HomeZh from "./pages/zh/HomeZh";
import AboutZh from "./pages/zh/AboutZh";
import StrategyZh from "./pages/zh/StrategyZh";
import OurInvestorsZh from "./pages/zh/OurInvestorsZh";
import TrackRecordZh from "./pages/zh/TrackRecordZh";
import ContactZh from "./pages/zh/ContactZh";
import InternationalInvestorsZh from "./pages/zh/InternationalInvestorsZh";
import PrivacyPolicyZh from "./pages/zh/PrivacyPolicyZh";
import TermsOfServiceZh from "./pages/zh/TermsOfServiceZh";
import NotFoundZh from "./pages/zh/NotFoundZh";
import MarketInsightsZh from "./pages/zh/MarketInsightsZh";
import InvestorPortalZh from "./pages/zh/InvestorPortalZh";
import ResearchCurrentProgramZh from "./pages/zh/ResearchCurrentProgramZh";
import HomeAr from "./pages/ar/HomeAr";
import AboutAr from "./pages/ar/AboutAr";
import StrategyAr from "./pages/ar/StrategyAr";
import OurInvestorsAr from "./pages/ar/OurInvestorsAr";
import TrackRecordAr from "./pages/ar/TrackRecordAr";
import ContactAr from "./pages/ar/ContactAr";
import InternationalInvestorsAr from "./pages/ar/InternationalInvestorsAr";
import PrivacyPolicyAr from "./pages/ar/PrivacyPolicyAr";
import TermsOfServiceAr from "./pages/ar/TermsOfServiceAr";
import NotFoundAr from "./pages/ar/NotFoundAr";
import MarketInsightsAr from "./pages/ar/MarketInsightsAr";
import InvestorPortalAr from "./pages/ar/InvestorPortalAr";
import ResearchCurrentProgramAr from "./pages/ar/ResearchCurrentProgramAr";

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <RouteMetadata />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/strategy" component={Strategy} />
        <Route path="/our-investors" component={OurInvestors} />
        <Route path="/track-record" component={TrackRecord} />
        <Route path="/contact" component={Contact} />
        <Route path="/international-investors" component={InternationalInvestors} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/investor-resources" component={MarketInsights} />
        <Route path="/research/current-acquisition-framework" component={ResearchCurrentProgram} />
        <Route path="/investor-portal" component={InvestorPortal} />

        <Route path="/zh" component={HomeZh} />
        <Route path="/zh/about" component={AboutZh} />
        <Route path="/zh/strategy" component={StrategyZh} />
        <Route path="/zh/our-investors" component={OurInvestorsZh} />
        <Route path="/zh/track-record" component={TrackRecordZh} />
        <Route path="/zh/contact" component={ContactZh} />
        <Route path="/zh/international-investors" component={InternationalInvestorsZh} />
        <Route path="/zh/privacy-policy" component={PrivacyPolicyZh} />
        <Route path="/zh/terms-of-service" component={TermsOfServiceZh} />
        <Route path="/zh/investor-resources" component={MarketInsightsZh} />
        <Route path="/zh/research/current-acquisition-framework" component={ResearchCurrentProgramZh} />
        <Route path="/zh/investor-portal" component={InvestorPortalZh} />
        <Route path="/zh/404" component={NotFoundZh} />
        <Route path="/zh/:rest*" component={NotFoundZh} />

        <Route path="/ar" component={HomeAr} />
        <Route path="/ar/about" component={AboutAr} />
        <Route path="/ar/strategy" component={StrategyAr} />
        <Route path="/ar/our-investors" component={OurInvestorsAr} />
        <Route path="/ar/track-record" component={TrackRecordAr} />
        <Route path="/ar/contact" component={ContactAr} />
        <Route path="/ar/international-investors" component={InternationalInvestorsAr} />
        <Route path="/ar/privacy-policy" component={PrivacyPolicyAr} />
        <Route path="/ar/terms-of-service" component={TermsOfServiceAr} />
        <Route path="/ar/investor-resources" component={MarketInsightsAr} />
        <Route path="/ar/research/current-acquisition-framework" component={ResearchCurrentProgramAr} />
        <Route path="/ar/investor-portal" component={InvestorPortalAr} />
        <Route path="/ar/404" component={NotFoundAr} />
        <Route path="/ar/:rest*" component={NotFoundAr} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
