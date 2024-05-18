import NavBar from "./NavBar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <section className="mb-0 dark">
      <ToastContainer />
      <NavBar />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
