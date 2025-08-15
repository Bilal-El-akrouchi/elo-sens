"use client";
import { useState } from "react";
import "./SectionPricing.css";

export default function SectionPricing() {
  let [titre, setTitre] = useState("TARIFS");
  let [fadeGlobal, setFadeGlobal] = useState(true); //:::::::::::::::::::::::::::::::: fondu global (cards + titre)
  let [fadeTitre, setFadeTitre] = useState(true); //:::::::::::::::::::::::::::::::: fondu uniquement pour le titre
  let [cliquer, setCliquer] = useState(false);
  let [selectedCard, setSelectedCard] = useState(""); //:::::::::::::::::::::::::::::::: stocke la carte cliquée

  function changeTitre(nouveau) {
    setFadeTitre(false);
    setTimeout(() => {
      setTitre(nouveau);
      setFadeTitre(true);
    }, 150);
  }

  function resetTitre() {
    changeTitre("TARIFS");
  }

  function toggleCliquer() {
    setFadeGlobal(false);
    setTimeout(() => {
      setCliquer(!cliquer);
      setFadeGlobal(true);
    }, 500);
  }

  function handleCardClick(cardName) {
    setSelectedCard(cardName); //:::::::::::::::::::::::::::::::: stocker le nom de la carte
    toggleCliquer();
  }

  return (
    <section id="sectionWho">
      {cliquer ? (
        <div
          className={`w-full h-screen flex flex-col justify-center items-center transition-opacity duration-500 ${
            fadeGlobal ? "opacity-100" : "opacity-0"
          }`}
        >
          {/*:::::::::::::::::::::::::::::::: ccliquer */}
          <div className="flex w-full h-screen">
            <div>
              <div className="">{selectedCard}</div>
              <button
                onClick={toggleCliquer}
                className="h-[10%] px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600"
              >
                choix précédent
              </button>
            </div>
            {/* /////////////////// */}
            <div className="w-full h-screen flex flex-col justify-center items-center">
              <div className="w-[60%] flex justify-start ">
                <div className="step w-[310px] h-[30vh] bg-emerald-900"></div>
              </div>
              <div className="w-[60%] flex justify-end  ">
                <div className="step w-[310px] h-[30vh] bg-emerald-900"></div>
              </div>
              <div className="w-[60%] flex justify-start ">
                <div className="step w-[310px] h-[30vh] bg-emerald-900"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`transition-opacity duration-500 ${
            fadeGlobal ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full relative flex justify-center items-center">
            <h2
              className={`md:absolute top-6 uppercase md:text-3xl text-center transition-opacity duration-300 ${
                fadeTitre ? "opacity-100" : "opacity-0"
              }`}
            >
              {titre}
            </h2>
          </div>

          <div
            id="card"
            className="SectionPricing flex flex-col md:flex-row justify-around items-center h-screen w-full"
          >
            <div
              onMouseEnter={() => changeTitre("association")}
              onMouseLeave={resetTitre}
              onClick={() => handleCardClick("association")}
            >
              <div>
                <h3 className="text-transparent">association</h3>
              </div>
              <div className="card mb-5 md:mb-0">
                <div className="imgbx association"></div>
                <div className="content bg-emerald-900">
                  <div className="price bg-emerald-900 ">
                    <a href="">
                      <span className="text-[0.6em] ">à partir de</span> <br />
                      1000 €
                    </a>
                  </div>
                  <p className="texte-vert text-[0.67em] text-start flex justify-center items-center h-full px-5 ">
                    vous etes une école et souhaiter rendre votre programe plus
                    avtif, amélioriere la cohesion entre les eleves, les profs
                    et les éducateur alors se programme est fait pour vous
                  </p>
                </div>
              </div>
            </div>

            <div
              onMouseEnter={() => changeTitre("école")}
              onMouseLeave={resetTitre}
              onClick={() => handleCardClick("école")}
            >
              <div>
                <h3 className="text-transparent ">école</h3>
              </div>
              <div className="card mb-5 md:mb-0">
                <div className="imgbx ecole"></div>
                <div className="content bg-emerald-900">
                  <div className="price bg-emerald-900 ">
                    <a href="">
                      <span className="text-[0.6em] ">à partir de</span> <br />
                      1000 €
                    </a>
                  </div>
                  <p className="texte-vert text-[0.67em] text-start flex justify-center items-center h-full px-5 ">
                    vous etes une école et souhaiter rendre votre programe plus
                    avtif, amélioriere la cohesion entre les eleves, les profs
                    et les éducateur alors se programme est fait pour vous
                  </p>
                </div>
              </div>
            </div>

            <div
              onMouseEnter={() => changeTitre("votre projet")}
              onMouseLeave={resetTitre}
              onClick={() => handleCardClick("votre projet")}
            >
              <div>
                <h3 className="text-transparent">votre projet</h3>
              </div>
              <div className="card mb-5 md:mb-0">
                <div className="imgbx buisnes"></div>
                <div className="content bg-emerald-900">
                  <div className="price bg-emerald-900 ">
                    <a href="">
                      <span className="text-[0.6em] ">à partir de</span> <br />
                      1000 €
                    </a>
                  </div>
                  <p className="texte-vert text-[0.67em] text-start flex justify-center items-center h-full px-5 ">
                    vous etes une école et souhaiter rendre votre programe plus
                    avtif, amélioriere la cohesion entre les eleves, les profs
                    et les éducateur alors se programme est fait pour vous
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
