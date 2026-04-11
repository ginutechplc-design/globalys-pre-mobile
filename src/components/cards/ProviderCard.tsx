import { StatusBadge } from '../primitives/StatusBadge'

interface ProviderCardProps {
  name: string
  specialty: string
  rating: string
  status: Parameters<typeof StatusBadge>[0]['status']
}

export function ProviderCard({ name, specialty, rating, status }: ProviderCardProps): JSX.Element {
  return (
    <article className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface-container-high)] text-sm font-semibold text-[var(--color-on-surface)]">
        {name.slice(0, 2).toUpperCase()}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-[var(--color-on-surface)]">{name}</h3>
        <p className="text-xs text-[var(--color-on-surface-variant)]">{specialty}</p>
        <p className="text-xs text-[var(--color-on-surface-variant)]">Rating {rating}</p>
      </div>
      <StatusBadge status={status} />
    </article>
  )
}
