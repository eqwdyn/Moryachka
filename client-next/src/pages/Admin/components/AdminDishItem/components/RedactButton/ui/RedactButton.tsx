import type { FC } from "react";
import cl from "./RedactButton.module.css";
import Image from "next/image";

interface Props {
  redactHandle: () => void;
}

export const RedactButton: FC<Props> = ({ redactHandle }) => {
  return (
    <button className={cl.button} onClick={redactHandle}>
      {/* <RedactIcon /> */}
      <Image
        src="/svg/redact.svg"
        width={25}
        height={25}
        alt="Редактировать"
        loading="eager"
      />
    </button>
  );
};
