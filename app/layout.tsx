import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Range Shipping | Global Maritime Logistics",
  description: "Fully integrated dry bulk operators. 47 years of institutional confidence in global maritime freight.",
  keywords: "maritime, shipping, dry bulk, freight, logistics, range shipping",
  openGraph: {
    title: "Range Shipping | Global Maritime Logistics",
    description: "Fully integrated dry bulk operators with a global reach across 118 ports.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#001f3f] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
