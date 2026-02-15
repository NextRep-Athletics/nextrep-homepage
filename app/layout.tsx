import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextRep Athletics - Science-Based Personal Training",
  description:
    "Where science meets strength. Evidence-based personal training combining CSCS certification with public health expertise. Serving Southern California & Virtual Training Nationwide.",
  keywords: [
    "personal training",
    "CSCS",
    "fitness",
    "strength training",
    "health",
    "wellness",
    "certified strength and conditioning specialist",
    "virtual training",
    "online fitness coaching",
    "Southern California personal trainer",
  ],
  authors: [{ name: "NextRep Athletics" }],
  openGraph: {
    type: "website",
    url: "https://nextrep-athletics.com/",
    title: "NextRep Athletics - Science-Based Personal Training",
    description:
      "Where science meets strength. Evidence-based personal training combining CSCS certification with public health expertise.",
    images: [
      {
        url: "https://nextrep-athletics.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextRep Athletics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextRep Athletics - Science-Based Personal Training",
    description:
      "Where science meets strength. Evidence-based personal training combining CSCS certification with public health expertise.",
    images: ["https://nextrep-athletics.com/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: "https://nextrep-athletics.com/",
  },
  themeColor: "#003262",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
