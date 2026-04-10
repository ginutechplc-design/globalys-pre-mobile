import { cn } from '../../lib/cn'

export interface BottomNavItem {
  id: string
  label: string
  icon?: JSX.Element
}

interface BottomNavigationProps {
  items: BottomNavItem[]
  activeId: string
  onChange?: (id: string) => void
}

export function BottomNavigation({ items, activeId, onChange }: BottomNavigationProps): JSX.Element {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-[var(--color-outline-variant)] bg-[var(--color-surface)]">
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2 py-2">
        {items.map((item) => {
          const active = item.id === activeId
          return (
            <li key={item.id} className="flex-1">
              <button
                className={cn(
                  'flex min-h-12 w-full flex-col items-center justify-center gap-1 rounded-[var(--radius-sm)] text-xs font-medium',
                  active ? 'bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)]' : 'text-[var(--color-on-surface-variant)]'
                )}
                onClick={() => onChange?.(item.id)}
                type="button"
              >
                {item.icon}
                {item.label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
