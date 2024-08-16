import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

export default function NoChart(): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <ChartBarSquareIcon className="text-grayDark font-bold size-24 pt-1 opacity-20 sm:size-48 md:size-48 xl:size-48" />
      </div>
      <h4 className="font-sans text-xs font-semibold mb-2 sm:text-lg md:text-lg xl:text-lg">
        No Graph data available!
      </h4>
    </div>
  );
}
