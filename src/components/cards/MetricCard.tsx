interface MetricCardProps {
  label: string
  value: string
  trend?: string
  trendState?: 'success' | 'error' | 'default'
}

export function MetricCard({ label, value, trend, trendState = 'default' }: MetricCardProps): JSX.Element {
  const trendColor =
    trendState === 'success'
      ? 'text-[var(--color-primary)]'
      : trendState === 'error'
        ? 'text-[var(--color-error)]'
        : 'text-[var(--color-on-surface-variant)]'

  return (
    <article className="rounded-[var(--radius-md)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] p-4">
      <p className="text-xs text-[var(--color-on-surface-variant)]">{label}</p>
      <p className="mt-1 text-2xl font-semibold tabular-nums text-[var(--color-on-surface)]">{value}</p>
      {trend ? <p className={`mt-1 text-xs ${trendColor}`}>{trend}</p> : null}
    </article>
  )
}
