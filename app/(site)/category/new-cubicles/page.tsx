import Testimonials from "../../_components/_reusable/_testimonials/testimonials";
import CTA from "../../_components/_reusable/_cta/cta";
import Banner from "../../_components/_pages/_new-cubicles/_banner/banner";
import Feature from "../../_components/_pages/_new-cubicles/_feature/feature";
import NewCubicles from "../../_components/_pages/_new-cubicles/_cubicles/newCubicles";
export default function Home() {
  return (
    <div>
      <Banner />
      <Feature />
      <NewCubicles />
      <CTA />
      <Testimonials />
    </div>
  );
}
