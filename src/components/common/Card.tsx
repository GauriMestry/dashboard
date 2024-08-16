import { ReactElement, ReactNode } from "react";

export default function Card({
  Component,
}: {
  Component: ReactNode;
}): ReactElement {
  return (
    <div className="shadow-lg bg-white rounded-2xl m-4 hover:shadow-2xl h-44 w-80 p-2 sm:h-80 md:h-80 xl-h-80 sm:w-[605px] md:w-[605px] xl:w-[605px] sm:p-6 md:p-6 xl:p-6">
      {Component}
    </div>
  );
}
