import { type FC } from 'react'
import { CustomButton } from '@/shared/ui'
import './AboutUs.css'

export const AboutUs: FC = () => {
  return (
    <section className="about-us">
      <h1 className="about-us__title">О НАС</h1>
      <div className="about-us__content">
        <p className="about-us__text">
          Energy Fit - это не просто фитнес-клуб, это место, где вы сможете зарядиться
          энергией и достичь своих целей.
        </p>
        <p className="about-us__text">
          Мы верим, что спорт - это не про идеальные формы, а про легкость, энергию и
          уверенность в себе.
        </p>
        <p className="about-us__text">
          Наш клуб оснащён оборудованием премиум - класса. С вами работают
          сертифицированные специалисты с многолетним опытом.
        </p>
      </div>
      <div className="about-us__button-wrapper">
        <CustomButton className="about-us__button">
          записаться
        </CustomButton>
      </div>
    </section>
  )
}

