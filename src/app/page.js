import Image from "next/image";
import Navbar from "./component/nav/Navbar";
import Header from "./component/header/Header";
import SectionWho from "./component/sectionWho/SectionWho";
import SectionContact from "./component/sectionContact/SectionContact";
import SectionSellPoint from "./component/sectionSellPoint/SectionSellPoint";
import SectionAccrochage from "./component/SectionAccrochage/SectionAccrochage";
import SectionArtOratoire from "./component/sectionArtOratoire/SectionArtOratoire";
import SectionPricing from "./component/pricing/SectionPricing";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Header/>
        <SectionWho/>
        <SectionPricing/>
{/* METTRE DU ROSE ORANGE VERT A CHAQUEZ SECTION  */}
        <SectionArtOratoire/>
        <SectionSellPoint/>
        <SectionAccrochage/>
        <SectionContact/>
      </main>
    </>
  );
}
