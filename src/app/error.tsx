"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@cyclic/components/ui/button";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-24">
      <Image
        src="/images/pages/error.svg"
        height="160"
        width="160"
        alt="Error 404"
      />
      <h2 className="text-xl font-medium">
        Something went wrong.
      </h2>
      <Button asChild>
        <Link href="/pages">
          Go back
        </Link>
      </Button>
    </div>
  );
}

export default Error;