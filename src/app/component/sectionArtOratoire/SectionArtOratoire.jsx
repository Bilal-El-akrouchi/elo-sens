"use client";
import "./SectionArtOratoire.css";


export default function SectionArtOratoire() {
  return (
    <>
    {/* fond tkt tu dois mettre la couleur # qui correspond a emerald-900 dans le globalcss */}
      <section id="artOratoire" className="min-h-screen">
        <h2 className="text-3xl pb-10">Art Oratoire</h2>
        <p className="w-3/5 pl-20 text-xl">Découvrez l'art de captiver votre audience et de transmettre vos idées avec impact. Nos ateliers d'art oratoire vous accompagnent dans le développement de vos compétences de communication, pour que chaque prise de parole devienne une opportunité de briller et d'inspirer.</p>
        <div className="flex md:flex-row flex-col justify-center liste items-center w-3/4 flex-wrap gap-10 mt-20 ml-10 font-semibold">
        <div className="flex lg:flex-row flex-col  justify-around items-center md:w-4/10 w-3/4 fondtkt p-6 rounded-2xl">
          <i class="bi bi-chat py-3 px-4 text-xl text-white rounded-xl bg-emerald-900"></i>
          <p>Maîtrise de l'expression orale et corporelle</p>
        </div>
        <div className="flex lg:flex-row flex-col justify-around items-center md:w-4/10 w-3/4 fondtkt p-6 rounded-2xl">
          <i class="bi bi-people py-3 px-4 text-xl text-white rounded-xl bg-emerald-900"></i>
          <p>Gestion du stress et de l'anxiété en public</p>
        </div>
        <div className="flex lg:flex-row flex-col justify-around items-center md:w-4/10 w-3/4 fondtkt p-6 rounded-2xl">
          <i class="bi bi-bullseye py-3 px-4 text-xl text-white rounded-xl bg-emerald-900"></i>
          <p>Structuration claire et impactante des idées</p>
        </div>
        <div className="flex lg:flex-row flex-col justify-around items-center md:w-4/10 w-3/4 fondtkt p-6 rounded-2xl">
          <i class="bi bi-lightbulb py-3 px-4 text-xl text-white rounded-xl bg-emerald-900"></i>
          <p>Développement de la confiance en soi</p>
        </div>

          
        </div>
      </section>
    </>
  );
}
