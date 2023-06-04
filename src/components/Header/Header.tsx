import React from "react";
import { TEXTS } from "./constants";
import Image from "next/image";
import HeroImage from "@/assets/hero.webp";
import Logo from "@/assets/logo-no-background.webp";

export const Header = () => {
  return (
    <header>

      <div className="bg-primary flex flex-col items-center gap-y-7 px-6">
        <Image src={Logo} alt={TEXTS.LOGO_ALT} className="w-24 mt-7" />
        <h1 className="font-bold text-white text-4xl">
          {TEXTS.HEADER_TITLE}
        </h1>
        <p className="text-white">
          {TEXTS.HEADER_SUBTITLE}
        </p>
        <div>
          <div className="flex flex-row">
            <input className="rounded-md placeholder:text-[#828282] placeholder:px-4 h-11 basis-2/3" placeholder={TEXTS.INPUT_PLACEHOLDER} />
            <button className="text-white rounded-md h-11 basis-1/3 mx-4 bg-secondary">
              {TEXTS.BUTTON_TEXT}
            </button>
          </div>
          <p className="text-white text-sm mt-3">
            {TEXTS.INPUT_INFO}
          </p>
        </div>
        <Image src={HeroImage} alt={TEXTS.IMAGE_ALT} className="w-2/3 xl:w-2/5 scale-x-flip" priority={true} />
      </div>
      <svg viewBox="0 0 1440 320" className="bg-white sm:-mt-10 md:-mt-20 lg:-mt-40 xl:-mt-60">
        <path fill="#2F80ED" fillOpacity="1" d="M0,128L34.3,106.7C68.6,85,137,43,206,32C274.3,21,343,43,411,85.3C480,128,549,192,617,192C685.7,192,754,128,823,122.7C891.4,117,960,171,1029,213.3C1097.1,256,1166,288,1234,272C1302.9,256,1371,192,1406,160L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z" />
      </svg>
    </header>
  );
};
