import { type InputHTMLAttributes } from 'react'

export interface ICustomInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
    className?: string
}

