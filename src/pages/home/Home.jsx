import Header from "./_components/header/header";
import Banner from "./_components/home/banner";
import OurAstrologers from "./_components/home/ourAtrologers";
import About from "./_components/home/About";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
      <OurAstrologers />
      <About />
    </div>
  );
}
