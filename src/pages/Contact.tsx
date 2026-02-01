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
    <div>
      <div className="container mx-auto my-12">
        <h2 className="font-bold text-primary text-3xl text-center mb-4 ">
          Contact
        </h2>
        <p className="font-medium text-center">
          Get in touch with our team for any questions or project inquiries
        </p>
      </div>
      <div className="flex flex-col md:flex-row container mx-auto py-8 px-4 gap-6">
        <div className="container mx-auto  flex flex-col gap-4     max-w-150    ">
          <div className="mb-4 max-w-120 md:mx-auto md:w-120 shadow-2xl">
            <Formik initialValues={initialValues} onSubmit={submitMessage}>
              {({ isSubmitting }) => (
                <Form className="border border-gray-200 bg-logo-blue flex flex-col rounded-lg px-6 py-6 gap-4 max-w-xl mx-auto">
                  <div className="">
                    <label
                      htmlFor="fullName"
                      className=" text-[#eaeaea] text-xs font-medium"
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
                      className=" text-[#eaeaea]  text-xs font-medium"
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
                      className=" text-[#eaeaea]  text-xs font-medium"
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
                      className=" text-[#eaeaea]  text-xs font-medium"
                    >
                      {" "}
                      Message *
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Your Message"
                      className="border border-gray-200 rounded-md w-full py-2 px-2 text-sm bg-gray-100    outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=" rounded-md bg-primary py-2 text-xs font-semibold  text-white"
                  >
                    Submit Message
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="shadow-xl max-w-150 border h-fit rounded-lg overflow-hidden border-logo-blue">
            <LeafletMap />
          </div>
        </div>

        <div className="w-full sm:w-99 px-4 flex flex-col gap-3 ">
          <div className=" text-white tex-sm  bg-logo-blue px-4 py-4 rounded-md shadow flex-col flex gap-2">
            <div className="text-lg font-semibold text-logo-light mb-3 flex gap-2">
              <img src="/icons/phone.svg" alt="phone" className="w-4" />
              Phone
            </div>
            <div className="flex gap-4 items-center">
              <img src="/icons/phone.svg" alt="phone" className="w-4" />
              <div className="">
                <a href="tel:+2347034601021" className="font-medium">
                  {" "}
                  07034601021
                </a>
                <p className="text-[10px]">Main line</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src="/icons/phone.svg" alt="phone" className="w-4" />
              <div className="">
                <a href="tel:+2348131044314" className="font-medium">
                  {" "}
                  08131044314
                </a>
                <p className="text-[10px] font-medium">Sales</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src="/icons/phone.svg" alt="phone" className="w-4" />
              <div className="">
                <a href="tel:+2349054350404" className="font-medium">
                  {" "}
                  09054350404
                </a>
                <p className="text-[10px] font-medium">Support</p>
              </div>
            </div>
          </div>
          <div className=" text-white tex-sm  bg-logo-blue px-4 py-4 rounded-md shadow flex-col flex gap-2">
            <div className="text-lg font-semibold text-logo-light mb-3 flex gap-2">
              <img src="/icons/phone.svg" alt="phone" className="w-4" />
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
          <div className=" text-white bg-logo-blue tex-sm    px-4 py-4 rounded-md shadow flex-col flex gap-2">
            <div className="text-lg font-semibold text-logo-light mb-3 flex gap-2">
              <img
                src="/icons/email-1.svg"
                alt="email"
                className="w-4  "
              />
              Email
            </div>
            <div className=" flex justify-between text-sm font-medium">
              <a href="mailto:jomartengineeringservices@gmail.com">
                Jomartengineeringservices@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
