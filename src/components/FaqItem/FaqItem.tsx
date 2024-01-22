type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <>
      <p>{question}</p>
      <p>{answer}</p>
    </>
  );
};

export default FaqItem;
