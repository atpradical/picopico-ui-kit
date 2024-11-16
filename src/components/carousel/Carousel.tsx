import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect, useState } from 'react'

import { Button, Card } from '@/components'
import { ArrowIosBackOutlineIcon, ArrowIosForwardOutlineIcon } from '@/icons'
import { EffectFade, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

/* eslint-disable import/extensions */
// import lib swiper's styles for proper slider display and disable rule as import require a css file.
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

/* eslint-enable import/extensions */
import s from './Carousel.module.scss'

type CarouselProps = {
  slides: any[] // todo: fix type later while real component usage
} & ComponentPropsWithoutRef<typeof Swiper>

type SwiperRef = ElementRef<typeof Swiper>

export const Carousel = forwardRef<SwiperRef, CarouselProps>(({ slides, ...rest }, ref) => {
  const isContent = slides && slides?.length > 1

  return (
    <div className={s.carouselRoot}>
      <Swiper
        centeredSlides
        className={s.swiper}
        modules={[EffectFade, Keyboard, Navigation, Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: '.swiper-pagination',
        }}
        ref={ref}
        {...rest}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={s.slide} key={index}>
            <img alt={'slide image'} className={s.image} src={slide} />
          </SwiperSlide>
        ))}
        <div className={'swiper-pagination'}></div>
        {isContent && <SwiperButtons />}
      </Swiper>
    </div>
  )
})

const SwiperButtons = () => {
  const swiper = useSwiper()
  const [isActiveIndex, setActiveSlideIndex] = useState(swiper.activeIndex)

  useEffect(() => {
    const updateSlideIndex = () => {
      setActiveSlideIndex(swiper.activeIndex)
    }

    swiper.on('slideChange', updateSlideIndex)

    // Обновление значения при первом рендере
    updateSlideIndex()

    // Очистка подписки на событие при размонтировании компонента
    return () => {
      swiper.off('slideChange', updateSlideIndex)
    }
  }, [swiper])

  if (!swiper.slides.length) {
    return null
  }

  return (
    <div>
      {isActiveIndex > 0 && (
        <Card className={s.prevBtn} variant={'transparent'}>
          <Button onClick={() => swiper.slidePrev()} variant={'icon'}>
            <ArrowIosBackOutlineIcon className={s.icon} />
          </Button>
        </Card>
      )}
      {isActiveIndex < swiper.slides.length - 1 && (
        <Card className={s.nextBtn} variant={'transparent'}>
          <Button onClick={() => swiper.slideNext()} variant={'icon'}>
            <ArrowIosForwardOutlineIcon className={s.icon} />
          </Button>
        </Card>
      )}
    </div>
  )
}
