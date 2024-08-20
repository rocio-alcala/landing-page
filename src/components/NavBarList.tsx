import NavBarItem from "./NavBarItem";
import { Link, useLocation } from "react-router-dom";

interface NavBarList {
  onItemClick?: () => void;
}

export default function NavBarList({ onItemClick }: NavBarList) {
  const { pathname } = useLocation();

  return (
    <>
      <Link to={"/"}>
        <NavBarItem onClick={onItemClick} active={pathname === "/"}>
          HOME
        </NavBarItem>
      </Link>
      <Link to={"/products"}>
        <NavBarItem onClick={onItemClick} active={pathname === "/products"}>
          PRODUCTOS
        </NavBarItem>
      </Link>
      <Link to={"/contact"}>
        <NavBarItem onClick={onItemClick} active={pathname === "/contact"}>
          CONTACTO
        </NavBarItem>
      </Link>
    </>
  );
}
