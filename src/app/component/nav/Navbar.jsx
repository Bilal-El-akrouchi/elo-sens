"use client";
import { useState, useEffect, useRef } from "react";
import { useReducer } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Mise à jour de la couleur de la navbar au-delà de 70px
      setScrolled(currentScrollY > 70);

      // Si on dépasse 150px, on cache la navbar si on descend
      if (currentScrollY > 220) {
        if (currentScrollY > lastScrollY.current + 0) {
          // Scroll vers le bas assez important => cacher navbar
          setHidden(true);
        } else if (lastScrollY.current > currentScrollY + 20) {
          // Scroll vers le haut assez important => montrer navbar
          setHidden(false);
        }
      } else {
        // Si on est en haut de page, toujours visible
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="relative z-10 ">
      <div
        className={`fixed py-4 flex justify-center items-center w-full transition-all duration-300 ${
          scrolled ? "bg-emerald-900/50 backdrop-blur-md shadow-md" : ""
        }`}
        style={{
          transform: hidden ? "translateY(-200%)" : "translateY(0)",
        }}
      >
        <ul
          className={`flex  w-full justify-around items-center max-w-7xl px-6 py-2 transition-colors duration-300 ${
            scrolled ? "text-emerald-50" : "text-white"
          }`}
        >
          {/* Côté gauche */}
          <div
            className={`flex  justify-between items-center text-center   w-[30%] gap-6 ${
              scrolled ? "text-emerald-50" : "hidden  "
            }`}
          >
            <li className="cursor-pointer hover:text-blue-500 transition">
              Art oratoire
            </li>
            <li className="cursor-pointer hover:text-blue-500 transition">
              Accrochage scolaire
            </li>
          </div>

          {/* Logo au milieu */}
          <li
            className={`relative flex justify-center items-center  text-center bg-red-100text-center   w-[30%] font-bold cursor-pointer" transition-colors duration-300 ${
              scrolled ? "text-emerald-50 " : "hidden "
            }`}
          >
          <div className="logo absolute translate-y-6" ></div>
          </li>

          {/* Côté droit */}
          <div
            className={` flex justify-between items-center text-center   w-[30%] gap-6  ${
              scrolled ? "text-emerald-50" : "hidden  "
            }`}
          >
            <li className="cursor-pointer hover:text-blue-500 transition">
              Aboute
            </li>
            <li className="cursor-pointer hover:text-blue-500 transition">
              Contacte
            </li>
          </div>
        </ul>
      </div>

      <div
        id="logo"
        className={`" w-full absolute translate-y-[100%] sm:translate-y-[80%] md:translate-y-[20%]  text-[3rem] sm:text-[5rem] md:text-[10rem] justify-center items-center text-center bg-red-100text-center font-bold cursor-pointer" transition-colors duration-300 ${
          scrolled ? " text-transparent" : "  text-emerald-900  "
        }`}
      >
        ELO'SENS
      </div>
    </nav>
  );
}
