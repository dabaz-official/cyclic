"use client";

import { IconTrendingUp } from "@tabler/icons-react";
import React from "react";
import { GlowingStarsBackgroundCard } from "@cyclic/components/ui/glowing-stars";

export function Innovation() {
  return (
    <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-black border-white/[0.2] border justify-between flex flex-col md:col-span-1">
      <GlowingStarsBackgroundCard className="bg-black border-none hidden md:block mb-4">
      </GlowingStarsBackgroundCard>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <IconTrendingUp className="h-4 w-4 text-neutral-500" />
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
          The Dawn of Innovation
        </div>
        <div className="font-sans font-normal text-xs text-neutral-300">
          While every note app are trying to be more powerful, we just keep the basic.
        </div>
      </div>
    </div>
  );
}
