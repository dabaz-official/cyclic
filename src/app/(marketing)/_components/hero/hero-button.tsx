"use client";

import React from "react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";
import { Spinner } from "@cyclic/components/specific/spinner";
import ButtonLink from "../layout/button-link";

export function HeroButton() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="items-center mx-auto text-center">
      {isLoading && (
        <Spinner size="sm" />
      )}
      {isAuthenticated && !isLoading && (
        <Link href="/pages">
          <ButtonLink
            title="Enter Cyclic"
          />
        </Link>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton afterSignInUrl="/pages">
          <ButtonLink
            title="Try it now"
          />
        </SignInButton>
      )}
    </div>
  );
}