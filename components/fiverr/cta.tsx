import Link from "next/link"
import { Button } from "../ui/button"

export default function CTA() {
    return (
      <div className="w-[500px]">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl pb-5">Get the ball rolling!</h2>
            <h2 className="text-xl font-bold text-gray-900 pb-10">Find out how I can transform your website</h2>
            <Link href="https://www.fiverr.com/ianolmstead" className="text-sm font-semibold leading-6 text-gray-900">
              <Button className="rounded bg-white/10 px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm hover:bg-white/50"> Learn more <span aria-hidden="true">→</span></Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }