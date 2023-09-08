import Image from 'next/image'
import Link from 'next/link'

const dummyText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Pulvinar pellentesque habitant morbi tristique. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Elementum eu facilisis sed odio morbi quis commodo. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Duis at consectetur lorem donec massa sapien faucibus. Interdum velit euismod in pellentesque massa placerat. Non pulvinar neque laoreet suspendisse. Nibh praesent tristique magna sit amet. Non consectetur a erat nam at lectus. Tempor orci dapibus ultrices in iaculis nunc. Et sollicitudin ac orci phasellus egestas tellus. Quisque sagittis purus sit amet. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Bibendum est ultricies integer quis auctor elit. Non odio euismod lacinia at quis risus. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Fames ac turpis egestas sed.'

export default function AboutLanding() {
    return (
        <div className="container py-[100px]">
            <div className="justify-center align-center">
                <div className="grid lg:grid-flow-col sm:grid-flow-row">
                    <div>
                        <Image
                            src="/Ian-Profile.png"
                            width={550}
                            height={550}
                            alt="Picture of the author"
                            className="clip-circle sm:mx-5 md:mx-20 lg:mx-50"/>
                    </div>

                    <div className="container flex">
                        <div className="lg:text-3xl sm:text-2xl px-10 py-20 justify-center">
                            <p className="text-center">{dummyText.slice(0,500)}</p>
                            <h2 className="text-md text-center">
                                <Link href="/blogs" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Visit My Blog

                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}