import { Link } from "react-router";
import RequestForm from "./RequestForm";
import { useState } from "react";

const Footer = () => {
  const [openRequestForm, setOpenRequestForm] = useState<boolean>(false);
  return (
    <div className="w-full bg-logo-blue">
      {openRequestForm && (
        <RequestForm setOpenRequestForm={setOpenRequestForm} />
      )}
      <div className="container mx-auto ">
        <div className="flex  py-8 px-8 flex-col sm:flex-row  gap-4 sm:gap-12">
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
                <p>15E Road 22, Ikota Villa Estate, Lekki-Ajah, Lagos State</p>
              </div>
              <div className="flex gap-2 items-center justify-start">
                <div className="">
                  <img src="/icons/phone.svg" alt="phone icon" className="w-6 h-6" />
                </div>
                <p> 07034601021</p>
              </div>
              <div className="flex gap-2 items-center justify-start">
                <div className="">
                  <img src="/icons/phone.svg" alt="phone icon" className="w-6 h-6" />
                </div>
                <p> 08131044314</p>
              </div>
              <div className="flex gap-2 items-center justify-start">
                <div className="">
                  <img src="/icons/phone.svg" alt="phone" className="w-6 h-6" />
                </div>
                <p> +234 905 435 0404</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-60">
            <h4 className="text-lg text-primary font-semibold">Let's Talk!</h4>

            <div className="flex invert gap-3 item-center justify-start px-2">
              <Link
                to={"https://www.facebook.com"}
                target="_blank"
                className=" size-5.5 rounded-full  flex items-end justify-center bg-[#121212] border border-[#eeeeee] hover:border-primary p-0.5"
              >
                <img src="/icons/facebook.svg" alt="facebook" className="w-3 h-3 " />
              </Link>
              <Link
                to={"https://x.com"}
                target="_blank"
                className=" size-5.5 rounded-full  flex items-center justify-center border bg-[#121212] border-[#eeeeee] hover:border-primary p-0.5"
              >
                <img src="/icons/instagram.svg" alt="instagram" className="w-3 h-3 " />
              </Link>
              <Link
                to={"https://www.linkedin.com"}
                target="_blank"
                className=" size-5.5 rounded-full  flex items-center justify-center border bg-[#121212] border-[#eeeeee] hover:border-primary p-0.5"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="linkedin icon"
                  className="w-3 h-3 object-contain"
                />
              </Link>
            </div>
            <button
              onClick={() => setOpenRequestForm(true)}
              className="cursor-pointer text-white text-sm w-full  font-medium text-center rounded-lg bg-primary  py-1.5 px-4 flex items-center justify-center min-w-60"
            >
              {" "}
              Message
            </button>
          </div>
        </div>

        <div className="text-xs font-medium text-white text-center py-2 border-t border-gray-200">
          {" "}
          &copy; 2026 All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
