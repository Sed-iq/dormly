import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Logo from "../../assets/dormly-high-resolution-logo-transparent.png";
import {
  usePasswordStore,
  repeatUsePasswordStore,
} from "../../stores/password_store";
import { Link, useNavigate } from "react-router-dom";
import { useLoadingStore } from "../../stores/loading_store";
import { useState } from "react";

export default () => {
  const passwordState = usePasswordStore();
  const navigate = useNavigate();
  const loadingStore = useLoadingStore();
  const repeatPasswordState = repeatUsePasswordStore();

  // Input
  // required states
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [nin, setNin] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-5 w-[550px] border-2 border-gray-300">
        <div className="mb-[2em]">
          <Link to={"/"}>
            <img srcSet={Logo} className="w-[5em] mb-[1em]" />
          </Link>
          <p className="text-xl text-gray-600 font-semibold">Join us</p>
          <p className="text-sm text-gray-500">
            Get location based housing with us.
          </p>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            Signup();
          }}
        >
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold text-gray-700">
                Email address
              </p>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 focus:border-gray-700 duration-100 outline-none border-gray-300 p-2 text-sm rounded-none "
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700">Full name</p>
              <input
                required
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border-2 focus:border-gray-700 duration-100 outline-none border-gray-300 p-2 text-sm rounded-none "
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700">NIN</p>
              <input
                required
                type="text"
                value={nin}
                onChange={(e) => setNin(e.target.value)}
                className="w-full border-2 focus:border-gray-700 duration-100 outline-none border-gray-300 p-2 text-sm rounded-none "
                placeholder="Enter your NIN"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700">Address</p>
              <input
                required
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border-2 focus:border-gray-700 duration-100 outline-none border-gray-300 p-2 text-sm rounded-none "
                placeholder="Where are you located"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">Password</p>
              <div className="flex space-x-2.5 items-center">
                <input
                  required
                  type={passwordState.show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <p className="text-sm font-semibold text-gray-700">
                Confirm Password again
              </p>
              <div className="flex space-x-2.5 items-center">
                <input
                  required
                  type={repeatPasswordState.show ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border-2 focus:border-gray-700 duration-100 outline-none border-gray-300 p-2 text-sm rounded-none "
                  placeholder="Confirm your password"
                />
                <button
                  onClick={() => {
                    repeatPasswordState.onClick(!repeatPasswordState.show);
                  }}
                  className="rounded-full border border-gray-300 p-2"
                >
                  {repeatPasswordState.show != true ? (
                    <FaEyeSlash className="text-gray-600 text-sm" />
                  ) : (
                    <FaEye className="text-gray-600 text-sm" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="text-white spoof-font w-full border-2 p-2 hover:bg-blue-800 bg-blue-700 hover:text-white border-blue-600 text-sm"
              >
                Signup
              </button>
            </div>
          </div>
        </form>
        <div className="mt-[1em]">
          <p className="text-sm">
            {" "}
            Already have an account?{" "}
            <span className="text-blue-700 underline font-bold">
              <Link to={"/signin"}>Click here to Sign in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  function Signup() {
    // Basic validation
    if (
      !email ||
      !fullName ||
      !nin ||
      !address ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    loadingStore.setLoading(true);
    loadingStore.setLoadingMessage("Signing up...");

    // Create profile object
    const profileDetails = {
      email,
      fullName,
      nin,
      address,
      password,
      createdAt: new Date().toISOString(),
    };

    // Store in localStorage as stringified JSON
    localStorage.setItem("profile-details", JSON.stringify(profileDetails));

    setTimeout(() => {
      loadingStore.setLoading(false);
      navigate("/profile");
    }, 6000);
  }
};
