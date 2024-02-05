"use client";

import React from "react";
import Spotlight from "@cyclic/components/ui/spotlight";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";
import { Spinner } from "@cyclic/components/specific/spinner";

export function SpotlightHero() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 h-[10rem] sm:h-[16rem]">
        Your Minimalist<br />Note-Taking App.
        </h1>
        <div className="items-center mx-auto text-center">
          {isLoading && (
            <div className="w-full flex items-center justify-center">
              <Spinner size="lg" />
            </div>
          )}
          {isAuthenticated && !isLoading && (
            <>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-neutral-400 transition-colors focus:outline-none">
                <Link href="/notes">
                  Enter Cyclic -&gt;
                </Link>
              </button>
            </>
          )}
          {!isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-neutral-400 transition-colors focus:outline-none">
                Get Cyclic -&gt;
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
}