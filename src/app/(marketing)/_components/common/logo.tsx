import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center text-center gap-x-2">
      <Image
        src="/images/logos/logo-dark.svg"
        height="40"
        width="40"
        alt="Logo"
        className="h-8 w-auto block"
      />
      <p className="font-medium text-lg tracking-tight text-white">
        Cyclic
      </p>
    </div>
  )
}