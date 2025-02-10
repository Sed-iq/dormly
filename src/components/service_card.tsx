import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: ReactNode;
}) => {
  return (
    <div className="w-[25em] mb-4 mr-5 space-y-3 border-2 border-gray-500 p-2">
      {icon}
      <p className="font-bold text-xl">{title}</p>
      {description}
      <div>
        <button className="border-2 p-2  hover:bg-gray-800 hover:text-white text-xs">
        <Link to={"/signup"}>
          Get started
        </Link>
        </button>
      </div>
    </div>
  );
};
