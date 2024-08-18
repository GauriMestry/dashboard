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
      className={`bg-${bg} rounded-xl text-sm font-semibold border-1 text-grayDark p-2 flex ${flexOption} items-center justify-between w-28 border-grayLight sm:text-md md:text-md xl:text-md sm:font-bold md:font-bold xl:font-bold sm:w-32 md:w-32 xl:w-32 sm:border-2 md:border-2 xl:border-2`}
    >
      <PlusIcon className="size-4" />
      <span>Add Widget</span>
    </button>
  );
}

export default Button;
