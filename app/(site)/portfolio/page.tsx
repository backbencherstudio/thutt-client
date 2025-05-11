import Banner from "../_components/_pages/_portfolio/_banner/banner";
import CardsOne from "../_components/_pages/_portfolio/_project-cards/_card-one/cardOne";
import CardTwo from "../_components/_pages/_portfolio/_project-cards/_card-two/cardTwo";
export default function Services() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto pt-10 sm:pt-16 md:pt-20 xl:pt-[120px]">
        <CardsOne />
        <CardTwo />
      </div>
    </div>
  );
}
