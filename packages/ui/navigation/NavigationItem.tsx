import classNames from "utils/classNames";

export type NavItemProps = {
  name: string;
  href: string;
  current?: boolean;
};
export function NavigationItem({ name, href, current }: NavItemProps) {
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
