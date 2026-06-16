"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-1 h-4 bg-crimson" />
      <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/40">{text}</p>
    </div>
  );
}

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const raf = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function StatCounter({ target, label, sub, active, delay }: { target: number; label: string; sub: string; active: boolean; delay: number }) {
  const count = useCountUp(target, active);
  return (
    <div style={reveal(active, delay)} className="bg-[#001f3f] p-8 flex flex-col gap-3">
      <span className="text-4xl md:text-5xl font-bold text-[#0074D9] tracking-tight tabular-nums">
        {count.toLocaleString()}
      </span>
      <span className="text-[15px] font-semibold text-white/80">{label}</span>
      <span className="text-[13px] font-light text-white/40 leading-snug">{sub}</span>
    </div>
  );
}

// --- Scroll-reveal hook ---
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function reveal(inView: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease, transform 0.7s ease`,
    transitionDelay: `${delay}s`,
  };
}

// --- Data ---

const stats2025 = [
  { value: "29", label: "Ships Operated", sub: "Avg. age 11.7 yrs — 1,938,783 DWT total" },
  { value: "5", label: "Commercially Managed", sub: "260,760 DWT under commercial management" },
  { value: "2,973,854 MT", label: "Cargo Handled", sub: "With tonnage under period" },
  { value: "118", label: "Ports Called", sub: "Worldwide with tonnage under period" },
];

const governance = [
  { category: "Bankers", items: ["HSBC Bank PLC", "M.M. Warburg & Co Bank"] },
  { category: "Insurers", items: ["BMS Group", "The West of England"] },
  { category: "FFA Clearing", items: ["ADM Investor Services International Ltd."] },
  { category: "Memberships", items: ["UK Chamber of Shipping", "Baltic Exchange", "BIMCO"] },
];

const fleetPeriod = [
  { name: "M/V Ocean Azalea",   imo: "9737357", dwt: "63,083", built: "2015", flag: "Liberia",          class: "Rina", img: "/vessels/ocean-azalea.png" },
  { name: "M/V Tomini Unity",   imo: "9718167", dwt: "63,590", built: "2017", flag: "Marshall Islands", class: "LR",   img: "/vessels/tomini-unity.png" },
  { name: "M/V Xin Qi Hang 1", imo: "9629811", dwt: "75,704", built: "2011", flag: "PRC",               class: "CCS",  img: "/vessels/xin-qi-hang-1.png" },
  { name: "M/V BBG Leader",     imo: "9704843", dwt: "63,241", built: "2015", flag: "Liberia",          class: "CCS",  img: "/vessels/bbg-leader.png" },
];

const fleetManaged = [
  { name: "M/V Victoria",    imo: "9336828", dwt: "50,223", built: "2006", flag: "Liberia", class: "NK",  img: "/vessels/victoria.png" },
  { name: "M/V Valentina 1", imo: "9336830", dwt: "50,198", built: "2007", flag: "Liberia", class: "NK",  img: "/vessels/valentina-1.png" },
  { name: "M/V Maryam",      imo: "9615676", dwt: "56,798", built: "2011", flag: "Liberia", class: "DNV", img: "/vessels/maryam.png" },
  { name: "M/V Najwa",       imo: "9615561", dwt: "56,682", built: "2012", flag: "Liberia", class: "DNV", img: "/vessels/najwa.png" },
];

const fixtures2026 = [
  { vessel: "M/V Cetus Bowhead",   charterer: "NYK Bulk & Projects Carriers Ltd",      type: "Period", route: "Australia → Japan",        date: "09/01/26" },
  { vessel: "M/V Ocean Azalea",    charterer: "Stargate Shipping Pte Ltd",              type: "Period", route: "Vietnam → Japan",           date: "29/01/26" },
  { vessel: "M/V BBG Leader",      charterer: "HM Trading Global GmbH",                type: "Period", route: "Pakistan → W. Africa",      date: "12/02/26" },
  { vessel: "M/V Ocean Azalea",    charterer: "Singapore Jinteng International Pte Ltd",type: "Period", route: "Canada → India",            date: "15/02/26" },
  { vessel: "M/V Cetus Bowhead",   charterer: "Dampskibsselskabet Norden A/S",          type: "Period", route: "Japan → Malaysia",          date: "16/02/26" },
  { vessel: "M/V Tomini Unity",    charterer: "Vanbloom Shipping Ltd",                  type: "Period", route: "China → Guinea",            date: "06/03/26" },
  { vessel: "M/V Xin Qi Hang 1",  charterer: "Holcim Shipping Pte Ltd",               type: "Period", route: "China → Spain & France",    date: "19/03/26" },
  { vessel: "M/V Ocean Azalea",    charterer: "Norse Maritime A/S",                    type: "Period", route: "Indonesia → Spain",         date: "09/04/26" },
  { vessel: "M/V Beatrice",        charterer: "Oldendorff GmbH & Co KG",              type: "Trip",   route: "India → W. Africa",         date: "16/04/26" },
  { vessel: "M/V Fiji",            charterer: "Authentic Carriers Co.",                type: "Trip",   route: "Vietnam → W. Africa",       date: "06/05/26" },
  { vessel: "M/V Blue Bosporus",   charterer: "Falcon Shipholding Inc.",               type: "Trip",   route: "China → Spain",             date: "28/05/26" },
  { vessel: "M/V Xin Qi Hang 1",  charterer: "Rio Tinto Shipping (Asia) Pte Ltd.",    type: "Trip",   route: "W. Africa → India",         date: "11/06/26" },
];

const cargoFixtures2026 = [
  { cargo: "6 × 55,000 MT Slag",  route: "Pakistan → Ghana",  charterer: "Heidelberg Materials", date: "12/02/26" },
  { cargo: "75,000 MT Slag",       route: "China → Med",        charterer: "Holcim",               date: "04/05/26" },
  { cargo: "75,000 MT Clinker",    route: "Vietnam → W. Africa",charterer: "Mixta Negoce SA",      date: "06/05/26" },
  { cargo: "45,000 MT Slag",       route: "Japan → E. Africa",  charterer: "Holcim",               date: "08/06/26" },
];

const sponsorships = [
  { year: "2026", tier: "Gold",       event: "The Geneva Dry Conference",                   location: "Geneva",  date: "28–29 Apr 2026" },
  { year: "2026", tier: "Bronze",     event: "UK Chamber of Shipping Annual Dinner",         location: "London",  date: "2 Feb 2026" },
  { year: "2025", tier: "Gold",       event: "The Geneva Dry Conference",                   location: "Geneva",  date: "28–29 Apr 2025" },
  { year: "2025", tier: "Silver",     event: "9th Global Symposium of Maritime Executives", location: "Piraeus", date: "3–4 Jul 2025" },
  { year: "2025", tier: "Sponsor",    event: "Intercem Conference",                         location: "London",  date: "22–24 Jun 2025" },
  { year: "2025", tier: "Sponsor",    event: "The Bunker Party",                            location: "",        date: "15 Sep 2025" },
  { year: "2025", tier: "Bronze",     event: "UK Chamber of Shipping Annual Dinner",         location: "London",  date: "3 Feb 2025" },
  { year: "2024", tier: "Gold",       event: "The Geneva Dry Conference",                   location: "Geneva",  date: "2–3 May 2024" },
  { year: "2024", tier: "Gold",       event: "Shipping UK Conference",                      location: "London",  date: "8 Oct 2024" },
  { year: "2024", tier: "Sponsor",    event: "TradeWinds Shipowners Forum",                 location: "Athens",  date: "4 Jun 2024" },
  { year: "2024", tier: "Supporting", event: "9th Capital Link Maritime Leaders Summit",    location: "Athens",  date: "3 Jun 2024" },
];

const sponsorshipYears = ["2026", "2025", "2024"] as const;

const shipbrokers = [
  "Affinity", "Arrow", "Ifchor Galbraiths",
  "Auto Chartering", "Avalon Shipbroking", "Charterhouse Shipbroking",
  "Clarksons", "Compass Marine Services", "Fulmar Shipping",
  "Howe Robinson Partners", "Lightship Chartering", "Link Line Ltd",
  "Mavega Group", "Ocean Breeze", "Oino Shipbrokers",
  "SSY", "Thurlestone Shipping", "Windward",
];

function tierStyle(tier: string): string {
  if (tier === "Gold")       return "text-[#0074D9] border-[#0074D9]/30 bg-[#0074D9]/8";
  if (tier === "Silver")     return "text-white/60 border-white/15 bg-white/4";
  if (tier === "Bronze")     return "text-crimson/80 border-crimson/25 bg-crimson/6";
  return "text-white/40 border-white/10 bg-white/3";
}

function VesselCard({ vessel, i, inView }: { vessel: typeof fleetPeriod[0]; i: number; inView: boolean }) {
  return (
    <div style={reveal(inView, i * 0.1)} className="border border-white/8 flex flex-col">
      {/* Photo */}
      <div className="relative aspect-[16/7] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0074D9]/30 z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={vessel.img}
          alt={vessel.name}
          className="w-full h-full object-cover opacity-90 saturate-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/80 via-[#001f3f]/10 to-transparent" />
        <span className="absolute bottom-3 right-3 text-[9px] font-medium tracking-[0.25em] uppercase text-white/40">
          {vessel.class}
        </span>
      </div>

      {/* Data */}
      <div className="p-5 flex flex-col gap-4">
        <h3 className="text-[15px] font-semibold text-white/90 leading-snug">{vessel.name}</h3>
        <div className="w-6 h-[1px] bg-[#0074D9]/40" />
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
          {[
            { label: "IMO",   value: vessel.imo },
            { label: "DWT",   value: `${vessel.dwt} T` },
            { label: "Built", value: vessel.built },
            { label: "Flag",  value: vessel.flag },
          ].map(({ label, value }) => (
            <div key={label}>
              <dt className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-0.5">{label}</dt>
              <dd className="text-[13px] font-medium text-white/70">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function FixtureTable({ rows }: { rows: typeof fixtures2026 }) {
  return (
    <div className="flex flex-col divide-y divide-white/5 mt-4">
      <div className="grid grid-cols-12 gap-4 pb-3">
        {["Vessel", "Charterer", "Route", "Type", "CP Date"].map((h, i) => (
          <div key={h} className={`text-[9px] font-medium tracking-[0.25em] uppercase text-white/25 ${i === 4 ? "col-span-2 text-right" : i === 3 ? "col-span-1" : i === 2 ? "col-span-2" : i === 1 ? "col-span-4" : "col-span-3"}`}>{h}</div>
        ))}
      </div>
      {rows.map((f) => (
        <div key={`${f.vessel}-${f.date}`} className="grid grid-cols-12 gap-4 py-4 hover:bg-white/[0.02] -mx-2 px-2 transition-colors duration-150">
          <div className="col-span-3"><span className="text-[13px] font-semibold text-white/85">{f.vessel}</span></div>
          <div className="col-span-4"><span className="text-[13px] font-light text-white/55">{f.charterer}</span></div>
          <div className="col-span-2"><span className="text-[12px] font-light text-white/45">{f.route}</span></div>
          <div className="col-span-1">
            <span className={`inline-block text-[8px] font-medium tracking-[0.2em] uppercase border px-2 py-0.5 ${f.type === "Period" ? "border-[#0074D9]/30 text-[#0074D9]/80" : "border-white/15 text-white/40"}`}>{f.type}</span>
          </div>
          <div className="col-span-2 text-right"><span className="text-[11px] font-light text-white/30 tabular-nums">{f.date}</span></div>
        </div>
      ))}
    </div>
  );
}

const allFixtures = {
  "2026": fixtures2026,
  "2025 (selected)": [
    { vessel: "M/V Tomini Tenacity",  charterer: "Fednav International Ltd",    type: "Period", route: "5/7 Months Period Charter",  date: "14/08/25" },
    { vessel: "M/V Ocean Azalea",     charterer: "Rio Tinto Shipping (Asia)",   type: "Period", route: "W. Africa → India",          date: "29/08/25" },
    { vessel: "M/V Oak",              charterer: "Olam Global Agri Pte Ltd",    type: "Period", route: "WCI → W. Africa",            date: "08/09/25" },
    { vessel: "M/V Tomini Unity",     charterer: "Lynux Shipping Bulk",         type: "Period", route: "4/6 Months Period Charter",  date: "16/09/25" },
    { vessel: "M/V Marinicki",        charterer: "Olam Agri",                   type: "Trip",   route: "China → W. Africa",         date: "19/11/25" },
    { vessel: "M/V Vita Future",      charterer: "Vita Management S.A.",        type: "Trip",   route: "China → W. Africa",         date: "05/12/25" },
    { vessel: "M/V Vita Unity",       charterer: "Vita Management S.A.",        type: "Trip",   route: "China → Egypt",             date: "10/12/25" },
  ],
  "2024 (selected)": [
    { vessel: "M/V Al Danah",         charterer: "Norden A/S, Denmark",         type: "Period", route: "T/C 6–8 Months",            date: "19/01/24" },
    { vessel: "M/V Thor Courage",     charterer: "Bahri Dry Bulk, Saudi Arabia",type: "Period", route: "Ras Al Khair → Brazil",     date: "15/08/24" },
    { vessel: "M/V Thor Courage",     charterer: "Cofco International",          type: "Period", route: "Santos → Algeria",          date: "25/10/24" },
    { vessel: "M/V Tai Knight",       charterer: "Trip Charter",                type: "Trip",   route: "Baoshan → Passero",         date: "19/07/24" },
  ],
};

function FixturesAccordion() {
  const [open, setOpen] = useState<string>("2026");
  const years = Object.keys(allFixtures) as (keyof typeof allFixtures)[];

  return (
    <section className="bg-[#001f3f] px-6 md:px-12 py-24 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          <div className="lg:col-span-4">
            <SectionLabel text="Fixtures" />
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight">
              Tonnage<br />Fixtures
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-[17px] font-light leading-relaxed text-white/60">
              Period and trip-charter fixtures executed with global charterers across all major trade lanes — Australia, Asia, West Africa, Europe, and the Americas.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {years.map((year) => (
            <div key={year} className="border border-white/8">
              <button
                onClick={() => setOpen(open === year ? "" : year)}
                className="w-full flex items-center justify-between px-6 py-5 hover:bg-white/[0.02] transition-colors duration-150"
              >
                <div className="flex items-center gap-4">
                  {open === year && <div className="w-1 h-4 bg-crimson" />}
                  <span className="text-[16px] font-semibold text-white/85">{year}</span>
                  <span className="text-[11px] font-light text-white/35">
                    {allFixtures[year].length} fixtures
                  </span>
                </div>
                <span className="text-white/30 text-lg leading-none">{open === year ? "−" : "+"}</span>
              </button>
              {open === year && (
                <div className="px-6 pb-6 border-t border-white/5">
                  <FixtureTable rows={allFixtures[year]} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CorporateOverviewPage() {
  const statsSection    = useInView();
  const govSection      = useInView();
  const fleetPSection   = useInView();
  const fleetMSection   = useInView();
  const fixturesSection = useInView();
  const cargoSection    = useInView();
  const sponsorSection  = useInView();
  const brokersSection  = useInView();

  return (
    <>
      <Nav />
      <main className="pt-[88px]">

        {/* ── Hero ── */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 md:py-32 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <SectionLabel text="June 2026" />
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8 max-w-3xl"
            >
              Corporate<br />Overview
            </h1>
            <p className="text-[18px] font-light leading-relaxed text-white/65 max-w-xl">
              A structured, analytical approach to dry-bulk shipping — built on trust, reliability,
              and nearly 100 years of combined commercial experience.
            </p>
          </div>
        </section>

        {/* ── 2025 Highlights ── */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <SectionLabel text="Year in review" />
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-16 max-w-lg">
              2025 Highlights
            </h2>
            <div ref={statsSection.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              <StatCounter target={29}      label="Ships Operated"       sub="Avg. age 11.7 yrs"           active={statsSection.inView} delay={0}    />
              <StatCounter target={5}       label="Commercially Managed" sub="260,760 DWT"                  active={statsSection.inView} delay={0.1}  />
              <StatCounter target={2973854} label="MT Cargo Handled"     sub="With tonnage under period"    active={statsSection.inView} delay={0.2}  />
              <StatCounter target={118}     label="Ports Called"         sub="Worldwide"                    active={statsSection.inView} delay={0.3}  />
            </div>
          </div>
        </section>

        {/* ── Trust & Governance ── */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
              <div className="lg:col-span-4">
                <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/30 mb-4">
                  Governance
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight">
                  Trust &<br />Governance
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[17px] font-light leading-relaxed text-white/60">
                  Range Shipping is a certified trademark of the UK Intellectual Property Office.
                  We operate with institutional-grade banking, insurance, and clearing arrangements,
                  and hold active membership in the principal bodies governing international maritime commerce.
                </p>
              </div>
            </div>

            <div ref={govSection.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {governance.map((g, i) => (
                <div
                  key={g.category}
                  style={reveal(govSection.inView, i * 0.1)}
                  className="border border-white/8 p-6"
                >
                  <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#0074D9]/70 mb-4">
                    {g.category}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {g.items.map((item) => (
                      <li key={item} className="text-[15px] font-medium text-white/80 leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Period Fleet ── */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
              <div className="lg:col-span-5">
                <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/30 mb-4">
                  Fleet
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight">
                  Period Fleet<br />Under Operation
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[16px] font-light leading-relaxed text-white/55">
                  Our actively operated period fleet spans Supramax and Ultramax tonnage across
                  Liberia, Marshall Islands, and PRC flags — maintained to international class standards.
                </p>
              </div>
            </div>

            <div ref={fleetPSection.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fleetPeriod.map((v, i) => (
                <VesselCard key={v.imo} vessel={v} i={i} inView={fleetPSection.inView} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Commercially Managed Fleet ── */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
              <div className="lg:col-span-5">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight">
                  Fleet Under<br />Commercial Management
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[16px] font-light leading-relaxed text-white/55">
                  In addition to period operations, Range Shipping commercially manages
                  a further 260,760 DWT of tonnage across four vessels.
                </p>
              </div>
            </div>

            <div ref={fleetMSection.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fleetManaged.map((v, i) => (
                <VesselCard key={v.imo} vessel={v} i={i} inView={fleetMSection.inView} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Fixtures Accordion ── */}
        <FixturesAccordion />

        {/* ── 2026 Cargo Fixtures ── */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-16">
              2026 Cargo Fixtures
            </h2>

            <div ref={cargoSection.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cargoFixtures2026.map((c, i) => (
                <div
                  key={`${c.cargo}-${c.date}`}
                  style={reveal(cargoSection.inView, i * 0.1)}
                  className="border border-white/8 p-6 flex flex-col gap-4"
                >
                  <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#0074D9]/70">
                    {c.charterer}
                  </p>
                  <p className="text-[16px] font-semibold text-white/85 leading-snug">{c.cargo}</p>
                  <div className="w-6 h-[1px] bg-white/10" />
                  <p className="text-[14px] font-light text-white/55">{c.route}</p>
                  <p className="text-[11px] font-light text-white/30 tabular-nums mt-auto">CP {c.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sponsorships ── */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
              <div className="lg:col-span-4">
                <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/30 mb-4">
                  Industry presence
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight">
                  Sponsorships
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[17px] font-light leading-relaxed text-white/60">
                  Active sponsors at the industry's premier dry-bulk, maritime, and commodities
                  conferences across London, Geneva, Athens, and Piraeus.
                </p>
              </div>
            </div>

            <div ref={sponsorSection.ref} className="flex flex-col gap-16">
              {sponsorshipYears.map((year, yi) => {
                const yearItems = sponsorships.filter((s) => s.year === year);
                return (
                  <div key={year} style={reveal(sponsorSection.inView, yi * 0.12)}>
                    <div className="flex items-center gap-6 mb-6">
                      <h3 className="text-2xl font-bold text-white">{year}</h3>
                      <div className="flex-1 h-[1px] bg-white/8" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {yearItems.map((s) => (
                        <div key={`${s.event}-${s.date}`} className="border border-white/8 p-5 flex flex-col gap-3">
                          <span className={`self-start text-[9px] font-semibold tracking-[0.2em] uppercase border px-2 py-0.5 ${tierStyle(s.tier)}`}>
                            {s.tier}
                          </span>
                          <p className="text-[15px] font-semibold text-white/85 leading-snug">{s.event}</p>
                          <div className="flex items-center justify-between mt-auto gap-2">
                            {s.location && (
                              <span className="text-[12px] font-light text-white/40">{s.location}</span>
                            )}
                            <span className="text-[11px] font-light text-white/30 tabular-nums ml-auto">{s.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Shipbrokers ── */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
              <div className="lg:col-span-4">
                <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/30 mb-4">
                  Broker network
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight">
                  Shipbrokers in<br />Working Cooperation
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[17px] font-light leading-relaxed text-white/60">
                  A global network of eighteen specialist shipbroking houses — from tier-one
                  institutions such as Clarksons and SSY to focused boutiques across Europe,
                  Asia, and the Americas.
                </p>
              </div>
            </div>

            <div ref={brokersSection.ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
              {shipbrokers.map((name, i) => (
                <div
                  key={name}
                  style={reveal(brokersSection.inView, i * 0.04)}
                  className="bg-[#001f3f] px-5 py-6 flex items-center justify-center"
                >
                  <span className="text-[13px] font-medium text-white/60 text-center leading-snug hover:text-white/90 transition-colors duration-200">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Brochure Download ── */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-16 border-b border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-10 h-12 border border-white/15 flex flex-col items-center justify-center gap-[3px] shrink-0">
                <div className="w-4 h-[2px] bg-white/40" />
                <div className="w-4 h-[2px] bg-white/40" />
                <div className="w-4 h-[2px] bg-white/40" />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-white/85">Range Shipping — Introduction File</p>
                <p className="text-[12px] font-light text-white/40 mt-0.5">June 2026 · PDF · 4.9 MB</p>
              </div>
            </div>
            <a
              href="/range-shipping-introduction-june-2026.pdf"
              download="Range Shipping Introduction June 2026.pdf"
              className="shrink-0 flex items-center gap-3 px-6 py-3 border border-white/20 text-[11px] font-medium tracking-[0.15em] uppercase text-white/70 hover:border-crimson hover:text-white transition-all duration-200"
            >
              <span>Download PDF</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1v7M3 5.5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#001f3f] px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-4">
                Discuss a Fixture<br />with Our Team
              </h2>
              <p className="text-[16px] font-light text-white/55">
                Access real-time fleet positions and speak directly with our London chartering desk.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="/contact"
                className="px-8 py-3.5 bg-crimson text-white text-[12px] font-semibold tracking-[0.12em] uppercase hover:bg-crimson/85 transition-colors duration-200 whitespace-nowrap"
              >
                Contact chartering team
              </a>
              <a
                href="/dry-bulk"
                className="px-8 py-3.5 border border-white/25 text-[12px] font-medium tracking-[0.12em] uppercase text-white/70 hover:border-white/50 hover:text-white transition-all duration-200 whitespace-nowrap"
              >
                Dry-bulk services
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
