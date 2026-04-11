import { semanticTokensMap } from '../../theme'
import { cn } from '../../lib/cn'

interface StatusBadgeProps {
  status: keyof typeof semanticTokensMap
  label?: string
}

export function StatusBadge({ status, label }: StatusBadgeProps): JSX.Element {
  const token = semanticTokensMap[status]

  return (
    <span
      className={cn('inline-flex items-center gap-2 rounded-[var(--radius-xs)] border px-2.5 py-1 text-xs font-semibold')}
      style={{
        backgroundColor: token.container,
        color: token.on_container,
        borderColor: token.border
      }}
    >
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: token.icon_color }} />
      {label ?? status}
    </span>
  )
}
