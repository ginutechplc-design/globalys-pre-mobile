import type { InputHTMLAttributes } from 'react'
import type { UIState } from '../types'
import { cn } from '../../lib/cn'

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string
  helperText?: string
  errorText?: string
  uiState?: UIState
}

const inputStateClasses: Partial<Record<UIState, string>> = {
  default: 'border-[var(--color-outline-variant)]',
  focused: 'border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20',
  disabled: 'opacity-40 cursor-not-allowed',
  error: 'border-[var(--color-error)]',
  success: 'border-[var(--color-primary)]',
  warning: 'border-[var(--color-outline)]'
}

export function TextField({ label, helperText, errorText, uiState = 'default', className, disabled, ...props }: TextFieldProps): JSX.Element {
  const resolvedState = disabled ? 'disabled' : errorText ? 'error' : uiState

  return (
    <label className="flex w-full flex-col gap-2 text-sm">
      <span className="font-medium text-[var(--color-on-surface)]">{label}</span>
      <input
        className={cn(
          'min-h-14 rounded-[var(--radius-sm)] border bg-[var(--color-surface-container-lowest)] px-4 text-[var(--color-on-surface)] outline-none transition-colors',
          inputStateClasses[resolvedState],
          className
        )}
        disabled={disabled}
        {...props}
      />
      {errorText ? (
        <span className="text-xs text-[var(--color-error)]">{errorText}</span>
      ) : helperText ? (
        <span className="text-xs text-[var(--color-on-surface-variant)]">{helperText}</span>
      ) : null}
    </label>
  )
}
