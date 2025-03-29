import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import App from "./App";
import Shop from "./pages/shop";

const RoutesConf = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default RoutesConf;
