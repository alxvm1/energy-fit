import { type FC } from 'react'
import { CustomButton } from '@/shared/ui'
import './CustomCard.css'
import { type ICustomCardProps } from './types'

export const CustomCard: FC<ICustomCardProps> = ({
  image = '',
  title = '',
  subtitle = '',
  description = '',
  dressCodeLabel = '',
  dressCodeText = '',
  className,
  isActive = true,
  onClick,
}) => {
  return (
    <div
      className={`custom-card ${isActive ? 'custom-card--active' : 'custom-card--inactive'} ${className || ''}`}
      onClick={onClick}
    >
      <div className="custom-card__header">
      <div className="custom-card__image-wrapper">
        <img
          alt="Card background"
          className="custom-card__image"
          src={image}
        />
      </div>
      </div>

      <div className="custom-card__body">
      <div className="custom-card__content">
        {title && <h4 className="custom-card__title">{title}</h4>}
        {subtitle && <p className="custom-card__subtitle">{subtitle}</p>}
        {description && (
          <p className="custom-card__description">{description}</p>
        )}
        {dressCodeLabel && (
          <div className="custom-card__dress-code">
            <span className="custom-card__dress-code-label">{dressCodeLabel}</span>
            {dressCodeText && (
              <p className="custom-card__dress-code-text">{dressCodeText}</p>
            )}
          </div>
        )}
      </div>
      <div className="custom-card__buttons">
          <CustomButton
            className="custom-card__button custom-card__button--dark"
            onClick={(e) => e.stopPropagation()}
          >
            расписание
          </CustomButton>
          <CustomButton
            className="custom-card__button custom-card__button--primary"
            onClick={(e) => e.stopPropagation()}
          >
            записаться
          </CustomButton>
        </div>
      </div>

    </div>
  )
}

