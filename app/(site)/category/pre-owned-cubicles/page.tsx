import Testimonials from "../../_components/_reusable/_testimonials/testimonials";
import CTA from "../../_components/_reusable/_cta/cta";
import NewCubicles from "../../_components/_pages/_new-cubicles/_cubicles/newCubicles";
import WhyChooseUs from "../../_components/_pages/_new-cubicles/_why-choose-us/whyChooseUs";
import Banner from "../../_components/_pages/_preowned-cubicles/_banner/banner";
import Feature from "../../_components/_pages/_preowned-cubicles/_feature/feature";
import PreownedCubicles from "../../_components/_pages/_preowned-cubicles/_cubicles/preownedCubicles";
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
