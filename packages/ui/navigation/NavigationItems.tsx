import { NavItemProps, NavigationItem } from "./NavigationItem";

export interface NavigationItemsProps {
  items: NavItemProps[];
}

export function NavigationItems({ items }: NavigationItemsProps) {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
        {items.map((item) => (
          <NavigationItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
