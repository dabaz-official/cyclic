"use client";
import { TextGenerateEffect } from "@cyclic/components/ui/text-generate-effect";

const words = `DabWave is working really hard to figure out the best way to bring Cyclic to you. Hope you enjoy it.
`;

export function FeatureDescription() {
  return <TextGenerateEffect className="text-center font-medium text-xl text-white" words={words} />;
}