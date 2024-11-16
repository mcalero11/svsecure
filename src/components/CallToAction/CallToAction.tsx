import { TEXTS } from "./constants";

const CallToAction = () => {
  return (
    <article className="flex flex-col items-center px-6">
      <h3 className="text-center mb-5 sm:w-2/4">{TEXTS.INFO}</h3>
      <button className="text-white rounded-md h-11 bg-primary w-full sm:w-48">
        {TEXTS.CALL_TO_ACTION}
      </button>
    </article>
  );
};

export default CallToAction;
