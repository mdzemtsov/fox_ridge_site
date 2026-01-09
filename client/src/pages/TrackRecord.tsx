import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export default function TrackRecord() {
  // Real data extracted from project documents
  const portfolioHighlights = [
    {
      property: "Royal Spring",
      location: "Spring, TX",
      type: "Class A Multifamily",
      size: "351 Units",
      role: "Co-GP",
      status: "Active"
    },
    {
      property: "The Village on West Irving",
      location: "Irving, TX",
      type: "Value-Add Multifamily",
      size: "91 Units",
      role: "Lead Sponsor",
      status: "Active"
    },
    {
      property: "El Ranchito",
      location: "Fort Worth, TX",
      type: "Value-Add Multifamily",
      size: "68 Units",
      role: "Lead Sponsor",
      status: "Active"
    },
    {
      property: "Crescent Village & Plaza",
      location: "Wichita Falls, TX",
      type: "Class B+ Multifamily",
      size: "88 Units",
      role: "Lead Sponsor",
      status: "Active"
    },
    {
      property: "Antigua Village",
      location: "Fort Worth, TX",
      type: "Revitalization Multifamily",
      size: "152 Units",
      role: "Lead Sponsor",
      status: "Active"
    },
    {
      property: "Milagro Apartments",
      location: "Fort Worth, TX",
      type: "Turnaround",
      size: "68 Units",
      role: "Lead Sponsor",
      status: "Realized (35%+ IRR)"
    },
    {
      property: "Leander Springs",
      location: "Austin, TX",
      type: "Mixed-Use Development",
      size: "$1B+ Project",
      role: "Co-Founder / GP",
      status: "Active"
    },
    {
      property: "Westcreek Townhomes",
      location: "Fort Worth, TX",
      type: "Multifamily",
      size: "Portfolio Asset",
      role: "Lead Sponsor",
      status: "Active"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section - Unified Style */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/70 z-10" />
          <img 
            src="/images/hero-city-skyline.jpg" 
            alt="City Skyline" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container relative z-20 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm font-medium tracking-wide uppercase">Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Proven <br />
              <span className="text-secondary">Performance</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl font-light leading-relaxed">
              A history of executing complex transactions and delivering value across market cycles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summary Stats - Bento Grid */}
      <section className="border-b border-stone-200 bg-white">
        <div className="container py-0 px-0 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-stone-200 border-x border-stone-200">
            {[
              { value: "$1B+", label: "Transaction Volume" },
              { value: "7,000+", label: "Units Owned" },
              { value: "36", label: "Properties" },
              { value: "42%", label: "Top Deal IRR" }
            ].map((stat, index) => (
              <div key={index} className="p-10 text-center hover:bg-stone-50 transition-colors group">
                <p className="text-5xl font-display font-bold text-stone-900 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                <p className="text-sm text-stone-500 uppercase tracking-wider font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights - Clean Table */}
      <section className="py-24 bg-stone-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h2 className="font-display text-3xl font-bold text-stone-900">Selected Portfolio Highlights</h2>
            <p className="text-sm text-stone-500 italic mt-4 md:mt-0">
              * Representative experience of principals.
            </p>
          </div>
          
          <div className="bg-white border border-stone-200 overflow-hidden">
            <Table>
              <TableHeader className="bg-stone-100">
                <TableRow className="hover:bg-stone-100 border-stone-200">
                  <TableHead className="font-bold text-stone-900 font-display uppercase tracking-wider py-6">Project / Portfolio</TableHead>
                  <TableHead className="font-bold text-stone-900 font-display uppercase tracking-wider py-6">Location</TableHead>
                  <TableHead className="font-bold text-stone-900 font-display uppercase tracking-wider py-6">Asset Type</TableHead>
                  <TableHead className="font-bold text-stone-900 font-display uppercase tracking-wider py-6">Scale</TableHead>
                  <TableHead className="font-bold text-stone-900 font-display uppercase tracking-wider py-6">Role</TableHead>
                  <TableHead className="font-bold text-stone-900 font-display uppercase tracking-wider py-6">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {portfolioHighlights.map((item, index) => (
                  <TableRow key={index} className="hover:bg-stone-50 border-stone-200 transition-colors">
                    <TableCell className="font-medium font-display text-lg py-6 text-stone-900">{item.property}</TableCell>
                    <TableCell className="py-6 text-stone-600">{item.location}</TableCell>
                    <TableCell className="py-6 text-stone-600">{item.type}</TableCell>
                    <TableCell className="py-6 text-stone-600">{item.size}</TableCell>
                    <TableCell className="py-6 text-stone-600">{item.role}</TableCell>
                    <TableCell className="py-6">
                      <Badge variant="outline" className={item.status.includes("Realized") ? "border-secondary text-secondary bg-secondary/10 rounded-none px-3 py-1" : "border-stone-400 text-stone-600 bg-stone-100 rounded-none px-3 py-1"}>
                        {item.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Case Study - Architectural Layout */}
      <section className="py-0 bg-primary text-white">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative min-h-[500px]">
            <img src="/images/hero-luxury-apartment.jpg" alt="Case Study" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none"></div>
          </div>
          
          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
            <span className="text-secondary font-mono text-sm uppercase tracking-widest mb-4 block">Case Study: Milagro Apartments</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Value-Add Execution</h2>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-10">
              A textbook example of our value-add strategy. We acquired a distressed Class C asset in a gentrifying Fort Worth submarket, executed a rapid turnaround plan, and exited in just 12 months.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <span className="font-display text-2xl font-bold text-secondary">35%+</span>
                <span className="text-lg">Internal Rate of Return (IRR)</span>
              </div>
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <span className="font-display text-2xl font-bold text-secondary">1.41x</span>
                <span className="text-lg">Equity Multiple in 12 Months</span>
              </div>
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <span className="font-display text-2xl font-bold text-secondary">100%</span>
                <span className="text-lg">Execution of Business Plan</span>
              </div>
            </div>
            
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-fit px-8 py-6 text-lg rounded-none transition-all duration-300 font-bold">
                Request Full Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
