import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkyFortress - Expert Audits for AI-Generated Projects",
  description: "Get your AI-generated code reviewed by expert developers. We audit for security, performance, and scalability to ensure your project is production-ready.",
  keywords: "AI audit, AI project review, AI security, AI performance, AI scalability, AI-generated code, expert code review",
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  openGraph: {
    title: "SkyFortress - Expert Audits for AI-Generated Projects",
    description: "Get your AI-generated code reviewed by expert developers. We audit for security, performance, and scalability to ensure your project is production-ready.",
    url: "https://skyfortress.dev",
    images: [
      {
        url: "https://skyfortress.dev/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "SkyFortress - Expert Audits for AI-Generated Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyFortress - Expert Audits for AI-Generated Projects",
    description: "Get your AI-generated code reviewed by expert developers. We audit for security, performance, and scalability to ensure your project is production-ready.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Analytics for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased bg-gray-50`}
      >
        {children}
        
        {/* Google Analytics with Next.js Script component for better performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16993873314"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16993873314', {
              page_title: document.title,
              page_location: window.location.href
            });
          `}
        </Script>
      </body>
    </html>
  );
}
