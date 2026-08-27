import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, CalendarDays, MapPin, ShieldCheck } from "lucide-react";

const completedDeals = [
  { property: "El Ranchito / Milagro", location: "Fort Worth, TX", units: 68, acquired: "2017年9月", disposed: "2018年9月" },
  { property: "Westcreek Townhomes", location: "Fort Worth, TX", units: 50, acquired: "2019年4月", disposed: "2021年12月" },
  { property: "Antigua Village", location: "Fort Worth, TX", units: 152, acquired: "2019年9月", disposed: "2022年5月" },
  { property: "Copper Creek Apartments", location: "Fort Worth, TX", units: 274, acquired: "2020年3月", disposed: "2022年6月" },
  { property: "Crescent Village & Plaza", location: "Wichita Falls, TX", units: 88, acquired: "2018年2月", disposed: "2021年10月" },
  { property: "Village on West Irving", location: "Irving, TX", units: 91, acquired: "2018年10月", disposed: "2022年1月" },
];

const inProgressDeals = [
  {
    property: "Royal Spring",
    location: "Spring, TX",
    units: 351,
    built: 2021,
    assetClass: "A级",
    description: "休斯顿都会区的机构级花园式社区，拥有现代化的三层建筑和度假式配套设施。",
  },
  {
    property: "Royal Sienna",
    location: "Missouri City, TX",
    units: 330,
    built: 2021,
    assetClass: "A级",
    description: "位于休斯顿西南 Sienna 总体规划走廊内的较新社区。",
  },
  {
    property: "The Sarah at Lake Houston",
    location: "Humble, TX",
    units: 350,
    built: 2020,
    assetClass: "A级+",
    description: "休斯顿都会区的花园式社区，享有湖景。",
  },
  {
    property: "The Gallery at Katy",
    location: "Katy, TX",
    units: 316,
    built: 1983,
    assetClass: "B级",
    description: "位于 Katy / 休斯顿子市场的花园式社区，实施针对性的外观与运营改进计划。",
  },
];

function SectionMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
      <span className="font-mono text-primary">{number}</span>
      <span className="h-px w-8 bg-secondary/60" />
      {label}
    </div>
  );
}

export default function TrackRecord() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-stone-950 md:min-h-[620px]">
        <div className="absolute inset-0 -z-20">
          <img src="/images/hero-trackrecord-garden.png" alt="多户住宅社区" className="h-full w-full object-cover opacity-85" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#040C1D]/92 via-[#040C1D]/72 to-[#040C1D]/35" />
        <div className="container py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <p className="inline-flex items-center gap-2 border border-white/20 bg-primary/50 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-secondary" aria-hidden="true" /> 主要负责人经验
            </p>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[0.95] text-white md:text-7xl">历史证明。<br /><span className="text-secondary">明确归属。</span></h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-stone-200 md:text-xl">
              所示为主要负责人在加入 FoxRidge Equity Partners 之前的精选高层次历史经验。FoxRidge 是一个较新的平台；下列经验并不构成其独立的运营历史。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white py-8 md:py-10">
        <div className="container">
          <p className="border-l-2 border-secondary pl-4 text-xs leading-relaxed text-stone-500 md:text-sm">
            下列历史情况按已完成的全周期投资、进行中的项目和有限合伙人参与进行组织。如适用，它反映了主要负责人在此前发起实体下的先前活动，非基金层面的合成业绩，也不代表 FoxRidge 的自身过往业绩。过去的业绩并不代表未来的结果。
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <SectionMarker number="01" label="全周期已完成" />
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">按顺序展示的六项已完成投资。</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              精选展示六项已完成的全周期投资，合计 723 套。项目名称、地点、套数，以及收购和处置日期仅用于历史背景说明。
            </p>
          </div>

          <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
            {completedDeals.map((deal, index) => (
              <motion.article
                key={deal.property}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="grid gap-5 py-7 md:grid-cols-[5rem_minmax(0,1.25fr)_minmax(18rem,.9fr)] md:items-center md:gap-8 md:py-8"
              >
                <p className="font-mono text-sm font-bold tracking-[0.14em] text-secondary">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-tight text-primary md:text-3xl">{deal.property}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600">
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />{deal.location}</span>
                    <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4 text-secondary" aria-hidden="true" />{deal.units} 套</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-l-0 border-stone-200 pt-1 text-sm md:border-l md:pl-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-stone-400">收购</p>
                    <p className="mt-1 font-semibold text-primary">{deal.acquired}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-stone-400">处置</p>
                    <p className="mt-1 inline-flex items-center gap-2 font-semibold text-primary"><CalendarDays className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />{deal.disposed}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <SectionMarker number="02" label="进行中的项目" />
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">四个正在推进的社区项目。</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              四个位于休斯顿都会区的 A 级与 B 级花园式社区，按垂直列表展示，而非组合网格。本公开页面未公布详细的当前业绩。
            </p>
          </div>

          <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200 bg-white px-6 md:px-8">
            {inProgressDeals.map((deal, index) => (
              <motion.article
                key={deal.property}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid gap-5 py-7 md:grid-cols-[5rem_minmax(0,1.1fr)_minmax(18rem,.9fr)] md:items-center md:gap-8 md:py-8"
              >
                <p className="font-mono text-sm font-bold tracking-[0.14em] text-secondary">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-bold leading-tight text-primary md:text-3xl">{deal.property}</h3>
                    <span className="border border-secondary/40 bg-secondary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-secondary">进行中</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600">
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />{deal.location}</span>
                    <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4 text-secondary" aria-hidden="true" />{deal.units} 套</span>
                    <span>{deal.assetClass} · 建于 {deal.built}</span>
                  </div>
                </div>
                <p className="border-l-0 border-stone-200 text-sm leading-relaxed text-stone-600 md:border-l md:pl-7">{deal.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container">
          <div className="grid gap-8 border border-white/15 bg-white/[0.04] p-7 md:grid-cols-[.8fr_1.2fr] md:p-10">
            <div>
              <SectionMarker number="03" label="有限合伙人参与" />
              <p className="mt-7 font-display text-6xl font-bold leading-none text-secondary md:text-8xl">25+</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-white/60">独立物业</p>
            </div>
            <div className="md:border-l md:border-white/15 md:pl-10">
              <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">以有限合伙人身份参与超过 25 个独立物业。</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                除上述列名的投资外，主要负责人还以有限合伙人身份参与了超过 25 个独立物业。此类参与与 FoxRidge 当前的直接投资计划是分离的，仅作为历史背景披露。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-16 text-white md:py-20">
        <div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">进一步沟通</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">申请保密初步沟通。</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">在完成保密初步沟通后，FoxRidge 可能会根据内部审查、适用要求和具体讨论，决定是否适合分享更多历史信息。本公开页面不提供对详细业绩资料的自动或自我认证访问。</p>
          </div>
          <Button asChild size="lg" className="bg-secondary px-7 py-6 text-white hover:bg-secondary/90">
            <Link href="/zh/contact">申请保密初步沟通 <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
