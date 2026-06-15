"use client";

import { useEffect } from "react";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Operations from "@/components/operations";
import Sustainability from "@/components/sustainability";
import Corporate from "@/components/corporate";
import Footer from "@/components/footer";
import { initLenis } from "@/lib/lenis";

export default function Home() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Operations />
        <Sustainability />
        <Corporate />
      </main>
      <Footer />
    </>
  );
}
