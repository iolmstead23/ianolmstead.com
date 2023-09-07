import AboutLanding from "./components/landing about";
import Banner from "./components/landing banner";
import Hero from "./components/landing hero";
import Portfolio from "./components/portfolio";

export default function Landing() {
    return (
        <div>
            <div className="bg-gradient-to-b from-slate-200 to-slate-300">
                <Hero />
                <Banner />
                <div className="flex flex-row justify-center items-center">
                    <div className="text-center font-bold text-3xl py-10 px-20 lg:w-1/2">
                        Favorite quote: <br /> <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</i>
                    </div>
                </div>

                <div>
                    <AboutLanding />
                </div>

                <Portfolio/>
            </div>
        </div>
    )
}