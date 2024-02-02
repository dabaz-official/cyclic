import Image from "next/image";
import { Square2StackIcon } from "@heroicons/react/24/outline";

export default function Blocky() {
  return (
    <div className="overflow-hidden rounded-lg bg-neutral-100">
      <div className="px-4 py-5 sm:px-6">
        <div className="relative pl-9 text-left pr-0 sm:pr-48 md:pr-72">
          <dt className="inline font-semibold text-neutral-900">
            <Square2StackIcon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
            Cyclic is blocky.
          </dt>{' '}
          <dd className="inline">
            No matter what the content is, you could always drag it just like what you always do in Notion.
          </dd>
        </div>
      </div>
      <div className="pt-2 px-6 pb-6">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/images/landing-page/blocky.svg"
            fill
            className="object-contain block"
            alt="Blocky illustration."
          />
        </div>
      </div>
    </div>
  )
}