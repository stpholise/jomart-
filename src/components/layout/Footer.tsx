import { Link } from "react-router";

const Footer = () => {
   return (
    <div className="w-full relative   bg-logo-blue bg-cover">
      
      <div className="">
        <div className="container mx-auto py-4  ">
          <div className="flex py-12  px-8 flex-col sm:flex-row  gap-10 sm:gap-12">
            <div className=" w-full xs:w-70 flex flex-col  gap-4">
              <h4 className="text-lg text-primary font-semibold">Contact</h4>
              <div className="flex flex-col gap-3 text-gray-200">
                <div className="flex gap-2 items-center justify-center">
                  <div className="">
                    <img
                      src="/icons/location.svg"
                      alt="location icon"
                      className="w-6 h-6/12"
                    />
                  </div>
                  <p>
                    1, Adekunle sule street, bashorun town, majek, Lagos state
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <div className="">
                    <img
                      src="/icons/location.svg"
                      alt="location icon"
                      className="w-6 h-6/12"
                    />
                  </div>
                  <p>
                    15E Road 22, Ikota Villa Estate, Lekki-Ajah, Lagos State
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-start">
                  <div className="">
                    <img
                      src="/icons/phone.svg"
                      alt="phone icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <p> 07034601021</p>
                </div>
                <div className="flex gap-2 items-center justify-start">
                  <div className="">
                    <img
                      src="/icons/phone.svg"
                      alt="phone icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <p> 08131044314</p>
                </div>
                <div className="flex gap-2 items-center justify-start">
                  <div className="">
                    <img
                      src="/icons/phone.svg"
                      alt="phone"
                      className="w-6 h-6"
                    />
                  </div>
                  <p> +234 905 435 0404</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 max-w-60">
              <h4 className="text-lg text-primary font-semibold">Company</h4>
              {navLinks.map((item, index) => (
                <Link
                  to={item.href}
                  className={
                    "text-xl sm:text-sm font-medium  :border-0   px-4 text-gray-200  capitalize"
                  }
                  key={index}
                >
                  {" "}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>{" "}
          <div className="text-xs font-medium text-white text-center py-4 px-4 border-t border-gray-200 flex flex-col  sm:flex-row sm:justify-between items-center gap-4">
            <p>&copy; 2026 All rights reserved.</p>
            <div className="flex  gap-3 item-center justify-start   py-1 px-6 ">
              {socials.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  target="_blank"
                  className={item.className}
                >
                  <img src={item.icon} alt="facebook" className="w-3 h-3 " />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const socials = [
  {
    name: "facebook",
    icon: "/icons/facebook.svg",
    link: "https://www.facebook.com",
    className:
      " size-5.5 rounded-full bg-blue-500 flex items-center justify-center border bg-[#121212] border-[#eeeeee] hover:border-primary p-0.5",
  },

  {
    name: "instagram",
    icon: "/icons/instagram.svg",
    link: "https://instagram.com",
    className:
      " size-5.5 rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center border  border-[#eeeeee] hover:border-primary p-0.5",
  },
  {
    name: "linkedin",
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com",
    className:
      " size-5.5 rounded-full  flex items-center justify-center border bg-[#0a66c2] border-[#eeeeee] hover:border-primary p-0.5",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];
export default Footer;
