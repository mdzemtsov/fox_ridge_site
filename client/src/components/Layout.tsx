import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import FirmOverviewPopup from "@/components/FirmOverviewPopup";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Investment Strategy", path: "/strategy" },
    { name: "Our Investors", path: "/our-investors" },
    { name: "Track Record", path: "/track-record" },
    { name: "Investor Resources", path: "/investor-resources", highlight: true },
    { name: "Investor Portal", path: "/investor-portal", highlight: true, portal: true },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-secondary selection:text-white">
      <FirmOverviewPopup />
      <header
        className={cn(
          "fixed z-40 w-full border-b border-border bg-background/80 backdrop-blur-md transition-all duration-300",
          // Mobile: shrink when scrolled; desktop: always full height
          scrolled ? "md:h-32 h-16" : "h-32"
        )}
        style={{ top: 0 }}
      >
        <div className="container flex h-full items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group py-1">
            <img 
              src="/images/logo-dark-bg.png" 
              alt="FoxRidge Equity Partners" 
              className={cn(
                "w-auto object-contain transition-all duration-300",
                // Mobile: shrink logo when scrolled; desktop: always full size
                scrolled ? "md:h-24 h-10" : "h-24"
              )}
              style={{ maxWidth: scrolled ? '140px' : '220px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              (item as any).portal ? (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-sm font-bold px-4 py-1.5 transition-all duration-300 relative group flex items-center gap-1.5 rounded-sm",
                    location === item.path
                      ? "text-amber-400 border border-amber-400 bg-amber-400/10"
                      : "text-amber-400 border border-amber-400/60 hover:border-amber-400 hover:bg-amber-400/10"
                  )}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {item.name}
                </Link>
              ) : (item as any).highlight ? (
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

      <main className={cn("flex-1 transition-all duration-300", scrolled ? "pt-16 md:pt-32" : "pt-32")}>{children}</main>

      <footer className="bg-primary text-white pt-20 pb-10 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src="/images/logo-dark-bg.png" 
                  alt="FoxRidge Equity Partners" 
                  className="h-28 w-auto object-contain"
                  style={{ maxWidth: '240px' }}
                />
              </div>
              <p className="text-white/60 max-w-md text-lg leading-relaxed font-light">
                Institutional discipline meets entrepreneurial execution. We target risk-adjusted returns through strategic multifamily investing. Past performance is not indicative of future results.
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
                  <Link href="/investor-resources" className="hover:text-white transition-colors flex items-center gap-1.5 text-secondary font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    Investor Resources
                  </Link>
                </li>
                <li>
                  <Link href="/investor-portal" className="hover:text-white transition-colors flex items-center gap-1.5 text-amber-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Investor Portal
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
                <li className="pt-3 border-t border-white/10">
                  <a
                    href="https://www.linkedin.com/company/foxridge-equity-partners/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="FoxRidge Equity Partners on LinkedIn"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-[#0A66C2] transition-colors group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    <span className="text-sm">Follow on LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="border-t border-white/[0.07] pt-6 mb-5">
            {/* DBA Notice — always visible, slightly brighter */}
            <p className="text-white/40 text-[10px] leading-[1.6] mb-3 max-w-3xl">
              <span className="text-white/55 font-semibold uppercase tracking-[0.1em]">Entity Disclosure:</span>{" "}
              FoxRidge Equity Partners is a registered trade name (DBA) of <span className="text-white/55 font-semibold">Consulting Point LLC</span>, a limited liability company organized under the laws of the State of Florida. All business activities, agreements, and legal obligations are conducted through Consulting Point LLC.
            </p>
            {/* Full legal disclaimer — subdued, compact */}
            <div className="text-white/25 text-[10px] leading-[1.55] space-y-2 max-w-4xl">
              <p>
                <span className="text-white/35 font-semibold uppercase tracking-[0.08em]">Legal Disclaimer:</span>{" "}
                This website and all content herein are provided solely for informational and educational purposes. Nothing on this website constitutes an offer to sell, a solicitation of an offer to buy, or a recommendation of any security, investment product, or investment strategy. No content on this site constitutes investment, financial, legal, tax, or accounting advice of any kind.
              </p>
              <p>
                <span className="text-white/35 font-semibold uppercase tracking-[0.08em]">No Guarantee of Returns:</span>{" "}
                Any projected returns, target yields, IRR, equity multiples, or other forward-looking metrics are illustrative estimates only based on assumptions that may not materialize. Past performance is not indicative of future results. All real estate investments involve substantial risk, including possible loss of some or all principal invested. Actual results may differ materially from any projections presented.
              </p>
              <p>
                <span className="text-white/35 font-semibold uppercase tracking-[0.08em]">Accredited Investors Only — General Advertising Notice:</span>{" "}
                This website may constitute general advertising or general solicitation within the meaning of Rule 502(c) of Regulation D. Any securities offerings are conducted exclusively pursuant to exemptions from registration under the Securities Act of 1933, as amended, including Rule 506(c) of Regulation D, and are available only to verified accredited investors as defined under Rule 501. No offer to sell or solicitation to buy any security is made through this website; any such offer is made only through definitive offering documents. Prior to accepting any investment, FoxRidge Equity Partners / Consulting Point LLC will take reasonable steps to verify accredited investor status as required by Rule 506(c). Participation requires completion of a formal subscription process and execution of definitive offering documents.
              </p>
              <p>
                <span className="text-white/35 font-semibold uppercase tracking-[0.08em]">Independent Advice:</span>{" "}
                Prospective investors are strongly encouraged to conduct independent due diligence and consult qualified legal, tax, financial, and accounting advisors before making any investment decision. FoxRidge Equity Partners / Consulting Point LLC makes no representation or warranty, express or implied, as to the accuracy, completeness, timeliness, or suitability of any information on this website for any particular purpose.
              </p>
            </div>
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
