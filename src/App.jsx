import Certificates from "./components/Certificates";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import Skill from "./components/Skill";
import About from "./components/About";
import Footer from "./components/Footer";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="">
        <About />
        <Certificates />
      </div>

      <div className="mt-10">
        <Skill />
      </div>

      <div>
        <Project />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
