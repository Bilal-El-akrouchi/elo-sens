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
    <section id="sectionPricing" className="bg-[#303030] ">
      {cliquer ? (
        <div
          className={`w-full h-screen flex flex-col justify-center items-center transition-opacity duration-500 ${
            fadeGlobal ? "opacity-100" : "opacity-0"
          }`}
        >
          {/*:::::::::::::::::::::::::::::::: ccliquer */}
          <div className="flex w-full h-screen">
            {/* /////////////////// */}
            <div className="w-full gap-6 md:gap-0 h-screen flex flex-col justify-center items-center">
              <div className="w-[60%] flex items-center justify-start ">
                <div className="step-impaire w-[310px] h-[30vh] bg-[#edf1eb]"></div>
              </div>
              <div className="w-[60%] flex justify-end  ">
                <div className="step w-[310px] h-[30vh] bg-[#edf1eb]"></div>
              </div>
              <div className="w-[60%] flex justify-start ">
                <div className="step-impaire w-[310px] h-[30vh] bg-[#edf1eb]"></div>
              </div>
            </div>
            <div className="h-full flex flex-col justify-end pb-20 items-center ">
              <div>
                <div className="">{selectedCard}</div>
              </div>
              <button
                onClick={toggleCliquer}
                className=" px-4 py-3  rounded-4xl bg-amber-300 text-emerald-900 hover:text-white hover:bg-gray-600"
              >
                choix précédent
              </button>
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
            className="parentCard flex md:flex-row justify-around items-center  w-full"
          >
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
                      1000 €
                    </a>
                  </div>
                  <div className="h-full w-full flex flex-col">
                    <p className=" text-[0.67em] text-start flex justify-center items-center h-full px-5 ">
                      vous etes une école et souhaiter rendre votre programe
                      avtif, amélioriere la cohesion entre les eleves, les profs
                      et les éducateur alors se programme est fait pour vous
                      <div className="h-full text-emerald-200-200 flex justify-end items-end pb-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-arrow-right-circle-fill"
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
                      vous etes une école et souhaiter rendre votre programe
                      avtif, amélioriere la cohesion entre les eleves, les profs
                      et les éducateur alors se programme est fait pour vous
                      <div className="h-full text-emerald-200-200 flex flex-col justify-end items-end pb-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-arrow-right-circle-fill"
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
                      vous etes une école et souhaiter rendre votre programe
                      avtif, amélioriere la cohesion entre les eleves, les profs
                      et les éducateur alors se programme est fait pour vous
                      <div className="h-full text-emerald-200-200 flex flex-col justify-end items-end pb-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-arrow-right-circle-fill"
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
