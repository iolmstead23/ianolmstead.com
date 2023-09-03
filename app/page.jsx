import Image from 'next/image';
import Link from 'next/link'

export default function Home() {
  return (
    <div>

      <Image
        src="/Ian-Profile.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <div className="justify-center card">
        <p className="text-lg">Hello, I am Ian Olmstead. I am a passionate computer nerd that has an affinity for fine arts. I first started working with computer when I was a teenager developing videogames as a hobby. I am currently pursuing a bachelors degree in Computer Science. I have years of professional experience in Sales and Finance.</p>
      </div>
    </div>
  );
};
