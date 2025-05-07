import Testimonials from "../../_components/_reusable/_testimonials/testimonials";
import CTA from "../../_components/_reusable/_cta/cta";
import Banner from "../../_components/_pages/_new-cubicles/_banner/banner";
import Feature from "../../_components/_pages/_new-cubicles/_feature/feature";
import NewCubicles from "../../_components/_pages/_new-cubicles/_cubicles/newCubicles";
import WhyChooseUs from "../../_components/_pages/_new-cubicles/_why-choose-us/whyChooseUs";
export default function NewCubiclesPage() {
  return (
    <div>
      <Banner />
      <Feature />
      <NewCubicles />
      <WhyChooseUs />
      <CTA />
      <Testimonials />
    </div>
  );
}
