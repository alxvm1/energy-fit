import { type SelectHTMLAttributes } from 'react'

export interface ICustomSelectOption {
    value: string
    label: string
    disabled?: boolean
}

export interface ICustomSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
    className?: string
    options: ICustomSelectOption[]
    placeholder?: string
}

