'use client'

import FAQ from "@/components/FAQ"
import Socials from "@/components/socials"
import CallToAction from "@/components/fiverr/cta2"
import Link from "next/link"
import { sendGTMEvent } from "@next/third-parties/google"

export default function Home() {
    return (
        <div className="bg-white text-gray-900">
            <div className="font-bold flex flex-row justify-end px-[100px] py-5">
                <Link href="/blogs" onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'blog' })}>Blog</Link>
            </div>
            <CallToAction />
            <FAQ />
            <Socials />
            <div className="text-center text-black pb-10">Website design by Ian Olmstead</div>
        </div>
    )
}
