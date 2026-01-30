import FaqCard from "../components/cards/FaqCard";
import ReadyToStart from "../components/cards/ReadyToStart";
const Faq = () => {
  return (
    <div className="">
      <div className="container mx-auto my-12">
        <h2 className="font-bold text-primary text-3xl text-center mb-4 ">
          Frequently Asked Questions
        </h2>
        <p className="font-medium text-center">
          Find answers to common questions about our services and more.
        </p>
      </div>
      <div className="  py-5">
        <div className="container mx-auto px-4 flex flex-col gap-4 ">
          <FaqCard items={installationQAndA} />
          <FaqCard items={maintenanceQAndA} />
          <FaqCard items={pricingQAndA} />
          <FaqCard items={questionsAndAnswers} />
        </div>
      </div>
      <ReadyToStart />
    </div>
  );
};
const installationQAndA: Record<string, string>[] = [
  {
    ques: "What services does Jomart Engineering provide?",
    ans: "Jomart Engineering delivers end-to-end building construction solutions, covering residential and commercial projects, civil and structural works, renovations, finishing, and professional engineering consultancy—all handled with precision and care.",
  },
  {
    ques: "Do you handle complete building construction projects?",
    ans: "Yes. From concept to completion, we manage every stage of your project—planning, coordination, construction, quality control, and final delivery—so you can build with confidence.",
  },
  {
    ques: "What types of buildings do you construct?",
    ans: "We construct high-quality residential homes, apartment buildings, office complexes, commercial facilities, warehouses, and mixed-use developments tailored to client needs.",
  },
  {
    ques: "Do you assist with project planning and approvals?",
    ans: "Absolutely. We support clients with project planning, budgeting, scheduling, and regulatory compliance, ensuring a smooth and stress-free construction process.",
  },
];

const maintenanceQAndA: Record<string, string>[] = [
  {
    ques: "Do you offer renovation and remodeling services?",
    ans: "Yes. We revitalise existing buildings through expert renovations, remodeling, and refurbishments that enhance functionality, aesthetics, and long-term value.",
  },
  {
    ques: "Can you handle structural repairs and maintenance?",
    ans: "Certainly. Our team delivers reliable structural repairs, concrete works, and ongoing building maintenance to keep properties safe, durable, and compliant.",
  },
  {
    ques: "Do you provide electrical and plumbing services?",
    ans: "Yes. Our Mechanical, Electrical, and Plumbing (MEP) services cover professional installations, upgrades, and maintenance for both new and existing buildings.",
  },
  {
    ques: "Do you offer engineering consultancy services?",
    ans: "Yes. We provide expert engineering consultancy, offering practical guidance, technical insights, and quality assurance to help clients make informed decisions.",
  },
];

const pricingQAndA: Record<string, string>[] = [
  {
    ques: "How long does a typical construction project take?",
    ans: "Project timelines vary based on size and complexity, but we provide clear schedules upfront and are committed to delivering every project on time and within scope.",
  },
  {
    ques: "Do you provide cost estimates before starting a project?",
    ans: "Yes. We deliver transparent, detailed cost estimates to help clients plan effectively and avoid unexpected expenses.",
  },
  {
    ques: "Do you handle material procurement?",
    ans: "Yes. We source and procure high-quality construction materials from trusted suppliers, ensuring durability, value for money, and timely delivery.",
  },
  {
    ques: "Are your engineers and site workers qualified?",
    ans: "Absolutely. Our skilled engineers and site teams are experienced professionals who uphold strict safety standards and industry best practices.",
  },
];

const questionsAndAnswers: Record<string, string>[] = [
  {
    ques: "Can I customize my building design?",
    ans: "Yes. We collaborate closely with clients and design partners to customise layouts, finishes, and specifications that reflect your vision and lifestyle.",
  },
  {
    ques: "How do I request a quotation from Jomart Engineering?",
    ans: "Simply contact us via our website, email, or phone. We’ll arrange a consultation or site visit to provide a clear, accurate, and tailored quotation.",
  },
  {
    ques: "Why should I choose Jomart Engineering?",
    ans: "Jomart Engineering stands for quality, reliability, and excellence. With professional project management, skilled workmanship, and a customer-first approach, we turn building ideas into lasting realities.",
  },
];

export default Faq;
