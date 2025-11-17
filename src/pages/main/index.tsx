import { Footer } from '@/widgets/Footer'
import { Navbar } from '@/widgets/Navbar'
import { type FC } from 'react'
import './MainPage.css'
import { AboutUs } from './ui/AboutUs'
import { PricingPlans } from './ui/PricingPlans'
import { Services } from './ui/Services'
import { SignUpForm } from './ui/SignUpForm'

export const MainPage: FC = () => {
  return (
    <>
      <Navbar />
      <div className="main-page">
        <div className="main-page__container">
          <AboutUs />
          <Services />
          <PricingPlans />
          <SignUpForm />
        </div>
      </div>
      <Footer />
    </>
  )
}

