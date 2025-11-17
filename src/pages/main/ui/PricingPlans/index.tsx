import cardBlue from '@/shared/assets/images/cardBlue.webp'
import cardDark from '@/shared/assets/images/cardDark.webp'
import { ArrowIcon, CustomButton } from '@/shared/ui'
import { type FC } from 'react'
import './PricingPlans.css'

export const PricingPlans: FC = () => {
    const handlePurchase = (planId: string) => {
        console.log('Purchasing plan:', planId)
    }

    return (
        <section className="pricing">
            <div className="pricing__section">
                <h2 className="pricing__title">АБОНЕМЕНТЫ</h2>
                <p className="pricing__subtitle">
                    Для школьников, студентов<br />и новичков
                </p>

                <div className="pricing__grid pricing__grid--students">
                    <article className="pricing__first-card">
                        <div className="pricing__header">
                            <span className="pricing__duration">1 МЕСЯЦ</span>
                            <div className="pricing__arrow">
                                <ArrowIcon />
                            </div>
                            <span className="pricing__price">3.000₽</span>
                        </div>
                        <div className="pricing__content">
                            <ul className="pricing__features">
                                <li className="pricing__feature">
                                    Безлимитное посещение спортзала.
                                </li>
                                <li className="pricing__feature">
                                    Два раза в неделю любой выбранный вами групповой курс.
                                </li>
                                <li className="pricing__feature">
                                    Возможность заниматься с тренером (первая тренировка бесплатно).
                                </li>
                            </ul>
                            <CustomButton
                                className="pricing__button"
                                onClick={() => handlePurchase('student-month')}
                                aria-label="Купить абонемент 1 месяц за 3.000₽"
                            >
                                записаться
                            </CustomButton>
                        </div>
                    </article>

                    <div className="pricing__image pricing__image--desktop pricing__image--pos-1-2 pricing__image--dark">
                        <img src={cardDark} alt="Карта абонемента" loading="lazy" />
                    </div>

                    <div className="pricing__image pricing__image--desktop pricing__image--pos-2-1 pricing__image--blue">
                        <img src={cardBlue} alt="Карта абонемента" loading="lazy" />
                    </div>

                    <article className="pricing__second-card">
                        <div className="pricing__image pricing__image--mobile pricing__image--dark">
                            <img src={cardDark} alt="Карта абонемента" loading="lazy" />
                        </div>
                        <div className="pricing__header">
                            <span className="pricing__duration">1 год</span>
                            <div className="pricing__arrow">
                                <ArrowIcon />
                            </div>
                            <span className="pricing__price">15.000₽</span>
                        </div>
                        <div className="pricing__content">
                            <ul className="pricing__features">
                                <li className="pricing__feature">
                                    Безлимитное посещение спортзала.
                                </li>
                                <li className="pricing__feature">
                                    Два раза в неделю любой выбранный вами групповой курс.
                                </li>
                                <li className="pricing__feature">
                                    Возможность заниматься с тренером (первая тренировка бесплатно).
                                </li>
                            </ul>
                            <CustomButton
                                className="pricing__button"
                                onClick={() => handlePurchase('student-year')}
                                aria-label="Купить абонемент 1 год за 15.000₽"
                            >
                                записаться
                            </CustomButton>
                        </div>
                    </article>
                </div>
            </div>

            <div className="pricing__section">
                <h2 className="pricing__title pricing__title--secondary">СТАНДАРТ</h2>

                <div className="pricing__grid pricing__grid--standard">
                    <article className="pricing__first-card">
                        <div className="pricing__header">
                            <span className="pricing__duration">1 МЕСЯЦ</span>
                            <div className="pricing__arrow">
                                <ArrowIcon />
                            </div>
                            <span className="pricing__price">5.999₽</span>
                        </div>
                        <div className="pricing__content">
                            <ul className="pricing__features">
                                <li className="pricing__feature">
                                    Безлимитное посещение спортзала.
                                </li>
                                <li className="pricing__feature">
                                    Один раз в неделю любой выбранный вами групповой курс.
                                </li>
                                <li className="pricing__feature">
                                    Возможность заниматься с тренером (первая тренировка бесплатно).
                                </li>
                            </ul>
                            <CustomButton
                                className="pricing__button"
                                onClick={() => handlePurchase('standard-month')}
                                aria-label="Купить абонемент 1 месяц за 5.999₽"
                            >
                                записаться
                            </CustomButton>
                        </div>
                    </article>

                    <div className="pricing__spacer"></div>

                    <div className="pricing__spacer"></div>

                    <article className="pricing__second-card">
                        <div className="pricing__header">
                            <span className="pricing__duration">1 год</span>
                            <div className="pricing__arrow">
                                <ArrowIcon />
                            </div>
                            <span className="pricing__price">30.999₽</span>
                        </div>
                        <div className="pricing__content">
                            <ul className="pricing__features">
                                <li className="pricing__feature">
                                    Безлимитное посещение спортзала.
                                </li>
                                <li className="pricing__feature">
                                    Два раза в неделю любой выбранный вами групповой курс.
                                </li>
                                <li className="pricing__feature">
                                    Возможность заниматься с тренером (первая тренировка бесплатно).
                                </li>
                            </ul>
                            <CustomButton
                                className="pricing__button"
                                onClick={() => handlePurchase('standard-year')}
                                aria-label="Купить абонемент 1 год за 30.999₽"
                            >
                                записаться
                            </CustomButton>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
