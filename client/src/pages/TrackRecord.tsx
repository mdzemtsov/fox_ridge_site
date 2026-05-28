import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, TrendingUp, Building2, MapPin, Calendar, DollarSign } from "lucide-react";

export default function TrackRecord() {

  const realizedDeals = [
    {
      property: "El Ranchito / Milagro",
      location: "Fort Worth, TX",
      units: 68,
      acquired: "Sep 2017",
      disposed: "Sep 2018",
      holdYrs: "1.0",
      buyPrice: "$2.5M",
      salePrice: "$3.8M",
      valueIncrease: "+52%",
      equityMultiple: "1.42x",
      projectIRR: "42%",
    },
    {
      property: "Westcreek Townhomes",
      location: "Fort Worth, TX",
      units: 50,
      acquired: "Apr 2019",
      disposed: "Dec 2021",
      holdYrs: "2.7",
      buyPrice: "$6.7M",
      salePrice: "$10.0M",
      valueIncrease: "+49%",
      equityMultiple: "1.79x",
      projectIRR: "26%",
    },
    {
      property: "Antigua Village",
      location: "Fort Worth, TX",
      units: 152,
      acquired: "Sep 2019",
      disposed: "May 2022",
      holdYrs: "2.7",
      buyPrice: "$8.8M",
      salePrice: "$13.7M",
      valueIncrease: "+55%",
      equityMultiple: "2.27x",
      projectIRR: "23%",
    },
    {
      property: "Copper Creek Apartments",
      location: "Fort Worth, TX",
      units: 274,
      acquired: "Mar 2020",
      disposed: "Jun 2022",
      holdYrs: "2.3",
      buyPrice: "$23.6M",
      salePrice: "$32.7M",
      valueIncrease: "+39%",
      equityMultiple: "1.66x",
      projectIRR: "25%",
    },
    {
      property: "Crescent Village & Plaza",
      location: "Wichita Falls, TX",
      units: 88,
      acquired: "Feb 2018",
      disposed: "Oct 2021",
      holdYrs: "3.7",
      buyPrice: "$6.6M",
      salePrice: "$9.9M",
      valueIncrease: "+50%",
      equityMultiple: "1.87x",
      projectIRR: "26%",
    },
    {
      property: "Village on West Irving",
      location: "Irving, TX",
      units: 91,
      acquired: "Oct 2018",
      disposed: "Jan 2022",
      holdYrs: "3.3",
      buyPrice: "$7.9M",
      salePrice: "$11.0M",
      valueIncrease: "+40%",
      equityMultiple: "1.59x",
      projectIRR: "16%",
    },
  ];

  const activeHoldings = [
    {
      property: "Royal Spring",
      location: "Spring, TX",
      units: 351,
      built: 2020,
      assetClass: "Class A",
      description: "Institutional-quality garden-style community in the Houston MSA. Modern 3-story buildings, resort amenities, and strong lease-up performance.",
    },
    {
      property: "Royal Sienna",
      location: "Missouri City, TX",
      units: 330,
      built: 2020,
      assetClass: "Class A",
      description: "Newly built community in the award-winning, supply-constrained Sienna master-planned corridor southwest of Houston.",
    },
    {
      property: "The Sarah at Lake Houston",
      location: "Humble, TX",
      units: 350,
      built: 2020,
      assetClass: "Class A+",
      description: "Premier garden-style community with stunning lake views in the fastest-growing submarket within the Houston MSA. 2020 construction.",
    },
    {
      property: "The Gallery at Katy",
      location: "Katy, TX",
      units: 316,
      built: 1983,
      assetClass: "Class B",
      description: "Light value-add garden-style community in the high-demand Katy/Houston submarket. Targeted cosmetic upgrades and operational repositioning underway.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/40 z-10" />
          <img
            src="/images/hero-trackrecord-garden.png"
            alt="Multifamily Portfolio"
            className="w-full h-full object-cover opacity-80"
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
              Six full-cycle realizations across 723 units. Verified returns from actual dated cash flows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Summary Stats */}
      <section className="border-b border-stone-200 bg-white">
        <div className="container py-0 px-0 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-stone-200 border-x border-stone-200">
            {[
              { value: "$81M+", label: "Total Exit Value" },
              { value: "723", label: "Units Exited" },
              { value: "1.77x", label: "Avg Equity Multiple" },
              { value: "26%", label: "Avg Project IRR" },
            ].map((stat, index) => (
              <div key={index} className="p-10 text-center hover:bg-stone-50 transition-colors group">
                <p className="text-5xl font-display font-bold text-stone-900 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                <p className="text-sm text-stone-500 uppercase tracking-wider font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container px-0 md:px-8">
          <p className="text-xs text-stone-400 italic py-3 border-t border-stone-100">
            * Past performance is not indicative of future results. All returns shown are gross of fees and represent the principals' prior experience. Actual results may differ materially.
          </p>
        </div>
      </section>

      {/* Realized Deals Table */}
      <section className="py-24 bg-stone-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-stone-900 mb-2">Some of Our Realized Projects</h2>
              <p className="text-stone-500 text-base">All six full-cycle exits — verified XIRR from actual dated cash flows.</p>
            </div>
            <p className="text-sm text-stone-400 italic mt-4 md:mt-0">* Representative experience of principals.</p>
          </div>

          <div className="bg-white border border-stone-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-stone-100 border-b border-stone-200">
                <tr>
                  {["Deal Name", "Location", "Units", "Acquired", "Disposed", "Hold", "Buy Price", "Sale Price", "Value ↑", "Equity Multiple", "Project IRR"].map((h) => (
                    <th key={h} className="text-left font-bold text-stone-900 uppercase tracking-wider py-5 px-4 text-xs whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {realizedDeals.map((deal, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="border-b border-stone-100 hover:bg-stone-50 transition-colors"
                  >
                    <td className="py-5 px-4 font-semibold text-stone-900 font-display whitespace-nowrap">{deal.property}</td>
                    <td className="py-5 px-4 text-stone-600 whitespace-nowrap">{deal.location}</td>
                    <td className="py-5 px-4 text-stone-700 font-medium">{deal.units}</td>
                    <td className="py-5 px-4 text-stone-500 whitespace-nowrap">{deal.acquired}</td>
                    <td className="py-5 px-4 text-stone-500 whitespace-nowrap">{deal.disposed}</td>
                    <td className="py-5 px-4 text-stone-600">{deal.holdYrs} yrs</td>
                    <td className="py-5 px-4 text-stone-600 whitespace-nowrap">{deal.buyPrice}</td>
                    <td className="py-5 px-4 text-stone-600 whitespace-nowrap">{deal.salePrice}</td>
                    <td className="py-5 px-4 font-semibold text-emerald-700">{deal.valueIncrease}</td>
                    <td className="py-5 px-4">
                      <span className="font-bold text-primary text-base">{deal.equityMultiple}</span>
                    </td>
                    <td className="py-5 px-4">
                      <span className="inline-block bg-secondary/10 text-secondary border border-secondary/30 font-bold px-3 py-1 text-sm rounded-none">{deal.projectIRR}</span>
                    </td>
                  </motion.tr>
                ))}
                {/* Totals row */}
                <tr className="bg-primary/5 border-t-2 border-primary/20">
                  <td className="py-5 px-4 font-bold text-stone-900 uppercase tracking-wide text-xs">Portfolio Totals</td>
                  <td className="py-5 px-4 text-stone-500 text-xs">TX Markets</td>
                  <td className="py-5 px-4 font-bold text-stone-900">723</td>
                  <td colSpan={3} className="py-5 px-4 text-stone-400 text-xs">Avg hold: 2.6 yrs</td>
                  <td className="py-5 px-4 font-bold text-stone-900">$56.0M</td>
                  <td className="py-5 px-4 font-bold text-stone-900">$81.1M</td>
                  <td className="py-5 px-4 font-bold text-emerald-700">+45%</td>
                  <td className="py-5 px-4 font-bold text-primary text-base">1.77x avg</td>
                  <td className="py-5 px-4">
                    <span className="inline-block bg-secondary/20 text-secondary border border-secondary/40 font-bold px-3 py-1 text-sm rounded-none">26% avg</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Active Holdings */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wider">Currently Held</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-stone-900 mb-3">Active Portfolio</h2>
            <p className="text-stone-500 text-base max-w-2xl">Four Class A and B garden-style communities currently under active management across the Houston MSA.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activeHoldings.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-stone-50 border border-stone-200 hover:border-secondary/40 transition-colors group p-8"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-stone-900 mb-1 group-hover:text-primary transition-colors">{prop.property}</h3>
                    <div className="flex items-center gap-2 text-stone-500 text-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{prop.location}</span>
                    </div>
                  </div>
                  <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-none px-3 py-1 font-semibold text-xs uppercase tracking-wide">
                    Active
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 py-5 border-y border-stone-200">
                  <div className="text-center">
                    <p className="text-2xl font-display font-bold text-stone-900">{prop.units}</p>
                    <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Units</p>
                  </div>
                  <div className="text-center border-x border-stone-200">
                    <p className="text-2xl font-display font-bold text-stone-900">{prop.built}</p>
                    <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Year Built</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-display font-bold text-secondary">{prop.assetClass}</p>
                    <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Asset Class</p>
                  </div>
                </div>

                <p className="text-stone-600 leading-relaxed text-sm">{prop.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-stone-50 border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Building2 className="w-8 h-8 text-secondary shrink-0" />
              <div>
                <p className="font-bold text-stone-900 text-lg">1,347 Units Currently Under Management</p>
                <p className="text-stone-500 text-sm">All Class A &amp; B garden-style communities · Houston MSA · Texas</p>
              </div>
            </div>
            <Link href="/contact">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-8 py-5 font-bold shrink-0">
                Discuss a Co-Investment <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* International Investors Cross-Reference */}
      <section className="bg-white">
        <div className="container">
          <div className="border-l-4 border-secondary bg-stone-50 px-8 py-6">
            <p className="text-stone-600 text-sm">
              <span className="font-bold text-stone-900">Interested in co-investing from outside the United States?</span>{" "}
              We welcome international family offices and principals looking for direct exposure to U.S. Sun Belt multifamily assets.{" "}
              <Link href="/international-investors" className="text-secondary font-semibold hover:underline">See our international investor program →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-0 bg-primary text-white">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative min-h-[500px]">
            <img src="/images/hero-luxury-apartment.jpg" alt="Case Study" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none"></div>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
            <span className="text-secondary font-mono text-sm uppercase tracking-widest mb-4 block">Case Study: El Ranchito / Milagro</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Rapid Turnaround Execution</h2>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-10">
              Acquired a distressed 68-unit asset in Fort Worth, executed a focused operational and cosmetic turnaround, and exited in just 12 months — delivering the portfolio's best single-deal return.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <span className="font-display text-2xl font-bold text-secondary">42%</span>
                <span className="text-lg">Project IRR</span>
              </div>
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <span className="font-display text-2xl font-bold text-secondary">1.42x</span>
                <span className="text-lg">Equity Multiple in 12 Months</span>
              </div>
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <span className="font-display text-2xl font-bold text-secondary">$2.5M → $3.8M</span>
                <span className="text-lg">Buy → Sale Price (+52%)</span>
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

      {/* Market Insights Banner */}
      <section className="py-10 bg-stone-50 border-t border-stone-200">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> New Research Published
              </p>
              <h3 className="text-primary font-display font-bold text-xl">The Texas Triangle Advantage — Read Our Latest Market Research</h3>
              <p className="text-stone-500 text-sm mt-1">Understand the market forces behind our current acquisition strategy in DFW, Houston, San Antonio, and Austin.</p>
            </div>
            <Link href="/market-insights" className="shrink-0">
              <button className="inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white font-bold px-6 py-3 text-sm whitespace-nowrap transition-colors">
                View Market Insights →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
