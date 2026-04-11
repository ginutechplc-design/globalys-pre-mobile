import { StatusBadge } from '../primitives/StatusBadge'

interface PaymentStatusBannerProps {
  status: Parameters<typeof StatusBadge>[0]['status']
  amountLabel: string
  message: string
}

export function PaymentStatusBanner({ status, amountLabel, message }: PaymentStatusBannerProps): JSX.Element {
  return (
    <section className="flex items-center justify-between gap-3 rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] p-3">
      <div>
        <p className="text-sm font-semibold tabular-nums text-[var(--color-on-surface)]">{amountLabel}</p>
        <p className="text-xs text-[var(--color-on-surface-variant)]">{message}</p>
      </div>
      <StatusBadge status={status} />
    </section>
  )
}
