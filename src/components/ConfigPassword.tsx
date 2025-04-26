import usePasswordStore from "@/hooks/store";
import generatePassword from "@/utils/generatePassword";
import { useState } from "react";
import Difficulty from "./Difficulty";
import Option from "./Option";
import SliderWords from "./SliderWords";

export default function ConfigPassword() {
  const [buttonHover, setButtonHover] = useState(false);
  const config = usePasswordStore((state) => state.config);
  const setNewPassword = usePasswordStore((state) => state.setNewPassword);
  const setPasswordCopied = usePasswordStore(
    (state) => state.setPasswordCopied,
  );
  return (
    <>
      <SliderWords />
      <div className="!mb-[2rem] !space-y-[1rem]">
        <Option config="uppercase" text="Include Uppercase Letters" />
        <Option config="lowercase" text="Include LowerCase Letters" />
        <Option config="numbers" text="Include Numbers" />
        <Option config="symbols" text="Include Symbols" />
      </div>
      <div className="bg-gray-850 tablet:!px-[2rem] tablet:!py-[1rem] flex items-center justify-between !p-[1rem]">
        <Difficulty strength={config.length} />
      </div>
      <button
        onClick={() => {
          setNewPassword(generatePassword(config));
          setPasswordCopied(false);
        }}
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
        className="!mt-[1rem] tablet:!mt-[2rem] flex w-full cursor-pointer items-center justify-center gap-[1em] !border-2 !bg-green-200 !px-[6rem] !py-[1rem] !text-gray-800 outline-0 hover:!border-green-200 hover:!bg-transparent hover:!text-green-200"
      >
        <p>GENERATE</p>
        <svg
          className="flex items-center justify-center"
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={buttonHover ? "fill-green-200" : "fill-gray-800"}
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          />
        </svg>
      </button>
    </>
  );
}
