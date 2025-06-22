import React, { useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund, as long as it is in original condition.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 5-7 business days within the continental US. International shipping may vary.",
  },
  {
    question: "Do you offer technical support?",
    answer:
      "Yes! Our support team is available 24/7 via email and live chat to help with any technical questions.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Orders can be changed or cancelled within 2 hours of placing them. Please contact our support immediately.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-gray-300 py-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{question}</h3>
        <span className="text-2xl select-none">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <p className="mt-2 text-gray-600 leading-relaxed">{answer}</p>}
    </div>
  );
};

const Faq = () => {
  return (
    <section className="my-20 w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div>
        {faqs.map(({ question, answer }, idx) => (
          <FAQItem key={idx} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
