import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tryaidal.com"),
  title: "AIDAL. — AI Decision Accountability Layer",
  description:
    "The independent evidence layer for AI decisions. Seal what your AI decided the instant it happens, get a plain-language explanation, and hand auditors a record they can verify without trusting you. Supports EU AI Act, MAS FEAT, OJK, DFSA. No-cost sandbox tier.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* General Sans is self-hosted (public/fonts) — see globals.css @font-face.
            Only JetBrains Mono still loads from Google Fonts. */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AIDAL",
              url: "https://tryaidal.com",
              logo: "https://tryaidal.com/logo.png",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
