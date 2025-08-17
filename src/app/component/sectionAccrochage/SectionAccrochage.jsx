"use client";
import "./SectionAccrochage.css";


export default function SectionAccrochage() {
  return (
    <>
      <section id="accrochage" className="min-h-screen">
        <h2 className="text-3xl pb-10">Accrochage à la vie</h2>
        <p className="w-3/5 pl-20 text-xl">Retrouvez le goût de vivre et tissez des liens authentiques avec ceux qui vous entourent. Notre approche bienveillante vous aide à reconstruire votre confiance et à redécouvrir votre place dans la société, étape par étape, à votre rythme</p>
        <div className="flex md:flex-row flex-col justify-center items-center w-3/4 flex-wrap gap-10 mt-10 ml-10 font-semibold">
          <div className="flex lg:flex-row flex-col justify-around items-center w-4/10 bg-amber-50 p-6 rounded-2xl">
            <i class="bi bi-heart py-3 px-4 text-xl text-white rounded-xl bg-emerald-900"></i>
            <p>Renforcement des liens sociaux authentiques</p>
          </div>
          <div className="flex lg:flex-row flex-col justify-around items-center w-4/10 bg-amber-50 p-6 rounded-2xl">
            <i class="bi bi-lightning-charge py-3 px-4 text-xl text-white rounded-xl bg-emerald-900"></i>
            <p>Développement de l'empathie et de l'écoute active</p>
          </div>
          <div className="flex lg:flex-row flex-col justify-around items-center w-4/10 bg-amber-50 p-6 rounded-2xl">
            <i class="bi bi-people py-3 px-4 text-xl text-white rounded-xl bg-emerald-900"></i>
            <p>Création d'un réseau de soutien mutuel</p>
          </div>
          <div className="flex lg:flex-row flex-col justify-around items-center w-4/10 bg-amber-50 p-6 rounded-2xl">
            <i class="bi bi-bullseye py-3 px-4 text-xl text-white rounded-xl bg-emerald-900"></i>
            <p>Amélioration du bien-être mental et émotionnel</p>
          </div>


        </div>
      </section>
    </>
  );
}
