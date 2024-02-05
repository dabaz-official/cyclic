"use client";

import React from "react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";
import { Spinner } from "@cyclic/components/specific/spinner";

export function HeroButton() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
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
  );
}