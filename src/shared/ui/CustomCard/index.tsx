import { type FC } from 'react'
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
      <div className="custom-card__body">
        <img
          alt="Card background"
          className="custom-card__image"
          src={image}
        />
      </div>
      <div className="custom-card__header">
        {title && <h4 className="custom-card__title">{title}</h4>}
        {subtitle && <p className="custom-card__subtitle">{subtitle}</p>}
        {description && (
          <p className="custom-card__description">{description}</p>
        )}
        {dressCodeLabel && (
          <div className="custom-card__dress-code">
            <div className="custom-card__dress-code-label">
              <span className="custom-card__dress-code-label-text">{dressCodeLabel}</span>
            </div>
            {dressCodeText && (
              <p className="custom-card__dress-code-text">{dressCodeText}</p>
            )}
          </div>
        )}
        <div className="custom-card__buttons">
          <button
            className="custom-card__button custom-card__button--dark"
            type="button"
            onClick={(e) => e.stopPropagation()}
          >
            расписание
          </button>
          <button
            className="custom-card__button custom-card__button--primary"
            type="button"
            onClick={(e) => e.stopPropagation()}
          >
            записаться
          </button>
        </div>
      </div>
    </div>
  )
}

