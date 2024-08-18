import { ReactElement, ReactNode } from "react";

export default function Card({
  Component,
}: {
  Component: ReactNode;
}): ReactElement {
  return (
    <div className="shadow-lg bg-white rounded-2xl m-4 hover:shadow-2xl h-44 w-80 p-2 sm:h-60 md:h-60 xl-h-60 sm:w-[440px] md:w-[440px] xl:w-[440px] sm:p-6 md:p-6 xl:p-6">
      {Component}
    </div>
  );
}
