import Hero from './components/hero'
import Banner from './components/banner'
import Quote from './components/quote'
import About from './components/about'
import Portfolio from './components/portfolio'

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />

      <div className="flex flex-row justify-center items-center">
          <div className="text-center font-bold text-3xl py-10 px-20 lg:w-1/2">
              <Quote />
          </div>
      </div>

      <About />
      <Portfolio />
    </main>
  )
}
