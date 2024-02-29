import Link from "next/link";

export default function Contact() {
    return (
      <div className="text-2xl text-black dark:text-gray-300 m-10">
        <div className="text-center m-5">Socials</div>
        
        <div className="flex text-base justify-around">
          <div><Link href="https://www.linkedin.com/in/ubermensch">LinkedIn</Link></div>
          <div><Link href="https://www.kaggle.com/ianolmstead">Kaggle</Link></div>
          <div><Link href="https://github.com/iolmstead23">GitHub</Link></div>
          <div><Link href="https://leetcode.com/Apogi23/">Leetcode</Link></div>
          <div><Link href="mailto:ianolmstead1991@gmail.com">Email</Link></div>
        </div>
      </div>
    )
}