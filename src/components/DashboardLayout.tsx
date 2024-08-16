import { Link } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex items-center justify-center h-screen bg-blueBg">
      <div className="flex items-center justify-center h-60 w-96 bg-indigoDark rounded-xl">
        <Link to={"/home/dashboardV2"}>
          <button className="bg-grayLight h-fit w-fit flex flex-row-reverse text-md font-bold text-indigoDark border-2 border-greyLight rounded-lg p-4">
            Click to go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DashboardLayout;
