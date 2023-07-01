"use client";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <Accordion className="w-full bg-transparent border-0 shadow-none">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
        className="px-0"
      >
        <h3 className="font-medium">{question}</h3>
      </AccordionSummary>
      <AccordionDetails className="py-0">
        <p dangerouslySetInnerHTML={{ __html: answer }} />
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqItem;
