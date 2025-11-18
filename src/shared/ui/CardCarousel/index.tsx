import { Children, cloneElement, type FC, isValidElement, useEffect, useState } from 'react'
import { type Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import './CardCarousel.css'
import { type ICardCarouselProps } from './types'

export const CardCarousel: FC<ICardCarouselProps> = ({ children, className }) => {
  const childrenArray = Children.toArray(children)
  const defaultActiveIndex = Math.floor(childrenArray.length / 2)
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  useEffect(() => {
    if (swiper) {
      swiper.update()
    }
  }, [swiper])

  const handleCardClick = (index: number) => {
    if (swiper && index !== activeIndex) {
      swiper.slideTo(index, 500)
    }
    setActiveIndex(index)
  }

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <div className={`card-carousel full-width ${className || ''}`}>
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        spaceBetween={32}
        centeredSlides={true}
        initialSlide={defaultActiveIndex}
        speed={500}
        breakpoints={{
          368: {
            slidesPerView: 1,
            spaceBetween: 32,
            centeredSlides: true,
            allowTouchMove: true,
          },
          1280: {
            slidesPerView: 'auto',
            spaceBetween: 32,
            centeredSlides: true,
            allowTouchMove: true,
            slideToClickedSlide: false,
          },
        }}
        className="card-carousel__swiper"
      >
        {childrenArray.map((child, index) => {
          const isActive = index === activeIndex

          if (isValidElement(child)) {
            const clonedChild = cloneElement(child, {
              isActive,
              onClick: () => handleCardClick(index),
            })

            return (
              <SwiperSlide key={index} className="card-carousel__slide">
                {clonedChild}
              </SwiperSlide>
            )
          }

          return (
            <SwiperSlide key={index} className="card-carousel__slide">
              {child}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

