import "./Header.css";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <header className="w-full h-screen relative">
        
        <div className="w-full h-full absolute bg-[#e1fede]/50 backdrop-blur-sm ">

        <div className="w-full h-screen flex  justify-center items-center flex-col text-[#023a0f]">
          <h1 id="who" className="uppercase ">
            accompagne votre développement personnel grâce à la <br />
            pair-aidance
          </h1>
        </div>
        </div>
      </header>
    </>
  );
}
