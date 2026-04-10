import { StatusBadge } from '../primitives/StatusBadge'

interface BookingStatusBlockProps {
  status: Parameters<typeof StatusBadge>[0]['status']
  title: string
  description: string
}

export function BookingStatusBlock({ status, title, description }: BookingStatusBlockProps): JSX.Element {
  return (
    <section className="rounded-[var(--radius-md)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] p-4">
      <div className="mb-2">
        <StatusBadge status={status} />
      </div>
      <h3 className="text-sm font-semibold text-[var(--color-on-surface)]">{title}</h3>
      <p className="text-sm text-[var(--color-on-surface-variant)]">{description}</p>
    </section>
  )
}
