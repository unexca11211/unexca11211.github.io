import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import { Outlet } from "react-router-dom";
import "./Index.css"
export default function Root() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
