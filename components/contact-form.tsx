"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="flex flex-col gap-6 py-16">
        <div className="w-10 h-[2px] bg-white/25" />
        <h3
          className="text-2xl md:text-3xl font-bold text-white/90 leading-tight tracking-tight"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Message received
        </h3>
        <p className="text-[16px] font-light leading-relaxed text-white/60 max-w-sm">
          A member of our chartering team will be in touch within one business day.
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white/80 transition-colors mt-4 self-start"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <h3
        className="text-2xl md:text-3xl font-bold text-white/90 leading-tight tracking-tight mb-1"
        style={{ textWrap: "balance" } as React.CSSProperties}
      >
        Submit an Inquiry
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[11px] font-medium tracking-widest uppercase text-white/40">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="bg-white/5 border border-white/15 px-4 py-3 text-[15px] font-light text-white/85 placeholder:text-white/25 focus:outline-none focus:border-white/35 transition-colors duration-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[11px] font-medium tracking-widest uppercase text-white/40">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@company.com"
            className="bg-white/5 border border-white/15 px-4 py-3 text-[15px] font-light text-white/85 placeholder:text-white/25 focus:outline-none focus:border-white/35 transition-colors duration-200"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="inquiry" className="text-[11px] font-medium tracking-widest uppercase text-white/40">
          Inquiry Type
        </label>
        <div className="relative">
          <select
            id="inquiry"
            name="inquiry"
            className="w-full bg-white/5 border border-white/15 px-4 py-3 text-[15px] font-light text-white/80 focus:outline-none focus:border-white/35 transition-colors duration-200 appearance-none cursor-pointer"
          >
            <option value="chartering" className="bg-[#04080f]">Chartering</option>
            <option value="fleet-position" className="bg-[#04080f]">Fleet Position</option>
            <option value="sale-purchase" className="bg-[#04080f]">Sale &amp; Purchase</option>
            <option value="general" className="bg-[#04080f]">General Inquiry</option>
            <option value="media" className="bg-[#04080f]">Media Relations</option>
          </select>
          <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/35" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[11px] font-medium tracking-widest uppercase text-white/40">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Describe your inquiry..."
          className="bg-white/5 border border-white/15 px-4 py-3 text-[15px] font-light text-white/85 placeholder:text-white/25 focus:outline-none focus:border-white/35 transition-colors duration-200 resize-none"
        />
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="px-8 py-3.5 bg-white text-[#000613] text-[12px] font-semibold tracking-[0.12em] uppercase hover:bg-white/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
