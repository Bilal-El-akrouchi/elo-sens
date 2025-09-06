"use client";
import "./SectionWho.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SectionWho() {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);
  const [showMore, setShowMore] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { value: 200, suffix: "+", label: "Jeunes accompagnés", color: "from-[#fff700] to-[#ffc400]" },
    { value: 92, suffix: "%", label: "Taux de réussite", color: "from-[#fff700] to-[#ffc400]" },
    { value: 85, suffix: "%", label: "Confiance améliorée", color: "from-[#fff700] to-[#ffc400]" },
  ];

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        let startValue = 0;
        const endValue = stat.value;
        const duration = 2000;
        const increment = endValue / (duration / 16);

        const animate = () => {
          startValue += increment;
          if (startValue < endValue) {
            setAnimatedValues((prev) => {
              const newValues = [...prev];
              newValues[index] = Math.floor(startValue);
              return newValues;
            });
            requestAnimationFrame(animate);
          } else {
            setAnimatedValues((prev) => {
              const newValues = [...prev];
              newValues[index] = endValue;
              return newValues;
            });
          }
        };

        setTimeout(() => animate(), index * 200);
      });
    }
  }, [inView]);

  const handleClick = () => {
    setAnimateOut(true);
    setTimeout(() => setShowMore(true), 500);
  };

  const handleBack = () => {
    // Retour à l'état initial
    setShowMore(false);
    setAnimateOut(false);
  };

  return (
    <section
      id="SectionWho"
      ref={ref}
      className="w-full mgn h-[800px] flex flex-col md:flex-row md:h-screen relative overflow-hidden"
    >
      {!showMore ? (
        <>
          {/* Partie gauche */}
          <div
            className={`flex flex-col gap-10 text-center justify-center items-center md:text-center md:w-[40%] md:ps-10 transition-all duration-500 ${
              animateOut ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            <h2 className="uppercase w-1/2 md:w-full md:text-6xl">Qui sommes nous ?</h2>
            <p className="w-full md:w-[80%]">
              Elosens est une ASBL née d’histoires de décrochage, de résilience et de renaissance. Nous croyons que chaque difficulté peut devenir une force, et que chaque échec est une étape vers la réussite. Notre vocation est simple : redonner confiance à ceux qui doutent et renforcer le savoir- parler, en particulier les jeunes qui se sentent mis de côté par l’école ou par la société.
            </p>
          </div>

          {/* Partie droite */}
          <div
            className={`flex flex-col md:mt-10 justify-center items-center md:w-1/2 p-8 gap-6 transition-all duration-500 ${
              animateOut ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {stats.map((stat, index) => {
              const percent = Math.min((animatedValues[index] / stat.value) * 100, 100);
              return (
                <div key={index} className="relative w-[100%] rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <div
                    className={`absolute left-0 top-0 h-full bg-gradient-to-r ${stat.color} transition-all duration-300`}
                    style={{ width: `${percent}%` }}
                  ></div>
                  <div className="relative z-10 flex flex-col items-center py-4">
                    <span className="text-3xl font-bold text-white drop-shadow-lg">
                      {animatedValues[index]}{stat.suffix}
                    </span>
                    <span className="text-sm text-white drop-shadow-md">{stat.label}</span>
                  </div>
                </div>
              );
            })}
            <button
              onClick={handleClick}
              className="w-full px-6 py-2 bg-[#303030] text-white rounded-lg shadow-md hover:bg-[#ffc400] transition-colors"
            >
              En savoir plus...
            </button>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
          <h2 className="text-4xl font-bold mb-4">Notre histoire</h2>
          <p className="text-lg max-w-2xl mb-6">
            Chez Elosens, la parole devient un outil de transformation. Nous créons des espaces où chacun peut être écouté, reconnu et valorisé. Ancrés dans les quartiers bruxellois, nous travaillons main dans la main avec les jeunes, les associations et les écoles pour construire des projets citoyens, créatifs et porteurs de sens. Notre approche repose sur trois piliers : accrochage à la vie, pair-aidance et art oratoire.
          </p>
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-[#303030] text-white rounded-lg shadow-md hover:bg-[#ffc400] transition-colors"
          >
            Retour
          </button>
        </div>
      )}
    </section>
  );
}
