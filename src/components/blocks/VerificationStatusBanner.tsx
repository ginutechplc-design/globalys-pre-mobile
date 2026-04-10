import { StatusBadge } from '../primitives/StatusBadge'

interface VerificationStatusBannerProps {
  status: Parameters<typeof StatusBadge>[0]['status']
  title: string
  subtitle: string
}

export function VerificationStatusBanner({ status, title, subtitle }: VerificationStatusBannerProps): JSX.Element {
  return (
    <section className="flex items-center justify-between gap-3 rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] p-3">
      <div>
        <p className="text-sm font-semibold text-[var(--color-on-surface)]">{title}</p>
        <p className="text-xs text-[var(--color-on-surface-variant)]">{subtitle}</p>
      </div>
      <StatusBadge status={status} />
    </section>
  )
}
