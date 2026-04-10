import { PrimaryButton } from '../primitives/Button'

interface ErrorStateBlockProps {
  title: string
  message: string
  retryLabel?: string
  onRetry?: () => void
}

export function ErrorStateBlock({ title, message, retryLabel = 'Try again', onRetry }: ErrorStateBlockProps): JSX.Element {
  return (
    <section className="rounded-[var(--radius-md)] border border-[var(--color-error)] bg-[var(--color-error-container)] p-6 text-center text-[var(--color-on-error-container)]">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="mt-2 text-sm">{message}</p>
      <div className="mt-4 flex justify-center">
        <PrimaryButton onClick={onRetry} uiState="error">
          {retryLabel}
        </PrimaryButton>
      </div>
    </section>
  )
}
