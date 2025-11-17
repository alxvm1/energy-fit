import { type TextareaHTMLAttributes } from 'react'

export interface ICustomTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
    className?: string
}

