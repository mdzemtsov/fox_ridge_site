import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Building2, TrendingUp, Search, Hammer, DollarSign, BarChart3 } from "lucide-react";

export default function Strategy() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section - Unified Style */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/40 z-10" />
          <img 
            src="/images/hero-strategy-garden.jpg" 
            alt="Garden Style Multifamily" 
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
              <span className="text-sm font-medium tracking-wide uppercase">Investment Thesis</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Value Creation <br />
              <span className="text-secondary">Through Execution</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl font-light leading-relaxed">
              We identify underperforming assets in high-growth markets and unlock their potential through strategic renovation and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fast Forward Value-Add Section - Timelapse */}
      <section className="py-32 bg-stone-900 text-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Accelerated <span className="text-secondary">Transformation</span>
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-8">
                Time is money. Our vertically integrated construction management allows us to execute complex renovations rapidly, minimizing downtime and maximizing immediate value creation.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center border border-secondary/30 shrink-0 rounded-lg">
                    <Hammer className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Rapid Deployment</h3>
                    <p className="text-stone-400">Mobilizing crews immediately upon acquisition to begin exterior and amenity upgrades.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center border border-secondary/30 shrink-0 rounded-lg">
                    <BarChart3 className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Forced Appreciation</h3>
                    <p className="text-stone-400">Driving NOI growth through proven value-add strategies, not just market appreciation.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-secondary/20 blur-2xl rounded-full opacity-50" />
              <div className="relative aspect-video rounded-xl overflow-hidden border border-stone-700 shadow-2xl">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/timelapse.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold uppercase tracking-wider text-sm">Renovation Timeline</span>
                    <span className="text-secondary font-mono text-sm">6-18 Months</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">
              Acquisition <span className="text-primary">Criteria</span>
            </h2>
            <p className="text-stone-600 text-lg">
              We are disciplined buyers, focusing on assets where we can control the outcome.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Asset Class",
                desc: "Class A & B Multifamily, 2000 vintage and up."
              },
              {
                icon: Search,
                title: "Size",
                desc: "100+ units, $10M - $50M deal size."
              },
              {
                icon: TrendingUp,
                title: "Markets",
                desc: "High-growth MSAs in Texas and Florida."
              },
              {
                icon: DollarSign,
                title: "Light Value-Add",
                desc: "Reasonable investments to achieve modest rent growth."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-stone-50 border border-stone-200 hover:border-secondary/50 transition-colors group"
              >
                <item.icon className="w-10 h-10 text-stone-400 group-hover:text-secondary transition-colors mb-6" />
                <h3 className="text-2xl font-bold text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed text-base md:text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Have a Deal for Us?</h2>
          <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 h-14 px-8 text-lg font-bold rounded-none">
            <Link href="/contact">Submit an Opportunity</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
