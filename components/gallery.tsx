import Link from 'next/link';
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { EmblaCarouselType } from 'embla-carousel'

import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useState
} from 'react'

// TYPES ---------------------------------------------
type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

  type PropTypeButton = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

type UseSelectedSnapDisplayType = {
    selectedSnap: number
    snapCount: number
}

type PropTypeSelect = {
    selectedSnap: number
    snapCount: number
}

// CONST ---------------------------------------------------
const images: string[] = [];
const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 60
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const SelectedSnapDisplay: React.FC<PropTypeSelect> = (props) => {
    const { selectedSnap, snapCount } = props
  
    return (
      <div className="embla__selected-snap-display">
        {selectedSnap + 1} / {snapCount}
      </div>
    )
}

const useSelectedSnapDisplay = (
    emblaApi: EmblaCarouselType | undefined
  ): UseSelectedSnapDisplayType => {
    const [selectedSnap, setSelectedSnap] = useState(0)
    const [snapCount, setSnapCount] = useState(0)
  
    const updateScrollSnapState = useCallback((emblaApi: EmblaCarouselType) => {
      setSnapCount(emblaApi.scrollSnapList().length)
      setSelectedSnap(emblaApi.selectedScrollSnap())
    }, [])
  
    useEffect(() => {
      if (!emblaApi) return
  
      updateScrollSnapState(emblaApi)
      emblaApi.on('select', updateScrollSnapState)
      emblaApi.on('reInit', updateScrollSnapState)
    }, [emblaApi, updateScrollSnapState])
  
    return {
      selectedSnap,
      snapCount
    }
}

const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
  ): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  
    const onPrevButtonClick = useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollPrev()
    }, [emblaApi])
  
    const onNextButtonClick = useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollNext()
    }, [emblaApi])
  
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])
  
    useEffect(() => {
      if (!emblaApi) return
  
      onSelect(emblaApi)
      emblaApi.on('reInit', onSelect)
      emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])
  
    return {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    }
}

const PrevButton: React.FC<PropTypeButton> = (props) => {
    const { children, ...restProps } = props
  
    return (
      <button
        className="embla__button embla__button--prev"
        type="button"
        {...restProps}
      >
        <svg className="embla__button__svg" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        </svg>
        {children}
      </button>
    )
 }
  
  const NextButton: React.FC<PropTypeButton> = (props) => {
    const { children, ...restProps } = props
  
    return (
      <button
        className="embla__button embla__button--next"
        type="button"
        {...restProps}
      >
        <svg className="embla__button__svg" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        </svg>
        {children}
      </button>
    )
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
  
    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    } = usePrevNextButtons(emblaApi)
  
    const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)
  
    const images: string[] = [];
  
    // Loop through each filename in the array
    for (let i = 0; i < slides.length; i++) {
        // Push the filename into the fileList array
        images.push(`/gallery/${i}.png`);
    }
  
    return (
      <section className="embla md:embla__medium lg:embla__large">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <Image className="rounded-2xl" src={images[index]} width={256} height={256} alt="Gallery Image" />
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
  
          <SelectedSnapDisplay
            selectedSnap={selectedSnap}
            snapCount={snapCount}
          />
        </div>
      </section>
    )
}

// Loop through each filename in the array
for (let i = 0; i < SLIDE_COUNT + 1; i++) {
    // Push the filename into the fileList array
    images.push(`/gallery/${i}.png`);
}

export default function Gallery() {
    return (
        <>
            <div className="text-center font-bold pb-10 px-10 lg:px-0">
                <h1 className="text-3xl">
                    If you like what you see check the rest of my art on
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