import Link from "next/link";

export default function Contact() {
    return (
        <div className="container text-2xl text-primary">
        Links
        <div className="flex-col text-base justify-center card">
          <p>LinkedIn <Link href="https://www.linkedin.com/in/ubermensch">@ubermensch</Link></p>
          <p>Kaggle <Link href="https://www.kaggle.com/ianolmstead">@ianolmstead</Link></p>
          <p>GitHub <Link href="https://github.com/iolmstead23">@iolmstead23</Link></p>
          <p>Leetcode <Link href="https://leetcode.com/Apogi23/">@apogi23</Link></p>
          <p>Email <Link href="mailto:ian.d.olmstead@gmail.com">ian.d.olmstead@gmail.com</Link></p>
          
        </div>
      </div>
    )
}