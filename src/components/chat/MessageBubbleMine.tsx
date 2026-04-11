interface MessageBubbleMineProps {
  text: string
  time: string
  state?: 'default' | 'pending' | 'error'
}

export function MessageBubbleMine({ text, time, state = 'default' }: MessageBubbleMineProps): JSX.Element {
  return (
    <div className="ml-auto max-w-[80%] rounded-[var(--radius-md)] rounded-br-[var(--radius-xs)] bg-[var(--color-primary-container)] px-3 py-2 text-[var(--color-on-primary-container)]">
      <p className="text-sm">{text}</p>
      <p className="mt-1 text-right text-[11px] opacity-80">{state === 'pending' ? 'Sending…' : state === 'error' ? 'Failed' : time}</p>
    </div>
  )
}
