import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-row flex-wrap justify-center my-10">
            <div className="mx-10 my-[15px]">
                <Image src="/Ian-Profile.png" alt="Picture of Ian" width={"500"} height={500} className="clip-circle" />
            </div>
            <p className="text-2xl mx-10 my-[15px]">
                Hello my name is Ian Olmstead and this is my blog. I started coding when i was a teenager. Video game design was my first passion, but I quickly fell in love with computer science as a whole. I am now on a journey to expand my skills.<br />
                I have skills in Javascript and Python. I got my <Link href="https://eportfolio.mygreatlearning.com/ian-olmstead">certificate from MIT</Link> in Applied Data Science. This website was built using Next.js and hosted using Vercel. Blog posts were generated using ChaptGPT.
            </p>
        </div>
    )
}