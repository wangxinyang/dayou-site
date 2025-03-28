import { AboutUs } from "@/components/sections/about_us";
import { Banner } from "@/components/sections/banner";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";

export default function Home() {
  return (
    <main className="text-stone-950 max-w-5xl mx-auto p-4">
      <Hero />
      <Banner />
      <AboutUs />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}
