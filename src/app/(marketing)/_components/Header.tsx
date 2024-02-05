"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

import { Button } from "@cyclic/components/ui/button";
import { useScrollTop } from "@cyclic/hooks/use-scroll-top";
import { cn } from "@cyclic/lib/utils";
import { Spinner } from "@cyclic/components/specific/spinner";
import { Logo } from "./logo";
import Link from "next/link";

export default function Header() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <header className={cn(
      "bg-black/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50", scrolled && "border-b border-neutral-800 shadow-sm"
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
          {isLoading && (
            <Spinner size="lg" />
          )}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <button className="block text-sm lg:text-md font-medium leading-6 text-neutral-100 hover:underline transition">
                  Log in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="md" className="bg-white text-black hover:bg-neutral-200">
                  Sign up
                </Button>
              </SignUpButton>
            </>
          )}
          {isAuthenticated && !isLoading && (
            <>
              <Button size="md" asChild className="bg-white text-black hover:bg-neutral-200">
                <Link href="/notes">
                  Enter Cyclic -&gt;
                </Link>
              </Button>
              <UserButton
                afterSignOutUrl="/"
              />
            </>
          )}
        </div>
      </nav>
    </header>
  )
}