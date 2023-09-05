import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-bg1 dark:bg-bg1Dark text-primary dark:text-primaryDark bg-cover border border-gray-500">
            <h1>Design by <Link href='https://github.com/iolmstead23/ianolmstead.com'>Ian Olmstead</Link></h1>
        </div>
    )
}