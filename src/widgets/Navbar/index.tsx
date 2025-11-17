import { type FC } from 'react'
import LogoIcon from '@/shared/assets/svg/logo.svg?react'
import MainLogoIcon from '@/shared/assets/svg/mainLogo.svg?react'
import ThreeDotsIcon from '@/shared/assets/svg/threeDots.svg?react'
import './Navbar.css'

export const Navbar: FC = () => {
  return (
    <div className="navbar full-width">
      <div className="navbar__header">
        <div className="navbar__logo-wrapper">
          <LogoIcon className="navbar__logo" />
        </div>
        <div className="navbar__menu">
          <ThreeDotsIcon className="navbar__menu-icon" />
        </div>
      </div>
      <div className="navbar__banner">
        <MainLogoIcon className="navbar__main-logo" />
      </div>
    </div>
  )
}

