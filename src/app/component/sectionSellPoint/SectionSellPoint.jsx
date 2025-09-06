"use client";
import "./SectionSellPoint.css";

export default function SectionSellPoint() {
  return (
    <>
      <section
        id="sellPoint"
        className="h-screen w-full bg-[#303030] flex items-center justify-center text-center"
      >
        <div className="w-3/5  fondtkt2 hover:border-black flex  items-center flex-col gap-11 px-5 pb-2">
          <h4 className="text-5xl">Notre Valeur ajoutée</h4>
          <p className="h-3/5">
            Chez Elosens, nous valorisons la différence. Notre force réside dans
            la pair-aidance : des jeunes qui ont vécu le décrochage, les doutes,
            la perte de confiance, le manque de sens, les crises identitaires...
            et qui deviennent à leur tour des repères pour d’autres. Cette
            transmission d’expérience, loin des jugements, ouvre la voie à une
            solidarité authentique. Elle démontre que ce qui était perçu comme
            une faiblesse peut devenir une force partagée.
          </p>
        </div>
      </section>
    </>
  );
}
