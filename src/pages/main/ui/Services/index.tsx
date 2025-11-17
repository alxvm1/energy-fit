import { type FC } from 'react'
import { CardCarousel } from '@/shared/ui/CardCarousel'
import { CustomCard } from '@/shared/ui/CustomCard'
import { cardsData } from './config'

export const Services: FC = () => {
  return (
    <section className="services">
      <CardCarousel>
        {cardsData.map((card, index) => (
          <CustomCard key={index} {...card} />
        ))}
      </CardCarousel>
    </section>
  )
}

