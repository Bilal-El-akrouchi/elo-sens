"use client";
import "./formulaire.css";
import Link from "next/link";

export default function Formulaire() {
  return (
    <>
      {/* <div className="h-screen w-full bg-[#313131] ">

              <form action="https://formspree.io/f/xpwrvopy" className="" method="POST"
            className="mt-10 bg-[#E6F4FE] p-8 rounded-xl shadow-lg max-w-xl mx-auto space-y-6">
            <div>
                <input type="text" name="_gotcha" className="hidden" />

                <label htmlFor="name" className="block mb-1 text-[#113264]">Nom</label>
                <input type="text" id="name" name="name" required
                    className="w-full p-3 rounded-lg bg-[#E6F4FE] text-[#113264] border border-[#8EC8F6] focus:outline-none focus:ring-2 focus:ring-[#5EB1EF]"/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-1 text-[#113264]">Email</label>
                <input type="email" id="email" name="email" required
                    className="w-full p-3 rounded-lg bg-[#E6F4FE] text-[#113264] border border-[#8EC8F6] focus:outline-none focus:ring-2 focus:ring-[#5EB1EF]"/>
            </div>
            <div>
                <label htmlFor="message" className="block mb-1 text-[#113264]">Message</label>
                <textarea id="message" name="message" rows="4" required
                    className="w-full p-3 rounded-lg bg-[#E6F4FE] text-[#113264] border border-[#8EC8F6] focus:outline-none focus:ring-2 focus:ring-[#5EB1EF]"></textarea>
            </div>
            <button type="submit"
                className="bg-[#E6F4FE] border border-[#8EC8F6] hover:bg-[#D5EFFF] text-[#113264] font-semibold py-2 px-6 rounded-full transition">
                Envoyer
            </button>
        </form>
              </div> */}
      <div className="uppercase h-screen w-full bg-[#313131] flex flex-col justify-center items-center  text-amber-50">
        <div className="choixoe flex-col text-9xl h-2/4 flex justify-center items-center text-center w-5/6 ">
          très bientôt !
          <div className="text-xl">
            un formulaire de contact, en attendant: <br />
            mail: contact@elosens.com
          </div>
        </div>
        <div className="bg-red-600 mt-10 p-5">
          <Link href="/">retour</Link>
        </div>
      </div>
    </>
  );
}
