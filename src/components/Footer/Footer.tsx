import faqs from "@/core/faqs.json";
import { TEXTS } from "./constants";
import Image from "next/image";
import PaypalButton from "@/assets/paypal-button.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 lg:flex-row py-6 bg-secondaryBg px-6 md:px-16">
      <div className="grow">
        <h2 className="text-2xl font-medium">{TEXTS.TITLE}</h2>
        <Accordion className="flex flex-col mt-4" collapsible type="single">
          {faqs.map((faq, index) => (
            <AccordionItem value={`value-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-medium text-left pt-3.5 pb-3">
                <h6>{faq.question}</h6>
              </AccordionTrigger>
              <AccordionContent>
                <p
                  className="pl-2"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="flex flex-col flex-none items-center">
        <h3 className="text-xl font-medium text-center">
          {TEXTS.DONATION_TEXT_1}
          <br />
          {TEXTS.DONATION_TEXT_2}
        </h3>
        <Image
          src={PaypalButton}
          alt={TEXTS.DONATION_BUTTON_ALT}
          className="mt-4"
        />
      </div>
    </footer>
  );
};

export default Footer;
