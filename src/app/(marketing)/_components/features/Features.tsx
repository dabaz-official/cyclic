"use client";

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, PaintBrushIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Click to publish',
    description:
      'Just a click, and your note transforms into an accessible link. Then, you can share this link with anyone, anywhere.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Simple design',
    description:
      'Our core design principle is to let you concentrate more, rather than creating more distractions.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Stay synced',
    description:
      'Your notes are stored in the cloud, allowing you to use Cyclic seamlessly on any device with internet access.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'We safeguard your data with robust encryption, reinforce access through multi-factor authentication, and more.',
    icon: FingerPrintIcon,
  },
]

export default function MarketingFeatures() {
  return (
    <div>
      <div className="mx-auto lg:text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">Simple but <span className="text-blue-600">powerful</span></h2>
        <p className="text-md sm:text-lg text-neutral-900">
          We keep everything simple while we are making Cyclic powerful for the best note-taking solution.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16 text-left">
              <dt className="text-base font-semibold leading-7 text-neutral-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}