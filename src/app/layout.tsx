import type { Metadata } from "next";
import { Toaster } from "sonner";
import { fontMono, fontSans, fontSerif } from "./fonts";

import "@cyclic/styles/globals.css";
import { cn } from "@cyclic/lib/utils"
import { ConvexClientProvider } from "@cyclic/components/providers/convex-provider";
import { ModalProvider } from "@cyclic/components/modals/modal-provider";
import { EdgeStoreProvider } from "@cyclic/lib/edgestore";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Cyclic | Your Minimalist Note-Taking App",
    template: "%s | Cyclic"
  },
  description: "Cyclic is an advanced note-taking system designed with the modern user’s need for privacy and efficiency in mind.",
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
          <EdgeStoreProvider>
            <Toaster position="bottom-center" />
            <ModalProvider />
            {children}
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
