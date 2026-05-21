import Header from "./_components/header/header";
import Banner from "./_components/home/banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
    </div>
  );
}
