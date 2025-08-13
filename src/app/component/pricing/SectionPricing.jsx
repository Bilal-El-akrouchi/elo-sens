"use client";
import "./SectionPricing.css";

export default function SectionPricing() {
  return (
    <>
      <section id="sectionWho">
        <div className="">
          <h2 className="uppercase md:text-3xl">TARIFS</h2>
          <p>selon les besoin</p>
        </div>

        <div
          id="card"
          className="SectionPricing flex flex-col md:flex-row justify-around items-center h-screen w-full"
        >
          {/* card 1 association */}
          <div>
            <div>
              <h3>association</h3>
            </div>
            <div className="card  mb-5 md:mb-0">
              <div className="imgbx association"></div>
              <div className="content bg-emerald-900">
                <div className="price bg-emerald-900 ">
                  <a href="" className="">
                    <span className="text-[0.6em] ">à partir de</span> <br />
                    1000 €
                  </a>
                </div>
                <p className="texte-vert text-[0.67em] text-start flex justify-center items-center h-full px-5 ">
                  vous etes une école et souhaiter rendre votre programe plus
                  avtif, amélioriere la cohesion entre les eleves, les profs et
                  les éducateur alors se programme est fait pour vous
                </p>
              </div>
            </div>
          </div>
          {/* card 2 ecole */}
          <div>
            <div>
              <h3>école</h3>
            </div>
            <div className="card  mb-5 md:mb-0">
              <div className="imgbx ecole"></div>
              <div className="content bg-emerald-900">
                <div className="price bg-emerald-900 ">
                  <a href="" className="">
                    <span className="text-[0.6em] ">à partir de</span> <br />
                    1000 €
                  </a>
                </div>
                <p className="texte-vert text-[0.67em] text-start flex justify-center items-center h-full px-5 ">
                  vous etes une école et souhaiter rendre votre programe plus
                  avtif, amélioriere la cohesion entre les eleves, les profs et
                  les éducateur alors se programme est fait pour vous
                </p>
              </div>
            </div>
          </div>
          {/* card 3 buisnes */}
          <div>
             <div>
              <h3>votre projet</h3>
            </div>
            <div className="card  mb-5 md:mb-0">
              <div className="imgbx buisnes"></div>
              <div className="content bg-emerald-900">
                <div className="price bg-emerald-900 ">
                  <a href="" className="">
                    <span className="text-[0.6em] ">à partir de</span> <br />
                    1000 €
                  </a>
                </div>
                <p className="texte-vert text-[0.67em] text-start flex justify-center items-center h-full px-5 ">
                  vous etes une école et souhaiter rendre votre programe plus
                  avtif, amélioriere la cohesion entre les eleves, les profs et
                  les éducateur alors se programme est fait pour vous
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
