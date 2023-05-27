import "./../styles/globals.css";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { Layout } from "@/components/blocks/Layout/Layout";
import { env } from "@/lib/env";
import { baseUrl } from "@/lib/constants";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata = {
  title: { default: env.SITE_NAME, template: `${env.SITE_NAME} | %s` },
  description:
    "Samochody z Polskiej sieci dealerskiej. Sprzedaż samochodów Gdynia.",
  robots: {
    index: env.INDEX_SITE,
    follow: env.INDEX_SITE,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: [
      {
        url: "/api/og?width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pl"
      className={`${poppins.variable} bg-light-gray text-secondary scrollbar-gutter-stable `}
    >
      <body>
        <Layout>{children}</Layout>
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
