"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

import { Button } from "@cyclic/components/ui/button";
import { Spinner } from "@cyclic/components/specific/spinner";
import Link from "next/link";

export default function HeaderButton() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="flex flex-1 items-center justify-end gap-x-6">
      {isLoading && (
        <Spinner />
      )}
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <button className="block text-sm lg:text-md font-medium leading-6 text-neutral-100 hover:text-white transition">
              Log in
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button
              size="md"
              variant="header"
            >
              Sign up
            </Button>
          </SignUpButton>
        </>
      )}
      {isAuthenticated && !isLoading && (
        <>
          <Button
            size="md"
            asChild
            variant="header"
          >
            <Link href="/pages">
              Enter Cyclic -&gt;
            </Link>
          </Button>
          <UserButton
            afterSignOutUrl="/"
          />
        </>
      )}
    </div>
  )
}