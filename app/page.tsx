import AboutLanding from "./components/about"
import Banner from "./components/banner"
import Hero from "./components/hero"
import Portfolio from "./components/portfolio"

export default function HomePage() {
    return (
        <div>
            <div>
                <Hero />
            </div>

            <div>
                <Banner />
            </div>

            <div className="flex flex-row justify-center items-center">
                <div className="text-center font-bold text-3xl py-10 px-20 lg:w-1/2">
                    Favorite quote: <br /> <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</i>
                </div>
            </div>

            <div>
                <AboutLanding />
            </div>

            <div>
                <Portfolio />
            </div>
        </div>
    )
}