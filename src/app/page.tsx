import CinematicMoment from "@/components/CinematicMoment";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Location from "@/components/Location";
import MenuPreview from "@/components/MenuPreview";
import Navbar from "@/components/Navbar";
import Reservation from "@/components/Reservation";
import SignatureDishes from "@/components/SignatureDishes";
import SkyScape from "@/components/SkyScape";





export default function HomePage(){

  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <SignatureDishes />
      <SkyScape />
      <CinematicMoment />
      <MenuPreview/>

      <Experience />
      <Reservation />
      <Location />
      <Footer />
    </main>
  );
}