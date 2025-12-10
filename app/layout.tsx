import type { Metadata } from "next";
import { Cormorant_Garamond, Darker_Grotesque, IBM_Plex_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import { BasketProvider } from "@/contexts/BasketContext";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-serif",
  display: "swap",
});

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lab1 - Personalized Supplements",
  description: "We design the biology of you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${darkerGrotesque.variable} ${ibmPlexMono.variable}`}
      >
        <BasketProvider>
          <Navigation />
          {children}
        </BasketProvider>
      </body>
    </html>
  );
}

