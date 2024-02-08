import type { Metadata } from "next";
import { Toaster } from "sonner";

import "@cyclic/styles/globals.css";
import { cn } from "@cyclic/lib/utils"
import { fontMono, fontSans, fontSerif } from "./fonts";
import { ConvexClientProvider } from "@cyclic/components/providers/convex-provider";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Cyclic | Your Minimalist Note-Taking App",
    template: "%s | Cyclic"
  },
  description: "A minimalist tool for note-taking and note-management. Embrace a world of clarity and focus, where every note propels you towards seamless productivity.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/logos/favicon-light.svg",
        href: "/images/logos/favicon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logos/favicon-dark.svg",
        href: "/images/logos/favicon-dark.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen font-sans antialiased",
        fontSans.variable, fontMono.variable, fontSerif.variable
      )}>
        <ConvexClientProvider>  
          <Toaster position="bottom-center" />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
