import Link from "next/link";
import Contact from "./contact";

export default function Footer() {
    return (
        <div className="bg-bg1 text-primary bg-cover">
            <Contact />

            <h1>Design by <Link href='https://github.com/iolmstead23/ianolmstead.com'>Ian Olmstead</Link></h1>
        </div>
    )
}