import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Profile from "../assets/images/image.jpeg";
import { Typewriter } from "react-simple-typewriter";
import Contact from "./Contact";
import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative w-full min-h-screen flex items-center justify-center px-6 lg:px-20 py-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden">
        <div
          data-aos="fade-up "
          className="flex flex-col-reverse lg:flex-row items-center justify-center gap-20 max-w-7xl w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col space-y-5 max-w-xl text-center lg:text-left"
          >
            <h6 className="text-4xl font-semibold text-orange-300">Hi, I'm</h6>
            <h4 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
              Christian J.
            </h4>
            <p className="text-3xl font-bold text-orange-400">
              <Typewriter
                words={["I'm a FRONTEND DEVELOPER"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={20}
                delaySpeed={1500}
              />
            </p>
            <p className="text-slate-400 text-md leading-relaxed">
              Passionate about crafting engaging user experiences with modern
              web technologies. Let's build something amazing together.
            </p>

            <div className="flex justify-center lg:justify-start mt-4 space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin, Github].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.3, y: -5 }}
                    className="transition-all duration-300"
                  >
                    <Icon
                      size={32}
                      strokeWidth={2}
                      color="#f06b24"
                      className="hover:drop-shadow-glow"
                    />
                  </motion.a>
                )
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center lg:justify-start gap-4 mt-6">
              <button className="px-6 py-2 border-2 border-orange-500 rounded-3xl text-orange-500 font-semibold w-44 transition-all duration-300 hover:bg-orange-500 hover:text-black hover:scale-105 hover:shadow-xl">
                Download CV
              </button>
              <button
                onClick={openModal}
                className="px-6 py-2 border-2 border-orange-500 rounded-3xl text-black font-semibold bg-orange-500 w-44 transition-all duration-300 hover:bg-transparent hover:text-orange-500 hover:scale-105 hover:shadow-xl"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative flex flex-col items-center space-y-6"
          >
            <div
              data-aos="fade-left"
              className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-orange-500 shadow-orange-glow shadow-lg"
            >
              <img
                src={Profile}
                alt="Christian J"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <Contact isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default About;
