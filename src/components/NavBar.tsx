import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";
import NavBarList from "./NavBarList";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }

  return (
    <>
      <nav>
        {/* desktop navbar */}
        <div className="fixed right-0 top-0 z-50 hidden h-20 w-full animate-fade-out-top items-center justify-end bg-transparent p-6 transition-all duration-500 md:visible md:flex">
          <ul className="flex text-xl gap-20 font-bold text-white px-5 ">
            <NavBarList />
          </ul>
        </div>
        {/* toggle mobile navbar */}
        <div
          className={`fixed right-0 top-0 z-50 text-white flex h-20 w-full animate-fade-out-top items-center justify-end ${
            isMenuOpen ? "bg-black" : ""
          } p-2 pr-5 transition-all duration-500 md:hidden md:opacity-0`}
        >
          {isMenuOpen ? (
            <BiX
              className="transition-all duration-500 "
              onClick={handleMenuToggle}
              size={25}
            />
          ) : (
            <BiMenu
              className="transition-all duration-500 "
              onClick={handleMenuToggle}
              size={25}
            />
          )}
          {/* mobile navbar */}
          <div className="md:hidden md:opacity-0 ">
            <div
              className={`absolute ${
                isMenuOpen ? "top-[80px]" : "top-[-898px]"
              } left-0 z-50 h-screen bg-black w-full animate-fade-out-top transition-all duration-500 `}
            >
              <ul className="flex gap-3 text-white  text-xl flex-col items-center justify-center pt-10">
                <NavBarList onItemClick={handleMenuToggle} />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
