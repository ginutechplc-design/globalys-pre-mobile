import { SecondaryButton } from '../primitives/Button'

interface EmptyStateBlockProps {
  title: string
  message: string
  actionLabel?: string
  onAction?: () => void
}

export function EmptyStateBlock({ title, message, actionLabel, onAction }: EmptyStateBlockProps): JSX.Element {
  return (
    <section className="rounded-[var(--radius-md)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] p-6 text-center">
      <h3 className="text-sm font-semibold text-[var(--color-on-surface)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">{message}</p>
      {actionLabel ? (
        <div className="mt-4 flex justify-center">
          <SecondaryButton onClick={onAction}>{actionLabel}</SecondaryButton>
        </div>
      ) : null}
    </section>
  )
}
