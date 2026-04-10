interface MessageBubbleTheirsProps {
  text: string
  time: string
}

export function MessageBubbleTheirs({ text, time }: MessageBubbleTheirsProps): JSX.Element {
  return (
    <div className="mr-auto max-w-[80%] rounded-[var(--radius-md)] rounded-bl-[var(--radius-xs)] bg-[var(--color-surface-container-highest)] px-3 py-2 text-[var(--color-on-surface)]">
      <p className="text-sm">{text}</p>
      <p className="mt-1 text-right text-[11px] text-[var(--color-on-surface-variant)]">{time}</p>
    </div>
  )
}
