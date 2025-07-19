import "@workspace/ui/globals.css";
import "@/styles/fonts.css";
import { Providers } from "@/components/providers";

import { Toaster } from "@workspace/ui/components/sonner";
import Plausible from "@workspace/ui/lib/plausible";
import LenisWrapper from "@/components/lenis-wrapper";
import SkipToContent from "@workspace/ui/components/utility/skip-to-content";
import DevTools from "@workspace/ui/components/utility/dev-tools";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Plausible />
      </head>
      <body className="font-publica antialiased px-4 selection:bg-primary selection:text-white min-h-screen bg-[url('/background-grid.svg')] bg-top bg-no-repeat bg-fixed">
        <SkipToContent />
        <LenisWrapper>
          <Providers>
            <main id="main-content">{children}</main>
          </Providers>
          <Toaster />
        </LenisWrapper>
        {process.env.NODE_ENV === "development" && <DevTools />}
      </body>
    </html>
  );
}
