import { StatusBadge } from '../primitives/StatusBadge'

interface ThreadListItemProps {
  name: string
  preview: string
  timestamp: string
  unread?: boolean
  status?: Parameters<typeof StatusBadge>[0]['status']
}

export function ThreadListItem({ name, preview, timestamp, unread = false, status = 'active' }: ThreadListItemProps): JSX.Element {
  return (
    <article className="flex items-center gap-3 rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] p-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface-container-high)] text-xs font-semibold text-[var(--color-on-surface)]">
        {name.slice(0, 2).toUpperCase()}
        {unread ? <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[var(--color-primary)]" /> : null}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-sm font-semibold text-[var(--color-on-surface)]">{name}</p>
          <span className="text-xs text-[var(--color-on-surface-variant)]">{timestamp}</span>
        </div>
        <p className="truncate text-xs text-[var(--color-on-surface-variant)]">{preview}</p>
      </div>
      <StatusBadge status={status} />
    </article>
  )
}
