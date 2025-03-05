import "../assets/spinkit.min.css";
import { useLoadingStore } from "../stores/loading_store";

export default () => {
    const msg = useLoadingStore().loading_message
  return (
    <div className="w-full fixed h-full flex items-center justify-center bg-[#d9d9d968] ">
      <div className="flex flex-col items-center">
        <div className="sk-fold">
          <div className="sk-fold-cube"></div>
          <div className="sk-fold-cube"></div>
          <div className="sk-fold-cube"></div>
          <div className="sk-fold-cube"></div>
        </div>
        <p className="mt-3">{msg}</p>
      </div>
    </div>
  );
};
