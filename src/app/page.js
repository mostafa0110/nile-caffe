import Footer from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";

import Testimonials from "@/components/Testimonials/Testimonials";

import Image from "next/image";

export default function Home() {
  return (
    <div className="container-fluid">
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}
