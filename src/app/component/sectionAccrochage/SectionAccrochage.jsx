"use client";
import "./SectionAccrochage.css";
import { useInView } from "react-intersection-observer";

export default function SectionAccrochage() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.7, 
  });

  return (
    <section
      id="accrochage"
      ref={ref}
      className="min-h-screen flex flex-col justify-center text-center md:text-start items-center md:items-start md:justify-start"
    >
      <div className="md:ms-[10%] flex flex-col justify-center items-center md:justify-around md:mgn md:items-start ">
        <h2 className="text-3xl pb-10">Accrochage</h2>
        <p className="w-3/5 text-xl flex justify-center items-center">
          Pour nous, l’accrochage ne se limite pas à l’école : il s’agit avant
          tout d’un accrochage à la vie. À travers nos projets, nous accompagnons
          les jeunes en difficulté en travaillant sur deux dimensions essentielles :
        </p>
      </div>

      {/* Cartes animées */}
      <div className="flex md:flex-row flex-col justify-center items-center w-3/4 flex-wrap gap-10 mt-20 ml-10 font-semibold">
        {[
          { icon: "bi-chat", text: "La relation d’égal à égal" },
          { icon: "bi-people", text: "Le storytelling et la résilience" },
          { icon: "bi-bullseye", text: "La différence (Pair-aidance)" },
        ].map((item, index) => (
          <div
            key={index}
            className={`fondtkt flex flex-row gap-2 text-start justify-center items-center md:w-4/10 w-3/4 p-6 rounded-2xl transition-all duration-700 ease-out
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{ transitionDelay: `${index * 200}ms` }} // petit délai entre les div
          >
            <i className={`bi ${item.icon} py-3 px-4 text-xl text-white rounded-xl bg-[#ffc400]`}></i>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
