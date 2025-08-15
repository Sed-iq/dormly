import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home/home";
import Loading from "./components/loading";
import { useLoadingStore } from "./stores/loading_store";
import Sign_up from "./screens/auth/sign_up";
import Sign_in from "./screens/auth/sign_in";
import ProfileScreen from "./screens/profile";

export default () => {
  const isLoading = useLoadingStore().isLoading
  return (
    <div className="">
     {(isLoading)?  <Loading /> : null}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Sign_up />} />
          <Route path="/signin" element={<Sign_in />} />
          <Route path="/profile" element={< ProfileScreen />} />
          {/* <Route path="/listings" element={<Listings />} /> */}
        </Routes>
      </Router>
    </div>
  );
};
