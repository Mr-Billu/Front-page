
import type { FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

import Testimonials from "./components/Testimonials";
import { MobileReviewSection } from "./components/Reviews";

const Home: FC = () => {
  return (
    <div className="bg-white min-h-screen  ">
      <Header />
      <main className="flex flex-col row-start-2 items-center sm:items-start mt-17 max-w-8xl mx-auto  ">
        <Hero />
        <Features />
        <MobileReviewSection />
        <Pricing />   
        <FAQ />

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
