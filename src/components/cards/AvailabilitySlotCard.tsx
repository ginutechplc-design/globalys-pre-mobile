import { StatusBadge } from '../primitives/StatusBadge'

interface AvailabilitySlotCardProps {
  date: string
  timeRange: string
  status: Parameters<typeof StatusBadge>[0]['status']
  onSelect?: () => void
}

export function AvailabilitySlotCard({ date, timeRange, status, onSelect }: AvailabilitySlotCardProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex w-full items-center justify-between rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] p-3 text-left"
    >
      <div>
        <p className="text-sm font-semibold text-[var(--color-on-surface)]">{date}</p>
        <p className="text-xs text-[var(--color-on-surface-variant)]">{timeRange}</p>
      </div>
      <StatusBadge status={status} />
    </button>
  )
}
