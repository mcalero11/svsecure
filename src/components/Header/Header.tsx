import { TEXTS } from "./constants";
import Image from "next/image";
import HeroImage from "@/assets/hero.webp";
import Logo from "@/assets/logo-no-background.webp";
import Wave from "@/components/Wave";

const Header = () => {
  return (
    <header>
      <div className="bg-primary flex flex-col items-center gap-y-7 px-6">
        <Image src={Logo} alt={TEXTS.LOGO_ALT} className="w-24 mt-7" />
        <h1 className="font-bold text-white text-4xl text-center">
          {TEXTS.HEADER_TITLE}
        </h1>
        <p className="text-white text-center">{TEXTS.HEADER_SUBTITLE}</p>
        <div>
          <div className="flex flex-col sm:flex-row">
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="rounded-md placeholder:text-gray-500 placeholder:px-4 h-11 mb-2 sm:basis-2/3 sm:mb-0 sm:mr-2"
              placeholder={TEXTS.INPUT_PLACEHOLDER}
            />
            <button className="text-white rounded-md h-11 bg-secondary sm:basis-1/3 sm:mx-4">
              {TEXTS.BUTTON_TEXT}
            </button>
          </div>
          <p className="text-white text-sm mt-3">{TEXTS.INPUT_INFO}</p>
        </div>
      </div>
      <div className={"relative"}>
        <Wave additionalClasses={"absolute top-0"} />
        <Image
          src={HeroImage}
          alt={TEXTS.IMAGE_ALT}
          className="mx-auto scale-x-flip pt-7 w-3/5 md:w-2/5 2xl:w-1/3"
          priority={true}
        />
      </div>
    </header>
  );
};

export default Header;
