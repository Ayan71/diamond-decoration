import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { Gallery } from "@/components/gallery"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"
import { FloatingButtons } from "@/components/floating-buttons"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Categories />
      <Gallery />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
