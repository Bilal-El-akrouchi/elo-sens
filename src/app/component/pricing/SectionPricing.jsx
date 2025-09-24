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
  const [stepHeight, setStepHeight] = useState(160); // valeur par défaut


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
    setSelectedCard(cardName); // stocker le nom de la carte
    toggleCliquer(); // passe cliquer à true
  }

  // Nouveau useEffect à ajouter en bas de tes hooks
  useEffect(() => {
    if (cliquer && selectedCard) {
      const section = document.getElementById("tarifs");
      if (section) {
        // Timeout léger pour attendre le rendu
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    }
  }, [cliquer, selectedCard]);

  //:::::::::::::::::::::::::::::::: gérer le scroll par étapes
 useEffect(() => {
  if (!cliquer) return;

  let startY = 0;

  function handleWheel(e) {
    e.preventDefault(); // bloque le scroll natif
    if (e.deltaY > 0) {
      setCurrentStep((prev) => Math.min(prev + 1, 1)); // max 1 car 2 étapes
    } else {
      setCurrentStep((prev) => Math.max(prev - 1, 0));
    }
  }

  function handleTouchStart(e) {
    startY = e.touches[0].clientY;
  }

  function handleTouchMove(e) {
    const deltaY = e.touches[0].clientY - startY;

    if (Math.abs(deltaY) > 50) { // seuil pour éviter les micro-mouvements
      if (deltaY < 0) {
        // swipe vers le haut
        setCurrentStep((prev) => Math.min(prev + 1, 1));
      } else {
        // swipe vers le bas
        setCurrentStep((prev) => Math.max(prev - 1, 0));
      }
      startY = e.touches[0].clientY; // reset pour éviter multiples déclenchements
    }
    e.preventDefault();
  }

  window.addEventListener("wheel", handleWheel, { passive: false });
  window.addEventListener("touchstart", handleTouchStart, { passive: false });
  window.addEventListener("touchmove", handleTouchMove, { passive: false });

  document.body.style.overflow = "hidden"; // bloque scroll global

  return () => {
    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchmove", handleTouchMove);
    document.body.style.overflow = "auto"; // réactive scroll
  };
}, [cliquer]);


  useEffect(() => {
    function updateStepHeight() {
      if (window.innerWidth >= 768) {
        // md en Tailwind = 768px
        setStepHeight(90);
      } else {
        setStepHeight(110);
      }
    }

    updateStepHeight(); // appel au montage
    window.addEventListener("resize", updateStepHeight);

    return () => window.removeEventListener("resize", updateStepHeight);
  }, []);

  return (
    <section id="tarifs" className="bg-[#303030] min-h-screen pt-10 ">
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
                className="w-full text-center flex flex-col items-center transition-transform duration-700"
                style={{
                  transform: `translateY(-${currentStep * stepHeight}vh)`,
                }}
              >
                <div className="w-[60%] flex items-center justify-start ">
                  <div className="step-impaire w-[400px] max-h-[90vh] md:h-auto overflow-y-scroll md:overflow-visible md:mt-20 mt-5 choixoe text-sm">
                    <span className="md:text-xl ">
                      Chaque association est unique, chaque groupe a ses propres
                      réalités
                    </span>
                    <br /> <br />
                    Ensemble, nous définissons : <br /> ● Les thèmes à aborder,
                    en fonction des besoins spécifiques de votre public. <br />{" "}
                    ● La durée : un cycle d’un mois, avec la possibilité de
                    prolonger, d’approfondir les ateliers et de développer
                    ensemble des projets communs. <br /> ● Le nombre de
                    participants : idéalement jusqu’à 20 jeunes, pour garantir
                    la qualité et la dynamique du groupe. Nous travaillons main
                    dans la main pour bâtir une animation qui marque à vie.
                  </div>
                </div>
                <div className="absolute top-3/4 left-1/2 text-5xl text-white animate-bounce">
                  <i className="bi bi-arrow-down-circle-fill"></i>
                </div>
                <div className="w-[60%] flex mt-30 md:mt-50 justify-end">
                  <div className="step w-[310px]   choixoe">
                    il ne vous reste plus qu'a passez à l’action ! Il ne reste
                    qu’une étape : choisir une date et accueillir l’atelier dans
                    vos locaux. Nous apportons nos méthodes, notre énergie et
                    notre expérienceet nos jeunes pour que vos jeunes vivent un
                    moment fort, porteur de sens et d’avenir.{" "}
                  </div>
                </div>
              </div>

              {/*:::::::::::::::::::::::::::::::: bouton retour */}
              <div className="absolute top-0 right-30 sm:top-10 sm:right-70 md:top-10 md:left-134 flex justify-center w-full">
                {/* Version mobile : X */}
                <button
                  onClick={toggleCliquer}
                  className="px-2 py-1 sm:text-5xl font-bold rounded-full text-amber-400  hover:bg-red-800 transition md:hidden"
                >
                  <i className="bi bi-arrow-left-circle-fill "></i>{" "}
                </button>

                {/* Version desktop : Bouton texte */}
                <button
                  onClick={toggleCliquer}
                  className="hidden md:block px-4 py-2 text-lg font-bold rounded-2xl bg-red-600 text-white hover:bg-red-800 transition"
                >
                  Précédent
                </button>
              </div>
            </div>
          )}

          {/*:::::::::::::::::::::::::::::::: école */}
          {selectedCard === "école" && (
            <div className="flex w-full h-full relative overflow-hidden">
              <div
                className="w-full text-center flex flex-col items-center transition-transform duration-700"
                style={{
                  transform: `translateY(-${currentStep * stepHeight}vh)`,
                }}
              >
                <div className="w-[60%] flex items-center justify-start ">
                  <div className="step-impaire w-[450px] mb-[40] sm:mb-[90] md:h-auto overflow-y-scroll md:overflow-visible md:mt-20 mt-5 choixoe text-sm">
                    <span className="sm:text-3xl">
                      Nos offres pour les écoles
                    </span>{" "}
                    <br />
                    <p className="sm:text-xl md:text-m mt-4">
                      Nous proposons des ateliers autour de l’accrochage à la
                      vie, de la pair-aidance et de l’art oratoire. Ces
                      animations offrent aux élèves un espace pour s’exprimer,
                      renforcer leur confiance et améliorer la cohésion en
                      classe.
                    </p>
                  </div>
                </div>
                <div className="absolute top-[80%] left-1/2 text-5xl text-white animate-bounce">
                  <i className="bi bi-arrow-down-circle-fill"></i>
                </div>
                <div className="w-[60%] flex mt-[40] md:mt-0 justify-end">
                  <div className="step text-sm w-[310px] choixoe">
                    Prenez contact et préparons ensemble l’intervention Avec
                    l’équipe éducative, nous définissons les thèmes à aborder
                    (estime de soi, rôle du délégué, cohésion de groupe, prise
                    de parole, lutte contre le décrochage...). La durée : en
                    général un cycle d’un mois, avec la possibilité
                    d’approfondir ou de créer des projets communs. Le nombre
                    d'heure : 4 séance de 2x50 minutes, une fois par semaine
                  </div>
                </div>
              </div>

              {/*:::::::::::::::::::::::::::::::: bouton retour */}
               <div className="absolute top-0 right-30 sm:top-10 sm:right-70 md:top-10 md:left-134 flex justify-center w-full">
                {/* Version mobile : X */}
                <button
                  onClick={toggleCliquer}
                  className="px-2 py-1 sm:text-5xl font-bold rounded-full text-amber-400  hover:bg-red-800 transition md:hidden"
                >
                  <i className="bi bi-arrow-left-circle-fill "></i>{" "}
                </button>

                {/* Version desktop : Bouton texte */}
                <button
                  onClick={toggleCliquer}
                  className="hidden md:block px-4 py-2 text-lg font-bold rounded-2xl bg-red-600 text-white hover:bg-red-800 transition"
                >
                  Précédent
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
                <div className="w-[80%] flex items-center justify-start ">
                  <div className="step-impaire mt-[120] mb-[30] w-[240px] choixoe">
                    <span className="text-xl ">
                      Prenez contact et co-construisons l’atelier enssemble
                    </span>
                    <br /> <br />
                    Chaque projet est unique et chaque groupe a ses propres
                    réalités...
                  </div>
                </div>
             
                <div className="w-[80%] flex justify-end ">
                  <div className="step w-[310px]  choixoe">
                    contactez nous simplement par telephone ou par mail pour
                    discuter de votre projet
                  </div>
                </div>
              </div>

              <div className="absolute top-[16%] left-[33%] text-4xl sm:top-10 sm:right-70 md:top-10 md:left-134 flex justify-center w-full">
                {/* Version mobile : X */}
                <button
                  onClick={toggleCliquer}
                  className="px-2  tex-3xl  sm:text-5xl font-bold rounded-full text-amber-400  hover:bg-red-800 transition md:hidden"
                >
                  <i className="bi bi-arrow-left-circle-fill "></i>{" "}
                </button>

                {/* Version desktop : Bouton texte */}
                <button
                  onClick={toggleCliquer}
                  className="hidden md:block px-4 py-2 text-lg font-bold rounded-2xl bg-red-600 text-white hover:bg-red-800 transition"
                >
                  Précédent
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
            className="parentCard flex  justify-around items-center  w-full"
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
                    <a href="#">
                      <span className="text-[0.6em] ">à partir de</span> <br />
                      800 €
                    </a>
                  </div>
                  <div className="h-full w-full flex flex-col sm:pt-5">
                    <p className=" text-[0.67em] text-start mt-3 flex flex-col justify-center items-start h-full px-5 ">
                      <span className="text-[1.4em] ">
                        Nos offres pour les associations
                      </span>
                      Vous êtes une ASBL ? Nous proposons des ateliers autour de
                      l’accrochage à la vie, de prise de parole en public et
                      d'éloquence Chaque activité est conçue pour renforcer la
                      confiance, stimuler l’expression et favoriser la cohésion
                      au sein de vos groupes.{" "}
                      <div className="h-full flex justify-end items-end pb-5">
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
                    <a href="#">
                      <span className="text-[0.6em] ">à partir de</span> <br />
                      500 €
                    </a>
                  </div>
                  <div className="h-full w-full flex flex-col pt-5">
                    <p className=" text-[0.67em] text-start flex flex-col justify-center items-start h-full px-5 ">
                      <span className="text-[1.4em] ">
                        Nos offres pour les écoles{" "}
                      </span>
                      Découvrez nos animations Nous proposons des ateliers
                      autour de l’accrochage à la vie, de la pair-aidance et de
                      l’art oratoire. Ces animations offrent aux élèves un
                      espace pour s’exprimer, renforcer leur confiance et
                      améliorer la cohésion en classe.
                      <div className="h-full  flex justify-end items-end pb-5">
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
                    <a href="#">
                      <span className="text-[0.6em] ">commande</span> <br />
                      sur devis
                    </a>
                  </div>
                  <div className="h-full w-full flex flex-col pt-5">
                    <p className=" text-[0.67em] text-start flex flex-col justify-center items-start h-full px-5 ">
                      <span className="text-[1.4em] ">
                        Nos offres sur-mesures
                      </span>
                      Vous avez un projet en tete et désirez une offre sur
                      mesure correspondant parfaitement a vos attentes et besoin
                      ? alors cette offre est faite pour vous, n'attendez plus
                      lancez vous !
                      <div className="h-full  flex justify-end items-end pb-5">
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
