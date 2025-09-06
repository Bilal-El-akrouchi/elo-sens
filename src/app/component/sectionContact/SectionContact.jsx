"use client";
import "./SectionContact.css";


export default function SectionContact() {
  return (
    <>
      <footer id="contact" className="pb-5 min-h-[50vh] bg-[#303030] border-t-1 border-black ">

        <div className="lg:text-xl flex-col md:flex-row gap-10 text-lg flex justify-evenly items-center w-4/5 mx-auto mt-10 p-10">
        <a href="/contact">
          <div className="p-5 hover:text-amber-400  text-white   font-semibold choixoe cursor-pointer">Rejoins-nous !</div>
        </a>
          <a href="/contact">
          <div className="p-5 hover:text-amber-400  text-white  choixoe cursor-pointer"> Soutiens-nous</div>
          </a>
          <a href="/contact">
            <div className="p-5 hover:text-amber-400  text-white   choixoe cursor-pointer" cursor-pointer>Contacte-nous</div>
          </a>

        </div>

        <div className="flex justify-center items-center gap-10 text-white text-xl">
          <a href="https://www.facebook.com/share/17AKr8BSDC/?mibextid=wwXIfr">
            <i class="bi bi-facebook p-5 rounded-full text-white hover:text-amber-400"></i></a>

          <a href="https://www.instagram.com/elo.sens?igsh=cnVxNzdjaGoyMG00&utm_source=qr">
            <i class="bi bi-instagram p-5 rounded-full text-white hover:text-amber-400"></i></a>
          <a href="https://www.linkedin.com/">
            <i class="bi bi-linkedin p-5 rounded-full text-white hover:text-amber-400"></i></a>
        </div>

        <div>
          <p className="text-center pt-10 font-semibold text-lg text-white">Ensemble, construisons un avenir plus solidaire</p>
        </div>
      </footer>
    </>
  );
}
