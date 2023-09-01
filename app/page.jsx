import Image from 'next/image'

export default function Home() {
  return (
    <div className="container flex-col">
        <h1 className="text-4xl font-extrabold dark:text-white">Ian Olmstead</h1>
        <br />

        <Image
          src="/Ian-Profile.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="block center"
        />
          
        <p>Hello, I am Ian Olmstead. I am a passionate computerphile that has an affinity for fine arts. I first started working with computer when I was a teenager developing videogames as a hobby. I am currently pursuing a bachelors degree in Computer Science. I have years of professional experience in Sales and Finance.</p>
        <br />
         
        <div className="flex-col">
          <p>Kaggle <a target="_blank" rel="noopener" href="https://www.kaggle.com/ianolmstead">@ianolmstead</a></p>
          <p>GitHub <a target="_blank" rel="noopener" href="https://github.com/iolmstead23">@iolmstead23</a></p>
          <p>Leetcode <a target="_blank" rel="noopener" href="https://leetcode.com/Apogi23/">@apogi23</a></p>
          <p>Email <a href="mailto:ian.d.olmstead@gmail.com">ian.d.olmstead@gmail.com</a></p>
        </div>
    </div>
  )
}
