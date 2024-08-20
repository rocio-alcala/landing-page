import { PropsWithChildren } from "react";

interface NavBarItemProps {
  onClick?: () => void;
  active?: boolean;
}

export default function NavBarItem({
  onClick,
  children,
  active
}: NavBarItemProps & PropsWithChildren) {
  return (
    <li
      onClick={onClick}
      className={`hover:cursor-pointer m-2 p-1 flex items-center gap-2 relative tracking-wider after:absolute after:bottom-0 after:left-0 after:bg-white after:w-0 after:h-[2px] hover:after:w-full hover:after:transition-*  transition-* duration-300 hover:after:duration-300
        ${active && "after:w-full"}`}
    >
      {children}
    </li>
  );
}
