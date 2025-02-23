import * as React from 'react'
import { useCallback } from 'react'

import { Button } from '@/components'
import { ArrowIosBackOutlineIcon, ArrowIosForwardOutlineIcon } from '@/icons'
import clsx from 'clsx'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'

import s from './Carousel.module.scss'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  orientation?: 'horizontal' | 'vertical'
  plugins?: CarouselPlugin
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  api: ReturnType<typeof useEmblaCarousel>[1]
  canScrollNext: boolean
  canScrollPrev: boolean
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  onDotButtonClick: (index: number) => void
  scrollNext: () => void
  scrollPrev: () => void
  scrollSnaps: number[]
  selectedIndex: number
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  CarouselProps & React.HTMLAttributes<HTMLDivElement>
>(({ children, className, opts, orientation = 'horizontal', plugins, setApi, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins
  )

  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const onInit = useCallback((api: CarouselApi) => {
    if (!api) {
      return
    }
    setScrollSnaps(api.scrollSnapList())
  }, [])

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!api) {
        return
      }
      api.scrollTo(index)
    },
    [api]
  )

  React.useEffect(() => {
    if (!api || !setApi) {
      return
    }

    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) {
      return
    }

    onInit(api)
    onSelect(api)
    api.on('reInit', onInit)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect, onInit])

  return (
    <CarouselContext.Provider
      value={{
        api: api,
        canScrollNext,
        canScrollPrev,
        carouselRef,
        onDotButtonClick,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollNext,
        scrollPrev,
        scrollSnaps,
        selectedIndex,
      }}
    >
      <div
        aria-roledescription={'carousel'}
        className={clsx(s.carousel, className)}
        onKeyDownCapture={handleKeyDown}
        ref={ref}
        role={'region'}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
})

Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
      <div className={s.overflowHidden} ref={carouselRef}>
        <div
          className={clsx(
            s.carouselContent,
            orientation === 'horizontal' ? s['ml-4'] : [s['mt-4'], s['flex-col']],
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
      <div
        aria-roledescription={'slide'}
        className={clsx(
          s.carouselItem,
          orientation === 'horizontal' ? s['pl-4'] : s['pt-4'],
          className
        )}
        ref={ref}
        role={'group'}
        {...props}
      />
    )
  }
)

CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, size = 'icon', variant = 'icon', ...props }, ref) => {
    const { canScrollPrev, orientation, scrollPrev } = useCarousel()

    return (
      <Button
        className={clsx(
          s.carouselPrev,
          orientation === 'horizontal'
            ? [s['left'], s['top'], s['translate-y']]
            : [s['top'], s['left'], s['translate-x'], s['rotate-90']],
          className
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        ref={ref}
        size={size}
        variant={variant}
        {...props}
      >
        <ArrowIosBackOutlineIcon className={s.icon} />
      </Button>
    )
  }
)

CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, size = 'icon', variant = 'icon', ...props }, ref) => {
    const { canScrollNext, orientation, scrollNext } = useCarousel()

    return (
      <Button
        className={clsx(
          s.carouselNext,
          orientation === 'horizontal'
            ? [s['right'], s['top'], s['translate-y']]
            : [s['bottom'], s['left'], s['translate-x'], s['rotate-90']],
          className
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        ref={ref}
        size={size}
        variant={variant}
        {...props}
      >
        <ArrowIosForwardOutlineIcon className={s.icon} />
      </Button>
    )
  }
)

CarouselNext.displayName = 'CarouselNext'

const CarouselDotButtons = () => {
  const { onDotButtonClick, orientation, scrollSnaps, selectedIndex } = useCarousel()

  if (scrollSnaps.length <= 1) {
    return null
  }

  return (
    <div
      className={clsx(
        s.dotsContainer,
        orientation === 'horizontal'
          ? [s['dots-left'], s['dots-bottom'], s['translate-x']]
          : [s['dots-right'], s['dots-top'], s['translate-y'], s['rotate-90']]
      )}
    >
      {scrollSnaps.map((_, index) => (
        <Button
          className={clsx(s.dot, index === selectedIndex && s.activeDot)}
          key={index}
          onClick={() => onDotButtonClick(index)}
          type={'button'}
        />
      ))}
    </div>
  )
}

/* eslint-disable max-lines */
export {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
}
