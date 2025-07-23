import "@workspace/ui/globals.css";
import "@/styles/fonts.css";
import { Providers } from "@/components/utility/providers";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@workspace/ui/components/sonner";
import Plausible from "@workspace/ui/lib/plausible";
import LenisWrapper from "@/components/utility/lenis-wrapper";
import SkipToContent from "@workspace/ui/components/utility/skip-to-content";
import DevTools from "@workspace/ui/components/utility/dev-tools";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorShimmer: "#2a322b",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <Plausible />
        </head>
        <body className="font-publica antialiased selection:bg-primary selection:text-white min-h-screen bg-[url('/background-grid.svg')] bg-top bg-no-repeat bg-fixed">
          <SkipToContent />
          <LenisWrapper>
            <Providers>
              <main className="flex flex-col min-h-svh">
                <Navigation />
                <div className="flex-1" id="main-content">
                  {children}
                </div>
                <Footer />
              </main>
            </Providers>
            <Toaster />
          </LenisWrapper>
          {process.env.NODE_ENV === "development" && <DevTools />}
        </body>
      </html>
    </ClerkProvider>
  );
}
