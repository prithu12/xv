import BrandSlide from "@/components/landing/BrandSlide";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee"
import Pricing from "@/components/landing/Pricing";
import Eyes from "@/components/landing/Eyes"
import ProductShowcase from "@/components/landing/ProductShowcase";
import Testimonials from "@/components/landing/Testimonials";
import Toopbar from "@/components/layout/Toopbar";
import ProductCard from "@/components/landing/ProductCard";

export default function Home() {
  return (
    <div>
      <Hero/>
      <BrandSlide/>
      <ProductShowcase/>
      {/* <Marquee /> */}
      <Eyes />
      <ProductCard />
      {/* <Pricing/>
      <Testimonials/> */}
      {/* <CTA/> */}
      <Footer/>
    </div>
  );
}
