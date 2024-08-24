import { BiMenu, BiX } from "react-icons/bi";
import { useEffect, useState } from "react";
import NavBarList from "./NavBarList";
import { cn } from "../assets/helpers";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    // check initial state of scroll to style NavBar
    if (window.scrollY > 50) setIsScroll(true);

    // event listener on scroll and set state to style navbar
    function handleScroll() {
      if (window.scrollY > 50) setIsScroll(true);
      else {
        setIsScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    // clean event listener and observer
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        {/* background on scroll div */}
        <div
          className={cn(
            `fixed left-0 top-[-100px] z-[1000] flex h-20 w-full justify-end bg-[#0e100f]/80 p-5 text-[#ffffff] opacity-0 shadow-lg transition-all duration-700 ease-out`,
            isScroll && "top-0 opacity-100"
          )}
        ></div>
        {/* desktop navbar */}
        <div className="fixed right-0 top-0 z-[1050] hidden h-20 w-full animate-fade-out-top items-center justify-end bg-transparent p-6 transition-all duration-500 md:visible md:flex">
          <ul className="flex text-xl gap-20 font-bold text-[#ffffff] px-5 ">
            <NavBarList />
          </ul>
        </div>
        {/* toggle mobile navbar */}
        <div
          className={`fixed right-0 top-0 z-[1050] text-[#ffffff] flex h-20 w-full animate-fade-out-top items-center justify-end ${
            isMenuOpen ? "bg-[#0e100f]" : ""
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
              } left-0 z-50 h-screen bg-[#0e100f] w-full animate-fade-out-top transition-all duration-500 `}
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
