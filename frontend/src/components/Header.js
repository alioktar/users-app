import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ title }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-400 mb-3 w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              {title}
            </a>
            <button
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center ${
              navbarOpen ? " flex" : " hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  href="https://github.com/alioktar"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className=" text-lg leading-lg text-white opacity-75"
                  />
                  <span className="ml-2">Github</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  href="https://www.linkedin.com/in/alioktar/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-lg leading-lg text-white opacity-75"
                  />
                  <span className="ml-2">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
