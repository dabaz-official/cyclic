"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@cyclic/components/ui/button";
import { Logo } from "./Logo";
import { useScrollTop } from "@cyclic/hooks/use-scroll-top";
import { cn } from "@cyclic/lib/utils";

export default function MarketingHeader() {
  const scrolled = useScrollTop();

  return (
    <header className={cn(
      "bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-20", scrolled && "border-b border-neutral-100 shadow-sm"
    )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Cyclic</span>
            <Logo />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <a href="/login" className="block text-sm lg:text-md font-medium leading-6 text-neutral-900 hover:underline transition">
            Log in
          </a>
          <Link href="/register">
            <Button size="md" className="font-medium">
              Sign up
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}