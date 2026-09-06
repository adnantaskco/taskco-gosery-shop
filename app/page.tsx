import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Herosection";
import FeaturedCategories from "./Components/CategorySection";
import TodaysPicks from "./Components/Todayspicks";
import MiddleBanner from "./Components/vagetablebanner";
import FeaturedProductsSection from "./Components/featuresection";
import PromoBannersGrid from "./Components/promobanner";
import PremiumBeefSection from "./Components/PrimeumMeat";
import PromoBannersGrid2 from "./promobanner2";
import SEOContentSection from "./Components/knowmore";
import Footer from "./Components/Footer";

export default function Home() {
  return (
  <>
  <Navbar/>
  <HeroSection/>
  <FeaturedCategories/>
  <TodaysPicks/>
  <MiddleBanner/>
  <FeaturedProductsSection/>
  <PromoBannersGrid/>
  <PremiumBeefSection/>
  <PromoBannersGrid2/>

  <SEOContentSection/>
  <Footer/>
  </>
  );
}
