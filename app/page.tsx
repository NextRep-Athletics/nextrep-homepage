"use client";
import HeroLanding from "@/lib/components/Landing";
import Trainers from "@/lib/components/Trainers";
import Testimonials from "@/lib/components/Testimonials";
import Contact from "@/lib/components/Contact";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroLanding />

      <Trainers />

      <Testimonials />

      <Contact />
    </>
  );
}
