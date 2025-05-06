import Banner from "./_components/_pages/_home/_banner/banner";
import About from "./_components/_pages/_home/_about/about";
import Category from "./_components/_pages/_home/_category/category";
import Service from "./_components/_pages/_home/_service/service";
import Portfolio from "./_components/_pages/_home/_portfolio/portfolio";
export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Category />
      <Service />
      <Portfolio />
    </div>
  );
}
