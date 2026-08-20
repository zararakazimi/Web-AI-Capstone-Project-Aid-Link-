import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-900 via-blue-700 to-indigo-900 border-t border-blue-500 text-white py-3 mt-0">
      <div className="max-w-5xl mx-auto px-5 text-center">

        <div className="flex flex-wrap justify-center items-center gap-6 mb-3">

          <a
            href="mailto:zararakazim@gmail.com"
            className="flex items-center gap-2 hover:text-sky-200 transition"
          >
            <FiMail />
            Email
          </a>

          <a
            href="https://github.com/zararakazimi"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-sky-200 transition"
          >
            <FiGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/zarara-kazimi-4aa513411"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-sky-200 transition"
          >
            <FiLinkedin />
            LinkedIn
          </a>

          <p className="flex items-center gap-2">
            <FiMapPin />
            Kabul, Afghanistan
          </p>

        </div>

        <p className="text-sm text-blue-100">
          © 2026 Zarara Kazimi. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;