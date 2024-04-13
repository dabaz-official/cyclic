"use client";

import React from "react";
import Spotlight from "@cyclic/components/ui/spotlight";
import { useConvexAuth } from "convex/react";
import { HeroHeading } from "./hero-heading";
import { HeroButton } from "./hero-button";

export function Hero() {
  return (
    <div className="min-h-screen w-full flex sm:items-center sm:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="top-20 sm:-top-40 left-0 md:left-60 md:-top-20 block"
        fill="white"
      />
      <div className="p-4 max-w-4xl mx-auto relative z-10 w-full my-auto text-center -space-y-10 sm:-space-y-4">
        <HeroHeading />
        <HeroButton />
      </div>
    </div>
  );
}