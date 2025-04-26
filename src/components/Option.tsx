import usePasswordStore from "@/hooks/store";
import { useEffect, useState } from "react";

type Props = {
  config: string;
  text: string;
};

export default function Option({ config, text }: Props) {
  const [isCheck, setIsCheck] = useState(false);
  const addConfig = usePasswordStore((state) => state.addConfig);
  const deleteConfig = usePasswordStore((state) => state.deleteConfig);

  useEffect(() => {
    if (isCheck) {
      addConfig(config);
    } else {
      deleteConfig(config);
    }
  }, [addConfig, config, deleteConfig, isCheck]);

  return (
    <div className="flex gap-4">
      <div
        onClick={() => {
          setIsCheck(!isCheck);
        }}
        className={`${isCheck ? "!border-green-200 bg-green-200" : "!border-white"} flex h-[1.25em] w-[1.25em] cursor-pointer items-center justify-center !border-2 hover:!border-green-200`}
      >
        {isCheck && (
          <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="#18171F"
              strokeWidth="3"
              fill="none"
              d="M1 5.607 4.393 9l8-8"
            />
          </svg>
        )}
      </div>
      <p>{text}</p>
    </div>
  );
}
