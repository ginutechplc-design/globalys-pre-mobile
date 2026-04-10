import type { InputHTMLAttributes } from 'react'
import { TextField } from './TextField'

interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
}

export function SearchField({ label = 'Search', placeholder = 'Search services, providers…', ...props }: SearchFieldProps): JSX.Element {
  return <TextField label={label} placeholder={placeholder} {...props} />
}
