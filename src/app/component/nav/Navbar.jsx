"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 70);

      if (currentScrollY > 220) {
        if (currentScrollY > lastScrollY.current) {
          setHidden(true);
          setMenuOpen(false); // ferme le menu si on scrolle vers le bas
        } else if (lastScrollY.current > currentScrollY + 30) {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour fermer la navbar
  const closeNavbar = () => {
    setHidden(true);
    setMenuOpen(false);
  };

  return (
    <nav className="relative z-50" id="top">
      <div
        className={`fixed py-4 flex justify-center items-center w-full transition-all duration-300 ${
          scrolled ? "bg-[#303030]/50 backdrop-blur-md shadow-md" : ""
        }`}
        style={{
          transform: hidden ? "translateY(-200%)" : "translateY(0)",
        }}
      >
        {/* Desktop Navbar */}
        <ul
          className={`hidden md:flex w-full justify-around items-center max-w-7xl px-6 py-2 transition-colors duration-300 ${
            scrolled ? "text-emerald-50" : "text-white"
          }`}
        >
          {/* Gauche */}
          <div
            className={`flex justify-between items-center text-center w-[30%] gap-6 ${
              scrolled ? "text-emerald-50" : "hidden"
            }`}
          >
            <li className="transition-transform duration-300 hover:font-bold hover:scale-110">
              <Link href="#artOratoire">Art oratoire</Link>
            </li>
            <li className="transition-transform duration-300 hover:font-bold hover:scale-110">
              <Link href="#accrochage">Accrochage scolaire</Link>
            </li>
          </div>

          {/* Logo milieu */}
          <li
            className={`hover:scale-110 transition-transform duration-300 relative flex justify-center items-center text-center w-[30%] font-bold cursor-pointer ${
              scrolled ? "text-emerald-50" : "hidden"
            }`}
          >
            <Link className="logo absolute translate-y-6" href="#top">
              <div></div>
            </Link>
          </li>

          {/* Droite */}
          <div
            className={`flex justify-between items-center text-center w-[30%] gap-6 ${
              scrolled ? "text-emerald-50" : "hidden"
            }`}
          >
            <li className="transition-transform duration-300 hover:font-bold hover:scale-110">
              <Link href="#about" className="first-letter:uppercase">
                à propos
              </Link>
            </li>
            <li className="transition-transform duration-300 hover:font-bold hover:scale-110">
              <Link href="#tarifs" className="first-letter:uppercase">
                Tarifs
              </Link>
            </li>

            {/* Bouton pour fermer la navbar */}
            <button
              onClick={closeNavbar}
              className="absolute top-[120%] left-[96%] text-4xl text-white hover:text-amber-400 transition-transform hover:scale-110"
            >
              <i class="bi bi-x-circle-fill"></i>
            </button>
          </div>
        </ul>

        {/* Mobile Navbar */}
        <div
          className={`flex md:hidden justify-between items-center w-full px-6 transition-colors duration-300 ${
            scrolled ? "text-emerald-50" : "text-white"
          }`}
        >
          <li
            className={`hover:scale-110 transition-transform duration-300 relative flex justify-between items-center text-center w-[100%] font-bold cursor-pointer ${
              scrolled ? "text-emerald-50" : "hidden"
            }`}
          >
            <Link className="logomd" href="#top">
              <div></div>
            </Link>

            {/* Bouton toggle hamburger / croix */}
            <button
              className={`text-2xl transition-colors duration-300 ${
                menuOpen ? "text-amber-400" : "text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <i className="bi bi-x-circle-fill"></i> : "☰"}
              <button
                onClick={closeNavbar}
                className="absolute top-[140%] left-[96%] felx flex-col text-white hover:text-amber-400 transition-transform hover:scale-110"
              >
                <i class="bi bi-x-circle-fill"></i>
              </button>
            </button>
          </li>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && !hidden && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-[#303030]/90 backdrop-blur-md text-white flex flex-col items-center gap-6 py-6 z-40">
          <Link
            href="#artOratoire"
            onClick={closeNavbar}
            className="hover:font-bold hover:scale-110 transition-transform"
          >
            Art oratoire
          </Link>
          <Link
            href="#accrochage"
            onClick={closeNavbar}
            className="hover:font-bold hover:scale-110 transition-transform"
          >
            Accrochage scolaire
          </Link>
          <Link
            href="#about"
            onClick={closeNavbar}
            className="hover:font-bold hover:scale-110 transition-transform"
          >
            À propos
          </Link>
          <Link
            href="#tarifs"
            onClick={closeNavbar}
            className="hover:font-bold hover:scale-110 transition-transform"
          >
            Tarifs
          </Link>
        </div>
      )}

      {/* Logo géant au centre */}
      <div
        id="logo"
        className={`w-full absolute translate-y-[100%] sm:translate-y-[80%] md:translate-y-[20%] text-[3rem] sm:text-[5rem] md:text-[10rem] justify-center items-center text-center font-bold cursor-pointer transition-colors duration-300 ${
          scrolled
            ? "text-transparent pointer-events-none"
            : "text-white border-white"
        }`}
      >
        ELO'SENS
      </div>
    </nav>
  );
}
