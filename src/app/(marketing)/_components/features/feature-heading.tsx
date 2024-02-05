"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@cyclic/components/ui/lamp";
import { TextGenerateEffect } from "@cyclic/components/ui/text-generate-effect";

const words = `DabWave is working really hard to figure out the best way to bring Cyclic to you. Hope you enjoy it.
`;

export function FeatureHeading() {
  return (
    <LampContainer className="z-10">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build Cyclic <br /> the right way
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <TextGenerateEffect className="text-center font-medium text-xl max-w-4xl bg-gradient-to-br" words={words} />
      </motion.h2>
    </LampContainer>
  );
}
