"use client";

import React from "react";
import Bounded from "../layout/bounded";
import AnimatedContent from "./animated-content";

export function Hero() {
  return (
    <Bounded className="text-center">
      <AnimatedContent />     
    </Bounded>
  );
}