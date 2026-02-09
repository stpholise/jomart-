import LeafletMap from "../components/utils/LeafletMap";
import { Formik, Form, Field } from "formik";
import type { FormikHelpers } from "formik";

interface FormValuesType {
  name: string;
  phone: string;
  email: string;
  message: string;
}
const Contact = () => {
  const initialValues: FormValuesType = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const submitMessage = async (
    values: FormValuesType,
    { setSubmitting, resetForm }: FormikHelpers<FormValuesType>,
  ) => {
    try {
      await fetch("https://formsubmit.co/stephenolise4@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: values.name,
          phone: values.phone,
          email: values.email,
          message: values.message,
          _captcha: "false",
        }),
      });
      resetForm();
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }

    setSubmitting(false);
  };
  return (
    <div className="bg-gray-50 pb-14">
      <div className="container mx-auto pt-16 ">
        <h2 className="font-bold text-secondary uppercase text-2xl mx-auto text-center mb-6 ">
          Contact
        </h2>
        <p className="font-medium  w-80 text-center mx-auto ">
         Email, call or complete the form to learn how Jomart can help you 
        </p>
      </div>
      <div className=" ">
        <div className="grid md:grid-cols-[40%_50%] items-center justify-center container  sm:bg-logo-light/80  mx-auto my-8 sm:my-12  sm:py-12 px-4 gap-6  rounded-2xl">
          <div className="w-full md:w-80  px-4 grid grid-cols-1  gap-3 bg-logo-light/80 sm:bg-transparent rounded-xl">
            <div className=" text-white tex-sm      px-4 py-4 rounded-md   flex-col  flex gap-2">
              <div className="text-lg font-semibold text-secondary mt-6 mb-3 flex gap-2">
                Phone Number
              </div>
              <div className="flex gap-4 items-center justify-between ">
                <p className="text-xs font-medium">Main line:</p>
                <div className="">
                  <a href="tel:+2347034601021" className="font-medium">
                    {" "}
                    07034601021
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-between">
                <p className="text-xs font-medium">Sales:</p>
                <div className="">
                  <a href="tel:+2348131044314" className="font-medium">
                    {" "}
                    08131044314
                  </a>
                  <p className="text-[10px] font-medium"></p>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-between">
                <p className="text-xs font-medium">Support:</p>
                <div className="">
                  <a href="tel:+2349054350404" className="font-medium">
                    {" "}
                    09054350404
                  </a>
                </div>
              </div>
            </div>
            <div className=" text-white tex-sm    px-4 py-4 rounded-md   flex-col flex gap-2">
              <div className="flex flex-col gap-3 text-white">
                <div className="text-lg font-semibold text-secondary mt-6 mb-3 flex gap-2">
                  Address
                </div>
                <div className="flex gap-2 items-center justify-start">
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
                <div className="flex gap-2 items-center justify-start">
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
              </div>
            </div>
            <div className=" text-white tex-sm    px-4 py-4 rounded-md   flex-col flex gap-2 sm:min-w-80">
               <div className="text-lg font-semibold text-secondary mt-6 mb-3 flex gap-2">
                  Business Hours
                </div>
              <div className=" flex justify-between text-sm font-medium">
                Mon-Fri
                <p>8:00am - 5:00pm</p>
              </div>
              <div className=" flex justify-between text-sm font-medium">
                Sat
                <p>9:00am - 4:00pm</p>
              </div>
              <div className=" flex justify-between text-sm font-medium">
                Emergency
                <p>24/7</p>
              </div>
            </div>
            <div className=" text-white     tex-sm    px-4 py-4 rounded-md   flex-col flex gap-2">
              <div className="text-lg font-semibold text-secondary mt-6 mb-3 flex gap-2">
                 Email
              </div>
              <div className=" flex justify-between text-sm font-medium">
                <a href="mailto:jomartengineeringservices@gmail.com">
                  Jomartengineeringservices@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="  mx-auto  sm:px-4  py-2 md:w-fit w-full    gap-4        ">
            <div className="mb-10 w-full md:max-w-110 md:mx-auto md:w-110">
              <Formik initialValues={initialValues} onSubmit={submitMessage}>
                {({ isSubmitting }) => (
                  <Form className="border border-gray-200   overflow-hidden flex flex-col bg-white rounded-lg px-4 sm:px-6 py-4 sm:py-6 gap-4 sm:gap-6 max-w-xl mx-auto">
                    <div className="">
                      <label
                        htmlFor="fullName"
                        className=" text-secondary text-xs font-medium inline-block mb-3"
                      >
                        {" "}
                        Full Name *
                      </label>
                      <Field
                        required
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="border border-gray-200 rounded-md w-full py-2 px-2 text-sm bg-gray-100  outline-none"
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="phone"
                        className=" text-secondary   text-xs font-medium inline-block mb-3"
                      >
                        {" "}
                        Phone *
                      </label>
                      <Field
                        required
                        type="phone"
                        name="phone"
                        placeholder="Phone"
                        className="border border-gray-200 rounded-md w-full py-2 px-2 text-sm bg-gray-100   outline-none "
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="email"
                        className=" text-secondary   text-xs font-medium inline-block mb-3"
                      >
                        {" "}
                        Email *
                      </label>
                      <Field
                        required
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="border border-gray-200 rounded-md w-full py-2 px-2 text-sm bg-gray-100   outline-none "
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="message"
                        className=" text-secondary   text-xs font-medium inline-block mb-3"
                      >
                        {" "}
                        Message *
                      </label>
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Your Message"
                        className="border border-gray-200 h-30 rounded-md w-full py-2 px-2 text-sm bg-gray-100    outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className=" rounded-md bg-secondary py-2 text-xs font-semibold  text-white"
                    >
                      Submit Message
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mx-auto     w-full mt:9 sm:mt-12 md:mt-16   h-fit rounded-lg overflow-hidden  ">
        <LeafletMap />
      </div>
    </div>
  );
};

export default Contact;
