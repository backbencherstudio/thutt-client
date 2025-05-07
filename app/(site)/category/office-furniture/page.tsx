import Testimonials from "../../_components/_reusable/_testimonials/testimonials";
import CTA from "../../_components/_reusable/_cta/cta";
import Banner from "../../_components/_pages/_office-furniture/_banner/banner";
import Feature from "../../_components/_pages/_office-furniture/_feature/feature";
import PreownedCubicles from "../../_components/_pages/_office-furniture/_cubicles/preownedCubicles";
import WhyChooseUs from "../../_components/_pages/_office-furniture/_why-choose-us/whyChooseUs";
export default function Home() {
  return (
    <div>
      <Banner />
      <Feature />
      <PreownedCubicles />
      <WhyChooseUs />
      <CTA />
      <Testimonials />
    </div>
  );
}
