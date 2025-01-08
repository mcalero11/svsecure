import faqs from "@/core/faqs.json";
import { TEXTS } from "./constants";
import Link from "next/link";

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
      <div className="flex flex-col flex-none items-center justify-center">
        <h3 className="text-xl font-medium text-center mb-4">
          ¿Te gusta el proyecto?
        </h3>
        <Link
          href="https://github.com/mcalero11/svsecure"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 fill-current"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span>Danos una estrella en GitHub</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
