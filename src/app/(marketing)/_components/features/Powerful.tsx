"use client";

import Image from "next/image";
import Blocky from "./Blocky";

export const Powerful = () => {
  return (
    <div className="pt-16 md:pt-12">
      <div className="bg-white">
        <div className="mx-auto text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">Simple but <span className="text-blue-600">powerful</span></h2>
          <p className="text-md sm:text-lg text-neutral-900">
            We keep everything simple while we are making Cyclic powerful for the best note taking solution.
          </p>
          <Blocky />
        </div>
      </div>
    </div>
  )
}