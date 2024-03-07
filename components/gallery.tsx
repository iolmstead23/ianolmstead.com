import Image from 'next/image';
import Carousel from './embla/emblacarousel';

const images: string[] = [];

// Loop through each filename in the array
for (let i = 0; i < 59; i++) {
    // Push the filename into the fileList array
    images.push(`/gallery/${i}.png`);
}

export default function Gallery() {

    return (
        <>
            <div className="text-center font-bold pb-10 px-10 lg:px-0">
                <h1 className="text-2xl">
                    If you like what you see check me out on CivitAI
                </h1>
                <h2 className="text-lg my-5">
                    Swipe to view more!
                </h2>
            </div>
            <Carousel loop>
                {images.map((src, i) => {
                return (
                    // 👇 style each individual slide.
                    // relative - needed since we use the fill prop from next/image component
                    // h-64 - arbitrary height
                    // flex[0_0_100%]
                    //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                    //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                    <div className="relative h-64 flex-[0_0_100%]" key={i}>
                    {/* use object-cover + fill since we don't know the height and width of the parent */}
                    <Image src={src} width={256} height={256} className="object-cover mx-auto" alt="alt" />
                    </div>
                );
                })}
            </Carousel>
        </>
    )
}