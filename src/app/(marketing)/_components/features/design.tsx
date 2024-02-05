import React from "react";
import { Meteors } from "@cyclic/components/ui/meteors";
import { IconSignature } from "@tabler/icons-react";

export function Design() {
  return (
    <div className="relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-black border-white/[0.2] border justify-between flex flex-col space-y-4"> 
      <div className="relative shadow-xl bg-black h-full overflow-hidden flex flex-col justify-end items-start">
        <Meteors number={20} />
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <IconSignature className="h-4 w-4 text-neutral-500" />
          <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
            The Art of Design
          </div>
          <div className="font-sans font-normal text-xs text-neutral-300">
            Discover the beauty of thoughtful and functional design.
          </div>
        </div>
      </div>
    </div>
  );
}
