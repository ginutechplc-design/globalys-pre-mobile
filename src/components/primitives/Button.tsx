import { cn } from '../../lib/cn'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import type { UIState } from '../types'

type Variant = 'primary' | 'secondary'

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  uiState?: UIState
  fullWidth?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[var(--color-primary)] text-[var(--color-on-primary)] border border-transparent hover:brightness-95 active:brightness-90',
  secondary:
    'bg-[var(--color-surface-container-low)] text-[var(--color-on-surface)] border border-[var(--color-outline-variant)] hover:bg-[var(--color-surface-container)]'
}

const stateClasses: Partial<Record<UIState, string>> = {
  disabled: 'opacity-40 pointer-events-none',
  loading: 'opacity-80 pointer-events-none',
  focused: 'ring-2 ring-[var(--color-primary)] ring-offset-2 ring-offset-[var(--color-surface)]',
  success: 'bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)]',
  error: 'bg-[var(--color-error-container)] text-[var(--color-on-error-container)]',
  warning: 'border-[var(--color-outline)]'
}

export function Button({
  children,
  variant = 'primary',
  uiState = 'default',
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps): JSX.Element {
  const resolvedState = disabled ? 'disabled' : uiState

  return (
    <button
      className={cn(
        'inline-flex min-h-12 items-center justify-center rounded-[var(--radius-sm)] px-6 py-3 text-sm font-semibold transition-colors',
        variantClasses[variant],
        stateClasses[resolvedState],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || resolvedState === 'disabled' || resolvedState === 'loading'}
      {...props}
    >
      {resolvedState === 'loading' ? 'Loading…' : children}
    </button>
  )
}

export const PrimaryButton = (props: Omit<ButtonProps, 'variant'>): JSX.Element => <Button {...props} variant="primary" />

export const SecondaryButton = (props: Omit<ButtonProps, 'variant'>): JSX.Element => <Button {...props} variant="secondary" />
