import { useState } from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";
import clsx from "clsx";

const Header = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="w-full h-14 border-gray-400 border-b flex items-center justify-between gap-12 px-6 py-4">
      <Link to={"/"} className="logo">
        <img src="/jomart-logo.png" alt="logo" className="w-30 h-10" />
      </Link>

      <div className="flex">
        <nav></nav>
        <button onClick={() => setOpenMenu((prev) => !prev)}>
          <img src="/icons/menu.svg" alt="menu btn" className="w-8 h-8" />
        </button>
      </div>
      <div
        className={clsx(
          " fixed top-0 left-0 bottom-0 right-0 z-15  w-75 bg-logo-blue flex flex-col gap-1 py-24 px-4  transform duration-700 h-full",
          openMenu ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <button
          onClick={() => setOpenMenu(false)}
          className="absolute top-4 right-4 bg-gray-400 p-2 rounded-full h-8 w-8 flex items-center justify-center"
        >
          <img src="/icons/close.svg" alt="" className="w-4 h-4" />
        </button>
        {navLinks.map((item, index) => (
          <Link
            to={item.href}
            className={clsx(
              "text-xl font-medium  hover:bg-logo-light border-b border-gray-200  px-4 mb-1  py-2 uppercase",
              currentPathname == item.href ? "text-white" : "text-primary",
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
