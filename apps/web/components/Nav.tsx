import { Disclosure } from "@headlessui/react";
import {
  NavigationItems,
  NavigationMenuBurger,
  NavigationPanel,
  NavigationUserButton,
} from "ui/navigation";
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

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <NavigationMenuBurger open={open} />
              <NavigationItems items={NAV_ITEMS} />
              <NavigationUserButton>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-8 w-8",
                      userButtonAvatarImage: "h-8 w-8",
                    },
                  }}
                />
              </NavigationUserButton>
            </div>
          </div>

          <NavigationPanel items={NAV_ITEMS} />
        </>
      )}
    </Disclosure>
  );
}
