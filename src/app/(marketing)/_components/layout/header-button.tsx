"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

import { Spinner } from "@cyclic/components/specific/spinner";
import Link from "next/link";
import ButtonLink from "./button-link";

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
            <button className="block text-md font-medium leading-6 text-neutral-100 hover:text-blue-200 transition">
              Log in
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <ButtonLink
              title="Sign up"
            />
          </SignUpButton>
        </>
      )}
      {isAuthenticated && !isLoading && (
        <>
          <Link href="/pages">
            <ButtonLink
              title="Enter Cyclic"
            />
          </Link>
          <UserButton
            afterSignOutUrl="/"
          />
        </>
      )}
    </div>
  )
}