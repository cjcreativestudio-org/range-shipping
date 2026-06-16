import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Operations from "@/components/operations";
import Sustainability from "@/components/sustainability";
import Corporate from "@/components/corporate";
import Memberships from "@/components/memberships";
import Inquiry from "@/components/inquiry";
import Footer from "@/components/footer";
import LenisProvider from "@/components/lenis-provider";

export default function Home() {
  return (
    <LenisProvider>
      <Nav />
      <main>
        <Hero />
        {/* Curtain wrapper — slides over the pinned canvas as a unified dark sheet */}
        <div className="relative z-10 -mt-[100vh]">
          <Operations />
          <Sustainability />
          <Corporate />
          <Memberships />
          <Inquiry />
        </div>
      </main>
      <Footer />
    </LenisProvider>
  );
}
