import Hero from "./components/Home/Hero";
import Products from "./components/Home/Products";
import Footer from "./components/Footer";
import CookiePopup from "./components/CookiePopup";

export default function Home() {
  return (
    <>
      <div className="bg px-4 pb-10 md:pb-[250px] pt-2 md:pt-16">
        <Hero />
        <Products />
      </div>
      <CookiePopup />
      <Footer />
    </>
  );
}
