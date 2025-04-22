import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "../App";
import { ROUTES } from "./routesConfig";
import {
  Home,
  Shop,
  About,
  Contact,
  ProductDetails,
  AddToCart,
  LoginPage,
  SignupPage,
  ForgotPasswordPage,
} from "@/pages";

const MainRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<App />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SHOP} element={<Shop />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.PRODUCT} element={<ProductDetails />} />
            <Route path={ROUTES.ADD_TO_CART} element={<AddToCart />} />

            {/* Auth Pages */}
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            <Route
              path={ROUTES.FORGOT_PASSWORD}
              element={<ForgotPasswordPage />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MainRoutes;
