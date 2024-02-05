"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import { cn } from "@cyclic/lib/utils"
import { fontMono, fontSans, fontSerif } from "@cyclic/app/fonts";
import { Spinner } from "@cyclic/components/specific/spinner";
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
      "h-full flex bg-neutral-900",
      fontSans.variable, fontMono.variable, fontSerif.variable
    )}>
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;