import { type FC } from 'react'
import { type ICustomButtonProps } from './types'
import './CustomButton.css'

export const CustomButton: FC<ICustomButtonProps> = ({ className = '', children, ...props }) => {
    return (
        <button
            className={`custom-button ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

