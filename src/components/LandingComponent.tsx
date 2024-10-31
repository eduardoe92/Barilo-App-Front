import SideNavBar from "./landing/SideNavBar";
import WelcomeSection from "./landing/WelcomeSection";
import Characteristic from "./landing/Characteristic";
import Personalized from "./landing/Personalized";
import Experience from "./landing/Experience";
import Contact from "./landing/Contact";
import ScrollToTopButton from "./landing/ScrollToTopButton";
import Footer from "./landing/Footer";

export default function LandingComponent() {

  return (
    <>
      <SideNavBar />
      <div className="ml-14 md:ml-0">
        <main className="flex-1">
          <WelcomeSection />
          <Characteristic />
          <Personalized />
          <Experience />
          <Contact />
        </main>
        <ScrollToTopButton />
      </div>
      <div className="hidden md:flex">
        <Footer />
      </div>
    </>
  );
}
