import { StatusBadge } from '../primitives/StatusBadge'

interface ServiceCardProps {
  title: string
  category: string
  description: string
  rateLabel: string
  status: Parameters<typeof StatusBadge>[0]['status']
}

export function ServiceCard({ title, category, description, rateLabel, status }: ServiceCardProps): JSX.Element {
  return (
    <article className="rounded-[var(--radius-md)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-on-surface)]">{title}</h3>
          <p className="text-xs text-[var(--color-on-surface-variant)]">{category}</p>
        </div>
        <StatusBadge status={status} />
      </div>
      <p className="text-sm text-[var(--color-on-surface)]">{description}</p>
      <p className="mt-3 text-sm font-semibold text-[var(--color-on-surface)]">{rateLabel}</p>
    </article>
  )
}
