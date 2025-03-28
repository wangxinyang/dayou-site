import GoogleMap from "@/components/googleMap";
import { AboutUs } from "@/components/sections/about_us";
import { Banner } from "@/components/sections/banner";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";

export default function Home() {
  return (
    <main className="text-stone-950 max-w-7xl mx-auto p-4">
      <div className="flex flex-col gap-4">
        <Hero />
        <Banner />
        <AboutUs />
        <Products />
        <div className="w-full flex flex-col gap-6 items-center pt-8">
          <h1 className="w-[220px] flex justify-center text-lg lg:text-3xl border border-stone-950 p-4 rounded-md">
            地図
          </h1>
          <GoogleMap />
        </div>
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
