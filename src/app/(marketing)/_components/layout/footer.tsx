"use client";

import { Logo } from "../common/logo";
const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <Logo />
        <p className="mt-4 text-center text-xs leading-5 text-neutral-500">
          &copy; {year} DabWave. All rights reserved.
        </p>
      </div>
    </footer>
  )
}