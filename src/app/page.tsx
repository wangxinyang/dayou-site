import GoogleMap from "@/components/googleMap";
import { AboutUs } from "@/components/sections/about_us";
import { Banner } from "@/components/sections/banner";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:gap-10 pt-20 sm:pt-24 lg:pt-28">
          <Banner />
          <AboutUs />
          <Products />
          <section className="w-full flex flex-col gap-4 sm:gap-6 items-center py-6 sm:py-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground relative">
              地図
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-primary rounded-full" />
            </h2>
            <div className="w-full rounded-lg overflow-hidden shadow-lg hover-card">
              <GoogleMap />
            </div>
          </section>
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
