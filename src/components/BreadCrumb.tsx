import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function BreadCrumb(): ReactElement {
  return (
    <nav aria-label="breadcrumb" className="w-max">
      <ol className="flex flex-wrap items-center w-full px-4 py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
        <li className="flex items-center font-sans text-lg cursor-pointer text-blue-gray-900 font-bold">
          <Link to="/" className="opacity-60">
            Home
          </Link>
          <ChevronRightIcon className="text-grayDark size-6 pt-1 opacity-60" />
        </li>
        <li className="flex items-center font-sans text-lg font-bold cursor-pointer text-indigoDark">
          <Link to="/home/dashboardV2">Dashboard V2 </Link>
        </li>
      </ol>
    </nav>
  );
}
