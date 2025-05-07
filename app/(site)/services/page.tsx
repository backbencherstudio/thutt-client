import CTA from "../_components/_reusable/_cta/cta";
import Banner from "../_components/_pages/_services/_banner/banner";
import WhyChooseUs from "../_components/_pages/_services/_why-choose-us/whyChooseUs";
import CardOne from "../_components/_pages/_services/_service-cards/_card-one/cardOne";
import CardTwo from "../_components/_pages/_services/_service-cards/_card-two/cardTwo";
export default function Services() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto pt-10 sm:pt-16 md:pt-20 xl:pt-[120px]">
        <CardOne />
        <CardTwo />
      </div>
      <WhyChooseUs />
      <CTA />
    </div>
  );
}
