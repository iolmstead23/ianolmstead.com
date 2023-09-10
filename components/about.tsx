import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-row flex-wrap justify-start my-10">
            <div className="mx-10 my-[15px]">
                <Image src="/Ian-Profile.png" alt="Picture of Ian" width={"500"} height={500} className="clip-circle" />
            </div>
            <div className="text-2xl mx-10 my-[15px]">
                Hello This is a message from Ian.
            </div>
        </div>
    )
}