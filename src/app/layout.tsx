import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16993873314"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16993873314');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
