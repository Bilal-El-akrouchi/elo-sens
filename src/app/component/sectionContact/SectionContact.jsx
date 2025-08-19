"use client";
import "./SectionContact.css";


export default function SectionContact() {
  return (
    <>
      <footer id="contact" className="pb-5 h-[50vh] border-t-1 border-black ">

        <div className="lg:text-xl flex-col md:flex-row gap-10 text-lg flex justify-evenly items-center w-4/5 mx-auto mt-10 p-10">
          <h2 className=" bg-white p-5 rounded-2xl shadow-lg font-semibold">Rejoins-nous !</h2>
          <a href="https://www.paypal.com/be/home?locale.x=fr_BE">
          <h2 className="bg-white p-5 rounded-2xl shadow-lg font-semibold"> Soutiens-nous</h2>
          </a>
          <a href="/contact">
            <h2 className="bg-white p-5 rounded-2xl shadow-lg font-semibold">Contacte-nous</h2>
          </a>

        </div>

        <div className="flex justify-center items-center gap-10 text-white text-xl">
          <a href="https://www.facebook.com/">
            <i class="bi bi-facebook p-5 rounded-full bg-emerald-900"></i></a>

          <a href="https://www.instagram.com/">
            <i class="bi bi-instagram p-5 rounded-full bg-emerald-900"></i></a>
          <a href="https://www.linkedin.com/">
            <i class="bi bi-linkedin p-5 rounded-full bg-emerald-900"></i></a>
        </div>

        <div>
          <p className="text-center pt-10 font-semibold text-lg">Ensemble, construisons un avenir plus solidaire</p>
        </div>
      </footer>
    </>
  );
}
