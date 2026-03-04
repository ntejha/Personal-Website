import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import NewsletterBanner from "@/components/NewsletterBanner";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tejhalabs.dev"),
  title: {
    default: "Tejhalabs — Data Engineer Portfolio & Tech Blog",
    template: "%s | Tejhalabs",
  },
  description:
    "Personal tech portfolio and blog by Tejha — a Data Engineer building scalable data pipelines, real-time streaming systems, and modern cloud architectures. Explore projects, tutorials, and articles on data engineering.",
  keywords: [
    "data engineer",
    "data engineer portfolio",
    "data pipelines",
    "ETL",
    "real-time streaming",
    "tech blog",
    "Tejha",
    "Tejhalabs",
    "ML infrastructure",
    "cloud architecture",
  ],
  authors: [{ name: "Tejha", url: "https://tejhalabs.dev" }],
  creator: "Tejha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tejhalabs.dev",
    siteName: "Tejhalabs",
    title: "Tejhalabs — Data Engineer Portfolio & Tech Blog",
    description:
      "Personal tech portfolio and blog by Tejha — a Data Engineer building scalable data pipelines, real-time streaming systems, and modern cloud architectures.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ntejha04",
    title: "Tejhalabs — Data Engineer Portfolio & Tech Blog",
    description:
      "Data Engineer building scalable pipelines and modern architectures. Explore projects and articles.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tejha",
              url: "https://tejhalabs.dev",
              jobTitle: "Data Engineer",
              description:
                "Data Engineer specializing in scalable pipelines, real-time streaming, and ML infrastructure.",
              sameAs: [
                "https://github.com/ntejha",
                "https://linkedin.com/in/ntejha",
                "https://x.com/ntejha04",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <NewsletterBanner />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
