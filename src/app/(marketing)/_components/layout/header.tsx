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
      "bg-transparent fixed top-0 left-0 right-0 z-[100] py-4 md:p-4", scrolled && "bg-black/80 border-b border-neutral-800 shadow-sm backdrop-blur-lg"
    )}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-x-6 px-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Cyclic</span>
            <Logo />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
        </div>
        <HeaderButton />
      </nav>
    </header>
  )
}