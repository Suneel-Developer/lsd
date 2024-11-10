import Hero from "./components/Home/Hero";
import Products from "./components/Home/Products";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg px-4 pb-10 md:pb-[250px] pt-2 md:pt-16">
        <Hero />
        <Products />
      </div>
      <Footer />
    </>
  );
}
