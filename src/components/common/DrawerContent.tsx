import { ReactElement, useState } from "react";
import Cwpm from "../tabs/Cwpm";

type Tab = {
  id: number;
  label: string;
  content: React.ReactNode;
};

const tabs: Tab[] = [
  { id: 1, label: "CSPM", content: <Cwpm id={1} /> },
  { id: 2, label: "CWPP", content: <Cwpm id={2} /> },
  { id: 3, label: "Image", content: <Cwpm id={3} /> },
  { id: 4, label: "Ticket", content: <Cwpm id={4} /> },
];

export default function DrawerContent(): ReactElement {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="flex flex-col m-5">
      <h6 className="font-sans font-xs text-xs sm:text-lg md:text-lg xl:text-lg sm:font-semibold md:font-semibold xl:font-semibold">
        Personalise your dashboard by adding the follwing widget
      </h6>
      <div className="w-88 sm:w-1/2 md:w-1/2 xl:w-1/2 items-center mt-5">
        <div className="flex justify-center gap-4 md:gap-8 sm:gap-8 xl:gap-8 sm:justify-start md:justify-start xl:justify-start border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-4 py-2 font-semibold text-sm sm:font-bold md:font-bold xl:font-bold font-sm sm:text-lg md:text-lg xl:text-lg ${
                activeTab === tab.id
                  ? "border-b-2 sm:border-b-4 md:border-b-4 xl:border-b-4 border-widgetText text-widgetText"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-4">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id} className="text-sm text-gray-700">
                  {tab.content}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
