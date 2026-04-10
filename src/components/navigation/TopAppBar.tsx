import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface TopAppBarProps {
  title: string
  leading?: ReactNode
  trailing?: ReactNode
  subtitle?: string
}

export function TopAppBar({ title, subtitle, leading, trailing }: TopAppBarProps): JSX.Element {
  return (
    <header className={cn('sticky top-0 z-20 flex min-h-16 items-center justify-between border-b border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-4')}>
      <div className="flex items-center gap-3">
        {leading ? <div className="text-[var(--color-on-surface)]">{leading}</div> : null}
        <div>
          <h1 className="text-base font-semibold text-[var(--color-on-surface)]">{title}</h1>
          {subtitle ? <p className="text-xs text-[var(--color-on-surface-variant)]">{subtitle}</p> : null}
        </div>
      </div>
      {trailing ? <div className="text-[var(--color-on-surface)]">{trailing}</div> : null}
    </header>
  )
}
