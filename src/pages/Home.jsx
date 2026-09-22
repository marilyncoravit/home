import About from '../sections/About'
import Contact from '../sections/Contact'
import FAQ from '../sections/FAQ'
import Hero from '../sections/Hero'
import Process from '../sections/Process'
import Work from '../sections/Work'

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Process />
      <FAQ />
      <About />
      <Contact />
    </>
  )
}
