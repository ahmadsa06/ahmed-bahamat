import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

/** Poppins — the template's geometric sans, self-hosted at build time and
 *  exposed to globals.css as --font-poppins. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.brand.domain}`),
  title: `${site.brand.name} — ${site.brand.tagline}`,
  description: site.hero.sub,
  openGraph: {
    title: `${site.brand.name} — ${site.brand.tagline}`,
    description: site.hero.sub,
    url: `https://${site.brand.domain}`,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
