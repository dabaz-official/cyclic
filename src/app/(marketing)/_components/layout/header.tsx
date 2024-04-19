"use client";

import { useConvexAuth } from "convex/react";

import { useScrollTop } from "@cyclic/hooks/use-scroll-top";
import { cn } from "@cyclic/lib/utils";
import { Logo } from "../common/logo";
import HeaderButton from "./header-button";

export default function Header() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <header className={cn(
      "bg-transparent fixed top-0 left-0 right-0 z-[100] p-4 md:p-6", scrolled && "bg-black/80 border-b border-neutral-800 shadow-sm backdrop-blur-lg"
    )}>
      <nav className="mx-auto flex max-w-6xl flex-row items-center justify-between font-medium text-white" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Cyclic</span>
            <Logo />
          </a>
        </div>
        <HeaderButton />
      </nav>
    </header>
  )
}