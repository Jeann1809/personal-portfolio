import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Metrics } from "@/components/sections/Metrics"
import { About } from "@/components/sections/About"
import { Projects } from "@/components/sections/Projects"
import { Experience } from "@/components/sections/Experience"
import { Skills } from "@/components/sections/Skills"
import { Contact } from "@/components/sections/Contact"
import { Preloader } from "@/components/ui/Preloader"
import { BackToTop } from "@/components/ui/BackToTop"
import { LightboxProvider } from "@/components/ui/Lightbox"

export default function Home() {
  return (
    <>
      <Preloader />
      <main
        className="flex min-h-screen flex-col items-center bg-paper text-ink"
        style={{ padding: "clamp(18px, 3vw, 40px)", gap: "clamp(18px, 2.4vw, 28px)" }}
      >
        <Navbar />
        <LightboxProvider>
          <Hero />
          <Metrics />
          <About />
          <Projects />
          <Experience />
          <Skills />
        </LightboxProvider>
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </>
  )
}
