import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Redirect, Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import RouteMetadata from "./components/RouteMetadata";
import { toEnglishPath } from "./lib/locale";
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

/**
 * Translated page source remains in the repository for a later approved release. Until then,
 * legacy locale URLs return visitors to the equivalent English route rather than rendering
 * unreviewed language content.
 */
function LegacyLocaleRedirect() {
  const [location] = useLocation();
  return <Redirect to={toEnglishPath(location)} replace />;
}

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

        <Route path="/zh" component={LegacyLocaleRedirect} />
        <Route path="/zh/:rest*" component={LegacyLocaleRedirect} />
        <Route path="/ar" component={LegacyLocaleRedirect} />
        <Route path="/ar/:rest*" component={LegacyLocaleRedirect} />
        <Route path="/he" component={LegacyLocaleRedirect} />
        <Route path="/he/:rest*" component={LegacyLocaleRedirect} />

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
