import { Disclosure } from "@headlessui/react";
import { PanelItem } from "./PanelItem";
import { NavigationItemsProps } from "./NavigationItems";

export function NavigationPanel({ items }: NavigationItemsProps) {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 pt-2 pb-4">
        {items.map((item) => (
          <Disclosure.Button as={PanelItem} key={item.name} {...item} />
        ))}
      </div>
    </Disclosure.Panel>
  );
}
