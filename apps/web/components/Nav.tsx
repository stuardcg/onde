import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "utils/classNames";
import { UserButton } from "@clerk/nextjs";

const NAV_ITEMS = [
  {
    name: "Dashboard",
    href: "#",
    current: true,
  },
  {
    name: "Team",
    href: "#",
  },
];

type NavItemProps = {
  name: string;
  href: string;
  current?: boolean;
};

function NavItem({ name, href, current }: NavItemProps) {
  return (
    <a
      href={href}
      className={classNames(
        "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
        current
          ? "border-indigo-500 text-gray-900"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
      )}
    >
      {name}
    </a>
  );
}

function PanelItem({ name, href, current }: NavItemProps) {
  return (
    <a
      href={href}
      className={classNames(
        "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
        current
          ? "border-indigo-500 text-indigo-700 bg-indigo-50"
          : "text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 border-transparent"
      )}
    >
      {name}
    </a>
  );
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {NAV_ITEMS.map((item) => (
                    <NavItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative ml-3">
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "h-8 w-8",
                        userButtonAvatarImage: "h-8 w-8",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {NAV_ITEMS.map((item) => (
                <Disclosure.Button as={PanelItem} key={item.name} {...item} />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
