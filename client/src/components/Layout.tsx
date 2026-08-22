import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowUpRight, ChevronRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";

type NavigationItem = {
  name: string;
  path: string;
};

const desktopNavigation: NavigationItem[] = [
  { name: "Strategy & Markets", path: "/strategy" },
  { name: "Capital Partners", path: "/our-investors" },
  { name: "Track Record", path: "/track-record" },
  { name: "Research", path: "/investor-resources" },
  { name: "International Investors", path: "/international-investors" },
  { name: "About", path: "/about" },
];

const mobileNavigation: NavigationItem[] = [
  { name: "Strategy & Markets", path: "/strategy" },
  { name: "Capital Partners", path: "/our-investors" },
  { name: "International Investors", path: "/international-investors" },
  { name: "Track Record", path: "/track-record" },
  { name: "Research", path: "/investor-resources" },
  { name: "About", path: "/about" },
];

function isCurrentRoute(location: string, path: string) {
  return location === path;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-secondary selection:text-white">
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-[60] bg-secondary px-4 py-3 text-sm font-bold text-white shadow-lg focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        Skip to main content
      </a>
      <header
        className={cn(
          "fixed z-40 w-full border-b border-border bg-background/92 backdrop-blur-xl transition-[height,box-shadow,background-color] duration-300",
          scrolled ? "h-16 lg:h-[88px] shadow-sm" : "h-20 lg:h-[104px]"
        )}
        style={{ top: 0 }}
      >
        <div className="container flex h-full items-center justify-between gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            aria-label="FoxRidge Equity Partners home"
          >
            <img
              src="/images/logo-header.png"
              alt="FoxRidge Equity Partners"
              className={cn(
                "w-auto object-contain transition-all duration-300",
                scrolled ? "h-10 lg:h-[66px]" : "h-12 lg:h-[80px]"
              )}
              style={{ maxWidth: scrolled ? "145px" : "175px" }}
            />
          </Link>

          <nav className="hidden xl:flex min-w-0 items-center justify-end gap-0.5" aria-label="Primary navigation">
            {desktopNavigation.map((item) => {
              const active = isCurrentRoute(location, item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative whitespace-nowrap rounded-sm px-2.5 py-2 text-[11px] font-semibold tracking-[0.01em] transition-colors duration-200 2xl:px-3 2xl:text-xs",
                    active
                      ? "bg-primary/5 text-primary"
                      : "text-muted-foreground hover:bg-primary/[0.035] hover:text-primary"
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute inset-x-2.5 bottom-0 h-[2px] origin-left scale-x-0 bg-secondary transition-transform duration-200 2xl:inset-x-3",
                      active && "scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
            <Link href="/contact" className="ml-2.5 shrink-0">
              <Button className="h-10 bg-secondary px-3.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white hover:bg-primary 2xl:px-4">
                Request a confidential introduction
                <ArrowUpRight className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            </Link>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-none text-primary hover:bg-primary/5 hover:text-secondary"
                aria-label="Open navigation menu"
                aria-haspopup="dialog"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw,430px)] border-l border-border p-0">
              <div className="flex h-full flex-col bg-background">
                <div className="flex items-center justify-between border-b border-border px-6 py-5">
                  <span className="font-display text-xl font-bold text-primary">Navigation</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-secondary">FoxRidge</span>
                </div>
                <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-5" aria-label="Mobile navigation">
                  {mobileNavigation.map((item, index) => {
                    const active = isCurrentRoute(location, item.path);
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "group flex min-h-14 items-center justify-between border-l-2 px-4 py-3 text-lg font-display font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
                          active
                            ? "border-secondary bg-primary/[0.045] text-primary"
                            : "border-transparent text-muted-foreground hover:border-secondary/50 hover:bg-primary/[0.035] hover:text-primary"
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-[10px] font-mono font-medium text-secondary/80">0{index + 1}</span>
                          {item.name}
                        </span>
                        <ChevronRight className={cn("h-4 w-4 text-secondary transition-transform", active ? "translate-x-0" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100")} aria-hidden="true" />
                      </Link>
                    );
                  })}
                </nav>
                <div className="border-t border-border bg-stone-50 px-5 py-5">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="min-h-14 w-full whitespace-normal bg-secondary px-5 py-3 text-sm font-bold leading-snug text-white hover:bg-primary">
                      Request a confidential introduction
                      <ArrowUpRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className={cn("flex-1 transition-[padding] duration-300 focus:outline-none", scrolled ? "pt-16 lg:pt-[88px]" : "pt-20 lg:pt-[104px]")}>
        {children}
      </main>

      <footer id="site-footer" className="border-t border-white/10 bg-primary pb-7 pt-11 text-white md:pb-8 md:pt-14">
        <div className="container">
          <div className="grid grid-cols-1 gap-11 border-b border-white/[0.08] pb-11 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,1.95fr)] xl:gap-16">
            <div>
              <Link href="/" aria-label="FoxRidge Equity Partners home" className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
                <img
                  src="/images/logo-dark-bg.png"
                  alt="FoxRidge Equity Partners"
                  className="mb-5 h-20 w-auto object-contain md:h-[88px]"
                  style={{ maxWidth: "205px" }}
                />
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-white/65">
                Institutional discipline. Entrepreneurial execution. Direct multifamily partnerships for family offices and qualified private capital.
              </p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-white">
                Request a confidential introduction <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-3 sm:gap-7 xl:pt-2">
              <nav aria-label="Explore FoxRidge">
                <h3 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-secondary">Explore</h3>
                <div className="flex flex-col items-start gap-2.5 text-sm text-white/70">
                  <Link href="/strategy" className="transition-colors hover:text-white">Strategy &amp; Markets</Link>
                  <Link href="/our-investors" className="transition-colors hover:text-white">Capital Partners</Link>
                  <Link href="/international-investors" className="transition-colors hover:text-white">International Investors</Link>
                  <Link href="/track-record" className="transition-colors hover:text-white">Track Record</Link>
                </div>
              </nav>

              <nav aria-label="Research and firm information">
                <h3 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-secondary">Resources</h3>
                <div className="flex flex-col items-start gap-2.5 text-sm text-white/70">
                  <Link href="/investor-resources" className="transition-colors hover:text-white">Research</Link>
                  <Link href="/about" className="transition-colors hover:text-white">About</Link>
                  <Link href="/investor-portal" className="transition-colors hover:text-white">Investor Portal</Link>
                  <Link href="/contact?interest=research" className="transition-colors hover:text-white">Receive research updates</Link>
                </div>
              </nav>

              <nav aria-label="Contact FoxRidge">
                <h3 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-secondary">Contact</h3>
                <div className="flex flex-col items-start gap-2.5 text-sm text-white/70">
                  <Link href="/contact" className="font-semibold text-secondary transition-colors hover:text-white">Request a confidential introduction</Link>
                  <a href="mailto:partners@foxridgeequity.com" className="break-all transition-colors hover:text-white">partners@foxridgeequity.com</a>
                  <a
                    href="https://www.linkedin.com/company/foxridge-equity-partners/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="FoxRidge Equity Partners on LinkedIn"
                    className="inline-flex items-center gap-2 transition-colors hover:text-[#6fa8dc]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24.774 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div className="py-5 md:py-6">
            <p className="max-w-5xl text-[11px] leading-relaxed text-white/70">
              <span className="font-semibold text-white/90">FoxRidge Equity Partners is a DBA of Consulting Point LLC.</span>{" "}
              This website is for informational and educational purposes only and is not an offer, solicitation, recommendation, or investment advice. Real estate investments involve risk, including possible loss of principal.
            </p>
            <details className="group mt-4 max-w-5xl border-l border-white/15 pl-4 text-[10px] leading-[1.65] text-white/70">
              <summary className="cursor-pointer list-none text-[10px] font-bold uppercase tracking-[0.12em] text-white/80 transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                Full legal disclosures
              </summary>
              <p className="pt-4">
                <span className="font-semibold uppercase tracking-[0.08em] text-white/85">Entity Disclosure:</span>{" "}
                FoxRidge Equity Partners is a registered trade name (DBA) of <span className="font-semibold text-white/85">Consulting Point LLC</span>, a limited liability company organized under the laws of the State of Florida. All business activities, agreements, and legal obligations are conducted through Consulting Point LLC. <span className="font-semibold uppercase tracking-[0.08em] text-white/85">Legal Disclaimer:</span>{" "}
                This website and all content herein are provided solely for informational and educational purposes. Nothing on this website constitutes an offer to sell, a solicitation of an offer to buy, or a recommendation of any security, investment product, or investment strategy. No content on this site constitutes investment, financial, legal, tax, or accounting advice of any kind. <span className="font-semibold uppercase tracking-[0.08em] text-white/85">No Guarantee of Returns:</span>{" "}
                Any projected returns, target yields, IRR, equity multiples, or other forward-looking metrics are illustrative estimates only based on assumptions that may not materialize. Past performance is not indicative of future results. All real estate investments involve substantial risk, including possible loss of some or all principal invested. Actual results may differ materially from any projections presented. <span className="font-semibold uppercase tracking-[0.08em] text-white/85">Accredited Investors Only — General Advertising Notice:</span>{" "}
                This website may constitute general advertising or general solicitation within the meaning of Rule 502(c) of Regulation D. Any securities offerings are conducted exclusively pursuant to exemptions from registration under the Securities Act of 1933, as amended, including Rule 506(c) of Regulation D, and are available only to verified accredited investors as defined under Rule 501. No offer to sell or solicitation to buy any security is made through this website; any such offer is made only through definitive offering documents. Prior to accepting any investment, FoxRidge Equity Partners / Consulting Point LLC will take reasonable steps to verify accredited investor status as required by Rule 506(c). Participation requires completion of a formal subscription process and execution of definitive offering documents. <span className="font-semibold uppercase tracking-[0.08em] text-white/85">Independent Advice:</span>{" "}
                Prospective investors are strongly encouraged to conduct independent due diligence and consult qualified legal, tax, financial, and accounting advisors before making any investment decision. FoxRidge Equity Partners / Consulting Point LLC makes no representation or warranty, express or implied, as to the accuracy, completeness, timeliness, or suitability of any information on this website for any particular purpose.
              </p>
            </details>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 border-t border-white/[0.08] pt-5 text-[10px] uppercase tracking-wider text-white/45 sm:flex-row sm:items-center">
            <p>&copy; {new Date().getFullYear()} FoxRidge Equity Partners — a DBA of Consulting Point LLC. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
              <Link href="/terms-of-service" className="transition-colors hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
