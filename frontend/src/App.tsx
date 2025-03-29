import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Header />
      <div className="mb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
