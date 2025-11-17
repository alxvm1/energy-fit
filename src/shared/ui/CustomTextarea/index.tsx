import { type FC } from 'react'
import { type ICustomTextareaProps } from './types'
import './CustomTextarea.css'

export const CustomTextarea: FC<ICustomTextareaProps> = ({ className = '', ...props }) => {
    return (
        <textarea
            className={`custom-textarea ${className}`}
            {...props}
        />
    )
}

