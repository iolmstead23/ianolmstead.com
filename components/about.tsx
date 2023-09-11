import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-row flex-wrap justify-center my-10">
            <div className="mx-10 my-[15px]">
                <Image src="/Ian-Profile.png" alt="Picture of Ian" width={"500"} height={500} className="clip-circle" />
            </div>
            <div className="text-2xl mx-10 my-[15px]">
                Hello my name is Ian Olmstead and this is my blog.
            </div>
        </div>
    )
}