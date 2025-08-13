"use client";
import "./SectionContact.css";


export default function SectionContact() {
  return (
    <>
      <section id="contact" className="pb-5 border-t-1 border-black">
        <div className="w-3/5 justify-between mx-auto flex">
          <div>
            <p>Rejoins-nous ! Deviens Bénévole</p>
            <p>Soutien-nous</p>
          </div>
          <div>
          <h2 className="text-xl pb-2">Contact Nous</h2>
          <div className="flex justify-center items-center gap-4">
          <img src="/img/instagram.svg" alt="" />
          <img src="/img/tiktok.svg" alt="" />
          </div>
          </div>
        </div>

      </section>
    </>
  );
}
