"use client";
import "./SectionWho.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SectionWho() {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      value: 200,
      suffix: "+",
      label: "Jeunes accompagnés",
      color: "from-[#fff700] to-[#ffc400]",
    },
    {
      value: 92,
      suffix: "%",
      label: "Taux de réussite",
      color: "from-[#fff700] to-[#ffc400]",
    },
    {
      value: 85,
      suffix: "%",
      label: "Confiance améliorée",
      color: "from-[#fff700] to-[#ffc400]",
    },
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

  return (
    <section
      id="SectionWho"
      ref={ref}
      className="w-full mgn h-[800px] flex flex-col md:flex-row  md:h-screen"
    >
      {/* Partie gauche */}
      <div className="flex flex-col gap-10 text-center justify-center items-center md:text-center md:w-[40%] md:ps-10">
        <h2 className="uppercase  w-1/2 md:w-full md:text-6xl">
          Qui sommes  nous ?
        </h2>
        <p className="w-full md:w-[80%]">
          Elo'sens accompagne votre développement personnel à travers l'art
          oratoire et propose un soutien unique aux jeunes en difficulté grâce à
          la pair-aidance. Découvrez comment retrouver confiance en vous et en
          vos capacités.
        </p>
      </div>

      {/* Partie droite */}
      <div className="flex flex-col md:mt-10 justify-center items-center md:w-1/2 p-8 gap-6">
        {stats.map((stat, index) => {
          const percent = Math.min(
            (animatedValues[index] / stat.value) * 100,
            100
          );

          return (
            <div
              key={index}
              className="relative w-[100%] rounded-lg overflow-hidden shadow-md border border-gray-200"
            >
              <div
                className={`absolute left-0 top-0 h-full bg-gradient-to-r ${stat.color} transition-all duration-300`}
                style={{ width: `${percent}%` }}
              ></div>

              <div className="relative z-10 flex flex-col items-center py-4">
                <span className="text-3xl font-bold text-white drop-shadow-lg">
                  {animatedValues[index]}
                  {stat.suffix}
                </span>
                <span className="text-sm text-white drop-shadow-md">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
        <button className=" w-full px-6 py-2 bg-[#303030] text-white rounded-lg shadow-md hover:bg-[#ffc400] transition-colors">
          Nous Contacter
        </button>
      </div>
    </section>
  );
}
