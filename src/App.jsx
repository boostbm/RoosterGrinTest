import React from "react"
import { Button } from "./components/Button"
import { Hero } from "./components/Hero"
import { Nav } from "./components/Nav"
import { Banner } from "./components/Banner"
import { HalfImgSection } from "./components/HalfImgSection"
import { IconSection } from "./components/IconSection"
import { CarouselSection } from "./components/CarouselSection"
import { Footer } from "./components/Footer"
import bannerOneImg from "./images/banner-1.jpg"
import bannerTwoImg from "./images/banner-2.jpg"
import "./styles/reset.css"
import "./styles/global.css"

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <HalfImgSection />
      <section id="Banner-1">
        <Banner bgImg={bannerOneImg} position="flex-start">
          <div>
            <h3>
              <span>LOREM IPSUM </span> <br />
            </h3>
            <a href="https://www.roostergrin.com/" target="_blank">
              <Button color="orange">CHECK OUR WEBSITE!</Button>
            </a>
          </div>
        </Banner>
      </section>
      <IconSection />
      <section id="Banner-2">
        <Banner bgImg={bannerTwoImg} position="flex-end">
          <div>
            <h3>
              <span>LOREM UPSUM </span> <br />
            </h3>
            <a href="https://www.roostergrin.com/our-work/" target="_blank">
              <Button color="orange">CHECK OUR WORK!</Button>
            </a>
          </div>
        </Banner>
      </section>
      <CarouselSection />
      <Footer />
    </>
  )
}

export default App
