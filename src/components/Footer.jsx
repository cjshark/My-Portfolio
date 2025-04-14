import {
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiFacebook,
  SiInstagram,
  SiTelegram,
} from "react-icons/si";

import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-white transition duration-300 text-2xl"
            aria-label="LinkedIn"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-white transition duration-300 text-2xl"
            aria-label="GitHub"
          >
            <SiGithub />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-orange-500 hover:text-white transition duration-300 text-2xl"
            aria-label="Email"
          >
            <SiGmail />
          </a>
          <a
            aria-label="Facebook"
            className="text-orange-500 hover:text-white transition duration-300 text-2xl"
            href=""
          >
            <SiFacebook />
          </a>

          <a
            aria-label="Instagram"
            className="text-orange-500 hover:text-white transition duration-300 text-2xl"
            href=""
          >
            <SiInstagram />
          </a>

          <a
            aria-label="Telegram"
            className="text-orange-500 hover:text-white transition duration-300 text-2xl"
            href=""
          >
            <SiTelegram />
          </a>

          <a
            aria-label="Twitter"
            className="text-orange-500 hover:text-white transition duration-300 text-2xl"
            href=""
          >
            <FaTwitter />
          </a>
        </div>

        <div className="text-center">
          <p className="text-sm mb-2">
            &copy; 2025 Christian J. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">Made with ❤️ and React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
