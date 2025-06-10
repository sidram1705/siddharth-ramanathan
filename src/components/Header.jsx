/**
 * @copyright 2025 siddharthramanathan
 * @license Apache-2.0
 */

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 flex items-center z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-900/90"
          : "bg-gradient-to-b from-zinc-900 to-zinc-900/0"
      }`}
    >
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr] transition-opacity duration-300">
        {/* Left: Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 transition-opacity duration-300"
        >
          <img
            src="/images/logo.ico"
            width={40}
            height={40}
            alt="Siddharth Ramanathan"
            className={`${isScrolled ? "opacity-20 hover:opacity-100" : "opacity-100"}`}
          />
        </a>

        {/* Center: Menu icon and Navbar */}
        <div className="relative md:justify-self-center">
          <button
            className={`menu-btn md:hidden transition-opacity duration-300 ${
              isScrolled ? "opacity-20 hover:opacity-100" : "opacity-100"
            }`}
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        {/* Right: Contact */}
        <a
          href="#contact"
          className={`btn btn-secondary max-md:hidden md:justify-self-end transition-opacity duration-300 ${
            isScrolled ? "opacity-20 hover:opacity-100" : "opacity-100"
          }`}
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
