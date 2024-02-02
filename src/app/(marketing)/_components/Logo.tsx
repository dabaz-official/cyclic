import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center text-center gap-x-2">
      <Image
        src="/images/logos/favicon-light.svg"
        height="40"
        width="40"
        alt="Logo"
        className="h-8 w-auto block dark:hidden"
      />
      <Image
        src="/images/logos/favicon-dark.svg"
        height="40"
        width="40"
        alt="Logo"
        className="h-8 w-auto hidden dark:block"
      />
      <p className="font-semibold text-lg tracking-tighter text-black dark:text-white">
        Cyclic
      </p>
    </div>
  )
}