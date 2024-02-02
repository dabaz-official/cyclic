import Image from "next/image";

import { Button } from "@cyclic/components/ui/button";

export const MarketingHeader = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Cyclic</span>
          <Image
            className="h-8 w-auto"
            src="/images/logos/logo-light.svg"
            width={8}
            height={8}
            alt="Logo"
          />
        </a>
        <div className="hidden md:flex md:gap-x-12">
          <Button size="sm" className="text-sm font-semibold leading-6">
            Enter Cyclic
          </Button>
        </div>
      </nav>
    </header>  
  )
}