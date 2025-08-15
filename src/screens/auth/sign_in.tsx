import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Logo from "../../assets/dormly-high-resolution-logo-transparent.png";
import { usePasswordStore } from "../../stores/password_store";
import { Link, useNavigate } from "react-router-dom";
import { useLoadingStore } from "../../stores/loading_store";
import IMG0250815WA0016 from "../../assets/images/IMG-20250815-WA0016.jpg"

export default () => {
  const passwordState = usePasswordStore();
  const loadingStore = useLoadingStore();
  const navigate = useNavigate();

  return (
    <div 
    style={{
      background: `url(${IMG0250815WA0016}) center`,
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover'
    }}
    className="flex h-screen items-center justify-center">
      <div className="p-5 w-[550px] bg-white border-2 border-gray-300">
        <div className="mb-[2em]">
          <Link to={"/"}>
            <img srcSet={Logo} className="w-[5em] mb-[1em]" />
          </Link>
          <p className="text-xl text-gray-600 font-semibold">Welcome back</p>
          <p className="text-sm text-gray-500">Please signin to continue.</p>
        </div>
        <div className="space-y-5">
          <div>
            <p className="text-sm font-semibold text-gray-700">Email address</p>
            <input
              type="email"
              className="w-full border-2 focus:border-gray-700 duration-100 outline-none border-gray-300 p-2 text-sm rounded-none "
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700">Password</p>
            <div className="flex space-x-2.5 items-center">
              <input
                type={passwordState.show ? "text" : "password"}
                className="w-full border-2 focus:border-gray-700 duration-100 outline-none border-gray-300 p-2 text-sm rounded-none "
                placeholder="Enter your password"
              />
              <button
                onClick={() => {
                  passwordState.onClick(!passwordState.show);
                }}
                className="rounded-full border border-gray-300 p-2"
              >
                {passwordState.show != true ? (
                  <FaEyeSlash className="text-gray-600 text-sm" />
                ) : (
                  <FaEye className="text-gray-600 text-sm" />
                )}
              </button>
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                Signin();
              }}
              className=" text-white spoof-font w-full border-2 p-2  hover:bg-blue-800 bg-blue-700 hover:text-white border-blue-600 text-sm"
            >
              Signin
            </button>
          </div>
        </div>
        <div className="mt-[1em]">
          <p className="text-sm">
            {" "}
            Don't have an account?{" "}
            <span className="text-blue-700 underline font-bold">
              <Link to={"/signup"}>Click here to Get started</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  function Signin() {
    loadingStore.setLoading(true);
    loadingStore.setLoadingMessage("Please wait...");
    setTimeout(() => {
      loadingStore.setLoading(false);
      navigate("/profile")
    }, 3500);
  }
};
