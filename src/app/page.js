import Image from "next/image";
import Navbar from "./component/nav/Navbar";
import Header from "./component/header/Header";
import SectionWho from "./component/sectionWho/SectionWho";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Header/>
        <SectionWho/>
      </main>
    </>
  );
}
