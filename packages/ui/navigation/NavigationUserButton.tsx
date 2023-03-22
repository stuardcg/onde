interface NavigationUserButtonProps {
  children: React.ReactNode;
}

export function NavigationUserButton({ children }: NavigationUserButtonProps) {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <div className="relative ml-3">{children}</div>
    </div>
  );
}
