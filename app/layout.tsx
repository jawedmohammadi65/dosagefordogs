import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dosage for Dogs — Safe Medication Dosage Charts & Calculator",
    template: "%s | DosageForDogs",
  },
  description:
    "Looking for safe dosage for dogs? Browse weight-based dosage charts and calculators for Benadryl, Trazodone, Gabapentin, Carprofen, Zyrtec, and Meloxicam. Vet-informed, source-backed information for dog owners.",
  keywords: [
    "dosage for dogs",
    "dog dosage chart",
    "dog medication dosage",
    "dog dosage calculator",
    "benadryl dosage for dogs",
    "trazodone dosage for dogs",
    "gabapentin dosage for dogs",
    "carprofen dosage for dogs",
    "zyrtec dosage for dogs",
    "meloxicam dosage for dogs",
  ],
  metadataBase: new URL("https://dosagefordogs.com"),
  alternates: {
    canonical: "https://dosagefordogs.com",
  },
  verification: {
    google: "r7FUV7IvffMBS3DQ7Zpb7JvsNhDQyHRUNuo1zBjffGA",
    other: {
      "msvalidate.01": "E36619231AF623BBDBFB4F8B36D2521C",
    },
  },
  openGraph: {
    title: "Dosage for Dogs — Safe Medication Dosage Charts & Calculator",
    description:
      "Weight-based dosage charts and calculators for common dog medications. Vet-informed and source-backed.",
    url: "https://dosagefordogs.com",
    siteName: "DosageForDogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dosage for Dogs — Safe Medication Dosage Charts",
    description:
      "Weight-based dosage charts for common dog medications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Header />
        {children}
        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1X5J9JFQ80"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1X5J9JFQ80');
          `}
        </Script>
      </body>
    </html>
  );
}
