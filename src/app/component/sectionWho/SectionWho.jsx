"use client";
import "./SectionWho.css";

export default function SectionWho() {
  return (
    <>
      <section
        id="SectionWho"
        className="w-full md:w-60% h-screen"
      >
        <div className="w-full flex flex-col gap-10 text-center md:text-start">
          <h2 className="uppercase  md:text-3xl">
            Qui sommes <br /> nous
          </h2>
          <p className="w-full md:w-[40%] ">
            Elo'sens accompagne votre développement personnel à travers l'art
            oratoire et propose un soutien unique aux jeunes en difficulté grâce
            à la pair-aidance. Découvrez comment retrouver confiance en vous et
            en vos capacités.
          </p>
          <div className="flex flex-col justify-center items-center w-[40%] md:flex-row md:justify-start gap-6">
            <div className="pPourcent bg-red-50 w-[85%] md:w-[33%] ">
              <p className=" flex  flex-col justify-center items-center text-center">
                <span>200+</span> jeunes accompagnés
              </p>
            </div>
            <div className="pPourcent bg-red-50 w-[85%] md:w-[33%]  ">
              <p className=" flex flex-col justify-center items-center text-center">
                <span>92%</span> De taux de réussite
              </p>
            </div>
            <div className="pPourcent bg-red-50 w-[85%] md:w-[33%]  ">
              <p className=" flex flex-col justify-center items-center text-center">
                <span>85%</span> d'amélioration de confiance
                dd
              </p>
            </div>
          </div>
          <button>Nous Contacter.</button>
        </div>
      </section>
    </>
  );
}
