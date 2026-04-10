import { PrimaryButton, SecondaryButton } from '../primitives/Button'

interface UploadDocumentCardProps {
  title: string
  description: string
  uploadedFileName?: string
  onUpload?: () => void
  onReplace?: () => void
}

export function UploadDocumentCard({ title, description, uploadedFileName, onUpload, onReplace }: UploadDocumentCardProps): JSX.Element {
  return (
    <article className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-outline)] bg-[var(--color-surface-container-low)] p-4">
      <h3 className="text-sm font-semibold text-[var(--color-on-surface)]">{title}</h3>
      <p className="mt-1 text-xs text-[var(--color-on-surface-variant)]">{description}</p>
      {uploadedFileName ? (
        <p className="mt-3 rounded-[var(--radius-xs)] bg-[var(--color-surface-container)] px-2 py-1 text-xs text-[var(--color-on-surface)]">{uploadedFileName}</p>
      ) : null}
      <div className="mt-3 flex gap-2">
        <PrimaryButton onClick={onUpload}>Upload</PrimaryButton>
        {uploadedFileName ? <SecondaryButton onClick={onReplace}>Replace</SecondaryButton> : null}
      </div>
    </article>
  )
}
