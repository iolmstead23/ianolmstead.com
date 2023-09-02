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
        
      <p className="text-lg">Hello, I am Ian Olmstead. I am a passionate computerphile that has an affinity for fine arts. I first started working with computer when I was a teenager developing videogames as a hobby. I am currently pursuing a bachelors degree in Computer Science. I have years of professional experience in Sales and Finance.</p>
      
      <div className="container text-2xl">
        Links
        <div className="flex-col text-base">
          <p>LinkedIn <Link href="https://www.linkedin.com/in/ubermensch">@ubermensch</Link></p>
          <p>Kaggle <Link href="https://www.kaggle.com/ianolmstead">@ianolmstead</Link></p>
          <p>GitHub <Link href="https://github.com/iolmstead23">@iolmstead23</Link></p>
          <p>Leetcode <Link href="https://leetcode.com/Apogi23/">@apogi23</Link></p>
          <p>Email <Link href="mailto:ian.d.olmstead@gmail.com">ian.d.olmstead@gmail.com</Link></p>
          
        </div>
      </div>
    </div>
  );
};
