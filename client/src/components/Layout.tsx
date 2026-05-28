import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowUpRight } from "lucide-react";
import ResearchBanner from "@/components/ResearchBanner";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Investment Strategy", path: "/strategy" },
    { name: "Our Investors", path: "/our-investors" },
    { name: "Track Record", path: "/track-record" },
    { name: "Market Insights", path: "/market-insights", highlight: true },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-secondary selection:text-white">
      {/* Rotating Research Banner - shown on all pages */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <ResearchBanner />
      </div>
      <header className="fixed z-40 w-full border-b border-border bg-background/80 backdrop-blur-md" style={{ top: '64px' }}>
        <div className="container flex h-32 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group py-2">
            <img 
              src="/images/logo-white-new.jpeg" 
              alt="FoxRidge Equity Partners" 
              className="h-28 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              (item as any).highlight ? (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-sm font-bold px-4 py-1.5 transition-all duration-300 relative group flex items-center gap-1.5",
                    location === item.path
                      ? "text-secondary border border-secondary"
                      : "text-secondary border border-secondary/50 hover:border-secondary hover:bg-secondary/5"
                  )}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  {item.name}
                </Link>
              ) : (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className={cn(
                    "text-sm font-medium px-4 py-2 transition-all duration-300 relative group",
                    location === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-[1px] bg-secondary scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100",
                    location === item.path && "scale-x-100 bg-primary"
                  )} />
                </Link>
              )
            ))}
            <div className="w-[1px] h-6 bg-border mx-4" />
            <Link href="/contact">
              <Button variant="default" className="bg-secondary hover:bg-primary text-white font-medium px-6 rounded-none transition-all duration-300 group">
                Invest With Us
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-none">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] border-l border-border p-0">
              <div className="flex flex-col h-full bg-background">
                <div className="p-6 border-b border-border">
                  <span className="font-display text-2xl font-bold text-primary">Menu</span>
                </div>
                <nav className="flex flex-col flex-1 p-6 gap-2">
                  {navItems.map((item) => (
                    <Link 
                      key={item.path} 
                      href={item.path}
                      className={cn(
                        "text-3xl font-display font-bold transition-colors hover:text-secondary py-4 border-b border-border/50 flex items-center justify-between group",
                        location === item.path
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                      <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </nav>
                <div className="p-6 border-t border-border">
                  <Link href="/contact">
                    <Button 
                      className="w-full bg-secondary hover:bg-primary text-white rounded-none py-6 text-lg font-display"
                      onClick={() => setIsOpen(false)}
                    >
                      Invest With Us
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1 pt-[calc(8rem+64px)]">{children}</main>

      <footer className="bg-primary text-white pt-20 pb-10 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src="/images/logo-black-new.jpeg" 
                  alt="FoxRidge Equity Partners" 
                  className="h-32 w-auto object-contain"
                />
              </div>
              <p className="text-white/60 max-w-md text-lg leading-relaxed font-light">
                Institutional discipline meets entrepreneurial execution. We deliver consistent, risk-adjusted returns through strategic multifamily investing.
              </p>
            </div>
            
            <div className="md:col-span-2 md:col-start-7">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest mb-6 text-secondary">Sitemap</h3>
              <ul className="space-y-4 text-sm text-white/60">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/international-investors" className="hover:text-white transition-colors">
                    International Investors
                  </Link>
                </li>
                <li>
                  <Link href="/market-insights" className="hover:text-white transition-colors flex items-center gap-1.5 text-secondary font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    Market Insights
                  </Link>
                </li>
                <li className="pt-3 border-t border-white/10">
                  <a
                    href="/FoxRidge_Company_Overview.pdf"
                    download
                    className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Firm Overview PDF
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest mb-6 text-secondary">Contact</h3>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex flex-col">
                  <span className="text-white font-medium mb-1">Austin</span>
                  <span>Texas, USA</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-white font-medium mb-1">Miami</span>
                  <span>Florida, USA</span>
                </li>
                <li className="pt-2">
                  <a href="mailto:partners@foxridgeequity.com" className="hover:text-white transition-colors border-b border-white/20 pb-1">
                    partners@foxridgeequity.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="border-t border-white/10 pt-8 mb-6 space-y-4">
            {/* DBA Notice */}
            <p className="text-white/50 text-xs leading-relaxed">
              <strong className="text-white/70 uppercase tracking-wider">Entity Disclosure:</strong>{" "}
              FoxRidge Equity Partners is a registered trade name (DBA) of <strong className="text-white/70">Consulting Point LLC</strong>, a limited liability company organized under the laws of the State of Florida. All business activities, agreements, and legal obligations are conducted through Consulting Point LLC.
            </p>
            {/* Full Legal Disclaimer */}
            <p className="text-white/35 text-xs leading-relaxed max-w-5xl">
              <strong className="text-white/50 uppercase tracking-wider">Important Legal Disclaimer:</strong>{" "}
              This website and all content published herein — including but not limited to market analyses, research reports, financial projections, investment theses, and any other materials — are provided solely for informational and educational purposes. Nothing on this website constitutes, or should be construed as, an offer to sell, a solicitation of an offer to buy, or a recommendation of any security, investment product, or investment strategy. No content on this site constitutes investment, financial, legal, tax, or accounting advice of any kind.
            </p>
            <p className="text-white/35 text-xs leading-relaxed max-w-5xl">
              <strong className="text-white/50 uppercase tracking-wider">No Guarantee of Returns:</strong>{" "}
              Any projected returns, target yields, internal rates of return (IRR), equity multiples, or other forward-looking financial metrics referenced on this website are illustrative estimates only and are based on assumptions that may not materialize. Past performance of any investment, strategy, or market is not indicative of, and does not guarantee, future results. All real estate investments involve substantial risk, including the possible loss of some or all of the principal invested. Actual results may differ materially from any projections or estimates presented.
            </p>
            <p className="text-white/35 text-xs leading-relaxed max-w-5xl">
              <strong className="text-white/50 uppercase tracking-wider">No Solicitation — Accredited Investors Only:</strong>{" "}
              This website does not constitute a public offering of securities. Any private placement opportunities offered by FoxRidge Equity Partners / Consulting Point LLC are made exclusively to accredited investors as defined under Rule 501 of Regulation D of the Securities Act of 1933, as amended, pursuant to exemptions from registration under applicable federal and state securities laws. Participation in any offering requires completion of a formal subscription process and execution of definitive offering documents.
            </p>
            <p className="text-white/35 text-xs leading-relaxed max-w-5xl">
              <strong className="text-white/50 uppercase tracking-wider">Independent Advice:</strong>{" "}
              Prospective investors are strongly encouraged to conduct their own independent due diligence and to consult with qualified legal, tax, financial, and accounting advisors before making any investment decision. FoxRidge Equity Partners / Consulting Point LLC makes no representation or warranty, express or implied, as to the accuracy, completeness, timeliness, or suitability of any information contained on this website for any particular purpose.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-wider">
            <p>&copy; {new Date().getFullYear()} FoxRidge Equity Partners — a DBA of Consulting Point LLC. All Rights Reserved.</p>
            <div className="flex gap-8">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
