import Image from "next/image";
import Stats from "../components/stats";

export default function AboutPage() {
    return (
        <div className="grid grid-cols-2 p-10">

            <Image
                src="/Ian-Profile.png"
                width={550}
                height={550}
                alt="Picture of the author" />

            <div>
                <p className="text-primary dark:text-primaryDark bg-bg1 dark:bg-bg1Dark">Hello, I am Ian Olmstead. I am a passionate computer nerd that has an affinity for fine arts. I first started working with computer when I was a teenager developing videogames as a hobby. I am currently pursuing a bachelors degree in Computer Science. I have years of professional experience in Sales and Finance.</p>
            </div>

            <Stats />
        </div>
    )
}