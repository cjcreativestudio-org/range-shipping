export default function Inquiry() {
  return (
    <section className="bg-crimson px-6 md:px-12 py-20 md:py-24 border-t border-crimson/0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div>
          <p className="text-white/70 text-[11px] font-medium tracking-[0.15em] uppercase mb-4">
            Commercial Desk
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight max-w-lg"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Ready to discuss a transaction?
          </h2>
        </div>
        <a
          href="/contact"
          className="shrink-0 px-8 py-4 border-2 border-white text-white text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-white hover:text-crimson transition-colors duration-200 active:scale-[0.97] active:transition-none"
        >
          Contact our desk
        </a>
      </div>
    </section>
  );
}
