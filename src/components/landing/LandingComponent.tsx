import SideNavBar from "./SideNavBar";
import WelcomeSection from "./WelcomeSection";
import Characteristic from "./Characteristic";
import Personalized from "./Personalized";
import Experience from "./Experience";
import Contact from "./Contact";
import ScrollToTopButton from "./ScrollToTopButton";
import Footer from "./Footer";

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
