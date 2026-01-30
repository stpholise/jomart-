import { Link } from "react-router";
import RequestForm from "../layout/RequestForm";
import { useState } from "react";

const ReadyToStart = () => {
  const [openRequestForm, setOpenRequestForm] = useState<boolean>(false);

  return (
    <>
 {openRequestForm && (
        <RequestForm setOpenRequestForm={setOpenRequestForm} />
      )}
      <div className="flex flex-col shadow bg-gray-100 rounded-lg my-8 container mx-auto w-full px-4 py-7 items-center gap-3">
        <h3 className="text-lg font-semibold text-center text-logo-blue">
          Ready to Start Your Project
        </h3>
        <p>
          {" "}
          join our list of satisfied clients. Contact us today to discuss your
          elevator project requirements.
        </p>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 my-2 w-full">
          <button onClick={() => setOpenRequestForm(true)} className="bg-primary cursor-pointer text-white text-xs font-medium rounded-lg px-6 py-2 flex  items-center w-full justify-center sm:w-fit">
            Request a Quote
          </button>
          <Link
            to={"/contact"}
            className="bg-white text-logo-blue text-xs font-medium rounded-lg px-6 py-2 flex  items-center w-full justify-center sm:w-fit"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReadyToStart;
