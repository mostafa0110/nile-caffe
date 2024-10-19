import Footer from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";

import Testimonials from "@/components/Testimonials/Testimonials";

import Image from "next/image";
import Carouselcomponent from "@/components/Carousel/Carousel.component";
import HomeItem from "@/components/HomeItem/HomeItem";

export default function Home() {
  return (
    <div className="container-fluid">
      <Hero />
      <Carouselcomponent />
      <HomeItem />
      <Testimonials />
    </div>
  );
}
