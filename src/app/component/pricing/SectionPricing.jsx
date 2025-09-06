"use client";
import { useState, useEffect } from "react";
import "./SectionPricing.css";

export default function SectionPricing() {
  let [titre, setTitre] = useState("TARIFS");
  let [fadeGlobal, setFadeGlobal] = useState(true);
  let [fadeTitre, setFadeTitre] = useState(true);
  let [cliquer, setCliquer] = useState(false);
  let [selectedCard, setSelectedCard] = useState("");
  let [currentStep, setCurrentStep] = useState(0); //:::::::::::::::::::::::::::::::: index étape affichée

  function changeTitre(nouveau) {
    setFadeTitre(false);
    setTimeout(() => {
      setTitre(nouveau);
      setFadeTitre(true);
    }, 150);
  }

  function resetTitre() {
    changeTitre("ELO'prix");
  }

  function toggleCliquer() {
    setFadeGlobal(false);
    setTimeout(() => {
      setCliquer(!cliquer);
      setFadeGlobal(true);
      setCurrentStep(0); //:::::::::::::::::::::::::::::::: reset étape
    }, 500);
  }

  //:::::::::::::::::::::::::::::::: handleCardClick avec scroll en haut de section
  function handleCardClick(cardName) {
    setSelectedCard(cardName); //:::::::::::::::::::::::::::::::: stocker le nom de la carte

    //:::::::::::::::::::::::::::::::: remonter automatiquement au début de la section
    const section = document.getElementById("sectionPricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    toggleCliquer();
  }

  //:::::::::::::::::::::::::::::::: gérer le scroll par étapes
  useEffect(() => {
    if (!cliquer) return;

    function handleWheel(e) {
      if (e.deltaY > 0) {
        setCurrentStep((prev) => Math.min(prev + 1, 1)); // max 1 car 2 étapes
      } else {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    document.body.style.overflow = "hidden"; // bloque scroll normal

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "auto"; // réactive scroll normal
    };
  }, [cliquer]);

  return (
    <section id="sectionPricing" className="bg-[#303030] ">
      {cliquer ? (
        <div
          className={`w-full h-screen flex flex-col justify-center items-center transition-opacity duration-500 ${
            fadeGlobal ? "opacity-100" : "opacity-0"
          }`}
        >
          {/*:::::::::::::::::::::::::::::::: affichage spécifique selon la carte cliquée */}
          {selectedCard === "association" && (
            <div className="flex w-full h-full relative overflow-hidden">
              <div
                className="w-full flex flex-col items-center transition-transform duration-700"
                style={{ transform: `translateY(-${currentStep * 50}vh)` }}
              >
                <div className="w-[60%] flex items-center justify-start ">
                  <div className="step-impaire w-[310px] h-[50vh] choixoe">
                    Étape 1 pour les associations
                  </div>
                </div>
                <div className="w-[60%] flex justify-end">
                  <div className="step w-[310px] h-[50vh] bg-[#edf1eb]">
                    Étape 2 pour les associations
                  </div>
                </div>
              </div>

              {/*:::::::::::::::::::::::::::::::: bouton retour */}
              <div className="absolute bottom-10 flex justify-center w-full">
                <button
                  onClick={toggleCliquer}
                  className="px-6 py-4 text-xl font-bold rounded-2xl bg-red-600 text-white hover:bg-red-800 transition"
                >
                  ⬅ choix précédent
                </button>
              </div>
            </div>
          )}

          {/*:::::::::::::::::::::::::::::::: école */}
          {selectedCard === "école" && (
            <div className="flex w-full h-full relative overflow-hidden">
              <div
                className="w-full flex flex-col items-center transition-transform duration-700"
                style={{ transform: `translateY(-${currentStep * 50}vh)` }}
              >
                <div className="w-[60%] flex items-center justify-start ">
                  <div className="step-impaire w-[310px] h-[50vh] bg-[#edf1eb]">
                    Étape 1 pour les écoles
                  </div>
                </div>
                <div className="w-[60%] flex justify-end">
                  <div className="step w-[310px] h-[50vh] bg-[#edf1eb]">
                    Étape 2 pour les écoles
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 flex justify-center w-full">
                <button
                  onClick={toggleCliquer}
                  className="px-6 py-4 text-xl font-bold rounded-2xl bg-red-600 text-white hover:bg-red-800 transition"
                >
                  ⬅ choix précédent
                </button>
              </div>
            </div>
          )}

          {/*:::::::::::::::::::::::::::::::: projet */}
          {selectedCard === "votre projet" && (
            <div className="flex w-full h-full relative overflow-hidden">
              <div
                className="w-full flex flex-col items-center transition-transform duration-700"
                style={{ transform: `translateY(-${currentStep * 50}vh)` }}
              >
                <div className="w-[80%] bg-red-50 flex items-center justify-start ">
                  <div className="step-impaire w-[440px] choixoe">
                    <span className="text-xl ">
                      Prenez contact et co-construisons l’atelier{" "}
                    </span>
                    <br /> <br />
                    Chaque association est unique chaque groupe a ses propres
                    réalités...
                  </div>
                </div>
                <div className="w-[80%] flex justify-end ">
                  <div className="step w-[310px]  choixoe">
                    Étape 2 pour votre projet. Passez à l’action 🚀
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 flex justify-center w-full">
                <button
                  onClick={toggleCliquer}
                  className="px-6 py-4 text-xl font-bold rounded-2xl bg-red-600 text-white hover:bg-red-800 transition"
                >
                  ⬅ choix précédent
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        //:::::::::::::::::::::::::::::::: affichage des cartes (inchangé)
        <div
          className={`transition-opacity duration-500 ${
            fadeGlobal ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full relative flex justify-center items-center">
            <h2
              className={`md:absolute  top-0 uppercase md:text-6xl text-center transition-opacity duration-300 ${
                fadeTitre ? "opacity-100" : "opacity-0"
              }`}
            >
              {titre}
            </h2>
          </div>

          <div
            id="card"
            className="parentCard flex md:flex-row justify-around items-center  w-full"
          >
            {/*:::::::::::::::::::::::::::::::: tes cards restent inchangées */}
            {/* association */}
            <div
              onMouseEnter={() => changeTitre("association")}
              onMouseLeave={resetTitre}
              onClick={() => handleCardClick("association")}
              className=""
            >
              <div>
                <h3 className="text-transparent">association</h3>
              </div>
              <div className="card mb-5 md:mb-0">
                <div className="imgbx association"></div>
                <div className="content bg-[#edf1eb]">
                  <div className="price bg-[#edf1eb] ">
                    <a href="">
                      <span className="text-[0.6em] ">à partir de</span> <br />
                      200 €
                    </a>
                  </div>
                  <div className="h-full w-full flex flex-col pt-5">
                    <p className=" text-[0.67em] text-start flex flex-col justify-center items-start h-full px-5 ">
                      <span className="text-[1.4em] ">
                        Nos offres pour les associations
                      </span>
                      Vous êtes une ASBL ? Nous proposons des ateliers autour de
                      l’accrochage à la vie, de prise de parole en public et
                      d'éloquence Chaque activité est conçue pour renforcer la
                      confiance, stimuler l’expression et favoriser la cohésion
                      au sein de vos groupes.{" "}
                      <div className="h-full text-emerald-200-200 flex justify-end items-end pb-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-arrow-right-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*:::::::::::::::::::::::::::::::: école */}
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
                <div className="content bg-[#edf1eb]">
                  <div className="price bg-[#edf1eb] ">
                    <a href="">
                      <span className="text-[0.6em] ">à partir de</span> <br />
                      1000 €
                    </a>
                  </div>
                  <div className="h-full w-full flex flex-col">
                    <p className=" text-[0.67em] text-start flex justify-center items-center h-full px-5 ">
                      vous etes une école ...
                      <div className="h-full text-emerald-200-200 flex flex-col justify-end items-end pb-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-arrow-right-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*:::::::::::::::::::::::::::::::: projet */}
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
                <div className="content bg-[#edf1eb]">
                  <div className="price bg-[#edf1eb] ">
                    <a href="">
                      <span className="text-[0.6em] ">à partir de</span> <br />
                      1000 €
                    </a>
                  </div>
                  <div className="h-full w-full flex flex-col">
                    <p className=" text-[0.67em] text-start flex justify-center items-center h-full px-5 ">
                      vous etes une école ...
                      <div className="h-full text-emerald-200-200 flex flex-col justify-end items-end pb-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-arrow-right-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
