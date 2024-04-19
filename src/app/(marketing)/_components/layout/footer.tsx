import { Logo } from "../common/logo";

const navigation = {
  main: [
    { name: 'Get started', href: '/pages' },
  ],
}

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <Logo />
        <nav className="mt-4 -mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-neutral-300 hover:text-neutral-100">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-4 text-center text-xs leading-5 text-neutral-500">
          &copy; {year} DabWave. All rights reserved.
        </p>
      </div>
    </footer>
  )
}