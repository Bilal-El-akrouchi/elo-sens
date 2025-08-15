"use client";
import "./SectionContact.css";


export default function SectionContact() {
  return (
    <>
      <footer id="contact" className="pb-5 flex items-center justify-center h-[50vh] border-t-1 border-black bg-emerald-900 texte-vert">
        <div className="w-3/5 flex bg justify-between items-center mx-auto  texte-vert">
          <div className="">
            <p className="texte-vert">Rejoins-nous ! Deviens Bénévole</p>
            <p className="texte-vert">Soutien-nous</p>
          </div>
          <div>
          <h2 className="text-xl pb-2 texte-vert">Contact Nous</h2>
          <div className="flex justify-center items-center gap-4">
          <img src="/img/instagram.svg" alt="icone instagram" className="texte-vert"/>
          <img src="/img/tiktok.svg" alt=" icone tiktok" className="texte-vert"/>
          </div>
          </div>
        </div>

      </footer>
    </>
  );
}
