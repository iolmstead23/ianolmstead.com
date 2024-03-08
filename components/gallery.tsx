import Image from 'next/image';
import Link from 'next/link';
import EmblaCarousel from './embla/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';

const images: string[] = [];
const OPTIONS: EmblaOptionsType = { dragFree: true }
const SLIDE_COUNT = 60
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

// Loop through each filename in the array
for (let i = 0; i < SLIDE_COUNT; i++) {
    // Push the filename into the fileList array
    images.push(`/gallery/${i}.png`);
}

export default function Gallery() {

    return (
        <>
            <div className="text-center font-bold pb-10 px-10 lg:px-0">
                <h1 className="text-3xl">
                    If you like what you see check me out on
                    <Link 
                        href="https://civitai.com/user/iolmstead23"
                        className="font-bold text-indigo-400 mx-2"
                    >
                        CivitAI
                    </Link>
                </h1>
            </div>

            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </>
    )
}