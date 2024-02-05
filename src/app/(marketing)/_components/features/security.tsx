import React from "react";
import { EvervaultCard } from "@cyclic/components/ui/evervault-card";
import { IconShieldLock } from "@tabler/icons-react";

export function Security() {
  return (
    <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-black border-white/[0.2] border justify-between flex flex-col md:col-span-1">
      <EvervaultCard className="hidden md:block mb-4" />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <IconShieldLock className="h-4 w-4 text-neutral-500" />
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2 tracking-tight">
          The Security of Notes
        </div>
        <div className="font-sans font-normal text-xs text-neutral-300">
          We safeguard your data with robust encryption, 2FA, and more.
        </div>
      </div>
    </div>
  );
}