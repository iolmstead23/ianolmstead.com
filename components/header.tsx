import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-cover bg-no-repeat bg-[url('/coding-white.png')] dark:bg-[url('/coding.png')] h-[500px] clip-banner">
            <div className="flex justify-center">
                <div className="lg:text-6xl text-2xl text-white text-center font-bold my-[100px] bg-gray-800 bg-opacity-90 p-10 rounded-3xl">
                    <h1>Ian Olmstead</h1>
                </div>
            </div>
        </div>
    )
}