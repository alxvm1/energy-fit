import { type FC } from 'react'
import { CardCarousel } from '@/shared/ui/CardCarousel'
import { CustomCard } from '@/shared/ui/CustomCard'
import { cardsData } from './config'
import './Services.css'

export const Services: FC = () => {
  return (
    <section className="services">
      <div className="services__title">
        <h2 className="services__title-text">УСЛУГИ</h2>
      </div>
      <CardCarousel>
        {cardsData.map((card, index) => (
          <CustomCard key={index} {...card} />
        ))}
      </CardCarousel>
    </section>
  )
}

