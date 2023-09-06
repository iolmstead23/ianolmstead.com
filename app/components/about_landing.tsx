import Image from 'next/image'

export default function AboutLanding() {
    return (
        <div>
            <h1 className="text-3xl text-center">About Me</h1>

            <div className="grid grid-flow-col">
                <Image
                    src="/Ian-Profile.png"
                    width={550}
                    height={550}
                    alt="Picture of the author"
                    className="clip-circle"/>
                
                <div className="container">
                    <p>Hello, I am Ian Olmstead. I am a passionate computer nerd that has an affinity for fine arts. I first started working with computer when I was a teenager developing videogames as a hobby. I am currently pursuing a bachelors degree in Computer Science. I have years of professional experience in Sales and Finance.</p>
                </div>
            </div>
        </div>
    )
}