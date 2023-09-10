import Link from "next/link";

export default function Footer() {
    return (
      <div className="text-2xl text-primary dark:text-primaryDark m-10">
        Socials
        <div className="flex-col text-base justify-center card bg-bg1 dark:bg-bg1Dark">
          <div>LinkedIn <Link href="https://www.linkedin.com/in/ubermensch">@ubermensch</Link></div>
          <div>Kaggle <Link href="https://www.kaggle.com/ianolmstead">@ianolmstead</Link></div>
          <div>GitHub <Link href="https://github.com/iolmstead23">@iolmstead23</Link></div>
          <div>Leetcode <Link href="https://leetcode.com/Apogi23/">@apogi23</Link></div>
          <div>Email <Link href="mailto:ian.d.olmstead@gmail.com">ian.d.olmstead@gmail.com</Link></div>
        </div>
      </div>
    )
}