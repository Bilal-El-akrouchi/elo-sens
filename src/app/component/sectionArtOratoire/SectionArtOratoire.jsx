"use client";
import "./SectionArtOratoire.css";


export default function SectionArtOratoire() {
  return (
    <>
    {/* fond tkt tu dois mettre la couleur # qui correspond a emerald-900 dans le globalcss */}
      <section id="artOratoire" className="min-h-screen flex flex-col justify-center text-center md:text-start items-center md:items-start md:justify-start">
        <div className="md:ms-[10%]  flex flex-col justify-center items-center md:justify-around md:mgn md:items-start ">

        <h2 className=" text-3xl pb-10">Art Oratoire</h2>
        <p className="w-3/5  text-xl flex justify-center items-center">Découvrez l'art de captiver votre audience et de transmettre vos idées avec impact. Nos ateliers d'art oratoire vous accompagnent dans le développement de vos compétences de communication, pour que chaque prise de parole devienne une opportunité de briller et d'inspirer.</p>
        </div>
        <div className="flex md:flex-row flex-col justify-center liste items-center w-3/4 flex-wrap gap-10 mt-20 ml-10 font-semibold">
        <div className="flex flex-row gap-2 text-start  justify-center items-center md:w-4/10 w-3/4 fondtkt p-6 rounded-2xl">
          <i class="bi bi-chat py-3 px-4 text-xl text-white rounded-xl bg-[#ffc400]"></i>
          <p>Maîtrise de l'expression orale et corporelle</p>
        </div>
        <div className="flex gap-2 text-start flex-row justify-center items-center md:w-4/10 w-3/4 fondtkt p-6 rounded-2xl">
          <i class="bi bi-people py-3 px-4 text-xl text-white rounded-xl bg-[#ffc400] "></i>
          <p>Gestion du stress et de l'anxiété en public</p>
        </div>
        <div className="flex gap-2 text-start  flex-row justify-around items-center md:w-4/10 w-3/4 fondtkt p-6 rounded-2xl">
          <i class="bi bi-bullseye py-3 px-4 text-xl text-white rounded-xl bg-[#ffc400]"></i>
          <p>Structuration claire et impactante des idées</p>
        </div>
        <div className="flex gap-2 text-start  flex-row justify-around items-center md:w-4/10 w-3/4 fondtkt p-6 rounded-2xl">
          <i class="bi bi-lightbulb py-3 px-4 text-xl text-white rounded-xl bg-[#ffc400]"></i>
          <p>Développement de la confiance en soi</p>
        </div>

          
        </div>
      </section>
    </>
  );
}
