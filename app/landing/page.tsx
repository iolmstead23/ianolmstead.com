import AboutLanding from "../components/about_landing";
import Banner from "../components/banner";
import Hero from "../components/hero_landing";
import Portfolio from "../components/portfolio";

export default function Landing() {
    return (
        <div>
            <div className="bg-gradient-to-b from-slate-200 to-slate-300">
                <Hero />
                <Banner />

                <div className="text-center font-bold text-3xl py-10">
                    Favroite quote: <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Pulvinar pellentesque habitant morbi tristique. Eget est lorem ipsum dolor sit amet consectetur adipiscing.
                </div>

                <div>
                    <AboutLanding />
                </div>

                <Portfolio/>
            </div>
        </div>
    )
}