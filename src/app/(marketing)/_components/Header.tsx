"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@cyclic/components/ui/button";

export default function MarketingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-neutral-100 fixed top-0 left-0 right-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Cyclic</span>
            <Image
              className="h-8 w-auto"
              src="/images/logos/logo-light.svg"
              width={8}
              height={8}
              alt="Cyclic"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <a href="/login" className="block text-sm lg:text-md font-semibold leading-6 text-gray-900 hover:underline transition">
            Log in
          </a>
          <Link href="/register">
            <Button size="md" className="font-semibold">
              Sign up
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}