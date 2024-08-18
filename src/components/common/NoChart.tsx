import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

export default function NoChart(): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <ChartBarSquareIcon className="text-grayDark font-bold size-24 pt-1 opacity-20 sm:size-32 md:size-32 xl:size-32" />
      </div>
      <h4 className="font-sans text-xs font-semibold mb-2 sm:text-md md:text-md xl:text-md">
        No Graph data available!
      </h4>
    </div>
  );
}
