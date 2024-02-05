import { cn } from "@cyclic/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@cyclic/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
} from "@tabler/icons-react";
import { Security } from "./security";
import { Design } from "./design";
import { Innovation } from "./innovation";

export function Features() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      <Innovation />
      <Design />
      <Security />
    </BentoGrid>
  );
}

