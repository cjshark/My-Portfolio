import { useState } from "react";
import { Menu, X } from "lucide-react";
import Contact from "./Contact";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="sticky top-0 h-20 max-w-full z-20 py-5 px-10 backdrop-blur-lg border-b-2 border-orange-500">
        <div className="flex justify-between items-center relative">
          <span className="flex items-center text-xl font-bold text-orange-500">
            My Portfolio
          </span>

          <ul className="hidden lg:flex space-x-12 text-orange-500 text-md items-center justify-center">
            <a
              href="#about"
              className="relative inline-block hover:font-semibold transition-all duration-300 ease-in-out transform hover:scale-110
    before:content-[''] before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-orange-500
    before:transition-all before:duration-300 hover:before:w-full"
            >
              About
            </a>

            <a
              href="#Skills"
              className="relative inline-block hover:font-semibold transition-all duration-300 ease-in-out transform hover:scale-110
    before:content-[''] before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-orange-500
    before:transition-all before:duration-300 hover:before:w-full"
            >
              Skills
            </a>

            <a
              href="#Project"
              className="relative inline-block hover:font-semibold transition-all duration-300 ease-in-out transform hover:scale-110
    before:content-[''] before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-orange-500
    before:transition-all before:duration-300 hover:before:w-full"
            >
              Projects
            </a>

            <button
              onClick={openModal}
              className="border-2 border-orange-500 text-orange-500 text-md bg-transparent rounded-3xl px-5 py-2 font-semibold hover:shadow-sm hover:bg-orange-500 hover:text-black hover:shadow-orange-300 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Contact me
            </button>
          </ul>

          <div className="lg:hidden z-30">
            <button onClick={toggleMenu}>
              <Menu size={28} color="#f06b24" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-40 z-10 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg border-l border-orange-500 p-6 z-20 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={toggleMenu}>
            <X size={28} color="#f06b24" />
          </button>
        </div>

        <div className="mt-10 flex flex-col space-y-6 text-orange-500 text-md">
          <a
            className="relative inline-block hover:font-semibold transition-all duration-300 ease-in-out transform hover:scale-110"
            href="#about"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            className="relative inline-block hover:font-semibold transition-all duration-300 ease-in-out transform hover:scale-110"
            href="#Skills"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            className="relative inline-block hover:font-semibold transition-all duration-300 ease-in-out transform hover:scale-110"
            href="#Project"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <button
            className="border-2 border-orange-500 text-orange-500 text-md bg-transparent rounded-3xl px-5 py-2 font-semibold hover:shadow-sm hover:shadow-orange-400  hover:bg-orange-600 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={toggleMenu}
          >
            {" "}
            Contact me
          </button>
        </div>
      </div>
      <Contact isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
