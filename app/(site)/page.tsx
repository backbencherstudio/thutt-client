import Banner from "./_components/_pages/_home/_banner/banner";
import About from "./_components/_pages/_home/_about/about";
import Category from "./_components/_pages/_home/_category/category";
import Service from "./_components/_pages/_home/_service/service";
export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Category />
      <Service />
    </div>
  );
}
