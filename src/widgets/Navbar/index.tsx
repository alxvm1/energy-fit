import { type FC } from 'react'
import LogoIcon from '@/shared/assets/svg/logo.svg?react'
import MainLogoIcon from '@/shared/assets/svg/mainLogo.svg?react'
import ThreeDotsIcon from '@/shared/assets/svg/threeDots.svg?react'
import './Navbar.css'
import { CustomButton } from '@/shared/ui'

export const Navbar: FC = () => {
  return (
<div className="navbar full-width">
  {/* Верхняя строка на всех размерах */}
  <div className="navbar__header">
    <div className="navbar__logo-wrapper">
      <LogoIcon className="navbar__mobile-logo" />
    </div>
    <div className="navbar__menu-icon">
      <ThreeDotsIcon />
    </div>
    {/* Desktop Nav: скрыт на мобилке */}
    <div className="navbar__menu">
      <LogoIcon className="navbar__desktop-logo" />
      <a className="navbar__menu-item" href="#about-us">о нас</a>
      <a className="navbar__menu-item" href="#services">услуги</a>
      <a className="navbar__menu-item" href="#pricing-plans">абонементы</a>
      <CustomButton className="navbar__menu-button">записаться</CustomButton>
    </div>
  </div>
  {/* Баннер-цвет для мобилки, на desktop – большой баннер с фоновым изображением и лого */}
  <div className="navbar__banner">
    {/* Mobile (цветная полоса с лого по центру) */}
    <MainLogoIcon className="navbar__main-logo" />
  </div>
  {/* Desktop фон — подменяется через background в .navbar__banner */}
</div>

  )
}

