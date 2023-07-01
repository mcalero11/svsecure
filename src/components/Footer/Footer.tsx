import faqs from "@/core/faqs.json";
import { TEXTS } from "./constants";
import FaqItem from "../FaqItem";
import Image from "next/image";
import PaypalButton from "@/assets/paypal-button.webp";

const Footer = () => {
  return (
    <footer className="bg-secondaryBg px-6">
      <div className="flex flex-col md:flex-row py-6">
        <div>
          <h2 className="text-2xl font-medium">{TEXTS.TITLE}</h2>
          <div className="flex flex-col mt-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center py-6 md:py-0">
          <h3 className="text-xl font-medium text-center">
            {TEXTS.DONATION_TEXT_1}
            <br />
            {TEXTS.DONATION_TEXT_2}
          </h3>
          <Image src={PaypalButton} alt={TEXTS.DONATION_BUTTON_ALT} className="mt-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
