import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowUpRight } from "lucide-react";
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
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-secondary selection:text-white">
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
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

      <main className="flex-1 pt-32">{children}</main>

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
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-wider">
            <p>&copy; {new Date().getFullYear()} FoxRidge Equity Partners.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
