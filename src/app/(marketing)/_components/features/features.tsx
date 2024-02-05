"use client";

import React from "react";

import { BentoGrid } from "@cyclic/components/ui/bento-grid";
import { Security } from "./security";
import { Design } from "./design";
import { Innovation } from "./innovation";
import { FeatureHeading } from "./feature-heading";

export function Features() {
  return (
    <div className="bg-slate-950 pb-24">
      <FeatureHeading />
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        <Innovation />
        <Design />
        <Security />
      </BentoGrid>
    </div>
  );
}

