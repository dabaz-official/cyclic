"use client";

import React from "react";
import { HeroHeading } from "./hero-heading";
import { HeroButton } from "./hero-button";
import Bounded from "../layout/bounded";
import StarGrid from "../star-grid";
import AnimatedContent from "./animated-content";

export function Hero() {
  return (
    <Bounded className="text-center">
      <AnimatedContent />     
    </Bounded>
  );
}