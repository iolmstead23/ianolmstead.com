import Image from 'next/image'

export default function AboutLanding() {
    return (
        <div className="container py-[100px]">
            <div className="justify-center align-center">
                <div className="grid lg:grid-flow-col sm:grid-flow-row">
                    <Image
                        src="/Ian-Profile.png"
                        width={550}
                        height={550}
                        alt="Picture of the author"
                        className="clip-circle min-w-fit mx-10"/>

                    <div className="container flex">
                        <div className="lg:text-3xl sm:text-2xl px-20 py-20 justify-center">
                            <p>Hello, I am Ian Olmstead. I am a passionate computer nerd that has an affinity for fine arts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}