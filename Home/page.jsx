import Aim from "../components/aim-moto";
import ChooseUs from "../components/choose-us";
import Faq from "../components/faq";
import Hero from "../components/Hero";
import SafeHonest from "../components/safe-honest";
import Testimonials from "../components/testimonials";
import Works from "../components/works";

function Home() {
  return (
    <>
      <Hero />
      <Aim />
      <Works />
      <ChooseUs />
      <SafeHonest />
      <Testimonials />
      <Faq />
    </>
  );
}
export default Home;
