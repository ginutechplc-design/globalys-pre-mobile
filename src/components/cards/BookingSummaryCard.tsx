import { StatusBadge } from '../primitives/StatusBadge'

interface BookingSummaryCardProps {
  bookingId: string
  serviceName: string
  providerName: string
  dateTimeLabel: string
  amountLabel: string
  status: Parameters<typeof StatusBadge>[0]['status']
}

export function BookingSummaryCard({ bookingId, serviceName, providerName, dateTimeLabel, amountLabel, status }: BookingSummaryCardProps): JSX.Element {
  return (
    <article className="rounded-[var(--radius-md)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs text-[var(--color-on-surface-variant)]">Booking {bookingId}</p>
        <StatusBadge status={status} />
      </div>
      <h3 className="text-sm font-semibold text-[var(--color-on-surface)]">{serviceName}</h3>
      <p className="text-xs text-[var(--color-on-surface-variant)]">{providerName}</p>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm text-[var(--color-on-surface)]">{dateTimeLabel}</p>
        <p className="text-sm font-semibold text-[var(--color-on-surface)]">{amountLabel}</p>
      </div>
    </article>
  )
}
