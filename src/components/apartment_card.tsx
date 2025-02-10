import { ReactNode } from "react";
import {
  FaFan,
  FaLightbulb,
  FaPeopleGroup,
  FaSpoon,
  FaWifi,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default ({
  image,
  title,
  details,
  id,
}: {
  image: string;
  title: string;
  details: string;
  id: string;
}) => {
  return (
    <div className="w-full rounded h-[17em] overflow-y-auto flex border border-gray-300">
      <div className="flex-[3] h-full overflow-hidden">
        <img srcSet={image} className="" />
      </div>
      <div className="flex-[4] px-4 py-6">
        <p className="text-3xl font-sans pb-2 ">{title}</p>
        <p className="text-lg font-medium mb-2">{details}</p>
        <div className="flex items-start justify-start mb-[1.2em] flex-wrap">
          <FeatureView
            icon={<FaLightbulb className="text-xs text-gray-600" />}
            feature_name="Electricity"
          />
          <FeatureView
            icon={<FaWifi className="text-xs text-gray-600" />}
            feature_name="Stable network"
          />
          <FeatureView
            icon={<FaSpoon className="text-xs text-gray-600" />}
            feature_name="Kitchen"
          />
          <FeatureView
            icon={<FaFan className="text-xs text-gray-600" />}
            feature_name="Air condition"
          />
          <FeatureView
            icon={<FaPeopleGroup className="text-xs text-gray-600" />}
            feature_name="Good neighborhood"
          />
        </div>
        <div>
          <button className="bg-transparent hover:bg-blue-800 hover:text-white duration-300 mb-[0.8em] text-sm text-blue-800 rounded-none border-2 border-blue-700 px-3 py-1">
            {" "}
            <Link to={"/signup"}>See More </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

function FeatureView({
  icon,
  feature_name,
}: {
  icon: ReactNode;
  feature_name: string;
}) {
  return (
    <div className="flex mb-3 mr-3 bg-[#dbdbff89] rounded-full max-w-fit px-2.5 py-1 space-x-1">
      {icon}
      <p className="text-xs text-gray-700">{feature_name}</p>
    </div>
  );
}
