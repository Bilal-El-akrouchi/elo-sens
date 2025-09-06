"use client";
import "./SectionArtOratoire.css";
import { useInView } from "react-intersection-observer";

export default function SectionArtOratoire() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const items = [
    {
      icon: "bi-chat",
      text: "Maîtrise de l'expression orale et corporelle",
    },
    {
      icon: "bi-people",
      text: "Gestion du stress et de l'anxiété en public",
    },
    {
      icon: "bi-bullseye",
      text: "Structuration claire et impactante des idées",
    },
    {
      icon: "bi-lightbulb",
      text: "Développement de la confiance en soi",
    },
  ];

  return (  
    <section
      id="artOratoire"
      ref={ref}
      className="min-h-screen mb-10 flex flex-col justify-center text-center md:text-start items-center md:items-start md:justify-start"
    >
      <div className="md:ms-[10%] flex flex-col justify-center items-center md:justify-around md:mgn md:items-start ">
        <h2 className="text-3xl pb-10">Art Oratoire</h2>
        <p className="w-3/5 text-xl flex justify-center items-center">
          L’éloquence est au cœur de notre démarche. Nous considérons l’art
          oratoire comme un outil d’émancipation, capable de transformer
          l’estime de soi et la place de chacun dans la société. À travers des
          ateliers et des formations, nous aidons les jeunes à mettre des mots
          sur leurs pensées, à oser prendre la parole et à croire en leur voix.
          Notre conviction : de la parole naît la rencontre, de la rencontre
          naît le changement.
        </p>
      </div>

      {/* Cartes animées */}
      <div className="flex md:flex-row flex-col justify-center items-center w-3/4 flex-wrap gap-10 mt-20 ml-10 font-semibold">
        {items.map((item, index) => (
          <div
            key={index}
            className={`fondtkt flex flex-row gap-2 text-start justify-center items-center md:w-4/10 w-3/4 p-6 rounded-2xl transition-all duration-1000 ease-out
              ${
                inView
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-24 scale-75"
              }
            `}
            style={{ transitionDelay: `${index * 500}ms` }}
          >
            <i
              className={`bi ${item.icon} py-3 px-4 text-xl text-white rounded-xl bg-[#ffc400]`}
            ></i>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
