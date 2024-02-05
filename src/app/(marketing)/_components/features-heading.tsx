"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@cyclic/components/ui/lamp";

export function FeaturesHeading() {
  return (
    <LampContainer className="bg-gradient-to-b from-slate-950">
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
    </LampContainer>
  );
}
