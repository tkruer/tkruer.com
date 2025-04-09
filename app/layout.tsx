import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Suspense } from "react";
import { baseUrl } from "@/lib/config";
import 'prismjs/themes/prism-tomorrow.css';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Tyler Kruer - Software Engineer',
    template: 'Tyler Kruer - Software Engineer',
  },
  authors: {
    url: baseUrl,
    name: "Tyler Kruer",
  },
  description: 'Portfolio',
  openGraph: {
    title: 'Tyler Kruer - Software Engineer',
    description: 'Tyler Kruer - Software Engineer',
    url: baseUrl,
    siteName: 'Tyler Kruer - Software Engineer',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-3xl mx-auto px-4">
            <Header />
            <Suspense fallback={<>Loading...</>}>
              {children}
              <Analytics />
              <SpeedInsights />
            </Suspense>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
