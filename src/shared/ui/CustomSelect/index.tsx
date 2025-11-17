import { type FC } from 'react'
import { type ICustomSelectProps } from './types'
import './CustomSelect.css'

export const CustomSelect: FC<ICustomSelectProps> = ({ 
    className = '', 
    options, 
    placeholder,
    ...props 
}) => {
    return (
        <select
            className={`custom-select ${className}`}
            {...props}
        >
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                >
                    {option.label}
                </option>
            ))}
        </select>
    )
}

