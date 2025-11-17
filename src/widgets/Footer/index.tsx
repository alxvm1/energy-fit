import GeoIcon from '@/shared/assets/svg/geoIcon.svg?react'
import InstagramIcon from '@/shared/assets/svg/instaIcon.svg?react'
import EmailIcon from '@/shared/assets/svg/mailIcon.svg?react'
import MainLogoIcon from '@/shared/assets/svg/mainLogo.svg?react'
import PhoneIcon from '@/shared/assets/svg/phoneIcon.svg?react'
import TelegramIcon from '@/shared/assets/svg/tgIcon.svg?react'
import { type FC } from 'react'
import './Footer.css'

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className='footer__logo-wrapper'>
          <MainLogoIcon className="footer__logo" />
        </div>
        <div className='footer__contacts-wrapper'>
          <div className='footer__contacts'>
            <div className='footer__contacts-address'>
              <GeoIcon className="footer__icon" />
              <p className="footer__contacts-address-text">Россия, Томск,<br />
                пл.Соляная 2, корп 2.</p>
            </div>
            <div className='footer__contacts-phone'>
              <PhoneIcon className="footer__icon" />
              <p className="footer__contacts-phone-text">+7 (983) 235 69 06</p>
            </div>
            <div className='footer__contacts-email'>
              <EmailIcon className="footer__icon" />
              <p className="footer__contacts-email-text">ekatrebizova@yandex.ru</p>
            </div>
          </div>
          <div className='footer__contacts-social'>
            <TelegramIcon className="footer__contacts-social-icon" />
            <InstagramIcon className="footer__contacts-social-icon" />
          </div>
        </div>
      </div>
    </footer>
  )
}

