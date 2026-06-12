import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tradely — Get the right tradie for the job, fast",
  description:
    "Post your job for free and compare quotes from licensed, reviewed local tradespeople across Australia and New Zealand.",
  openGraph: {
    title: "Tradely — Get the right tradie for the job, fast",
    description:
      "Free to post. No obligation to hire. Quotes from licence-checked local trades, usually within hours.",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
