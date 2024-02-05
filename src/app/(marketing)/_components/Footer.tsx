import Cookies from "./Cookies";
import { Logo } from "./common/logo"

const navigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Email us', href: 'mailto:dabaz@dabaz.me' },
    { name: 'Terms & Privacy', href: '#' },
  ],
}

const today = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white border border-neutral-100">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 lg:px-8">
        <Logo />
        <nav className="mt-6 -mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-4">
              <a href={item.href} className="text-md leading-6 text-neutral-700 hover:text-neutral-900">
                {item.name}
              </a>
            </div>
          ))}
          <Cookies />
        </nav>
        <p className="mt-6 text-center text-sm leading-5 text-neutral-700">
          &copy; {today} DabWave, Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  )
}