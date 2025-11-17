import { type FC } from 'react'
import { type ICustomInputProps } from './types'
import './CustomInput.css'

export const CustomInput: FC<ICustomInputProps> = ({ className = '', ...props }) => {
    return (
        <input
            className={`custom-input ${className}`}
            {...props}
        />
    )
}

