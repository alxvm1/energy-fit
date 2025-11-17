import { type ButtonHTMLAttributes } from 'react'

export interface ICustomButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
    className?: string
}

