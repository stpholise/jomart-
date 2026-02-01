import { useState } from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";
import clsx from "clsx";

const Header = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="w-full h-14 border-gray-400 border-b flex items-center justify-between gap-12 px-6 py-4 ">
      <Link to={"/"} className="logo">
        <img src="/jomart.png" alt="logo" fetchPriority="high" className="w-30 h-10" />
      </Link>

      <div className="flex">
        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          className="flex sm:hidden"
        >
          <img src="/icons/menu.svg" alt="menu btn" className="w-8 h-8" fetchPriority="high" />
        </button>
      </div>
      <div
        className={clsx(
          "sm:static fixed  top-0 left-0 bottom-0 right-0  z-15  w-75 sm:w-full sm:justify-end bg-logo-blue sm:bg-transparent sm:items-center  flex flex-col sm:flex-row gap-1 sm:gap-2 py-24 sm:py-1 px-4  transform duration-700 h-full",
          openMenu ? "translate-x-0" : "-translate-x-full sm:translate-x-0",
        )}
      >
        <button
          onClick={() => setOpenMenu(false)}
          className="flex sm:hidden absolute top-4 right-4 bg-gray-400 p-2 rounded-full h-8 w-8  items-center justify-center"
        >
          <img src="/icons/close.svg" alt="" className="w-4 h-4" />
        </button>
        {navLinks.map((item, index) => (
          <Link
            to={item.href}
            className={clsx(
              "text-xl sm:text-sm font-medium  hover:bg-blue-400 sm:hover:bg-transparent sm:hover:border-b-2 border-b border-gray-200 sm:border-0   px-4 mb-1  py-2 uppercase",
              currentPathname == item.href ? "text-white sm:text-logo-blue" : "text-primary",
            )}
            key={index}
            onClick={() => setOpenMenu(false)}
          >
            {" "}
            {item.name}
          </Link>
        ))}
      </div>
      <div
        onClick={() => setOpenMenu(false)}
        className={clsx(
          " overlay sm:hidden backdrop-blur-xs fixed top-0 left-0 right-0 bottom-0 transform  z-10 bg-[rgba(0,0,0,0.4)] ",
          openMenu ? "flex  w-full" : " w-0 h-0 opacity-0 duration-500",
        )}
      ></div>
    </div>
  );
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export default Header;
