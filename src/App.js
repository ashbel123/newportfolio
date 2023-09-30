import Layout from "./components/Layout/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import TechStack from "./pages/TechStack/TechStack";
import ScrollToTop from "react-scroll-to-top";
import OtherWorks from "./pages/OtherWorks/OtherWorks";
import Projects from "./pages/Projects/Projects";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <TechStack />
          <Projects />
          <OtherWorks />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <h4 className="text-center">Made by ashbel_raj &copy; 2023</h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "black", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
