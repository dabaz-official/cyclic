"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import usePrefersReducedMotion from "@cyclic/hooks/use-prefers-reduced-motion";
import ButtonLink from "@cyclic/app/(marketing)/_components/layout/button-link";
import StarGrid from "@cyclic/app/(marketing)/_components/star-grid";
import Image from "next/image";
import { HeroButton } from "./hero-button";

export default function AnimatedContent() {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(
          ".hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow",
          { opacity: 1 },
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        ".hero__heading",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.4 },
      );

      tl.fromTo(
        ".hero__body",
        { y: 40 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.6",
      );

      tl.fromTo(
        ".hero__button",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.3 },
        "-=0.8",
      );
      tl.fromTo(
        ".hero__image",
        { y: 100 },
        { y: 0, opacity: 1, duration: 1.3 },
        "+=0.3",
      );
      tl.fromTo(
        ".hero__glow",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.8 },
        "-=1",
      );
    },
    { scope: container },
  );

  return (
    <div className="relative text-center" ref={container}>
      <StarGrid />
      <h1 className="hero__heading text-balance text-5xl font-medium opacity-0 md:text-6xl text-white tracking-tight mt-4 md:mt-12">
        Your Secure Note-Taking App.
      </h1>
      <div className="hero__body mx-auto my-6 max-w-lg text-balance text-neutral-300 opacity-0 text-lg">
        Cyclic is an advanced note-taking system designed with the modern user’s need for privacy and efficiency in mind.
      </div>
      <HeroButton />
      <div className="hero__image glass-container mt-16 w-fit opacity-0">
        <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 opacity-0 blur-2xl filter" />
        <Image
          className="rounded-lg"
          src="/images/landing-page/cyclic-screenshot.webp"
          alt="Cyclic Screenshot"
          priority
          sizes="100vw"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}