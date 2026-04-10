import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import type { UIState } from '../types'

interface FilterChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  uiState?: UIState
}

export function FilterChip({ selected = false, uiState = 'default', className, children, ...props }: FilterChipProps): JSX.Element {
  const isDisabled = uiState === 'disabled'

  return (
    <button
      className={cn(
        'min-h-10 rounded-full border px-4 text-sm font-medium transition-colors',
        selected
          ? 'border-[var(--color-primary)] bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)]'
          : 'border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] text-[var(--color-on-surface)]',
        uiState === 'focused' && 'ring-2 ring-[var(--color-primary)]/30',
        isDisabled && 'opacity-40 pointer-events-none',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  )
}
