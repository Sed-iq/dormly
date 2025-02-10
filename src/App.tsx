import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home/home";
import Sign_up from "./screens/auth/sign_up";
import Sign_in from "./screens/auth/sign_in";

export default () => {
  return <div className="">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Sign_up/>}/>
        <Route path="/signin" element={<Sign_in/>}/>
      </Routes>
    </Router>
  </div>;
};
