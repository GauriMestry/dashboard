import { PlusIcon } from "@heroicons/react/16/solid";
import { ReactElement } from "react";
type ButtonProps = {
  buttonClick: () => void;
  bg: string;
  flexOption: string;
};
function Button({ buttonClick, bg, flexOption }: ButtonProps): ReactElement {
  return (
    <button
      onClick={buttonClick}
      className={`bg-${bg} rounded-xl text-sm font-semibold border-1 text-grayDark p-2 flex ${flexOption} items-center justify-between w-28 border-grayLight sm:text-lg md:text-lg xl:text-lg sm:font-bold md:font-bold xl:font-bold sm:p-4 md:p-4 xl:p-4 sm:w-32 md:w-48 xl:w-48 sm:border-2 md:border-2 xl:border-2`}
    >
      <PlusIcon className="size-4" />
      <span>Add Widget</span>
    </button>
  );
}

export default Button;
