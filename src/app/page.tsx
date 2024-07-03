import About from "./components/About";
import FreePdf from "./components/FreePdf";
import Hero from "./components/Hero";
import MyBrands from "./components/MyBrands";
import Podcasts from "./components/Podcasts";
import WhoIsAllan from "./components/WhoIsAllan";
import Navbar from "./components/common/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="bg-bunker">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Podcasts />
      <WhoIsAllan />
      <MyBrands />
      <FreePdf />
    </main>
  );
}
