import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "../components/global/NavBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/global/ScrollToTop";
import { Lato, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Algérie Poste",
  description:
    "Algérie Poste lance la première édition de son hac... Dans le cadre de son engagement sociétal et de sa vision pour une société plus équitable et inclusive,",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/alger-poste.svg" type="image/x-icon" />
      <Providers>
        <body className={`${lato.className} bg-muted/60`}>
          <NavBar />
          {children}
          <ScrollToTop />
          <Footer />
          <Analytics />
        </body>
      </Providers>
    </html>
  );
}
