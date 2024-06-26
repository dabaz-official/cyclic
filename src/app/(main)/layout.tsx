"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import { cn } from "@cyclic/lib/utils"
import { fontMono, fontSans, fontSerif } from "@cyclic/app/fonts";
import { Spinner } from "@cyclic/components/specific/spinner";
import { ThemeProvider } from "@cyclic/components/providers/theme-provider";
import { SearchCommand } from "@cyclic/components/specific/search-command";

import { Navigation } from "./_components/navigation";

const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center pt-12">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className={cn(
      "h-full flex bg-white dark:bg-[#1F1F1F]",
      fontSans.variable, fontMono.variable, fontSerif.variable
    )}>
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <SearchCommand />
          {children}
        </ThemeProvider>
      </main>
    </div>
  );
}

export default MainLayout;