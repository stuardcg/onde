import classNames from "utils/classNames";
import { NavItemProps } from "./NavigationItem";

export function PanelItem({ name, href, current }: NavItemProps) {
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
