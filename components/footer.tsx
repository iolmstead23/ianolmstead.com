import Link from "next/link";
import Contact from "./contact";

export default function Footer() {
    return(
        <div>
            <Contact />
            <div className="flex justify-center text-center m-10">
                <div className="mx-10">
                    Website by Ian Olmstead
                </div>
                <div>
                    <Link href="/studio">Studio Login</Link>
                </div>
            </div>
        </div>
    )
}